# [InfraSec](../README.md) / AWS

AWS is the most popular cloud provider, accounting for about ⅓ of all cloud spend. Almost all our infrastructure client discoveries find they are already using or want to use AWS.

There is a dizzying array of services AWS provides. Many with unhelpful or even misleading names. Here's a short list of essential services we use when deploying container backed web services (a common pattern):

- IAM
- S3
- ALB
- ECS
- Route53
- ACM
- Lambda
- Parameter Store

We encapsulate a lot of the complexity of configuring services (with good defaults) via our Terraform modules.

There's also [this 2 minute video which sings through the names of 168 services](https://twitter.com/forrestbrazeal/status/1301182968766107656). Watch at your own peril. 😱

## Organizations & accounts

- [AWS Organizations](aws-organizations.md)
- [Bootstrapping an AWS Organization](org-bootstrap.md)
- [GuardDuty in Organizations](guardduty.md)
- [Working in GovCloud](govcloud/README.md)

## Other topics

- [Resource Naming](naming.md)
