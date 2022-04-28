# Alert Providers

In general, we will be using a third party provider to take alerts from
the systems which are doing the monitoring -- whether that's AWS
Cloudwatch, something like Sensu or Nagios, or a third party monitoring
service like Pingdom -- to the responders who can actual take care of
the problem.

## Context

Choosing which provider to use for a project is an important decision;
not only do you want to know how easy it is to tie in parts of the
infrastructure and services you're building into the alerting system,
but you are depending on the reliability of this service to ensure
your own reliability. If the alerting system doesn't notify you of
problems, you won't be able to address them in a timely manner.

## Requirements

When making these decisions, here are some things you'll want to take
into account:

- **Notification Reliability** - In order to be alerted when there are
  problems, we need a service which is _at least_ as reliable, if not
  more reliable, than our own service. To some extent, this will boil
  down to trust in the vendor and their SLA.
- **Notification Methods** - The other issue is ensuring that the service
  can use many different alerting methods; if someone is in an area of
  flaky cell phone coverage, app push alerts may not work properly, but
  SMS or phone calls may. Being able to use a number of methods (email,
  SMS, voice call, Slack, app push notifications) helps us improve the
  alerting workflow.
- **Integrations** - Optimally, any alerting tool should have integrations
  with the various services we're using to generate the alerts, like
  Cloudwatch. Some tools can also take input from things like CircleCI
  to help tie service events to alerts (all the alerts started right
  after the last deploy). At the very least, we want to make sure there
  is an API we can use to alert in an ad hoc manner.
- **On-Call Scheduling and Escalation** - Any alerting tool we use will
  need to allow us to set up on-call schedules as well as escalation
  policies so that we can ensure the right people are alerted quickly,
  and if there is no response, that it will be escalated to someone
  else who will respond. Being able to tie alerts to teams so that
  people will only get the alerts they can deal with is also important.
- **Cost-Effectiveness** - The alerting tool also needs to be
  cost-effective; in addition to making sure the service provides
  value comparable to its competitors, you should also be aware of
  considerations about how it is billed. Services that bill by alert
  or notification, for instance, can quickly spiral out of control in
  a bad incident. Make sure the pricing matches our needs and use case.

## Other Considerations

Some other questions that we don't have good answers for yet:

- In addition to the above, many of these products offer other services
  beyond simple alerting and reporting; what other features are available
  to us?
- What about requirements about working in GovCloud or other
  higher-security environments?

## Comparisons

This is a comparison of three major alerting providers: OpsGenie (owned
by Atlassian), PagerDuty, and VictorOps (owned by Splunk). These three
provide the basic services listed above, but vary in maturity and our
experience with them.

These comparisons were made with the OpGenie "Standard" ($19/user/month),
PagerDuty "Platform Business" ($39/user/month), and VictorOps "Growth"
($29/user/month) tiers, as they are the ones that capture the bulk of
the features we're looking for. Where capabilities vary more based on a
lower or higher tier, notes have been made in the table with the price of
the option per user per month.

Please feel free to add or update this table with other information you
find helpful in making a decision (including adding other vendors if
it's merited).

| Feature/Objective          | [OpsGenie Standard ($19)](https://www.opsgenie.com/pricing)                   | [PagerDuty Platform Business ($39)](https://www.pagerduty.com/pricing/) | [VictorOps Growth ($29)](https://victorops.com/pricing)                                           |
| -------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| SLA                        | [99.9% of alerts within 5m](https://www.opsgenie.com/tos/sla)                 | [99.9% of alerts within 5m](https://www.pagerduty.com/pricing/)         | (Couldn't find this on their website?)                                                            |
| Notification Amounts       | Unlimited (users x 100 domestically at $9)                                    | Unlimited Globally (Domestically at $29)                                | Unlimited                                                                                         |
| Notification Types         | Email/Push/SMS/Voice                                                          | Email/Push/SMS/Voice                                                    | Email/Push/SMS/Voice                                                                              |
| SSO                        | Yes                                                                           | Yes                                                                     | Available at $49                                                                                  |
| Team Functionality         | Yes                                                                           | Yes                                                                     | Yes                                                                                               |
| Scheduling                 | Yes                                                                           | Yes                                                                     | Yes                                                                                               |
| Escalation Policies        | Yes                                                                           | Yes                                                                     | Yes                                                                                               |
| API                        | Yes ([Documentation](https://docs.opsgenie.com/docs/api-overview))            | Yes ([Documentation](https://v2.developer.pagerduty.com/))              | Yes ([Documentation](https://help.victorops.com/knowledge-base/rest-endpoint-integration-guide/)) |
| Cloudwatch Integration     | Yes                                                                           | Yes                                                                     | Yes                                                                                               |
| Slack Integration          | Yes                                                                           | Yes                                                                     | Yes                                                                                               |
| Other Notable Integrations | CircleCI,  Jira, New Relic, StatusPage                                        | Jira, New Relic, Statuspage                                             | Jira, New Relic, Statuspage                                                                       |
| Data Retention             | 1 year (unlimited at $29)                                                     | Unlimited                                                               | Not listed (but unlimited noted at $49)                                                           |
| Terraform Provider         | No ([abandoned](https://www.terraform.io/docs/providers/opsgenie/index.html)) | [Yes](https://www.terraform.io/docs/providers/pagerduty/index.html)     | No official provider, some limited attempts                                                       |
