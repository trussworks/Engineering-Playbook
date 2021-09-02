# [Terraform](README.md) / Atlantis

[Atlantis](https://runatlantis.io) is a Terraform automation tool which integrates with GitHub pull requests to automatically generate Terraform plans, hold them for approval, and then apply the Terraform changes and merge the branch. It also manages locks on namespaces, preventing conflicts between PRs on in the same Terraform namespace. Using Atlantis (or a similar tool like Terraform Cloud) is a way to ensure safe and auditable Terraform changes, something which is important for many Truss projects.

## Deploying Atlantis in Truss Projects

The most important thing to keep in mind when planning your Atlantis deployment is that **you can only have a single Atlantis instance per git repo**. This is because Atlantis relies on an `atlantis.yaml` configuration file which sits at the root of the repo that tells it what directories to operate on; if you had multiple Atlantis deployments in the same repo, they would share a configuration file and conflict with each other. This is one of the reasons we split commercial and GovCloud infrastructure repos.

Because of this, our general deployment pattern, when we are working in our standard [AWS organization setup](https://github.com/trussworks/Engineering-Playbook/blob/main/infrasec/aws/aws-organizations.md), is to deploy the actual Atlantis service in the `-infra` account of the organization, and then create roles the service can assume in the other accounts to run Terraform there. This guide will describe how to build this pattern.

### Directory structure

In our infrastructure repo, we'll have the directories like so:

```text
org-infra-repo/
 - org-infra
   - admin-global
   - atlantis-service
   - atlantis-global
 - org-dev
   - admin-global
   - atlantis-global
...
```

In this structure, each account has an `atlantis-global` namespace which sets up the `atlantis` IAM role, and then there is an `atlantis-service` (or `atlantis-prod`, or whatever you prefer) namespace which contains the functional components of the Atlantis service.

### Setting up atlantis-global

The first step to getting Atlantis set up is to create the `atlantis-global` namespace within the accounts we want Atlantis to be able to operate in. This may be literally every account; for some deployments, we do not allow Atlantis to make changes in the `org-root` account, but there's no reason Atlantis *cannot* work there.

In the account we will be deploying the Atlantis service to (`org-infra` in our example), we will set up the `atlantis-global` namespace with Terraform like so to allow Atlantis to assume roles in the other accounts:

<details>
<summary>`atlantis-global/main.tf` for Atlantis service account</summmary>
```hcl
locals {
  org_root_account   = "000000000001"
  org_id_account     = "000000000002"
  org_dev_account    = "000000000003"
  # Add any other accounts to be managed here
}

data "aws_caller_identity" "current" {}
data "aws_partition" "current" {}

# This is the atlantis role that will be assumed by the actual Atlantis service.
resource "aws_iam_role" "atlantis" {
  name               = "atlantis"
  description        = "Role for atlantis to assume."
  assume_role_policy = data.aws_iam_policy_document.atlantis_role_assume_policy.json
}

data "aws_iam_policy_document" "atlantis_role_assume_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type = "AWS"
      identifiers = [
        data.aws_caller_identity.current.account_id,
        # This is the role your infra engineers use; we want them to be
        # able to assume the atlantis role to run Terraform manually if
        # necessary.
        "arn:${data.aws_partition.current.partition}:${data.aws_caller_identity.current.account_id}:role/admin",
      ]
    }
  }
}

# The atlantis role needs wide ranging permissions because the intent is
# to use it for all AWS changes.
resource "aws_iam_role_policy_attachment" "atlantis_iam_policy" {
  role       = aws_iam_role.atlantis.name
  policy_arn = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AdministratorAccess"
}

# This policy will be used in the atlantis-service namespace by the
# atlantis module so that the service can assume the atlantis role in
# other accounts.
data "aws_iam_policy_document" "atlantis" {
  statement {
    actions = ["sts:AssumeRole"]

    resources = [
      "arn:${data.aws_partition.current.partition}:iam::${local.org_root_account}:role/atlantis",
      "arn:${data.aws_partition.current.partition}:iam::${local.org_id_account}:role/atlantis",
      "arn:${data.aws_partition.current.partition}:iam::${local.org_dev_account}:role/atlantis",
    ]
  }
}

resource "aws_iam_policy" "atlantis" {
  name   = "atlantis"
  path   = "/"
  policy = data.aws_iam_policy_document.atlantis.json
}
```
</details>

In the other accounts, we'll add resources like the following to allow the Atlantis service in the above account to assume their `atlantis` role:

<details>
<summary>`atlantis-global/main.tf` for other accounts</summary>
```hcl
locals {
  org_infra_account = "000000000004"
}

data "aws_caller_identity" "current" {}
data "aws_partition" "current" {}

# The atlantis role in this account just needs to be able to be assumed
# by the atlantis role in the infra account, as well as the role infra
# engineers will be using if they need to run Terraform here.
resource "aws_iam_role" "atlantis" {
  name               = "atlantis"
  description        = "Role for atlantis to assume"
  assume_role_policy = data.aws_iam_policy_document.atlantis_role_assume_policy.json
}

data "aws_iam_policy_document" "atlantis_role_assume_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type = "AWS"
      identifiers = [
        local.org_infra_account,
        "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:role/admin",
      ]
    }
  }
}

# As in the infra account, the atlantis role needs expansive permissions
# so it can do all Terraform operations we need.
resource "aws_iam_role_policy_attachment" "atlantis_iam_policy" {
  role       = aws_iam_role.atlantis.name
  policy_arn = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AdministratorAccess"
} 
```
</details>

Once we've set up the `atlantis-global` namespaces, we can move on to the `atlantis-service` namespace.

### Setting up the Atlantis service

The `atlantis-service` namespace is where we'll build the actual Atlantis service. The bulk of this work is done with the [`atlantis`](https://registry.terraform.io/modules/terraform-aws-modules/atlantis/aws/latest) Terraform module. It creates a number of resources, including:

* a VPC
* a Fargate service fronted by an ALB
* an ACM certificate and Route53 DNS entries
* Parameter Store entries for secrets

Aside from this module, we'll also need to create some resources in GitHub for the integration; in GovCloud, we'll also need to create the DNS entries for the ALB and the ACM certificate verification separately, as Route53 is not available for public DNS in GovCloud. There are also two configuration files we'll need to add, one in the `atlantis-service` namespace and one in the root of the Terraform repo.

#### Creating a robot GitHub user

If your project does not already have a "robot" GitHub user for automation, you will need to create one to facilitate Atlantis' integration with GitHub. The usual rules apply for accounts of that nature; they should be tied to an email address that is not a specific Trussel, and credentials should be stored in a project 1Password store. You will also need to create a user access token; the specifics you need are detailed in the [Atlantis docs](https://www.runatlantis.io/docs/access-credentials.html#generating-an-access-token).

#### Add GitHub user access token to AWS SSM Parameter Store

Once you have created the GitHub user and generated a user access token, you'll need to add that token into SSM so that Atlantis can use it. Use the following commmand line to add it to the `-infra` account:

```txt
aws ssm put-parameter --name "/atlantis-global/github-user-token" --type SecureString --description "GitHub user token for Atlantis" --value $ATLANTIS_USER_TOKEN
```

We're adding this manually so that we're not keeping a secret in code; we'll use a data source too retrieve it later.

#### Atlantis service configuration file

The `atlantis_repo_config.json` file should go in your `atlantis-service` Terraform namespace. This file configures how the service will work; the [Atlantis docs](https://www.runatlantis.io/docs/server-configuration.html) describe the various configuration options, but you can use this as a basic JSON config:

```json
{
  "repos": [
    {
      "apply_requirements": [
        "approved",
        "mergeable"
      ],
      "id": "/.*/"
    }
  ]
}
```

This will require that pull requests be both approved and mergeable before Atlantis will allow it to be applied.

#### GovCloud prep: create ACM certificate

If you are working in GovCloud, you will need to create a certificate in the `atlantis-service` namespace for your Atlantis instance. See the [ACM in GovCloud](../aws/govcloud/gov-acm.md) guide for details on how to do this.

#### Set up Atlantis Terraform module

Once we have the GitHub user set up and the user token in SSM (and the certificate created, if we're in GovCloud), we can set up the Atlantis Terraform module in the `atlantis-service` namespace.





## Tips and gotchas

* When resetting a GitHub personal token in Parameter Store, you will have to redeploy the Atlantis instance. Otherwise, the new credential will not be updated in the instance.
* We use [this](https://github.com/terraform-aws-modules/terraform-aws-atlantis) Atlantis terraform module to spin up our instances. If you do not set the `atlantis_image` variable, you'll find `atlantis:latest` is used by default. This default is not recognized as updated when a new "latest" is released due to the word remaining unchanged. Therefore, we recommend you pass in a numbered version of the Atlantis docker image to the `atlantis_image` var.

## Links and other reading

* [Truss's Atlantis blog post](https://truss.works/blog/infrastructure-management-with-atlantis)
* :lock: [Atlantis setup in Truss's commercial accounts for the prod tiers](https://github.com/trussworks/legendary-waddle)
* :lock: [Atlantis setup in Truss's commercial accounts for the dev tiers](https://github.com/trussworks/legendary-waddle-dev)
