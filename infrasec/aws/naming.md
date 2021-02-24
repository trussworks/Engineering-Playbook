# [AWS](README.md) / Naming

*Naming* is one of the [hard problems in computing](https://martinfowler.com/bliki/TwoHardThings.html). Naming instances in a shared name space, such as AWS, is especially rife with problems. Often a company uses a single AWS account across multiple projects and so the projects have to negotiate how to share the namespace for resources. There are a number of different axes of belonging we might want to include in the name: to which project does a resource belong, to which environment (dev, prod, staging), which function within the environment. Then there are entities which exist only in terms of their relationship to other objects, e.g. roles associated with a particular lambda function.

Things are further complicated in AWS because there are different uniqueness constraints in play:

| Uniqueness constraint | Example resources
| --- | ---
| Global (the entirety of AWS) | S3 buckets
| Per account | IAM resources (users, groups, roles, policies, …)
| Per region | Most everything else (ALB, ECS, RDS, …)

As with all naming schemes (and other stylistic things such as casing and comments) where the client already has a functional naming scheme we should follow that - there are more important issues to deal with. However, for our own work and for projects where we are setting the standard tend to use the following.

<!-- toc -->

* [Globally unique](#globally-unique)
  * [S3 Buckets](#s3-buckets)
* [Unique per account](#unique-per-account)
  * [IAM resources](#iam-resources)
    * [IAM policies](#iam-policies)
* [Unique per region](#unique-per-region)

<!-- Regenerate with "pre-commit run -a markdown-toc" -->

<!-- tocstop -->

## Globally unique

### S3 Buckets

*${account.alias}-${application.name}\[-${environment}\]\[-${region}\]* - these names begin with a consistent account/usage prefix as they are globally scoped across all of AWS.

* *$account-alias* - is a prefix for the account, e.g. "truss", "client-name"
* *$application-name* - is application for which the resource is created, e.g. "aws-logs", "webserver", "terraform-state"
* *$environment* - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction
* *$region* - when an app can or will be distributed across AWS regions with distinct instances in each region, this postfix distinguishes between them

e.g.

* truss-aws-logs-us-east-1

## Unique per account

### IAM resources

IAM resource names are account unique (i.e., visible across all regions), e.g. for roles:

*${service/realm}\[-${role}\]-${project/application}-${environment}* - is the general form

* *$service/realm* - to what does this role pertain, e.g. "ecs", "lamda" or "circleci".
* *$role* - where there may be multiple roles associated with a service, this can be used as a way of disambiguating, e.g "task-execution" or "rds-snapshot-cleaner"
* *$project/application* - where there may be multiple applications/projects being managed with independent deploy cycles, this is used, e.g. "webapp", "honeycomb"
* *$environment* - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

e.g.

* lambda-rds-snapshot-cleaner-app-experimental
* ecs-task-role-app-client-tls-experimental

#### IAM policies

Where the details of an IAM role are in an associated policy (usually the case) they are named after the associated role, but with `-policy` appended, e.g.

* lambda-rds-snapshot-cleaner-app-experimental-policy
* ecs-task-role-app-client-tls-experimental-policy

## Unique per region

Where the name is scoped by the resource type and the region, e.g. lambda functions, then it is enough to give a meaningful name and qualify by environment. If the purpose is common, e.g. rds-log-cleaner, it may need an application.

*${purpose}[-${application}]-${environment}* - is the general form

* *$purpose* - a simple name describing the role/purpose of the resource, e.g. "slack-pivotal-bot", "webserver", "rds-log-cleaner"
* *$application* - if needed, disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"
* *$environment* - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

e.g.

* slack-pivotal-tracker-bot-test
* rds-log-cleaner-webapp-prod
