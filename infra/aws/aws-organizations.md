# AWS Organizations

[AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
provide a native way to manage multiple AWS accounts.  They provide
consolidated billing, APIs (e.g., via Terraform) for automating account
creation, and the ability to apply account-wide IAM like policies.

As security best practices prefer account boundaries over IAM policies
as a way to limit resource access, AWS Organizations are becoming a
standard part of any AWS deployment.

## Truss Patterns

As Truss has begun adopting AWS Organizations for most of our new
projects, we have developed a number of patterns for organizations.
For a more thorough description of the process of bootstrapping a
new AWS Organization, see the [Bootstrapping an AWS
Organization](./org-bootstrap.md) document, but below is a brief
description of the patterns we've adopted.

### The Organization Root Account

* Pick a standard prefix you can use for all the accounts in your
  organization; for our example we'll use `spacecats`.
* The first account you should create is the "master" account for the
  organization, which is where you will configure organization-wide
  resources. We call this the "org-root" account and name it like
  `spacecats-org-root`. *This account should not be used for anything
  else -- no application should use resources from this account.*
* There should be as few users with IAM access to the `org-root`
  account as possible; generally only infrastructure engineers and
  an "owner" from the client. Their IAM users in this account should
  be suffixed with `.org-root` in order to distinguish them from
  IAM users in other accounts (such as `alice.org-root`).
* You can use the
  [`terraform-aws-org-scp`](https://github.com/trussworks/terraform-aws-org-scp)
  module to get a base set of [Service Control
  Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
  to apply to OUs created in this account.
* Create a `suspended` OU for the organization in this account which
  you can place accounts into if you think they have been compromised
  or are exhibiting strange behavior. It can also be used for dummy
  accounts for [GovCloud](./govcloud.md) deployments.
* To bootstrap other accounts, you can define them here with the
  [`aws_organizations_account`](https://www.terraform.io/docs/providers/aws/r/organizations_account.html)
  Terraform resource. Once they are created, you can access them using
  IAM users in this account by assuming the
  [`OrganizationAccountAccessRole`](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html)
  in the subsidiary accounts.
* You can create a `billing` role in this account that can be assumed by
  product or delivery managers (with their accounts in the ID account)
  to give them access to billing information *without* giving them access
  to this account directly.

### The ID Account

* The second account you create should be the ID account. This account
  will be used to define the IAM users and groups that people will use
  on a day-to-day basis. We name this like `spacecats-id`.
* To access other accounts, users will use access keys in this account,
  then assume a role in another account that allows access from this one.
  See the [terraform-aws-iam-cross-acct-src](https://github.com/trussworks/terraform-aws-iam-cross-acct-src)
  and [terraform-aws-iam-cross-acct-dest](https://github.com/trussworks/terraform-aws-iam-cross-acct-dest)
  modules for the way we do this.
* Like the `org-root` account, other than the IAM users and groups, we
  should avoid putting any other resources in this account.

### The Infra Account

* You will probably also need an infra account for your organization.
  This account will contain resources that are organization-wide but are
  only used to handle infrastructure concerns. We name this account like
  `spacecats-infra`.
* Examples of resources appropriate for this account might be an Atlantis
  deployment for the organization or DNS for your root domain.
* If you define the root domain here (say, `spacecats.com`), we can then
  delegate subdomains (like `dev.spacecats.com`) to other accounts, which
  allows application engineers to define new DNS entries in dev or sandbox
  accounts without giving them access to other DNS resources.

### Other Accounts

* Other than the above accounts, the organization structure is relatively
  freeform, or at least flexible.
* Remember that accounts are essentially "free" in terms of monetary cost,
  at least. This means we can use them to segregate resources based on
  access. On some projects, placing each environment into a different
  account makes perfect sense; on others, we might only want production
  to be in a separate account.

## Best Practices

These are the best practices gleaned from online resources and our
experiences on various projects.

* For the email address for each of your accounts, create an infrastructure
  alias (like `spacecats-infra@truss.works`) and then for each AWS account,
  set the email address to be that alias, with a `+` suffix for each
  account, so you can identify where these emails came from. For instance,
  we might make the email address for `spacecats-org-root` to be
  `spacecats-infra+aws-org-root@truss.works`, the one for the ID account
  to be `spacecats-infra+aws-org-id@truss.works`, etc. This email will be
  where support responses and other notifications about your AWS accounts
  will be sent.
* As stated above, *severely limit access to the master account.* This
  account provides access to everything else in the organization, and
  as a result poses a significant security risk if compromised. Use IAM
  roles and the ID account to provide granular access to resources.
* Pick whether your SCPs will be whitelists or blacklists; avoid mixing:
  understanding what happens when a whitelist SCP inherits a blacklist
  SCP (or vice versa) is too complicated.
  * Prefer blacklists as these allow folks to experiment with new
    services — staying out of the way of engineers.
  * Use whitelists for larger organizations operating in high compliance
    environments. For example, this could let a large health care company
    only allow access to HIPAA approved services. Whitelists require more
    maintenance as new services need to get manually added to the whitelist
    as they are approved.
* Create a top-level OU that everything else is under. This makes it easy
  to apply policies across all accounts (e.g., enforce encrypted data).

## External links

1. [How Capital One Applies AWS Organizations Best Practices](https://www.youtube.com/watch?v=ZKpkF17d0Oo)
1. [AWS Multi-Account Architecture with Terraform, Yeoman, and Jenkins](https://medium.com/slalom-engineering/aws-multi-account-architecture-with-terraform-yeoman-and-jenkins-7fd42ddcdda8)
1. [Wrangling Multiple AWS Accounts with AWS Organizations](https://www.slideshare.net/AmazonWebServices/wrangling-multiple-aws-accounts-with-aws-organizations)
