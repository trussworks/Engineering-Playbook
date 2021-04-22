# [InfraSec](./README.md) / Atlantis

## Step-by-Step Atlantis Implementation

## Contextual Planning

## Step 1: Know the Options

The first step in implementing Atlantis is to familiarize ourselves with what Atlantis is and what it does. Atlantis is ["a simple Go app. It receives webhooks from our Git host and executes Terraform commands locally."](https://www.runatlantis.io/docs/deployment.html#architecture-overview) It's high-level infrastructure middleware.

We don't have to make concrete decisions on all implementation facets before we begin, but we should make some decisions on

1. How to **configure** the Atlantis server, and
2. How to **integrate** Atlantis' resources into our existing structure

### Configuration Options

As of the time of this publication, there are [3 ways to configure Atlantis](https://www.runatlantis.io/docs/configuring-atlantis.html). Step one is looking at our project's configuration and deciding which way to implement our Atlantis server. The [Atlantis docs](https://www.runatlantis.io/docs/server-configuration.html) summarize our options. We can use

* command line flags
* environment variables
* a config file, or
* a mix of all three

As an example, Truss' [legendary waddle](https://github.com/trussworks/legendary-waddle) repo uses a combination of [environment variables](https://github.com/trussworks/legendary-waddle/blob/master/trussworks-prod/atlantis-prod/main.tf#L85-L102) and [repo-level `atlantis.yaml` files](https://github.com/trussworks/legendary-waddle/blob/master/atlantis.yaml).

We'll want to decide which accounts to place Atlantis in before we begin, as well as have a general idea of which server configuration method(s) we want to use.

### Integration Options

This tutorial covers using the [Atlantis Fargate module](https://tf-registry.herokuapp.com/modules/terraform-aws-modules/atlantis/aws/latest) to deploy Atlantis. This module leverages a variety of other modules, submodules, and direct resource calls in our code to create the following key components:

* [Virtual Private Cloud (VPC)](https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/latest) and the accompanying [EC2-VPC security group](https://registry.terraform.io/modules/terraform-aws-modules/security-group/aws/latest)
* [SSL certificate using Amazon Certificate Manager (ACM)](https://registry.terraform.io/modules/terraform-aws-modules/acm/aws/latest)
* [Application Load Balancer (ALB)](https://registry.terraform.io/modules/terraform-aws-modules/alb/aws/latest) and submodules for [https 443](https://registry.terraform.io/modules/terraform-aws-modules/security-group/aws/latest/submodules/https-443) and [http 80](https://registry.terraform.io/modules/terraform-aws-modules/security-group/aws/latest/submodules/http-80)
* Domain name using [AWS Route53](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) which points to ALB
* AWS [Elastic Cloud Service (ECS)](https://registry.terraform.io/modules/terraform-aws-modules/ecs/aws/latest), and [AWS Fargate running Atlantis Docker image](https://github.com/cloudposse/terraform-aws-ecs-container-definition)
* AWS [Parameter Store](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ssm_parameter) to keep secrets and access them in ECS task natively

Some of these resources probably already exist on your project. The module expects us to integrate them. If the key resources don't exist, the Atlantis module (and submodules) will create those resources for us. Figuring out which of our project's pre-existing resources to integrate, and then which resources we should leverage the Atlantis module's calls to create is the next step. Here's a rough whiteboarded visual of the process. Some call it art:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_process1.png" width="450">

The next step is to figure out _the order in which to create the resources we need_ so as to avoid/minimize interdependency conflicts with the pre-existing resources we must integrate. The order of operations for this is what makes using this Atlantis module a bit tricky, especially if we're not familiar with how to both troubleshoot the creation of the resources Atlantis requires **_and_** troubleshoot the interconnectedness of those resources.

However, as a general example, here are some tickets @rpdelaney shared from [CMS's EASi project](https://github.com/CMSgov/easi-app) in planning/implementing Atlantis:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_tix.png" width="450">

After we've planned out our implementation, we're ready to begin.

## Step 2: Prep Work

This section contains prep work to highlight resources we will need before calling the Atlantis module. This section is not meant to be exhaustive, but is meant to highlight specific resources we may want to have before we call the module itself.

1. Directory Setup

    Create an `atlantis-global` directory in our desired account, in our case (`transcom-gov-milmove-exp`):

    `mkdir -p transcom-gov-milmove-exp/atlantis-global`

    Add the terraform state bucket, version, and provider files following the steps following the bootstrapping document in [the Atlantis section](https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/bootstrap-new-aws-account.md#atlantis).

    While we're here, we can go ahead and set up our [`repo config`](https://www.runatlantis.io/docs/server-configuration.html#flags) and [`atlantis.yaml`](https://www.runatlantis.io/docs/repo-level-atlantis-yaml.html#do-i-need-an-atlantis-yaml-file) files.

    The official Atlantis documentation provides a lot of options for this configuration if you're feeling experimental, but there are some really great base models in [legendary-waddle](https://github.com/trussworks/legendary-waddle/) for both the [yaml](https://github.com/trussworks/legendary-waddle/blob/master/atlantis.yaml) and [config](https://github.com/trussworks/legendary-waddle/blob/master/trussworks-prod/atlantis-prod/atlantis_repo_config.json).

1. Set up GitHub Access for the Atlantis Role

1. Use the Bot 🤖

    If our project has a Robot user already, we can ride the coattails of those pre-existing GitHub user permissions for Atlantis as well. To do this, all you need to do is pass in the name of the robot user to the `atlantis_github_user` value in a later step when we call [the Atlantis module](https://tf-registry.herokuapp.com/modules/terraform-aws-modules/atlantis/aws/latest).

    Since we have a robot user, we can skip to Step 8, "Store a Key in AWS SSM/Parameter Store."

1. Set Up a User, Email, and GitHub Deploy Key (optional) 📧

    The official Atlantis docs recommend [creating a dedicated user](https://www.runatlantis.io/docs/access-credentials.html#create-an-atlantis-user-optional). At this point you may want to set up a robot user (you'll eventually need one anyway).

    Although this decision is outside the scope of this tutorial, we can consult [the ADR in legendary waddle on robot accounts](https://github.com/trussworks/legendary-waddle/blob/344b8c54218e553d778cf5c07ce5f915bb7157a9/docs/adr/0002-robot-accounts.md) and this [ADR on key rotation consequences regarding creating a user](https://github.com/trussworks/legendary-waddle/blob/344b8c54218e553d778cf5c07ce5f915bb7157a9/docs/technical-design/aws-iam-key-rotation.md#implementation) to make our decision.

1. Make sure we've got an email we can associate with Atlantis to recieve notifications, etc. On milmove we were able to associate our pre-existing `dp3.us` email address and use `dp3-integrations+atlantis@truss.works` to associate with the Atlantis role created in the next step.

1. Generate a new SSH key per [GitHub's documentation](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key).

1. Next, add the key as a [Deploy Key](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys), following GitHub Docs. As we can see, the first step in the setup is to "Run the `ssh-keygen` procedure" on our server, which we did in the previous step. Note that the act of adding the deploy key is done in the GUI for the repo associated with the location we'd like to deploy Atlantis in. In our case, we're in `transcom/transcom-infrasec-gov` because we're deploying to the `exp` account first. Go to the GitHub repo, click on Settings, and then click on "Deploy keys". Check the box to "Allow write access."

    We can `cat` our `id_ed25519.pub` to see our public key. It will look something like

    ```bash
    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIErcI6OvZmjDqdzucoaLEndRx2DWfPVUKR9aF27ijH6V dp3-integrations+atlantis@truss.works
    ```

    GitHub will send an email to our chosen email address to confirm we succesfully addted the key.

1. **Store a Key in AWS SSM/Parameter Store** 🗝️

    If we're using a pre-existing robot user, we can repurpose that Robot's existing deploy key. The easiest way to find this information may be to just log into the account where the robot user exists and look for a key that corresponds in name to the robot user.

    Assuming the robot user does not have access to our newly created account's `/atlantis-global` directory, we can simply copy/paste the key value into the parameter store for the account we want to use Atlantis in.

    We can log into the console for the account we want to deploy Atlantis in (in our case, `transcom-gov-milmove-exp`), and add our key to AWS Systems Manager > Parameter Store using a naming convention like </directory/object_name> (ex. `/atlantis-global/atlantis_key`) as type `SecureString`. Use "My current account" as the KMS key source.

1. **Set up Docker** (optional) 🐋

    Our project continues an established Docker pattern. We'll create a docker image for Atlantis and put that image in ECR with all our other images. Next, we can create (and define) an ECS task to retrieve our Atlantis image from ECR. This way, we can require our Atlantis instance to operate using our specific desired conditions.

    However, you can use the Truss image

    If we do not set the `atlantis_image` variable, we'll find `atlantis:latest` is used by default. This default is not recognized as updated when a new "latest" is released due to the word remaining unchanged. Therefore, we recommend passing in a numbered version of the Atlantis docker image to the `atlantis_image` var.

1. **Create the Atlantis IAM role** 🎩 TODO

## Add & validate a certificate for Atlantis

Add a certificate to ACM, which [manages our certificates for us](https://github.com/transcom/transcom-infrasec-gov/pull/279). If we're using GovCloud, note that we can't create Route53 records in GovCloud. As a result, we'll need to:

1. Create _the certificate_ in GovCloud using the [`aws_acm_certificate` resource](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate)
1. Export the values as an output in the `output.tf` file like so:

    ```hcl
    output "atlantis_cert_validation" {
      description = "Map of data for atlantis. cert validation"
      value       = aws_acm_certificate.acm_atlantis_external.domain_validation_options
    }
    ```

    Once we've merged the PR, we'll have the cert validation output value to validate the certificate in the next step.

1. Validate the Route53 DNS records in the Commercial account using the [`aws_acm_certificate` resource](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record).

We'll need to find the `arn` to plug into the [atlantis module](https://registry.terraform.io/modules/terraform-aws-modules/atlantis/aws/latest) we'll call in the next step. We can find this in the console's Certificate Manager after merging the PR to add the certificate.

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_acm1.png" width="450">

## Step 3: Call the [Atlantis module](https://registry.terraform.io/modules/terraform-aws-modules/atlantis/aws/latest) 🧜

We'll start with the most basic Atlantis module call we can. Assuming an existing VPC, Robot user, validated certificate, zone name, Atlantis Docker image, and GitHub connection, the code will look something like this

  ```hcl
  module "atlantis" {
    source  = "terraform-aws-modules/atlantis/aws"
    version = "~> 2.36.0" // make sure to update to the latest version

    name = "${var.environment}-atlantis"

    atlantis_image = "milmove/circleci-docker:milmove-atlantis"

    # Route53
    create_route53_record = false
    route53_zone_name = "atlantis.exp.move.mil"
    certificate_arn = "arn:aws-us-gov:acm:us-gov-west-1:015681133840:certificate/456c11bd-a730-476d-ba7c-1bd4690ede3f"

    # VPC
    vpc_id          = ""
    cidr            = "10.30.0.0/16"
    azs             = ["us-gov-east-1a", "us-gov-east-1b", "us-gov-east-1c"]
    private_subnet_ids = ["subnet-012345678f01", "subnet-012345678f02", "subnet-012345678f03"]
    public_subnet_ids  = ["subnet-012345678f04", "subnet-012345678f05", "subnet-012345678f06"]

    # Atlantis
    atlantis_github_user = "atlantis"
    atlantis_github_user_token = data.aws_ssm_parameter.github_user_token.value
    atlantis_repo_whitelist          = ["github.com/transcom/transcom-infrasec-gov"]
    atlantis_hide_prev_plan_comments = "true"
    allow_github_webhooks = true
  }
  ```

Eventually we'll build out until our call looks lot like [the example in `legendary-waddle`](https://github.com/trussworks/legendary-waddle/blob/ce52ce64ac2c41be1c0c8e9b3ed577b968714bd6/trussworks-prod/atlantis-prod/main.tf#L33-L123). Note that the example above is GovCloud-based. Replace any references to `us-gov` with `us` if not using GovCloud.

1. We'll also need to add a little code to pull in the token from AWS as data:

    ```hcl
    data "aws_ssm_parameter" "github_user_token" {
      name = "/atlantis/github/user/token"
    }
    ```

1. Add custom environment secrets:

    ```hcl
    # from https://trussworks.slack.com/archives/CLNC1MUBS/p1615847664002200?thread_ts=1615570522.023200&cid=CLNC1MUBS
      custom_environment_secrets = [
        {
          name      = "ATLANTIS_GH_TOKEN"
          valueFrom = data.aws_ssm_parameter.github_user_token.name
        },
        # {
        #   name      = "ATLANTIS_GH_WEBHOOK_SECRET"
        #   valueFrom = local.webhook_ssm_parameter_name
        # },
      ]
    ```

1. Submit a PR, get approval, and `terraform apply` the code.

## Step 4: Connect the ALB Logs Bucket 🪣

Of all the things this module does, it **does not** create a logs bucket. The module itself has the expectation we will either create a new bucket or connect an existing one. In our example, we'll connect an existing logs bucket and ensure our permissions are correct.

1. Locate the existing logs bucket, presumably created using the `trussworks/logs/aws` module. We're just going to put logs in the bucket that already exists for the account, in our case `transcom-gov-milmove-exp-aws-logs`.

    Once we find the code that creates the bucket, we need to give Atlantis permission to add our logs to the bucket. We do this by adding our chosen logs bucket prefix (we're following the established pattern and using `alb/atlantis-exp` here) to the `alb_logs_prefixes` and the `nlb_logs_prefixes` lists [in our existing logs bucket](https://github.com/transcom/transcom-infrasec-gov/blob/0eeba19465584e10772a9b1d1f71fb3e87d7138c/transcom-gov-milmove-exp/admin-global/main.tf#L25-L26).

    After that, we seal the deal by returning to our code and adding the code like this inside our module call:

      ```hcl
      alb_log_bucket_name             = "transcom-gov-milmove-exp-aws-logs"
      alb_log_location_prefix         = "alb/atlantis-exp"
      alb_logging_enabled             = true
      alb_listener_ssl_policy_default = true
      ```

    Another example is available in the [legendary-waddle repo](https://github.com/trussworks/legendary-waddle/blob/6b63fc65c6d2b0237a7233ad36cb9356f329966b/trussworks-prod/atlantis-prod/main.tf#L54-L56)

1. Submit a PR, get approval, and `terraform apply` the code.

1. Log into the console to make sure the bucket stores logs in our prefix path by viewing the auto-created `ELBAccessLogTestFile` in the path we chose: `alb/atlantis-exp/`

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_lb_bucket.png" width="450">

## Step 5: Hide the UI (and a little backstory) 📰

Once you've [confirmed ACM](#acmcertificate-troubleshooting) grants Atlantis access to GitHub, we should hide the UI. Previously, the only option we had for releasing a `terraform lock` held by Atlantis was through the UI, so it was necessary for both Infra and GitHub to access this UI. However, we still need to prevent malicious outsiders access so they can't do nasty things like sneak into Atlantis, tap into it's Administrator-level access, and run `terraform destroy` on all our precious code, for example.

One method we've succesfully used is to force federated login via [Cognito](https://aws.amazon.com/cognito/), keeping the UI visible so that Infra could still access the UI and unlock plans as needed. However, the Atlantis module evolved. We can now simply run `atlantis unlock` as a command in the PR workflow. Humans no longer need acces to the UI to resolve locks. As a result, we can now construct a WAF to restrict access and return a `403` like so:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_waf1.png">

Another option is to simply tighten security groups to restrict access so that only GitHub IPs are allowed to access Atlantis. We combine two [Atlantis module optional input settings](https://registry.terraform.io/modules/terraform-aws-modules/atlantis/aws/latest?tab=inputs#optional-inputs) to get the result we want:

   1. Leave `allow_unauthenticated_access` to remain at its default setting of `false`
   2. Set `alb_ingress_cidr_blocks = []`

In this way, we're able to restrict our ingress rules to allow only GitHub IPs. All other requests will return  `ERR_CONNECTION_TIMED_OUT`.

Submit a PR, get approval, and `terraform apply` the code. We should check our urls (in our example, `atlantis.exp.move.mil` and `atlantis.exp.move.mil/events`) to ensure we receive our desired responses.

## Step 4: Troubleshooting 🔧

Due to some bugs in the module and the inherent complexity of integrating/setting up so many resources, some degree of troubleshooting will be necessary. Thus it's included here as a step.

### ACM/Certificate Troubleshooting

We'll get a `503` connection refusal error if our certs aren't set up correctly:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_503.png" width="450">

If we get a cert error when we look at our chosen url (in our case `atlantis.exp.move.mil`):

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_cert1.png" width="450">

Check the records and corresponding IP addresses in the terminal using `dig move.mil` and `host atlantis.move.mil` to pull up our ACM associated values. Here we also check `orders.exp.move.mil` (corresponding to our misaligned certificate), but it looks similar to this:

![TODO](images/atlantis_cert2.png "TODO")

We can also look at this in Route 53 > Hosted zones check record name --> and look at the `Value/Route traffic to` column. The value should not be going to an IP, it should be going to a CNAME.

We troubleshoot by logging into the console, looking at our ALB, and checking what's associated with it:
EC2 > load balancer > `atlantis-exp`

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_alb2.png" width="450">

We can click on our certificate and manually point to the load balancer.

### VPC Troubleshooting

Anecdotally, the variables for `private_subnets` and `public_subnets` did not succesfully connect to the VPC when plugging in the IP values directly. However, `private_subnet_ids` and `public_subnet_ids` work fine.

There are no open issues in the module for this discrepancy, so this mystery may be confined to the project (or author). This information is included here simply for posterity.

### ALB Troubleshooting

We'll see two ALB listeners in the plan related to the redirect on the ALB. Take note bc this hot mess might cause problems later:

```hcl
  # module.atlantis.module.alb.aws_lb_listener.frontend_http_tcp[0] will be created
  ...
      + port              = 80
      + protocol          = "HTTP"
      + ssl_policy        = (known after apply)

  ...{{

          + redirect {
              + host        = "#{host}"
              + path        = "/#{path}"
              + port        = "443"
              + protocol    = "HTTPS"
              + query       = "#{query}"
              + status_code = "HTTP_301"
            }
        }
    }

  # module.atlantis.module.alb.aws_lb_listener.frontend_https[0] will be created
  + resource "aws_lb_listener" "frontend_https" {
  ...
      + port              = 443
      + protocol          = "HTTPS"
      + ssl_policy        = "ELBSecurityPolicy-2016-08"

      + default_action {
          + order            = (known after apply)
          + target_group_arn = (known after apply)
          + type             = "forward"
        }
    }
```

Check out these ports because this is what's happening:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_alb1.png" width="450">

The ALB is being created with these two listeners (one https & one http). The http port (on 80) serves to redirect to https/443 and force use of our ACM certificate, setting up SSL termination on the load balancer. This keeps us from having to jump through the hoops of setting up docker and the client with certificates and dealing with SSL termination the TCP way (which is also how we would have to terminate the certificate with NLBs).

Check that the Fargate instance is behind the ALB. If not we'll have to put it there manually in the console. We can do this by specifying the target group.

### ECS Tasks Permissions Troubleshooting

We only had govcloud drama here. The module hard-codes `aws` as the provider but govcloud requires `aws-us-gov` to create the task policy attachment. 🤷‍♀️

Check task exists in console via ECS > Clusters > `atlantis-exp`

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_ecs1.png" width="450">

We can also see the task definition by clicking on the `Task definition` name

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_ecs2.png" width="450">

If we can see in the console that the Fargate container says `STOPPED`, we can also see the reason.

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_ecs3.png" width="450">

Typically this is a policy/permissions error. We can see here the only permissions we have are the two policies needed to read our Github secrets.

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_ecs4.png" width="450">

To fix this in our case, we can mimic the ecs tasks in another stack. We create the policy in terraform and attach it to either the Atlantis IAM user we created or the Atlantis role. A successful poicy attachement will look like this:

<img src="https://github.com/trussworks/Engineering-Playbook/blob/3efe6ea02ed010f3db2c07921c5c8acc60406b84/infrasec/tutorials/images/atlantis_ecs5.png" width="450">

### SSM/Parameter Store Troubleshooting

* When resetting a GitHub personal token in Parameter Store, we will have to redeploy the Atlantis instance. Otherwise, the new credential will not be updated in the instance.

## Links and other reading

* [Truss's Atlantis blog post](https://truss.works/blog/infrastructure-management-with-atlantis)
* 🔒 [Atlantis setup in Truss's commercial accounts for the prod tiers](https://github.com/trussworks/legendary-waddle)
* 🔒 [Atlantis setup in Truss's commercial accounts for the dev tiers](https://github.com/trussworks/legendary-waddle-dev)
