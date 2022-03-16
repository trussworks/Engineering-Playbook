# Number - Title

**Status:** In progress

**Date Accepted:**

**Reviewers:**

## Context

Front-end testing requires three systems working together: a testing framework that runs tests and reports results; querying conventions, for reading and interacting with the page, and an assertion library that provides methods to check that the page is in the expected state. This ADR is about the second of those: how to query the page, and we recommend using Testing Library.

## Decision Drivers

- As software engineers, we want to have confidence that our application is behaving in the way we expect, without errors or surprises.
- Software tests allow us to automate the checking of our code and application behavior, which speeds up development and reduces the bugs users encounter.
- We want our tests to work as similarly as possible to real users, so that we’re not checking implementation details, but the actual working of our application.
- Testing Library can help with accessibility as it works by using built-in selectors (this is similar to the above point, but I do think explicitly mentioning accessibility somehow might be good)
- Clarify that Testing Library is specifically used to query & interact with UI elements, and is agnostic to framework or test runner (ie, can be used for React components, Cypress tests, etc.)

## Decision

Use Testing Library for automated UI testing

### Use Testing Library

- `+` Good docs and a very large community of support <- check this
- `+` This library excels at directly testing functionality similar to how a user would experience an application through the use of user events.
- `+` Won highest satisfaction award in 2020 state of JS survey with 97% satisfaction (https://2020.stateofjs.com/en-US/awards/)
- `+` Available with integrations for multiple web frameworks (React, React Native, Angular, Vue, Svelte, etc) and integration for other testing tools (Cypress, Nightwatch, etc).
- `-` Another tool to learn\* `+`

### Impact

- Potential technical debt of having to convert existing tests to use testing-library
- Potential training debt of having to have people learn how to use Testing Library

## Why is this Applicable to the Practice as a Whole

What makes this decision generally applicable
to Truss projects?

## When to Not Implement This Decision

What are some use cases to not implement this
on a specific project?

## Alternatives Considered

- Use Enzyme
- Use built in tools in Jest (or other test runner) without adding an additional library
- Don’t test and/or manual testing

### Use Enzyme

- `-` Enzyme is maintained by one person, and is two major React versions behind. Effectively defunct.

### Use built in tools in Jest (or other test runner) without adding an additional library

- `+` Reduces the number of tools developers have to learn
- `-` Doesn’t adhere to the paradigm of testing in the way the application is actually used
- `-` The main tool for testing complex rendered code in Jest is a snapshot test, which adds a graphical artifact to the codebase, and immediately breaks and must be updated when the UI changes. This is good for checking for unexpected changes to DOM, but very brittle when adding new features as part of regular development.

### Don’t test and/or manual testing

- `+` Developers don’t have to write tests
- `+` Automated tests require a leap of faith, while manual testing feels more
- `+` Can test more edge cases and states with manual testing that may not have been found or written with automated testing
- `-` No faith in if the code works or not
- `-` Extra time is spent doing manual testing
- `-` Manual testing is slow and doesn’t scale
- `-` Less confidence that changes you made don’t break existing functionality (at least, it’s much harder for a single developer to realize that their changes introduced bugs if they need to wait for manual testing rather than run the test suite themselves)
