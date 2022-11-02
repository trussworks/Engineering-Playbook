# Naming

*Naming* is one of the [hard problems in computing](https://martinfowler.com/bliki/TwoHardThings.html). Naming instances in a shared name space, such as AWS, is especially rife with problems. Often a company uses a single AWS account across multiple projects and so the projects have to negotiate how to share the namespace for resources. There are a number of different axes of belonging we might want to include in the name: to which project does a resource belong, to which environment (dev, prod, staging), which function within the environment. Then there are entities which exist only in terms of their relationship to other objects, e.g. roles associated with a particular lambda function.

Things are further complicated in AWS because there are different uniqueness constraints in play:

| Uniqueness constraint        | Example resources                                 |
| ---------------------------- | ------------------------------------------------- |
| Global (the entirety of AWS) | S3 buckets                                        |
| Per account                  | IAM resources (users, groups, roles, policies, …) |
| Per region                   | Most everything else (ALB, ECS, RDS, …)           |

As with all naming schemes (and other stylistic things such as casing and comments) where the client already has a functional naming scheme we should follow that - there are more important issues to deal with. However, for our own work and for projects where we are setting the standard tend to use the following.

## Globally unique

### S3 Buckets

`${account.alias}-${application.name}[-${environment}][-${region}]` - these names begin with a consistent account/usage prefix as they are globally scoped across all of AWS.

- `$account-alias` - is a prefix for the account, e.g. "truss", "client-name"
- `$application-name` - is application for which the resource is created, e.g. "aws-logs", "webserver", "terraform-state"
- `$environment` - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction
- `$region` - when an app can or will be distributed across AWS regions with distinct instances in each region, this postfix distinguishes between them

e.g.

- truss-aws-logs-us-east-1

## Unique per account

### IAM resources

IAM resource names are account unique (i.e., visible across all regions), e.g. for roles:

`${service/realm}[-${role}]-${project/application}-${environment}` - is the general form

- `$service/realm` - to what does this role pertain, e.g. "ecs", "lamda" or "circleci".
- `$role` - where there may be multiple roles associated with a service, this can be used as a way of disambiguating, e.g "task-execution" or "rds-snapshot-cleaner"
- `$project/application` - where there may be multiple applications/projects being managed with independent deploy cycles, this is used, e.g. "webapp", "honeycomb"
- `$environment` - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

e.g.

- lambda-rds-snapshot-cleaner-app-experimental
- ecs-task-role-app-client-tls-experimental

#### IAM policies

Where the details of an IAM role are in an associated policy (usually the case) they are named after the associated role, but with `-policy` appended, e.g.

- lambda-rds-snapshot-cleaner-app-experimental-policy
- ecs-task-role-app-client-tls-experimental-policy

#### IAM users

When you create a new user, you should follow a first initial last name format (firstinitialLastName), e.g.

- eeady for Elizabeth Eady
- rkilberg for Rebecca Kilberg

## Unique per region

Where the name is scoped by the resource type and the region, e.g. lambda functions, then it is enough to give a meaningful name and qualify by environment. If the purpose is common, e.g. rds-log-cleaner, it may need an application.

`${purpose}[-${application}]-${environment}` - is the general form

- `$purpose` - a simple name describing the role/purpose of the resource, e.g. "slack-pivotal-bot", "webserver", "rds-log-cleaner"
- `$application` - if needed, disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"
- `$environment` - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

e.g.

- slack-pivotal-tracker-bot-test
- rds-log-cleaner-webapp-prod

### SNS topics

The main purpose of the SNS topics are for notifications to teams. The naming convention reflects that, closely followed by the AWS account type (Gov or Com) and action.

`${team}-${account_type}-${action}` - is the general form

Sample names:

- app-com-notification
- infra-gov-alert

### Slackbot

When you are creating a bot in Slack to alert team members to issues, you should include team to alert and app name the alert is coming from.

- `{team}-${application}`

e.g.

- app-eclkc
- hosting-ipd

### VPC

VPCs are unique by region but they should indicate which application and environment level they contain.

`[${application}-]${environment}` - is the general form

- `$application` - if needed, disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"

- `$environment` - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

- eec-prod

- staging

### Subnets

For non-db subnets: Although they are unique by region, we also want subnets to be descriptively named according to their AZs and public/private status.

`${VPC name}-${public/private/db}-${AZ}` - is the general form

- `$public/private/db` - can be used to distinguish whether the subnet is a private, public, or db subnet
- `$AZ` - Availability Zone (AZ) are within a region and are ordered initials (i.e. `us-east-2b`).

In a VPC named "eec-prod":

- eec-prod-public-us-east-1a
- eec-prod-private-us-west-2c

### ECR

Elastic Container Repositories are unique by region within your account. They should be named according to the united principal of what they will contain. For example, if all the images in the repo will be related to a specific app team, then you can name the repo after the app team. If, on the other hand, they will all be images with variations of a set of software, you could name it after the software.

e.g.:

- eclkc
- php-nginx

### Container images

Container images such as Docker or ECR images should include the date as a way to version. Although the convention is to name the latest version `latest`, this can become a sticky situation when folks are trying to refresh a build in terraform and they end up not pulling the latest because the name `latest` hasn't changed.

`${date}-${application}` - is the general form
`${git commit hash}-${application}` - for applications that build new images on main and therefore may have multiple images per day

- `$date` - YYYY-MM-DD - disambiguates between other images for the same application
- `$git commit hash` - disambiguates between other images for the same application taken on the same day
- `$application` - disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"

e.g. 2020-07-20-eclkc

## Terraform modules

Typically when building resources and services in terraform, you will follow the naming conventions described above for AWS resources. However, when creating a standalone module, you should use the following convention, which is [required to add the module to the Terraform registry](https://www.terraform.io/docs/registry/modules/publish.html).

`terraform-${provider}-${purpose}` - is the general form

- `$provider` - the terraform provider, e.g. "aws", "pagerduty", "github"
- `$purpose` - a simple name describing the role/purpose of the resource, e.g. "slack-pivotal-bot", "webserver", "rds-log-cleaner"

e.g.

- terraform-aws-rds-log-cleaner
- terraform-aws-cloudtrail-alarms
