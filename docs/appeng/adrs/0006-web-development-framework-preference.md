# 0006 - Preference for x as web development framework(s)

**Status:** Draft

**Date Accepted:** x/x/xxxx

## Context

Our partners look to us for our expertise and our opinions on a variety of topics, including the tools we use to build software together. As we continue to seek new business it is beneficial for us to have an organizational opinion on what web development framework to use (when we have a choice in the matter).

In making a choice we're seeking to match up the tradeoffs that the tools provide with projected partnership needs. The technical ecosystems we operate in tend to change often, so this is a decision we should seek to re-evaluate at least annually. Some topics to consider in the decision include:

- Accessibility for junior engineers.
- Support for rapid prototyping.
- Ability to use in 'enterprise' environments.
- Batteries included vs. things we have to roll ourselves.
  - e.g authentication and authorization tooling, data model management, caching, etc

(this list is likely not complete, feel free to modify or add to it as we put this draft together)

The decision outcome does not need to be a single framework. Ideally we'll choose 2-3 that we would ask folks to choose from in most scenarios.

## Decision

Put a decision outcome here when ready.

## Why is this applicable to the Practice as a whole?

A large portion of our work is focused on developing web apps in partnership with public and private organizations. Each time something new starts we need to make decisions about how we'd like to approach it. This is meant to help give guidance in order to lower the burden of that choice.

Having a 'practice opinion' on these tools will also help support folks' professional development, as well as our hiring and on-boarding processes. As we hire and get folks up to speed, this decision may be able to help us tailor what we do toward 'what we're trying to be good at.' Similarly we could lean on this as we seek to provide resources for folks developing their professional development plans.

## Alternatives Considered

### Django

#### Pros

- `+` Mature framework that's been around since 2005.
- `+` Opinionated tooling for managing data migrations, potentially making the task more accessible for junior practitioners.
- `+` Strong ORM allowing the abstraction of many database interactions.
- `+` Features designed to make form creation and management easier.
- `+` Strong templating tooling
- `+` Possible to gain a portion of the features typically associated with single page applications, with less overhead by pairing the framework with something like [htmx](https://htmx.org/).
- `+` Uses the python programming language which enjoys broad community support, and is useful across multiple subpractices like web development and data science.
- `+` Provides batteries included tooling for authentication and authorization, caching, and an administrative console, among others. These make it easy to create a secure REST API quickly, making it a great option for rapid prototyping.
- `+` Uses Python, which is considered easy to learn and is now frequently taught in both college and bootcamp programs.
- `+` Strong community support
- `+` Built-in Admin interface is useful for having a UI to interact with project database

#### Cons

- `-` Different languages between backend and frontend if Javascript is needed for client interactions.
- `-` May need to use additional tooling for asynchronous workload use cases (message queues and workers).
- `-` Python's dynamic typing may lead to more effort spent on unit tests. But this can be mitigated some through [type hinting](https://docs.python.org/3/library/typing.html)
- `-` Since Django is highly opinionated, if you're new to it it'll seem like there's a lot of "magic" under the hood. Compared to smaller frameworks like Flask the learning curve is can be steep.
- `-` Django is a REST framework, so it doesn't have great websocket support.
- `-` Limitations around async support, with potential performance implications. More on this in the [Django async documentation](https://docs.djangoproject.com/en/4.2/topics/async/).
- `-` Opinionated toward monolithic apps, may not be a good choice for microservices use cases.

### Spring

#### Pros

- `+` Mature framework that's been around since 2002.
- `+` Reactive programming model could be useful for a variety of use cases.
- `+` Spring boot is good for microservices where use cases call for that.
- `+` Batteries included tooling for things like authentication and authorization and caching, among others.
- `+` Java tooling is popular in enterprise spaces
- `+` Uses Java, which is commonly taught in college programs.
- `+` Java is statically typed which can give safety that would otherwise be gained through additional unit tests.

#### Cons

- `-` Big complex framework with a lot of capabilities, but may be less suited for rapid prototyping use cases.
- `-` Different languages between backend and frontend if Javascript is needed for client interactions.
- `-` Potentially too many features, need solid understanding of the framework to know what's most useful. Effort needed to keep team(s) in alignment on practices.
- `-` Potentially verbose configuration
- `-` Might have a steep learning curve for some, making it potentially more difficult to onboard junior practitioners.

### Express.js

#### Pros

- `+` Strong performance for event driven workloads
- `+` Strong community support
- `+` Uses Javascript, which is commonly taught in bootcamp programs
- `+` Flexibility in how applications are structured (not opinionated).
- `+` Mature framework that's been around since 2010.
- `+` Can use typescript with this framework, allowing us to keep with [ADR 0001](https://playbook.truss.dev/docs/appeng/adrs/use-typescript).

#### Cons

- `-` Not opinionated, this lack of structure can make it more difficult to keep team(s) on the same page around specific practices and approaches.
- `-` Minimialist framework, so lacking in some batteries included features, leaving projects to choose other tools to add on with it.
- `-` If we're abdiding by prior ADRs it would mean using Typescript, which may have some learning curve for folks coming in without that background.

### Vue.js with Node.js

#### Pros

- `+` One programming language for both frontend and backend.
- `+` Node.js can be strong on concurrent request handling.
- `+` Considerable library/tooling support
- `+` Modular architecture can be useful for microservices
- `+` Strong community support

#### Cons

- `-` Projects have to figure out security implementation, which could introduce additional risk.
- `-` Server side rendering is possible but may be complex to set up and use
- `-` The flexibility this combination allows for may also allow for complexity creep.
- `-` Dependency management and keeping both parts of the stack in sync may introduct additional overhead.

### React with Node.js

#### Pros

- `+` One programming language for both frontend and backend.
- `+` Node.js can be strong on concurrent request handling.
- `+` Considerable library/tooling support
- `+` Strong community support

#### Cons

- `-` Projects have to figure out security implementation, which could introduce additional risk.
- `-` React can have a steep learning curve when coming from other frameworks.
- `-` Server side rendering is possible but may be complex to set up and use
- `-` The flexibility this combination allows for may also allow for complexity creep.
- `-` Dependency management and keeping both parts of the stack in sync may introduct additional overhead.
