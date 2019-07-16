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
