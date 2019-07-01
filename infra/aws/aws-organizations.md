# AWS Organizations

AWS Organizations provide a native way to manage multiple AWS accounts. They provide consolidated billing, APIs (e.g., via Terraform) for automating account creation, and the ability to apply account-wide IAM like policies.

As security best practices prefer account boundaries over IAM policies as a way to limit resource access, AWS Organizations are becoming a standard part of any AWS deployment.

## Best practices

These are the best practices gleaned from a variety of resources. They are ordered by priority.

* Severely limit access to the master account: this account can affect all others. Only folks who need to manage the organization should have access. IAM policies can provide granular access to Organizational Units (OUs) and Service Control Policies (SCPs).
* Don't put any resources in the master account: it shouldn't be responsible for anything besides managing the organization.
* Pick whether your SCPs will be whitelists or blacklists; avoid mixing: understanding what happens when a whitelist SCP inherits a blacklist SCP (or vice versa) is too complicated.
  * Prefer blacklists as these allow folks to experiment with new services — staying out of the way of engineers.
  * Use whitelists for larger organizations operating in high compliance environments. For example, this could let a large health care company only allow access to HIPAA approved services. Whitelists require more maintenance as new services need to get manually added to the whitelist as they are approved.
* Create a top-level OU that everything else is under. This makes it easy to apply policies across all accounts (e.g., enforce encrypted data).
* Create a special OU with an SCP that denies everything. If an account gets popped or exhibits worrisome behavior you can move it under this OU so all services are blocked. Names folks use for this OU are: suspended, quarantined, isolated, etc. We should pick one and standardize. You don't need to worry about the choice of whitelists or blacklists since denying everything is clear in either scenario.

## External links

1. [How Capital One Applies AWS Organizations Best Practices](https://www.youtube.com/watch?v=ZKpkF17d0Oo)
1. [AWS Multi-Account Architecture with Terraform, Yeoman, and Jenkins](https://medium.com/slalom-engineering/aws-multi-account-architecture-with-terraform-yeoman-and-jenkins-7fd42ddcdda8)
1. [Wrangling Multiple AWS Accounts with AWS Organizations](https://www.slideshare.net/AmazonWebServices/wrangling-multiple-aws-accounts-with-aws-organizations)
