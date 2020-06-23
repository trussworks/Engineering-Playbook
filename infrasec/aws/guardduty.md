# [AWS](./README.md) / GuardDuty for Organizations

[GuardDuty](https://aws.amazon.com/guardduty/) is an anomaly detection
system that can alert you via SNS when it detects unusual activity within
your AWS accounts, such as someone using it from an unusual IP.

Setting up GuardDuty through an organization can be done with a relatively
small amount of Terraform, but there are some issues you may run into as
you do so. This document is intended to help you get GuardDuty set up in
your organization and work around these pitfalls.

## Initial Configuration

To get GuardDuty set up within your organization, the first task will be
to make some changes in your `org-root` account to get it started. First,
you will need to make sure that GuardDuty is set up as a service principal
for your AWS organization like so:

```hcl
resource "aws_organizations_organization" "main" {
  enabled_policy_types = ["SERVICE_CONTROL_POLICY"]
  feature_set          = "ALL"
  aws_service_access_principals = [
    "config.amazonaws.com",
    "cloudtrail.amazonaws.com",
    "guardduty.amazonaws.com" # Make sure this is present
  ]
}
```

Using GuardDuty via organizations means that you can consolidate all your
findings in one account, known as the "GuardDuty admin account". AWS best
practice is to *not* have this in your `org-root` account (because we want
to use that account for as little as possible). As a result, you will want
to set your admin account to be another account, usually the `infra`
account. The code below will make the `spacecats-infra` account the
GuardDuty admin account for our organization:

```hcl
resource "aws_guardduty_organization_admin_account" "main" {
  depends_on = [aws_organizations_organization.main]

  admin_account_id = aws_organizations_account.spacecats_infra.id
}
```

Once we've done that, we can then go over to the `spacecats-infra`
account and configure GuardDuty there. There are two components you'll
need to set it up: a GuardDuty detector (which is the basic component
for GuardDuty that generates your findings), and a GuardDuty organization
configuration. The code for these looks like this:

```hcl
resource "aws_guardduty_detector" "main" {
  enable = true
}

resource "aws_guardduty_organization_configuration" "main" {
  auto_enable = true
  detector_id = aws_guardduty_detector.main.id
}
```

Once you've created this, GuardDuty is set up and ready to go for the
organization. New accounts added the the organization after this point
will automatically have a detector created that is connected to the
detector in the GuardDuty admin account. Accounts that already exist
will not have GuardDuty set up in them yet, however.

## Adding GuardDuty to Existing Accounts

To add an account to an organization's GuardDuty configuration, in the
GuardDuty admin account, you'll need to add an `aws_guardduty_member`
resource for the account. The code for that looks like this:

```hcl
locals {
  spacecats_sandbox_id    = "123456789000"
  spacecats_sandbox_email = "aws+spacecats-sandbox@example.com"
}

resource "aws_guardduty_member" "spacecats_sandbox" {
  account_id                 = local.spacecats_sandbox_id
  detector_id                = aws_guardduty_detector.main.id
  email                      = local.spacecats_sandbox_email
  invite                     = false
  disable_email_notification = true
}
```

Unfortunately, due to a [bug](https://github.com/terraform-providers/terraform-provider-aws/issues/13906),
once you apply this to fix it, subsequent runs will try to destroy and
recreate this resource. However, if we comment out this resource and
apply, despite Terraform claiming the resource was destroyed, the
membership will still be there. You can confirm this using these
commands:

```console
$ aws guardduty list-detectors
{
    "DetectorIds": [
        "1234567890abcdef0000000000000000"
    ]
}

$ aws guardduty list-members --detector-id 1234567890abcdef0000000000000000
{
    "Members": [
        {
            "AccountId": "123456789000",
            "DetectorId": "deadbeef627C78CEBDeE47FAC9CdA7Cd",
            "MasterId": "000987654321",
            "RelationshipStatus": "Enabled",
            "UpdatedAt": "2020-06-23T14:31:35.220Z"
        },

...
```

You will still see the detector for the account you added in this list of
members, even though Terraform will claim to have destroyed it.

## Adding More Regions

GuardDuty is a regional service -- creating the detectors and members as
above will only enable GuardDuty in a single region. Our best practice
uses SCPs to prevent AWS actions in regions we're not using, so you don't
need to turn on GuardDuty in say, `eu-central-1` probably, but at the very
least, most commercial organizations will be using `us-west-2` and
`us-east-1`, simply because some resources (like Route53) can only work in
`us-east-1`. So at the very least, you'll want to have GuardDuty set up in
both of those.

If we assume we've set up our original infrastructure in `us-west-2`, we
want to set up GuardDuty for `us-east-1` as well. To do this, we need to
add duplicate resources to the GuardDuty admin account.

To start off, we'll need to define a second provider for the other region
in our `providers.tf` file (this may already be done if the account already
has resources in the `us-east-1` region:

```hcl
provider "aws" {
  version = "~> 2.67"
  alias   = "us-east-1"
  region  = "us-east-1"
}
```

Then we will need to define a new GuardDuty detector and organization
GuardDuty configuration for the new region like so:

```hcl
resource "aws_guardduty_detector" "main_useast1" {
  provider = aws.us-east-1

  enable = true
}

resource "aws_guardduty_organization_configuration" "main_useast1" {
  provider    = aws.us-east-1
  auto_enable = true
  detector_id = aws_guardduty_detector.main_useast1.id
}
```

As with the originals, this should take care of any new accounts;
any accounts that already exist that need to be connected to this
detector, however, will need to be created according to the same method
described in the previous section, with the addition of the `provider`
argument and pointing to the new detector, like so:

```hcl
resource "aws_guardduty_member" "spacecats_sandbox_useast1" {
  provider                   = aws.us-east-1
  account_id                 = local.spacecats_sandbox_id
  detector_id                = aws_guardduty_detector.main_useast1.id
  email                      = local.spacecats_sandbox_email
  invite                     = false
  disable_email_notification = true
}
```
