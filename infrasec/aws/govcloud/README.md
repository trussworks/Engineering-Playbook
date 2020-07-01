# [AWS](../README.md) / Working in GovCloud

Many of our government clients will want to have at least their production
infrastructure in [AWS GovCloud](https://aws.amazon.com/govcloud-us/), which
is a set of AWS regions that are separate from commercial AWS regions, with
a number of additional controls that allow them to conform to the higher
security and compliance standards needed to meet federal guidelines like
[FedRAMP](https://www.fedramp.gov/).

## GovCloud Topics

* [Setting Up a GovCloud Organization](./gov-orgs.md)
* [ACM in GovCloud](./gov-acm.md)

## General Considerations With GovCloud

* Every GovCloud account must be attached to a corresponding account in
  commercial AWS (mostly for billing purposes). This has some impact on
  how you build AWS Organizations in GovCloud (see below).
* Commercial AWS and GovCloud resources cannot interact directly in any
  way. This means that you cannot assume roles between the two or tie
  a commercial resource to a GovCloud resource unless using some publicly
  addressable method.
* GovCloud accounts do not have a `root` user; they have an automatically
  created IAM user named `Administrator` with full administrative
  privileges. For most purposes, you can think of this as operating the
  same way as the `root` user; however, it is still subject to restrictions
  you place on all IAM users. This means setting password expiration to
  a very short period (as is common in some of our commercial AWS
  environments) can lock you out of the `Administrator` user; since we
  can get console access via role assumption, we recommend setting the
  password expiration on the GovCloud org-root account to six months and
  instead treating this user as you would the `root` user in commercial
  AWS (ie, do not use it for anything other than bootstrapping or
  "break glass" cases).
* GovCloud resources use a different AWS partition; this is the second
  part of an ARN. So while an ARN for a commercial resource might look
  like this:

  ```text
  arn:aws:iam::123456789000:user/testuser
  ```

  a GovCloud ARN will look like this:

  ```text
  arn:aws-us-gov:iam::123456789000:user/testuser
  ```

  This means that any Terraform modules will need to take this into
  account; see the Terraform
  [`aws_partition`](https://www.terraform.io/docs/providers/aws/d/partition.html)
  data source for how to do this.
* Many AWS services are not available in GovCloud; some are available
  in one GovCloud region and not others. See the GovCloud
  [Services in Scope](https://aws.amazon.com/compliance/services-in-scope/)
  and the AWS [Region
  Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/)
  for more information.
* Organization CloudTrails are not available in GovCloud. This means you
  cannot add `cloudtrail.amazonaws.com` as a service principal in your
  organization Terraform code.
* Your first GovCloud account will have a randomly-named S3 bucket called
  something like "cloudtrail-123456789abcedf", and all additional GovCloud
  accounts you create via the method described in this document will have
  a randomly-named CloudTrail and matching S3 bucket automatically created.
  We recommend replacing these resources with your own CloudTrail pointing
  to the AWS service logs bucket you create in the account.
* It is not possible to enable CloudWatch Container Insights for an ECS
  cluster. Therefore, in `aws_ecs_cluster` Terraform resources, you cannot
  include a `setting` configuration block with `containerInsights`.
* For Amazon RDS, GovCloud does not support `backup` or `read replica`
  events. Therefore event notifications and subscriptions are impossible
  for those events.
* As of 04/20, the most up-to-date CA cert identifier for RDS instances
  that is viable in GovCloud is `rds-ca-2017` rather than `rds-ca-2019`.
* Because GovCloud doesn't have a root account in the traditional sense
  (it's tied to a commerical root account), you cannot set
  `check_root_account_mfa_enabled` to true in Truss' [AWS
  Config](https://registry.terraform.io/modules/trussworks/config/aws)
  module.
* While Route53 is available in GovCloud, it is *only* available for
  private DNS, which limits its utility somewhat. You will need to create
  public DNS entries for your GovCloud environments in your commercial
  AWS environment.
