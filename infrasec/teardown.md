# [InfraSec](./README.md) / Project Teardown Guide

When a project reaches the end of its lifetime and the client doesn't
want to continue it, we need to teardown all the infrastructure we've
created for the project -- sometimes on relatively short notice. This
guide is intended to provide a step-by-step procedure for tearing down
infrastructure we've created for a project and highlight any potential
sources of trouble.

## Terraform and AWS

Your first task should be shutting down all the AWS infrastructure
you've built for your project. When you do this, you'll need to proceed
in basically the reverse order you created all the resources. Here are
some guidelines when tearing down Terraform namespaces:

* Tear down accounts that don't hold resources for organization-wide
  purposes first -- leave your infra, id, and org-root accounts for last.
* If you were using Atlantis to maintain a namespace, and you have this
  component in your `terraform.tf` `backend` configuration:

  ```text
  role_arn       = "arn:aws:iam::123456789000:role/atlantis"
  ```

  Then before you begin tearing down that namespace, you need to remove
  this line, run a `terraform apply`, and then do your `terraform destroy`.
  If you do not do this, then your `destroy` will fail and the state will
  become corrupted because you will destroy the role Terraform is using
  to perform the destroy. Doing the `terraform apply` allows Terraform to
  cleanly change the backend configuration first.
* Similarly, when tearing down the `admin-global` namespace, you should
  change your `.aws/config` profile for the account you're destroying to
  use the `OrganizationAccountAccessRole` with the `org-root` account as
  the `source_profile`. This prevents you from having the same problem
  when your `admin` role is destroyed.
* Do not destroy resources in the `admin-global` namespace until all
  other namespaces for the account except the `bootstrap` namespace have
  been torn down. Don't destroy `bootstrap` until `admin-global` has been
  torn down.
* When you are ready to tear down the `org-root` account, create an IAM
  user *without* Terraform, give it credentials and attach an MFA, and
  change your `org-root` profile to use those credentials. This will allow
  you to cleanly tear down the entire `org-root` account safely, otherwise
  you will delete the IAM user you are using to tear down the account in
  the middle of the `destroy` and corrupt the state.
* It's easiest to wait until all resources in all your accounts are
  destroyed to begin closing accounts; this will remove all the
  organization SCPs and let you remove accounts from the organization
  as you go.
* For OUs nested within another OU, identify where the billing operations
  are set up. If billing operations are set up in the parent OU, leave the
  parent OU to avoid any cascading SCPs.
* In order to completely close an account (aside from the `org-root`
  account, you'll need to go through the password recovery procedure for
  the root user account (ie, you need to try to log in with the email
  address for the account and click the "Forgot Password" link), then
  set up billing information for the account. Once you have done that,
  you can safely remove the account from the AWS Organization (either
  from the console or using the CLI) and then close it from the My
  Account panel.

## SSL Certificates

For most projects, we'll hopefully be able to use AWS ACM certificates,
and those will get torn down with our Terraform teardown above. However,
if we've bought additional SSL certificates through another vendor, such
as SSLMate, we should revoke those certificates and close that account
as well.

## CircleCI

Assuming you've used CircleCI for your CI/CD pipeline on the project,
you should be able to just terminate your CircleCI support plan as soon
as you don't need to do anymore deploys or validate code. You can do this
from the "Project Settings" page on the CircleCI dashboard.

## GitHub

Once you've torn down your AWS infrastructure and CircleCI, you can
shutdown your GitHub organization for the project. Here are the
guidelines for taking down your GitHub organization:

* Make sure the client has been able to make an archive of all
  repositories before you do anything else. Code we build for a client
  belongs to them, so we need to ensure they are able to keep a copy.
* If we are allowed (this varies based on the terms of the contract), we
  should make sure we keep an archive of any code repositories we want
  to retain.
* Delete any GitHub users that were created for CI/CD automation or other
  purposes. These are commonly created to allow CI/CD to access private
  repositories.
* Once the above steps have been completed, you can go into the settings
  for the GitHub organization and close it down. *This will delete all
  repositories in the organization*, so make sure you're ready for that
  before you do this.

## 1Password

*Deleting your 1Password account and vault for the project should be the
very last thing you do.* This is (hopefully) where you've kept all your
credentials for services, software, and accounts that this project uses,
so getting rid of this makes it *extremely* difficult to clean up anything
else you were using for your project. We recommend that you carefully
review the previous steps of this guide and look at the credentials kept
in 1Password to ensure that you've closed down everything else that you
are relying on 1Password for.
