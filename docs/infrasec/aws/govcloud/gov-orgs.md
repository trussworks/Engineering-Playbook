# [GovCloud](README.md) / Setting Up a GovCloud Organization

Setting up organizations in GovCloud requires some additional steps due
to the way GovCloud interacts (or rather, doesn't interact) with commercial
AWS accounts. The instructions below will take you through the process of
getting an organization and its accounts set up properly.

<!-- mdformat-toc start --slug=github --no-anchors --maxlevel=6 --minlevel=2 -->

- [GovCloud Organization master account](#govcloud-organization-master-account)
- [Additional GovCloud accounts](#additional-govcloud-accounts)
- [Adding new GovCloud accounts to the GovCloud Organization](#adding-new-govcloud-accounts-to-the-govcloud-organization)
- [Handling GovCloud dummy accounts in AWS commercial](#handling-govcloud-dummy-accounts-in-aws-commercial)
- [Enabling Business Support in GovCloud](#enabling-business-support-in-govcloud)

<!-- mdformat-toc end -->

## GovCloud Organization master account

To set up a new GovCloud AWS Organization, you must log in as root to the
org-root account of your commercial AWS Organization. Then go to the "My
Account" screen with the pulldown in the upper right of the AWS dashboard,
and scroll down; there will be a "Sign up for AWS GovCloud" button. When
you click that, you will need to accept an appendix to the AWS Customer
Agreement; once you do so, you will get an email with instructions on how
to log in to your GovCloud account.

Once you create the account, you can create a temporary IAM user with full
credentials you can use to [bootstrap
Terraform](https://github.com/trussworks/terraform-aws-bootstrap) in the
account as you would in commercial AWS.

Once you have bootstrapped Terraform, you can create the GovCloud
organization the same way you would in commercial; however, you cannot
add `cloudtrail.amazonaws.com` as a service access principal in your
organization definition because organization CloudTrails are not available
in GovCloud.

## Additional GovCloud accounts

To add more accounts to your GovCloud organization, you *cannot* simply
use the Terraform `aws_organizations_account` resource. Using credentials
for the org-root account in your commercial AWS Organization, use the
following AWS CLI command. This will create two accounts; a dummy account
in the commercial AWS Organization and a new corresponding GovCloud
account, both with the same account alias.

```console
$ aws organizations create-gov-cloud-account \
  --email spacecats-infra+spacecats-govcloud-id@example.com \
  --account-name spacecats-govcloud-id
```

(You can add `--iam-user-access-to-billing DENY` if you want, but this
won't really matter once we lock down the dummy account later.)

This will give you output that looks something like this:

```json
{
  "CreateAccountStatus": {
    "Id": "car-8d813980526511ea7184124ac536023e",
    "AccountName": "spacecats-govcloud-id",
    "State": "IN_PROGRESS",
    "RequestedTimestamp": 1582040671.363
  }
}
```

You can then run the following command to get the account ID of your new
GovCloud account:

```console
$ aws organizations describe-create-account-status \
  --create-account-request-id car-8d813980526511ea7184124ac536023e
```

You'll get output that looks like this:

```json
{
  "CreateAccountStatus": {
    "Id": "car-8d813980526511ea7184124ac536023e",
    "AccountName": "spacecats-govcloud-id",
    "State": "SUCCEEDED",
    "RequestedTimestamp": 1582040671.446,
    "CompletedTimestamp": 1582040736.794,
    "AccountId": "123456789000",
    "GovCloudAccountId": "000987654321"
  }
}
```

In that output, `AccountId` is the account number for the dummy account,
and the `GovCloudAccountId` is the account number for your new GovCloud
account.

Now that you have that, you can assume the `OrganizationAccountAccessRole`
in the new account from an account with sufficient privileges in the
*GovCloud* organization org-root account. *Note that this is the case even
though at this point the GovCloud organization does not show up if you
look at the organization membership in the console.*

To do this, add a new profile to your `.aws/config`; this assumes we
already have a working profile for the organization org-root account,
called `spacecats-govcloud-org-root`. The new profile for your
`spacecats-govcloud-id` account should look like this:

```text
[profile spacecats-govcloud-id]
source_profile=spacecats-govcloud-org-root
role_arn=arn:aws-us-gov:iam::000987654321:role/OrganizationAccountAccessRole
region=us-gov-west-1
output=json
# If you have MFA turned on, you will also need to add the mfa_serial line
# from the source_profile.
```

Once you've added IAM users in the `-id` account later on, you can change this profile to not use the OrganizationAccountAccessRole anymore; as with commercial AWS accounts, you should use resources from the organization org-root account as sparingly as possible.

## Adding new GovCloud accounts to the GovCloud Organization

To add the account you just created to your GovCloud organization, run
this command with your appropriate credentials from the GovCloud
organization's org-root account.

```console
$ aws organizations invite-account-to-organization \
  --target Id=000987654321,Type=ACCOUNT
```

This will return output that looks like this:

```text
{
  "Handshake": {
    "Id": "h-d6ac6154ef6a42e68513d0d8460af49a",

...
```

Using the credentials in the new account, run this command:

```console
$ aws organizations accept-handshake \
  --handshake-id h-d6ac6154ef6a42e68513d0d8460af49a
```

The account will now be in your GovCloud organization. You will want to
[import this account](https://www.terraform.io/docs/providers/aws/r/organizations_account.html#import)
into your Terraform state for the GovCloud organization org-root account
like so:

```hcl
resource "aws_organizations_account" "spacecats_govcloud_id" {
  name      = "spacecats-govcloud-id"
  email     = "spacecats-infra+spacecats-govcloud-id@example.com"
  parent_id = aws_organizations_organizational_unit.spacecats_govcloud.id
  tags = {
    Automation = "Terraform"
  }
}
```

Then run this command:

```console
$ terraform import aws_organizations_account.spacecats_govcloud_id 000987654321
```

## Handling GovCloud dummy accounts in AWS commercial

As stated above, when you use the AWS CLI to create your new GovCloud
accounts, it will also create a dummy account with the same account name
in your commercial AWS organization. In order to prevent misuse of these
accounts (and any confusion, since they have the same account alias as
your GovCloud account), we can lock these down with the `suspended` OU
we usually create in the commercial AWS organization.

To do this, import the account's Terraform resource into your commercial
AWS organization by using the same sort of procedure described above to
import the new GovCloud account into the GovCloud organization, but
replace the `parent_id` parameter with the Terraform resource describing
your `suspended` OU -- usually something like
`aws_organizations_organizational_unit.suspended.id`. This will make it
impossible to use that account for anything else, and has no effect on
the corresponding GovCloud account.

## Enabling Business Support in GovCloud

If you intend to have more than just the basic AWS support for your GovCloud
account, you will need to enable it in the corresponding dummy account in your
commercial AWS organization. Yes you read that right, to enable the AWS Support
in GovCloud you need to actually enable it in AWS commercial. It's also
important to note that as of this writing Business Support needs to be enabled
on an account by account basis and can't be enabled at the Organization level.

1. If the dummy commercial AWS account is in the `suspended` OU, you will need
   to temporarily remove it from the`suspended` OU first.
1. Reset the root password for the dummy commercial AWS account tied to your
   GovCloud account. These credentials should be thrown away once you're done.
1. Log into the AWS account as root and enable Business Support.
1. Log into the corresponding GovCloud account and confirm you have Business
   Support enabled.
1. Move the dummy commercial AWS account back into the `suspended` OU.
