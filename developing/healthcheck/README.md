# [Tools and Practice](../README.md) / Healthchecks

## Overview

In modern API services, it is not uncommon to build and rely upon Healthcheck endpoint(s). These endpoints are generally orthogonal to the operating business logic of the service, and are intended to be consumed by the Operators of the system (e.g. InfraSec practitioners).

There are many ways that Healthcheck endpoints can be used in a system:

- Readiness - Upon startup, has my app warmed up any internal caches that are needed before it can respond to traffic?
- Liveness - Is this app accepting and responding to traffic at all?
- Versioning - Is the verison of code that is deployed what it is expected to be?
- Reachability - Can a client reach the service over the network?
- Catalog - What are the external dependencies to which this app connects?
- Connectivity - Can the app connect to its external dependencies successfully?
- Quality - Does this endpoint do all its work and respond in a timely manner?

Many apps will try to achieve their subset of the above goals via a single endpoint, but as apps grow in sophistication it is not unheard of to tease those responsibilities out to separate endpoints.

## Security

Frequently healthcheck endpoints are agnostic about authentication and authorization, meaning anyone that can reach the service via the network can access these endpoints.

Having heathcheck endpoints be un-authenticated implies several other considerations:

- Any information available in the healthcheck should not be confidential, nor should the information be able to be (ab)used to jeopardize the smooth running of the service.
- Unsecured healthchecks could open up the system or its checked dependencies to Denial of Service attacks. This may be mitigated by adding some level of caching in the healthchecks.
- One possible technique for lowering risk is to isolate operational endpoints to a separate port with tighter network ACLs.

## Reliability

Particular care should be taken when using healthchecks as part of the reliability story of an app.

Prof von Neuman is credited with the concept of "synthesis of reliable organisms from unreliable components". He showed that the math works out as such: if my app is serially dependent on 3 other services that are each at 97% reliable, my app can be no more than ~91% (0.97 x 0.97 x 0.97) reliable. This means that if an app's healthcheck is setup to fail when any of its dependencies have failed, this has significantly limited the upper bound of the apps reliability.

Sometimes an app's reliability really is limited by a dependency, e.g. a database connection. If every single endpoint and functionality in an app requires interaction with the app's database, then it is reasonable to call your app fully inoperable when the database connection is not functioning.

However, if only a subset of the app's functionality is impacted by an unreliabile dependency, it may be better to handle that instability at runtime, rather than declaring the whole app down. Consider the following example: if only one (out of many) of an app's functionalities depend on sending email, the app should maybe not be considered wholly down if the email service is unreachable; it would be better to handle errors from interacting with the email service gracefully, or possibly even using a technique like feature flagging to turn off any attempts to use that functionality until the service is back in service.

## Healthchecks in Deployment Pipelines

It is not uncommon to see teams utilize an app's healthcheck endpoint on the critical path of a deployment pipeline, however this should be evaluated for unintended consequences.

In modern software engineering, automated deployments are a critical feature of a software system, facilitating the ability to safely and incrementally improve the quality of a running app.

Again, consider the app example from above that uses an email sending service for one feature: should the external service instability be able to jeopardize the ability to roll out new code? Perhaps the new code for deployment is useful for diagnosing the issue or is intended to temporarily turn off the offending sending of emails: blocking roll out makes remediation of the issue harder rather than safer.

## Contents

- [von Neuman paper](http://web.mit.edu/6.454/www/papers/pierce_1952.pdf)
- [Reliability Engineering](https://en.wikipedia.org/wiki/Reliability_engineering)
