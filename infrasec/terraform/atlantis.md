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

In this structure, each account has an `atlantis-global` namespace which sets up the `atlantis` IAM role, and then there is a single `atlantis-service` (or `atlantis-prod`, or whatever you prefer) namespace which contains the functional components of the Atlantis service.

### Setting up atlantis-global

The first step to getting Atlantis set up is to create the `atlantis-global` namespace within the accounts we want Atlantis to be able to operate in. This may be literally every account; for some deployments, we do not allow Atlantis to make changes in the `org-root` account, but there's no reason Atlantis *cannot* work there.

In the account we will be deploying the Atlantis service to (`org-infra` in our example), we will set up the `atlantis-global` namespace with Terraform like so to allow Atlantis to assume roles in the other accounts:

<details>
<summary>`atlantis-global/main.tf` for Atlantis service account</summary>

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

Once we have the GitHub user set up and the user token in SSM (and the certificate created, if we're in GovCloud), we can set up the Atlantis Terraform module in the `atlantis-service` namespace. The Atlantis module can set up most of the resources you need itself, like the VPC, ACM certificate, and Route53 DNS entry, or you can specify these separately and plug them in. In most cases, we'll want to just let it do that, because it should be separate from all your other services anyway, but if you need to use a specific pre-existing VPC, or in GovCloud, where you'll need to create the certificate validation and ALB DNS entries in your commercial account, then you should be able to do this without issue.

In addition, if you have not already, you will need to add permissions to your AWS log bucket to allow the Atlantis ALB to write to it. This bucket is usually in the `admin-global` namespace, and you will want to make sure you have configuration that looks similar to this:

<details>
<summary>Terraform code for org-infra account AWS logs bucket</summary>

```hcl
module "org_infra_logs" {
  source = "trussworks/aws/logs"

  s3_bucket_name = "org-infra-aws-logs"
  alb_logs_prefixes = [
    "alb/atlantis"
  ]
}
```

</details>

Calling the module will look something like this:

<details>
<summary>Terraform code for Atlantis module and associated resources</summary>

```hcl
data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

# Here, we're creating a data source to access the SSM parameter we added
# before with the AWS CLI that has our github user token.
data "aws_ssm_parameter" "github_user_token" {
  name = "/atlantis/github-user-token"
}

# This is an additional secret added for a webhook that makes sure that
# Atlantis is getting a legitimate request (the Github repo uses this key
# to confirm to Atlantis that it is allowed to use the service). If you
# have multiple repos being served by the same Atlantis server, you must
# make sure both repos are using the same secret for their webhooks.
#
# Unfortunately, because of the way Atlantis handles this (it will
# generate a webhook secret when the module is applied), leave this out
# until you have run the Atlantis module once, then add it when you add
# the custom_environment_secrets parameter (see the module instance
# below).
data "aws_ssm_parameter" "github_webhook_secret" {
  name = "/atlantis/github-webhook-secret"
}

# This is used to make sure that Atlantis *only* accepts inbound
# connections from Github IP ranges, which are provided by the Github
# Terraform provider.
data "github_ip_ranges" "main" {}

# The next two stanzas define a policy that allows Atlantis to access
# the SSM parameters for the Github user token and the Github webhook
# secret. This policy will be attached later in the Atlantis module
# instance.
data "aws_iam_policy_document" "atlantis_ssm_github_user_token" {
  statement {
    effect  = "Allow"
    actions = ["ssm:GetParameters"]
    resources = [
      data.aws_ssm_parameter.github_user_token.arn,
      data.aws_ssm_parameter.github_webhook_secret.arn
    ]
  }
}

resource "aws_iam_policy" "atlantis_ssm_github_user_token" {
  name   = "atlantis-ssm-access"
  path   = "/"
  policy = data.aws_iam_policy_document.atlantis_ssm_github_user_token.json
}

# This policy is created in the atlantis-global namespace -- because we
# want to attach this policy to the Atlantis task role, we need to create
# a data source here and pull it in this way.
data "aws_iam_policy" "atlantis_access_policy" {
  arn = "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:policy/atlantis"
}

# This is where the magic happens -- this module sets up an ECS service for
# Atlantis, an ALB, security groups, etc. See further comments for more
# detail.
module "atlantis" {
  source  = "terraform-aws-modules/atlantis/aws"
  version = "2.43.0"

  # This will be the name of the service that shows up in ECS.
  name = "atlantis-org-infra"

  # A few notes about this image; first, we do not use the atlantis image
  # maintained by the Atlantis folks so that we can add Python3 to the
  # image, which allow us to handle the Python lambdas we use in the Slack
  # notification Terraformm modules. We also do not specify the "latest"
  # image, because if we do so then Terraform will not realize when the
  # image has changed due to an update, so that will never get updated. We
  # specify a SHA directly. You should use the latest version, which can
  # be found at https://github.com/trussworks/trussworks-atlantis-ecs-image
  atlantis_image = "trussworks/atlantis:cef8470b4f0aa0a9382f2c4149c53d6a0207f07e"

  # GovCloud Note:
  # If you are using this module in GovCloud, you will need to use this
  # parameter so that the module does not try to create the DNS entry.
  # create_route53_record = false
  #
  # In addition, you will need to add this parameter (with the correct
  # resource reference) to add the ACM certificate you already created to
  # the ALB. The Atlantis module *cannot* be deployed *until* the
  # certificate has already been created.
  # certificate_arn = aws_acm_certificate.atlantis_org_infra.arn

  # In commercial, we can just let the module do the work of setting up
  # the DNS and certificate resources.
  route53_zone_name           = "example.com"
  acm_certificate_domain_name = "atlantis.example.com"

  # VPC
  # If we have an already existing VPC that we want to put the service in,
  # we should define that elsewhere with data sources (I recommend in a
  # separate vpc.tf file) and then add the following parameters (with the
  # correctly-named references):
  # vpc_id             = data.aws_vpc.org_infra_vpc.id
  # private_subnet_ids = data.aws_subnet_ids.org_infra_vpc_private.ids
  # public_subnet_ids  = data.aws_subnet_ids.org_infra_vpc_public.ids

  # If we're okay allowing the module to create the VPC itself, we'll need
  # the following parameters instead (feel free to change the cidr numbers
  # to suit; if Atlantis is the only thing in the VPC, they are essentially
  # arbitrary):
  cidr            = "10.10.0.0/16"
  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]
  private_subnets = ["10.10.1.0/24", "10.10.2.0/24", "10.10.3.0/24"]
  public_subnets  = ["10.10.101.0/24", "10.10.102.0/24", "10.10.103.0/24"]

  # ALB
  # We want to turn on logging for the ALB the module will create. The
  # S3 bucket here is defined in our admin-global namespace (and we have
  # to allow the bucket to be written to in that namespace in order for
  # this to work).
  alb_log_bucket_name     = "org-infra-aws-logs"
  alb_log_location_prefix = "alb/atlantis"
  alb_logging_enabled     = true

  # Security groups
  # This parameter defines the networks allowed to access the Atlantis
  # web interface (which can be used for clearing locks). That interface
  # is actually not really necessary since those commmands can also be
  # run via GitHub comments, but if you wanted to allow access to other
  # hosts to connect -- say, VPN endpoints -- here's how:
  alb_ingress_cidr_blocks = ["192.168.1.100/32", "10.0.0.1/32"]

  # Here is where we're using the Github IPs data source to restrict
  # the acceptable IPs for hitting the webhook.
  github_webhooks_cidr_blocks = data.github_ip_ranges.main.hooks

  # GitHub Access
  # This is where we specify the GitHub user that we'll be using for
  # Atlantis in this environment that you've already created. We are
  # also specifically saying where too put the webhook parameter because
  # the default location does not match the format chamber expects,
  # which is a commmon way for us to manage these parameters.
  atlantis_github_user       = "atlantis-my-org"
  webhook_ssm_parameter_name = "/atlantis/github-webhook-secret"

  # This is where we define which repos Atlantis should be watching. You
  # can specify multiple repos if you want, but for our example we'll
  # just be using the one.
  atlantis_repo_whitelist          = ["github.com/my-org/my-org-infra"]
  atlantis_hide_prev_plan_comments = "true"

  # This is where we specify the policies we want to attach to the role
  # Atlantis is going to be using. The first is the basic AWS policy that
  # allows task execution, the other two are the ones we have defined
  # above to access SSM parameters and assume roles.
  policies_arn = ["arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy", aws_iam_policy.atlantis_ssm_github_user_token.arn, data.aws_iam_policy.atlantis_access_policy.arn]

  atlantis_security_group_tags = {
    Type = "ecs"
  }
  alb_https_security_group_tags = {
    Type = "alb-https"
  }
  alb_http_security_group_tags = {
    Type = "alb-http"
  }
  tags = {
    Environment = var.environment
  }

  # You can read about these environment variables in the Atlantis
  # documentation; most of these are relatively self-explanatory.
  # ATLANTIS_AUTOMERGE tells Atlantis to merge PRs after a successful
  # terraform apply.
  custom_environment_variables = [
    {
      name  = "ATLANTIS_DEFAULT_TF_VERSION"
      value = "1.0.5"
    },
    {
      name  = "ATLANTIS_REPO_CONFIG_JSON"
      value = file("atlantis_repo_config.json")
    },
    {
      name  = "ATLANTIS_AUTOMERGE"
      value = "true"
    },
    {
      name  = "ATLANTIS_WRITE_GIT_CREDS"
      value = "true"
    },
    {
      name  = "GITHUB_ORGANIZATION"
      value = "my-org"
    }
  ]

  # These two secrets are necessary because there's some jankiness
  # with the Atlantis module and how we're using it (where we don't
  # want to put the two secrets in the Terraform code if possible).
  # Unfortunately, there's a hoop to jump through here -- you will
  # to apply this module *without* this parameter first, *then*
  # re-add this parameter and reapply so that you can get the
  # webhook secret, which Atlantis will generate.
  custom_environment_secrets = [
    {
      name      = "ATLANTIS_GH_TOKEN"
      valueFrom = data.aws_ssm_parameter.github_user_token.name
    },
    {
      name      = "ATLANTIS_GH_WEBHOOK_SECRET"
      valueFrom = data.aws_ssm_parameter.github_webhook_secret.name
    }
  ]

  allow_unauthenticated_access = true
  allow_github_webhooks        = true
}
```

</details>

Note that, as the comments in this code detail, you will need to do two Terraform runs, one without the custom environment secrets and then one with, in order for the Atlantis module to correctly generate the webhook secret and then for the task definition to call it. Once this is done, the service itself should be set up; we can then move on to setting up the webhook.

### GovCloud followup: Add CNAME for ALB

If you're working in GovCloud, you should also add the following output to your `atlantis-service` namespace:

<details>
<summary>output for ALB AWS DNS entry</summary>

```hcl
output "atlantis_alb_aws_fqdn" {
  description = "AWS FQDN for Atlantis ALB"
  value       = module.atlantis.alb_dns_name
}
```

</details>

This will add an output that will give you the AWS DNS entry that corresponds to your ALB. With that, you will need to add a [Route53 CNAME entry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) in your DNS that points your selected domain name to your ALB's AWS DNS entry. Note that for some projects, you may not be able to do this yourself (such as at CMS); in that case, you will need to provide that FQDN to the DNS manager and have them create the CNAME.

### Setting up the GitHub webhook

Rather than restate the Atlantis docs, you can find the instructions on how to set up the webhook for Atlantis [here](https://www.runatlantis.io/docs/configuring-webhooks.html#github-github-enterprise). Note that you will need to have the service configured (with DNS and certificate) and your webhook generated before you do this.

### Configure repo-level Atlantis config

The last step is to configure the repo-level Atlantis configuration. The `atlantis.yaml` file goes in the root of the Git repo you're using for your Terraform. The [Atlantis docs](https://www.runatlantis.io/docs/repo-level-atlantis-yaml.html) on this file will give you the full explanation of what you can put in here, but for most of our projects, the only thing you will need is a list of the Terraform namespaces you want Atlantis to manage. It will look something like this:

<details>
<summary>Example `atlantis.yaml` config</summary>

```yaml
version: 3
projects:
  - name: org-id-bootstrap
    dir: org-id/bootstrap
  - name: org-id-admin-global
    dir: org-id/admin-global
  - name: org-infra-bootstrap
    dir: org-infra/bootstrap
  - name: org-infra-admin-global
    dir: org-infra/admin-global
...
```

</details>

We generally don't recommend having Atlantis handle the Terraform of its own namespace, just because that introduces the potential of breaking itself, and there is some debate whether having Atlantis administer the org-root account is a good idea. You should feel free to make the decision that makes the most sense for your project (especially since changing this in the future is possible).

Once you've set up this file, you should be able to make a pull request and see Atlantis running a plan if you've set things up correctly.

## Tips and Troubleshooting

* If you update an SSM parameter, be sure to cycle the task (you can kill the running Atlantis task and let AWS restart it); these are read into the container's environment at startup time, so they do not take effect unless you do this.
* As the module configuration example states, we recommend against using `latest` as the container version, because this will force you to to two steps in order to upgrade the container version; instead, we recommend using the actual git SHA of the container.

## Links and other reading

* [Atlantis Official Site](https://runatlantis.io)
* [Truss's Atlantis blog post](https://truss.works/blog/infrastructure-management-with-atlantis)
* :lock: [Atlantis setup in Truss's commercial accounts](https://github.com/trussworks/legendary-waddle)
