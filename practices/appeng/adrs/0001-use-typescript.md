# 0001 - Preference to use TypeScript in place of JavaScript

**Status:** In progress

**Date Accepted:** TBD

**Reviewers:** @suzubara @jim @rswerve <tag yourself!>

## Context

When in the business of building software for the web, JavaScript is largely unavoidable. It is virtually the only language option for interacting with browser APIs in order to enhance user experience & interfaces, and implement features to meet the high expectations of users today. It is also rapidly gaining popularity as a backend language, with the advent of Node.JS, web frameworks such as Express and Next.js, and the growing need to better optimize UI code by rendering it on the server first.

However, JavaScript has more than its share of quirks, and because it runs natively in browsers, it can be too easy to introduce bugs and errors that aren't realized until encountered by an end user. These days it is crucial to accompany JavaScript code with development tools such as linters and automated tests in order to avoid those scenarios. TypeScript is another such tool, [introduced by Microsoft](https://www.typescriptlang.org/why-create-typescript) as a superset of JavaScript that adds [type safety](https://en.wikipedia.org/wiki/Type_safety) to the language. By writing code in TypeScript instead of JavaScript, engineers can avoid entire categories of errors that will be caught well ahead of code being deployed to production.

### Why type safety?

The decision to use TypeScript also assumes a consensus that type safety is better than no type safety. Below are some reasons for this:

- A strong static typing system can help reduce the possibility of bugs at runtime, since type errors are captured earlier, during compilation.
- _[...more reasons here?]_

## Decision

Our decision is to declare a general preference to use TypeScript over JavaScript when the opportunity comes up.

To clarify, this is _not_ a decision to use TypeScript whenever possible, including as a server language. Rather, when presented with a scenario where JavaScript might be the natural choice of language, TypeScript should be _strongly_ considered instead.

## Why is this applicable to the practice as a whole

As stated above, many of the projects Truss works on use JavaScript to some extent. This decision is applicable to any such project, with the intention of encouraging high code quality and consistent tooling across engineering practices.

## When to not implement this decision

- If the project has no reason to use JavaScript, there may be no reason to use TypeScript. However, this decision does not preclude the option to use TypeScript as a server language if otherwise appropriate.
- It can be very challenging and time consuming to introduce TypeScript to an existing JavaScript code base, especially if there are many dependencies and/or integrations that may or may not have TypeScript support. In this case it might not be feasible to spend time configuring TypeScript, although the option of introducing TypeScript incrementally (such as only to new code) should also be considered.
- TypeScript can have a notoriously high learning curve, and may be too costly to adopt by certain projects with tight timing and/or staffing circumstances. However, that overhead in this situation should still be weighed carefully against the payoff of using TypeScript to prevent errors and reduce the need for writing tests later on.
- For the same reason, the handoff cost may be too high for a client to maintain continuity of the project, if the incoming engineering team is not experienced with TypeScript. As consultants, Truss should be well-positioned to recommend TypeScript as a best practice, but there may be scenarios where this recommendation is not acted upon.

## Why TypeScript?

TypeScript is not the only option available for adding static type checking to JavaScript. Below are some of the reasons why we’ve landed on TypeScript above the alternatives:

- TypeScript code can be somewhat self-documenting, since it is annotated with [static typing](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html). This is particularly useful when integrating with third-party dependencies that have type definitions.
- TypeScript is widely used to the point that it is supported out-of-the-box with common frameworks such as [Create React App](https://github.com/facebook/create-react-app) and [NextJS](https://nextjs.org/).
- TypeScript has many helpful autocomplete and snippet generation features for IDEs such as [VSCode](https://code.visualstudio.com/Docs/languages/typescript) that can speed up development.
- Built & maintained by Microsoft, TypeScript has a steady and reliable release history, and its documentation and community support are well-established. It has been the [most popular JavaScript "flavor" since 2017](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/), and was ranked second most loved programming language in the [2020 Stack Overflow developer survey](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted).
- TypeScript implements [object-oriented concepts](https://levelup.gitconnected.com/typescript-object-oriented-concepts-in-a-nutshell-cb2fdeeffe6e) to a stronger level than [ES6 classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/) in vanilla JavaScript, making it a useful environment within which to learn object-oriented programming.

It is also worth noting the potential pitfalls and impacts of the decision to use TypeScript:

- TypeScript can add a layer of complexity for engineers unfamiliar with it, which may increase onboarding overhead.
- TypeScript is typically compiled at build time, so run-time type errors (due to external data, user input, etc.) are not eliminated and should still be tested for.
- TypeScript requires specific changes and/or configuration to the build pipeline (such as compiling types used for local development), and the `tsconfig` file needs to be maintained. However, most widely used tools have clear docs or libraries that assist with this.
- The decision to convert existing code to TypeScript can be time consuming, and should be considered carefully. Often the decision to use TypeScript on a project is best made earlier rather than later.
- There may be a financial & time cost to training engineers to learn how to use TypeScript.

## Alternatives Considered

### Use framework-specific validation methods (e.g. React PropTypes)

**Pros:**

- `+` No need for developers to learn a new language
- `+` No need to add TypeScript dependency to build toolchain
- `+` Compile-time build failures can be frustrating

**Cons:**

- `-` Likely, less code editor/linting integration than TypeScript
- `-` Typing coverage limited to specific problem domains
- `-` Unlikely to cover interaction between problem domains
- `-` Each validation method has a different style/method of reporting errors, which all need to be accounted for separately
- `-` Custom linting and reporting may implement framework/tool-specific validation inconsistently and idiosyncratically

**Impact of this decision:**

### Use JavaScript with Flow for type-checking

- `+` Very similar to JavaScript with special sauce
- `-` Have had negative experience with unclear error messages and limited
  support
- `-` Reported issues of sluggish activity across IDE/editors hogging
  bandwidth on machine's (YMMV)
- `-` Requires a flow declaration (`// @flow`) at the top of every file

### Don’t use TypeScript and continue using JavaScript

**Pros:**

- `+` Less learning overhead
- `+` JS has heavier usage and community support compared to TypeScript

**Cons:**

- `-` No static type checking

**Impact of this decision:**

## Links
