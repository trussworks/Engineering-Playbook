# [AWS](./README.md) / Bootstrapping an AWS Organization

The purpose of this document is to take you step by step through the
process of bootstrapping an [AWS Organization](./aws-organizations.md).
This is only intended for cases where we are setting up the AWS account
structure from scratch.

## Naming Conventions

Before starting this process, decide on a naming convention for your
organization. For instance, if you are setting up a new organization
for "spacecats", you will be creating AWS account aliases like
"spacecats-org-root", "spacecats-id", "spacecats-sandbox", etc.

## Create Organization Root Account

First, you will use the AWS console to create an "organization root"
account. The purpose of this account is to handle root-level service
control policies [(SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
and encompass the the organizational units (OUs) underneath. If you
need to know how to create an AWS account, please see
<https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/>.
You should set the alias for this account to your project's name and
the "-org-root" suffix, like "spacecats-org-root".

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
* set up .envrc in the account directory and run `direnv allow`

Now create AWS keys from the root account and add them to aws-vault by
running `aws-vault add $AWS_PROFILE` from within the account directory.
Once you've done that, you should be able to run the bootstrap script as
described in the README.

## Terraforming the org-root Account

Once Terraform is bootstrapped in the org-root account, you will need to
create an `admin_global` directory in the account directory of the infra
repo. Your first step should be setting up the `providers.tf` and
`terraform.tf` files; see the examples in the `terraform-layout-example`
repo linked above. You may also want a `terraform.tfvars` to at least
define the region you'll be using for global resources, if nothing else.

### Create org-root Admin Users

Once those are set up, you can begin the rest of the work. Your first
action should be to create administrative IAM users that will *only* be
used to manage the master account and bootstrap the subordinate accounts.
These should not be used for anything else. Suffix the user name with
".org-root" to make it clear what these are for. They will be the only
accounts that can manage the master account.

Example Terraform code (suggest using a `users.tf` file):

```hcl
resource "aws_iam_group" "admins" {
  name = "admins"
}

resource "aws_iam_group_policy_attachment" "admins" {
  group      = aws_iam_group.admins.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

resource "aws_iam_user" "myuser_org-root" {
  name = "myuser.org-root"
  tags = {
    Automation = "Terraform"
  }
}

resource "aws_iam_group_membership" "admins" {
  name = "admins"

  users = [
    aws_iam_user.myuser_org-root.name,
  ]

  group = aws_iam_group.admins.name
}
```

Once you have applied the Terraform and have the users created, issue
security keys for this user and add them to aws-vault; change your
profile for this account to use these new credentials and delete the
root credentials from both your aws-vault and the org-root account. You
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
  `suspended` OU (which will override the default FullAWSAccess policy)
* an `id` account (`spacecats-id` in our example) which will contain
  all of the IAM users we'll be using to interact with this organization
