# 0002 - Use OpenTelemetry to instrument code for distributed tracing

**Status:** In Progress

**Date Accepted:** 12/8/2021

**Reviewers:** @ahobson @felipe-lee @gidjin @jim @mikena-truss @reggieriser @rogeruiz

## Context

### Objective

_Give developers and operators an easier way to understand the behavior and
structure of running systems by instrumenting code for distributed tracing,
leading to a more consistent experience for the systems' users._

### Why Distributed Tracing?

> Observability is defined as the ability of the internal states of a system to
> be determined by its external outputs.

There are several established techniques for gaining observability into complex
software systems:

- Logging
  - helpful for known knowns
  - e.g. "I want to know when a specific condition is reached"
- Metrics
  - helpful for assessing known unknowns
  - e.g. "How many requests per second was the system handling last Tuesday?"
- Distributed Tracing
  - helpful for learning about unknown unknowns
  - e.g. "What was the execution context for User X that caused their
    interaction to timeout last Tuesday?"

Some of the benefits of distributed tracing as outlined in
[*How Distributed Tracing Solves One of the Worst Microservices Problems*](https://petabridge.com/blog/why-use-distributed-tracing/)
are:

- radically improves developer productivity and output
- works across multiple applications, programming languages, and transports
- improve time to market
- facilitates excellent cross-team communication and cooperation

Here are several example scenarios or questions that distributed tracing can
help answer:

- As a new engineer on the team, I want to understand how many separate systems
  are involved when a certain user type logs in and the first page is rendered.
- As an operations engineer, I want to know how many SQL queries are executed
  for a given endpoint or interaction.
- As a product manager, I want to know if a new feature is being used by a
  certain cohort of users on a regular basis.
- As an engineer, I want to prove that an optimization I wrote is effective
  in a production environment.
- As a load tester, after I have shown that a problem exists, I want to
  understand how the system is interacting so I can debug and fix the issue.

### ADR Goals and Anti-goals

- Goal: Choose which set of libraries to use within a codebase (across
  programming languages) for generating distributed tracing data
- Anti-goal: Committing to a specific "backend", i.e. platform or service for
  gathering, exploring, and displaying trace information
  - Sub-goal: Leaving open as many options as possible for the backend

## Decision

### Use OpenTelemetry

- OpenTelemetry is an emerging industry standard
  - vendors find benefit of being in the OpenTelemetry ecosystem because they
    no longer have to create or support instrumentation libraries in an ever
    growing array of languages, i.e. as soon as language library exists for
    OpenTelemetry, the vendors automatically become available to support that
    given language.
- OpenTelemetry is vendor agnostic
  - tracing information can be sent to hosted services (e.g. Honeycomb.io, AWS
    X-Ray, etc) or self-hosted Open Source implementations (e.g. Zipkin, Jaeger,
    etc)
  - if left unconfigured, OpenTelemetry instrumentation calls default to
    lightweight/noop executions
- OpenTelemetry has well-maintained libraries for the languages used in the
  layers of most Truss projects
  - i.e. Go (back-end); JavaScript (front-end); Python (load testing); etc
- Easily swappable back-ends
  - e.g. could choose a local Docker version of OpenZipkin for an all-local
    development environment
  - e.g. can use Honeycomb.io in the experimental commercial-cloud hosted
    environment
  - e.g. can swap in AWS X-Ray for use in GovCloud hosted environments
- Cons
  - as an abstraction layer, OpenTelemetry may prohibit usage of vendor-specific
    capabilities
  - some OpenTelemetry libraries and tools may trail their vendor-supported
    counterparts
  - instrumentation for tracing may be a vector for performance overhead

## Why is this Applicable to the Practice as a Whole

Most applications will benefit from instrumentation once they are accepting
production traffic. For many systems, a significant amount of work is required
to add tracing calls to the code after substantial development has been
completed. Therefore, instrumentation needs to be part of the development
process early in a project.

Projects should identify what types of calls need to be traced as a part of
discovery and document these decisions in a project-level ADR. For example,
a web backend might add tracing to HTTP requests, service invocations,
database calls, and any network requests made by the backend.

## When to Not Implement This Decision

Don't use OpenTelemetry if:

- the ecosystem you are working in doesn't have a mature instrumentation
  library
- the project already has a working instrumentation solution using a
  proprietary hosted service that is satisfying the project's needs
- the project is too small to support the effort required to implement
  tracing. If this is the case, it is probably worth investigating if there
  are other implementation options for the project, potentially in
  higher-level languages or batteries-included frameworks.
- it isn't possible to setup a backend to collect data

## Alternatives Considered

### Use a vendor's instrumentation libraries

- `+` Enables accessing vendor-specific capabilities
- `-` Vendor lock-in in code
  - lock-in may be somewhat mitigated by translation layers available within
    the OpenTelemetry ecosystem, at the expense of increased configuration burden
  - example - choosing AWS X-Ray would work well in the deployed GovCloud
    environments, but it does not scale down to exclusively local development
    environments, i.e. X-Ray does not provide a UI for browsing distributed
    traces with their local X-Ray daemon
  - example - choosing Honeycomb.io's instrumentation libraries adds a lot of
    nice auto-instrumentation capabilities over OpenTelemetry, but since
    Honeycomb does not have FedRAMP (nor do most of their peers), the distributed
    tracing could not be enabled in the GovCloud deployed environments
  - example - using an open source tool (e.g. OpenZipkin) can scale down to
    local development, but would require more infrastructure support to self-host
    the data storage and UI tools in the GovCloud environments

### Do not instrument

- `+` No work to be done
- `-` developers and operators continue to use current methods to build their
  understanding of the system, which is likely slower and less complete than when
  using distributed tracing

## Links

- [Modern Observability with OpenTelemetry](https://youtu.be/_OXYCzwFd1Y) (YouTube video, 12 minutes)
- [Ted Young on Observability and the Release of OpenTelemetry 1.0](https://player.fm/series/the-infoq-podcast-2896265/ted-young-on-observability-and-the-release-of-opentelemetry-10) (The InfoQ Podcast, 33 minutes)
- [How Distributed Tracing Solves One of the Worst Microservices Problems](https://petabridge.com/blog/why-use-distributed-tracing/) (article)
