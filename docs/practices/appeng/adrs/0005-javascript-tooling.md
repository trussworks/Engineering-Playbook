---
title: JavaScript Tooling
---

# 0005- JavaScript Tooling

**Status:** WIP

**Date Accepted:** n/a for now

**Reviewers:** #g-frontend

## Context

When it comes to React projects there are a number of frameworks, tool chains,
and architectural decisions to take into consideration. React itself is not a
framework but rather a library. Because of this, a number of Frameworks and
of the setup for building and testing Reach library applications. Since the
project is a tool chain and not a framework, it comes with a lot of assumptions
around building, testing, and customizing the build process for the application.
While _Create React App_ does allow for some customization, customization comes
from the **react-scripts** releases and are not generally accessible without
**ejecting** the application from the tool chain.

A popular framework which includes some tooling is called _Next.js_. Because it is a
framework, it allows for configuration options to be customized for tooling such
as _Webpack_ and _Babel_. This framework does not include testing framework but
does integrate and has documented examples of working with popular JavaScript
testing frameworks.

Because of this, **JavaScript tooling** is something that must be decided on by
Truss engineers. Questions like, when does it make sense to continue using an
out-of-the-box tool chain such as _Create React App_ versus when does it make
sense to develop some kind of internal project tool chain that is custom to the
project which means possibly ejecting the configuration from the _Create React
App_ ecosystem? Other questions such as: should a more customizable framework
such as _Next.js_ be used and is there a standard configuration for _Babel_,
_Webpack_, and JavaScript testing frameworks such as _Cypress_ or _Jest_ to be
used to standardize across JavaScript projects?

Today, Trussel engineers are using various JavaScript tooling by either
leveraging a tool chain such as _Create React App_ or a framework like
_Next.js_.

## Decision

Don't have a decision on this yet. Check back after this decision is moved from
WIP to Draft.

## Why is this Applicable to the Practice as a Whole

What makes this decision generally applicable
to Truss projects?

This is applicable to Trussel engineering as it will expose the necessary
efforts of choosing a JavaScript framework and tool chain. It's possible to
maintain & operate our own tool chain as much as it is possible to only use open
source tools to maintain the tooling required for a JavaScript project.

Truss engineering should have shared understanding of the pros and cons to
either of these decisions captured in an ADR.

## When to Not Implement This Decision

What are some use cases to not implement this
on a specific project?

## Alternatives Considered

What other options were there?
What would they have done better?
Why weren't they chosen?

## Links

Link to external resources
and project implementations of this decision.
