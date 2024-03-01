# Terraform Dependency Graph

## Reading

Read [this page](https://developer.hashicorp.com/terraform/internals/graph) as a primer on what this all means.

## In practice

It's difficult to be exhaustive on how this all works.

### Using outputs for resources to pass to other resources

There are some AWS resources that accept inputs of some "name-like" argument, and it might seem easier to use that name directly in other places as well. The issue arises where there are specific resources that need to be present before others in order for the provisioning to work in one `terraform apply`.

A simple example of this is the need to create an `aws_iam_user` resource before trying to attach the user to an `aws_iam_group`. So as an example, here is an example configuration that might be unsuccessful:

```hcl
resource "aws_iam_user" "jdoe" {
  name = "jdoe"
  tags = {
    Slack = "<jdoe's slack ID>
  }
}

resource "aws_iam_group" "user_group" {
  name = var.group_name
}

resource "aws_iam_group_membership" "user_group" {
  name  = "${var.group_name}-membership"
  users = ["jdoe"]

  group = aws_iam_group.user_group.name
}
```

In the above example, you have both the user and the group membership dependent on a string value. By changing the final block to be:

```hcl
resource "aws_iam_group_membership" "user_group" {
  name  = "${var.group_name}-membership"
  users = [aws_iam_user.jdoe.name]

  group = aws_iam_group.user_group.name
}
```

you can gate the creation of the group membership behind the creation of the user.

### Using outputs for resources to pass to a local variable

Here's an example of something that doesn't work. Terraform currently is not able to sequentially apply things. When you're using local variables, the value of those locals need to be evaluated prior to the execution of the plan, otherwise the plan will fail. Here is an example:

```hcl
module "app_bucket" {
  source                   = "trussworks/s3-private-bucket/aws"
  version                  = "~> 7.1"
  bucket                   = "${var.app}-${var.environment}-${var.region}"
  logging_bucket           = module.app_log_bucket.aws_logs_bucket
  use_account_alias_prefix = "false"
}

module "app_log_bucket" {
  source         = "trussworks/logs/aws"
  version        = "~> 16.2"
  s3_bucket_name = "${var.app}-${var.environment}-logs"
  allow_alb      = true
  alb_logs_prefixes = [
    "alb/${var.app}-${var.environment}",
  ]
}
```

The `logging_bucket` argument in the first module is used in the module as part of a [local variable declaration](https://github.com/trussworks/terraform-aws-s3-private-bucket/blob/1bfbbf320479bde1e78b16872a83fab1ab9d3792/main.tf#L11) (also pasted below):

```hcl
locals {

  ...

  enable_bucket_logging = var.logging_bucket != ""
}
```

In the example above, you are essentially asking Terraform to complete the infrastructure deploy of the `app_log_bucket` module before even considering the dependency graph of `app_bucket`. Trying to apply the above produces the following error:

```
│ The "count" value depends on resource attributes that cannot be determined until apply, so
│ Terraform cannot predict how many instances will be created. To work around this, use the
│ -target argument to first apply only the resources that the count depends on.
```

The solution for this is to do one of the following:

1. Ensure that all local variables declarations are defined at the time you run `terraform apply`
1. Acknowledge that this requires the use of the `-target` flag to apply specific resources first (in this case `app_log_bucket`)

Solution #2 isn't as bad as it sounds, because a common pattern at Truss is to set up terraform directories in the following order:
\- `/bootstrap` - to set up the terraform backend in S3/DynamoDB
\- `/admin-global` - to set up static infrastructure and logging mechanisms
\- `/app` - to set up the application specific infrastructure and things that are more dynamic.
and a logging bucket would typically fall under `/admin-global`. This way you can avoid the use of the `-target` flag and just apply the directories sequentially.

### A specific example for avoiding the use of -target or multiple applies

There are times where a resource's inputs and attributes might feel a bit opaque, so you prefer to use strings instead. Here is an example of where this might fall apart. Let's say that
