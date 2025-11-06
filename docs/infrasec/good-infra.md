# Good Infrastructure - A Philosophy

While the tools, techniques, and patterns we use to build our solutions are important, they often don't help us design and architect new things. What follows are some opinions about how to think about the work we do at a high level.

## Human factors

### Empathy

> Without establishing shared expectations and coherent communication frameworks, your tools will be instruments of chaos.
>
> -- [Truss Distributed Playbook: Tools Last](https://guide.truss.works/docs/distributed/#tools-last)

InfraSec work is first and foremost a human endeavour. Every aspect of what we do is for other people. We build software for other developers. We deliver reliable infrastructure to meet the needs of the users. We automate systems and write documentation to ease the burden on our future selves and those who come after.

Empathy drives our research into the tooling we build for others. It helps us make good decisions about the operating controls we create for our software. The better our environments are to work in, the less stress we'll have and the easier it will feel to do our job. It creates trust in the system of people and tooling we are surrounded by.

We believe diverse voices result in better solutions. As such, we strive to have diverse voices.

We believe folks decisions are driven by the systems they are in. As such, we strive to improve the systems we work within.

### Operator first

Our industry continues to use the phrase "ship it", as if we're sending off a physical disk to a store or customer. This has not been the case for a while now. For the most part, we're building and running services. The people we are shipping the software to are ourselves. There are customer endpoints (e.g., the website, the API), but the customer isn't running those, we are.

When building a service, we must avoid thinking exclusively about the happy path customer experience and instead give time and attention to the operating controls and gauges we need to run the service. It's like we're tasked to build a commercial aircraft and our "user" stories focus on seating, entertainment, and snack options. Things our customers will need or like so they can have a good in-flight experience. These are important, but rather moot if the aircraft cannot make it to the destination.

Operator first thinking means we consistently consider the experience of the operator of the service as part of the design and architecture. It treats the system operator as a first class user. We should expect user stories about observability, resilience, automation, and tooling. We will build systems which fail less often, less catastrophically, and when they do, are more readily diagnosed and repaired. The outcome is a more humane organization spending less time in high-stress, service degradation scenarios and more time on high-value, creative work.

## Minimalism

Minimalist infrastructure is the practice of building only what you need with the fewest number of resources. This is a philosophy, not a religion: don't build bad infrastructure to achieve a minimalist design. A minimalist design should lead to good infrastructure by reducing the complexity of the design and the number of resources being managed. A simpler system with less resources has a smaller attack surface and is easier for people to learn and debug.

### Avoid state

When designing your system, avoid storing additional state. Often the data you want to store is already available in the system. Using the system as the source of truth can avoid the difficult business of ensuring data consistency.

| Practical Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Let's say you want to be able to rollback a Fargate deploy if the new task definition results in a service that won't become healthy. One option would be store the working task definition in something like DynamoDB (or git or any number of bad choices). However, your ECS service already has this information: the previous, healthy service is still running. Instead of managing a DynamoDB resource as well as writing code for maintaining that state record, query the ECS service itself to get what you want. This avoids managing the DynamoDB resource as well as the unfortunate scenario where the data stored is wrong. |

### Embrace immutability

Related to avoiding state, making resources immutable reduces the scope of what can change. The less that can change, the easier a system is to understand and debug and the more likely that each instance will behave as expected. Reduce systems and architectures to testable units.

As an illustration, consider the complexity difference between a read-only, distroless, container image with a single application binary and a long-lived VM that's updated with the latest application code and it's dependency tree. How confident are you in each system? How confident are you that prod and dev are similar? What does a delivery pipeline look like for each?

### Use managed services

Manage only what you must. There are lot of services out there that solve infrastructure problems for us. For example, AWS Fargate makes it so you don't have to manage EC2 instances running your containers. This is good. Make managing infrastructure someone else's problem (you've got plenty). Build and maintain the least amount possible.

Examples:

- Parameter Store instead of Hashicorp Vault
- Fargate instead of EC2
- SaaS instead of on-premise

### Codify entire stacks

Codify entire stacks into a single callable unit (calling into other units). Keep the number of parameterizations (inputs) small so the infrastructure doesn't vary wildly and the unit's actions remain clear. This makes it easy to spin up the same infrastructure in multiple environments and reduces the proliferation of code unique to each environment.

Care should be given to not hardcode environmental assumptions into this wrapper. Follow the same notions for building a [Twelve-Factor App](#the-twelve-factor-app). The callable stack is our version of a deployable artifact.

## Delivery

### Infrastructure as code

We strive to codify all our work in a manner that is repeatable, versioned, and tested. To that end, we write as much of our infrastructure as declarative code (e.g., Terraform), automated scripts, and reusable tools. Necessary, ad-hoc steps (e.g., secret generation) are stored in "manual operations" logs.

We prefer declarative frameworks (e.g., Terraform) over imperative ones. While it can be frustrating to work in a system that lacks robust flow control, we believe the complexity costs associated with a "real" programming language outweigh the benefits for adoption: the ability to be "clever" too easily leads to infrastructure code that's difficult learn and adapt (i.e., rearchitect) over time.

One of the goals for codifying infrastructure as code is having the ability to spin up new environments quickly. This process should be gated by the time it takes the cloud provider to make the resources available. If manual operations are the bottleneck, we're likely missing code.

### Automation

One of the primary goals of creating infrastructure as code is enabling automation. When we automate our infrastructure we are able to repeat our structures in consistent ways. We can create reusable, testable, units of functionality. We can [⎋eliminate toil](https://landing.google.com/sre/workbook/chapters/eliminating-toil/) and focus our energies on creative problem solving.

Like other mechanisms, the automation must be run regularly to ensure it's functional. This can usually be achieved via CI/CD. For automation that's expensive (in time, in money, etc.) and infrequently used, you could setup an automated, scheduled test, to ensure functionality.

| Practical Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We should be able to spin up additional environments without much fanfare. Since these environments can require resources which take a long time to become available (e.g., an RDS) it may not be feasible to include creating a new environment as part of the CI/CD pipeline. An alternative would be to setup a daily (or weekly) job that spins up a new environment. This attempts to strike the balance between fast (enough) feedback about that process with keeping the pipeline (and getting other feedback) fast.[^1] |

### Delivery pipeline

_[:eyes: See the Intro to CI/CD](../infrasec/ci_cd.md) for a deeper dive into this topic._

An effective delivery pipeline is important for creating a successful — organization-wide — delivery culture. This mechanism brings code from development into production, ties together the (technical and non-technical) teams, and enables the company to iterate quickly.

To achieve _continuous delivery_ means you are always comfortable releasing the artifacts that have made it through the pipeline. To achieve _continuous deployment_ means you have the utmost confidence in your automated processes.

At its barest, a delivery pipeline has three stages:

1. Build
1. Accept
1. Release

#### Build

A code commit should result in the creation of a deployable artifact whose code has been tested via a suite of (mostly) unit tests. Examples of artifacts: container image, binary, language package (e.g., Python wheel, Ruby gem, Rust crate), tarball, etc.

As this is the first stage in the pipeline, the quicker and more comprehensive the build and test processes are, the faster we can iterate. Catching problems here means not losing time to acceptance testing of a broken product and reduces the risk of an issue landing in production.

#### Accept

The artifact produced by the build stage should be deployed and have acceptance tests run against it. The environment and procedures should be the same as production and the entire process should managed by the CI/CD system.

As much as possible, reduce your dependence on manual acceptance testing. Automated tests can be run at anytime. Manual testing introduces a significant delay to your feedback loop, reducing the speed of development:

- More context switching — While changes wait for validation, folks switch tasks. These switches are expensive as context has to be rebuilt, causing each task to take longer, and impacting team velocity.
- More complex debugging — Changes are batched until the next manual test session. Instead of being able to pinpoint a bug to a small set of changes, there are now many changes and their interactions to consider. This increases the time it takes to debug a problem and creates an opportunity for incompatible changes to land together.

#### Release

In this final stage of the delivery pipeline, the fully tested and accepted artifact is released to the world using the same processes validated earlier in the pipeline.

Production releases should be a non-event with little ceremony. There is an inverse relationship between the frequency and risk of release. Compare the amount of change being introduced in each release if it's done every hour versus every week.

In more sophisticated systems, where possible (e.g., web services), the code deploy and the feature release should be separated via feature flags.

## Immutability

> The entropy of the universe tends to a maximum.
>
> -- Rudolf Clausius, 1865

Our systems tend to disorder over time. Worse, they do this in non-uniform ways. There are various mechanisms for helping long-lived systems stay in their expected states (e.g., orchestration), but it is somewhat of a fools errand since there's always parts you aren't tracking and stateful bits which are necessarily different. Include the will of an adversary to purposely change the system in a non-detectable way and you may begin questioning your career choices (or worse, stop caring).

As these systems drift, random errors occur which are difficult to reproduce. They were the result of complex set of factors which arose over time.[^2] More insidious, your environments (prod, ci, dev) will behave different from one another due to having different uptimes, deployment dates, patch schedules, etc. This leads to losing faith in your automated tests, slows down the delivery pipeline, and impacts work velocity.

Taking an immutable approach to your infrastructure helps limit the scope of changes that build up.

When we say a resource is immutable, we mean instead of updating it in place, we provision an entirely new version. For example, if we need to update the software on the system, instead of pulling new files to the running system we create a new disk image containing the changes we want our system to have and launch new ones.

Immutability is not a binary notion. Some amount of state (e.g., memory) must be changing in the system in order for it to run. We strive to find a balance around a usable system and the least amount of state.

| Practical Example                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We consider short-lived containers to be table stakes. These boot from a known state (the container image), run a single process (or few), and are replaced often. A way to increase the immutability would be to use a read-only disk. This removes an entire class of system modification and brings awareness to the kind of data landing on disk. |

An effect of adopting an immutable architecture is being guided toward more minimal systems. Using the example above, since we boot frequently, we want fast boot times. Since we want fast boot times, we want small disk images that can transfer quickly over the network. The way to make the disk smaller is to remove as much as possible and we end up with distroless images which contain almost nothing besides a static binary. The more minimal, the less opportunity for drift.

## The Twelve-Factor App

Build infrastructure in the spirit of and to support [⎋the Twelve-Factor methodology](https://12factor.net/). We should be architecting our delivery and deployment pipelines with this view and pushing back against changes which undermine this methodology.

\[^1\]: There's no single strategy. Managing slow tests is complicated topic. You need to weigh the risks of getting slow feedback for each component to arrive at a place that feels comfortable.

\[^2\]: This hints at the limitations of doing "root cause analysis".
