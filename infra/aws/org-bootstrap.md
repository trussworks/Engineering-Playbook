# [AWS](./README.md) / Bootstrapping an AWS Organization

The purpose of this document is to take you step by step through the
process of bootstrapping an [AWS Organization](./aws-organizations.md).
This is only intended for cases where we are setting up the AWS account
structure from scratch.

## Naming Conventions

Before starting this process, decide on a naming convention for your
organization. For instance, if you are setting up a new organization
for "spacecats", you will be creating AWS account aliases like
`spacecats-org-root`, `spacecats-id`, `spacecats-sandbox`, etc.

## Create Organization Root Account

First, you will use the AWS console to create an "organization root"
account. The purpose of this account is to handle root-level service
control policies [(SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
and encompass the the organizational units (OUs) underneath. If you
need to know how to create an AWS account, please see
<https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/>.
You should set the alias for this account to your project's name and
the `org-root` suffix, like `spacecats-org-root`.

If this is an organization Truss will be paying for, use your Truss
credit card to pay for this account (this may be changed later). For
the address, use the Market Street mailing address from our homepage.
For a phone number, have a Dialpad administrator create you a Dialpad
number for this project and use that for the verification phone number.
For the moment, you can choose the free level of support; we can always
upgrade this later.

Save the login and password to the 1Password vault you set up for this
project previously, and then be sure to add MFA to the root account using
the same 1Password entry. *This is imperative for security purposes.*

## Bootstrap Terraform for org-root Account

Following the pattern in <https://github.com/trussworks/terraform-layout-example>,
set up your infra Git repo that we created earlier. Name the directory for this
account after the account alias as usual. Then, `cd` into this directory and
checkout the bootstrap repo like so:

```bash
git clone git@github.com:trussworks/terraform-aws-bootstrap.git bootstrap
```

Follow the instructions in the bootstrap README and do the following:

* set up /bin directory with aws-vault-wrapper and symlinks
* set up .envrc in the top level and run `direnv allow`
* set up .envrc in the account directory and run `direnv allow`; note
  that this .envrc should set the `AWS_PROFILE` environment variable
  to match the name of this account.

Now create a temporary IAM user in the `org-root` account and give it
administrative privileges. Name this user something obvious, like
"myuser-setup" so you can clean it up easily later. Generate an AWS key
pair and add an MFA for the user. Add the access keys to aws-vault by
running `aws-vault add $AWS_PROFILE` from within the account directory.
Once you've done that, you should be able to run the bootstrap script as
described in the README.

## Terraforming the org-root Account

Once Terraform is bootstrapped in the `org-root` account, you will need to
create an `admin-global` directory in the account directory of the infra
repo. Your first step should be setting up the `providers.tf` and
`terraform.tf` files; see the examples in the `terraform-layout-example`
repo linked above.

### Create org-root Admin Users

Once those are set up, you can begin the rest of the work. Your first
action should be to create administrative IAM users that will *only* be
used to manage the master account and bootstrap the subordinate accounts.
These should not be used for anything else. Suffix the user name with
`.org-root` to make it clear what these are for. They will be the only
accounts that can manage the master account.

Example Terraform code (suggest using a `users.tf` file):

```hcl
locals {
  admin_users = [
    "myuser.org-root",
  ]
}

resource "aws_iam_user" "admins" {
  for_each      = toset(local.admin_users)
  name          = each.value
  force_destroy = true

  tags = {
    Automation = "Terraform"
  }
}

module "admins_group" {
  source  = "trussworks/iam-user-group/aws"
  version = "1.0.2"

  user_list     = local.admin_users
  group_name    = "admins"
  allowed_roles = ["admin"]
}

# This is a generic role assumption policy that enforces MFA.
data "aws_iam_policy_document" "role_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    # only allow folks in this account
    principals {
      type        = "AWS"
      identifiers = [data.aws_caller_identity.current.account_id]
    }
    # require MFA
    condition {
      test     = "Bool"
      variable = "aws:MultiFactorAuthPresent"
      values   = ["true"]
    }
  }
}

resource "aws_iam_role" "admin" {
  name               = "admin"
  description        = "Role for organization administrators"
  assume_role_policy = data.aws_iam_policy_document.role_assume_role_policy.json
  tags = {
    Automation = "Terraform"
  }
}

resource "aws_iam_role_policy_attachment" "admin_administrator_access" {
  group      = aws_iam_role.admin.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
```

Once you have applied the Terraform and have the users created, issue
security keys for this user and add them to aws-vault; change your
profile for this account to use these new credentials and delete the
temporary user from your aws-vault and the `org-root` account. You
should not use the root account anymore unless there is some kind of
emergency.

### Create AWS Organization

Now we can begin creating the AWS Organization itself. There are a
number of standard components that we'll want to create using Terraform:

* the AWS organization itself
* the initial OU which contains everything except the `suspended` OU
* a `suspended` OU which will contain accounts quarantined due to
  security concerns
* a policy which denies use of all AWS resources we can tie to the
  `suspended` OU (which will override the default FullAWSAccess policy);
  this is a part of the Truss
  [org-scp](https://registry.terraform.io/modules/trussworks/org-scp/aws)
  module
* an `id` account (`spacecats-id` in our example) which will contain
  all of the IAM users we'll be using to interact with this organization
* an `infra` account where we can put specific infra-only resources; if
  you are running Atlantis, this is where you can put the Terraform for
  that deployment, or you might put the root DNS records for your
  project's Route53 domain, etc.

You can do all of this from the `org-root` account via Terraform:

```hcl
# Create the AWS Organization
resource "aws_organizations_organization" "main" {
  aws_service_access_principals = [
    "cloudtrail.amazonaws.com",
    "config.amazonaws.com",
  ]

  enabled_policy_types = [
    "SERVICE_CONTROL_POLICY",
  ]

  feature_set = "ALL"
}

# Organizational Units

# The main OU, where all the resources we actually use will live.
resource "aws_organizations_organizational_unit" "spacecats" {
  name      = "spacecats"
  parent_id = aws_organizations_organization.main.roots.0.id
}

# A suspended OU, where we can quarantine accounts.
resource "aws_organizations_organizational_unit" "suspended" {
  name      = "suspended"
  parent_id = aws_organizations_organization.main.roots.0.id
}

# Add the Truss SCPs module and turn on the "deny all access" SCP for the
# suspended account. Note that this module has many other useful SCPs --
# see the docs for more info.
module "org-scps" {
  source  = "trussworks/org-scp/aws"
  version = "~> 1.4.0"

  deny_all_access_target_ids = [aws_organizations_organizational_unit.suspended.id]
}

# Organization Accounts

resource "aws_organizations_account" "spacecats_id" {
  name                       = "spacecats-id"
  email                      = "spacecats-infra+aws-org-id@example.com"
  parent_id                  = aws_organizations_organizational_unit.spacecats.id

  # Allow IAM user access to billing for this account so that we can let
  # project/delivery managers access billing info without a root account.
  iam_user_access_to_billing = "ALLOW"
  tags = {
    Automation = "Terraform"
  }
}

resource "aws_organizations_account" "spacecats_infra" {
  name                       = "spacecats-infra"
  email                      = "spacecats-infra+aws-org-infra@example.com"
  parent_id                  = aws_organizations_organizational_unit.spacecats.id
  iam_user_access_to_billing = "DENY"
  tags = {
    Automation = "Terraform"
  }
}

# Outputs for Accounts -- so you get the account numbers for later use
# You can put these in a separate outputs.tf file if you prefer
output "aws_organizations_account_spacecats_id_id" {
  description = "ID for the Spacecats id account"
  value       = aws_organizations_account.spacecats_id.id
}

output "aws_organizations_account_spacecats_infra_id" {
  description = "ID for the Spacecats infra account"
  value       = aws_organizations_account.spacecats_infra.id
}
```

#### A Note on Terraforming Accounts

Creating accounts in this way keeps you from having to add billing info,
verifying a phone number, or any of the other hoops you have to jump
through when creating a new AWS account. However, it also means the root
user has no password set, making it impossible to log in as root without
going through the password recovery process.

Instead, you can use the [`OrganizationAccountAccessRole`](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_access-cross-account-role)
to access these accounts from the `org-root` account. Set up a new profile
in your `.aws/config` for the new account that looks like this:

```text
[profile spacecats-id]
source_profile=spacecats-org-root
role_arn=arn:aws:iam::<spacecats-id account number>:role/OrganizationAccountAccessRole
region=us-west-2
output=json
# If you have MFA turned on, you will also need to add the mfa_serial
# line from the source_profile.
```

You can then use this role to get access into these accounts to
bootstrap them for Terraform. Once you have Terraform set up, you can
create the resources necessary to either create an IAM user you can use
or an IAM role you can assume to work with this account, at which point
you can use the profile pattern described in the next section.

## Setting Up the id Account Users and Role Assumption

Follow the same steps you took to bootstrap the `org-root` account to
bootstrap your `id` account. Once you've done that, you can set up the
users and groups that team members will use to access all other AWS
resources. Truss has made two modules which will help you get this done,
[`iam-cross-acct-src`](https://registry.terraform.io/modules/trussworks/iam-cross-acct-src/aws) and
[`iam-cross-acct-dest`](https://registry.terraform.io/modules/trussworks/iam-cross-acct-dest/aws).

In order to do this, in your `id` account, define your users and then
use the module like so:

```hcl
data "aws_caller_identity" "current" {}

locals {
  spacecats_infra_account_id = <spacecats-infra account number>
  infra_users = [
    "myuser",
  ]
}

resource "aws_iam_user" "infra_users" {
  for_each      = toset(local.infra_users)
  name          = each.value
  force_destroy = true

  tags = {
    Automation = "Terraform"
  }
}

module "infra_group_role" {
  source  = "trussworks/iam-cross-acct-src/aws"
  version = "1.0.0"

  destination_account_ids = [
    data.aws_caller_identity.current.account_id,
    local.spacecats_infra_account_id
  ]
  destination_group_role  = "infra"
}

module "infra_group" {
  source  = "trussworks/iam-user-group/aws"
  version = "1.0.2"

  user_list     = local.infra_users
  allowed_roles = [module.infra_group_role.arn]
  group_name    = "infra"
}

resource "aws_iam_role_policy_attachment" "infra_local_policy_attachment" {
  role       = module.infra_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/PowerUserAccess"
}
```

Using that code, we get an IAM user `myuser` in the group `infra`, which
has permission to assume the `infra` role in the current account and the
`spacecats-infra` account. We also attach a policy to the `infra` role we
created that grants power user access.

All user creation and grouping should be done in the `id` account. In the
the other accounts, we grant these groups permission to assume roles that
grant whatever permissions they need. So in the `spacecats-infra` account,
if we want to allow the `infra` group to have similar permissions, we can
use this code in that account's namespace:

```hcl
locals {
  spacecats_id_acct_id = <spacecats-id account number>

module "infra_role" {
  source  = "trussworks/iam-cross-acct-dest/aws"
  version = "1.0.0"

  iam_role_name             = "infra"
  source_account_id         = local.spacecats_id_account_id
}

resource "aws_iam_role_policy_attachment" "infra_local_policy_attachment" {
  role       = module.infra_role.iam_role_name
  policy_arn = "arn:aws:iam::aws:policy/PowerUserAccess"
}
```

This code creates a new `infra` role in the `spacecats-infra` account and
allows users in the `spacecats-id` account to assume that role in this
account as well. Note that we're not gating this based on the role in the
`id` account; instead, we assume the `id` account will do that gating for
us. Then we grant the `infra` role the same level of permissions those
users had in the `id` account. Note that we *could* give them a different
level of access if we wanted to -- general engineers will not have
permission to do much of anything in the `id` account most of the time,
but we could grant them power user access in a sandbox account, and
perhaps only access to look at Cloudwatch logs in the staging or prod
accounts. Using this method allows you to do all your user management in
one place, and then give role-based access everywhere else.

In order for these users to access other accounts, you'll need to set up
their profiles for these other accounts like so:

```text
[profile spacecats-infra]
source_profile = spacecats-id
role_arn = arn:aws:iam::<spacecats-infra account number>:role/infra
region = us-west-2
output = json
# If you have MFA turned on, you will also need to add the mfa_serial
# line from the source_profile.
```

## Next Steps

Once you have the `org-root`, `id`, and `infra` accounts created, you
can move on to setting up the other parts of your infrastructure. If you
want to create more accounts, follow the example with the `infra` account
above; you should refrain from creating any IAM users in non-`id` accounts
if possible (though sometimes this is necessary for CI/CD or other
automation).

You should also set up some basic AWS services for the organization. Both
Cloudtrail and GuardDuty can be set up at the organization level in the
`org-root` account, and Config should be set up in each account.

Finally, you should review the [Truss `org-scp` module
README](https://github.com/trussworks/terraform-aws-org-scp) and consider
implementing some of the standard SCPs to parts of your organization,
such as denying root account access and preventing accounts from removing
themselves from the organization.

### Shared Resources

In general, with an organization, there should be a bias towards making
each individual account as self-sufficient as possible and avoid using
too many shared resources. One of the driving reasons for using an AWS
Organization is the ability to compartmentalize resources; engineers can
have wide permissions in a sandbox account, for instance, because they
are not going to be able to touch anything in the main release pipeline.
If you use a shared resource, like an S3 bucket, you end up having to
do more detailed permission management to keep accounts from stepping on
each other -- this essentially eliminates the advantage of the
organization in the first place.

For most things, creating a separate resource for each account is likely
the better play -- for things like S3 buckets, having two S3 buckets with
half as much stuff as a single larger S3 bucket ends up essentially being
the same cost. Even for things where the added cost is marginal, like VPCs
or ECS services, the added peace of mind of splitting these services is
usually worth it. In addition, separating resources like this makes it
easy to spin up a complete new environment by simply stamping a new
self-contained copy of all the necessary resources.

If you must have some shared resources, these should be served from an
account that is separate from the others -- the `infra` account is a
likely place to put many of these, and that's why it is part of the
pattern, but it may not be appropriate for everything. In addition, you
will need to implement strong controls around access to these resources.
