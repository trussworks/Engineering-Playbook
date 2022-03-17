# Use Testing Library for front-end tests

* Status: In progress
* Deciders: [Names of deciders]
* Date: Mar 16, 2022

Front-end testing requires three systems working together: a testing framework that runs tests and reports results; querying conventions, for reading and interacting with the page, and an assertion library that provides methods to check that the page is in the expected state.  This ADR is about the second of those: how to query the page, and we recommend using [Testing Library](https://testing-library.com/)  

## Decision Drivers / Engineering Values?
* As software engineers, we want to have confidence that our application is behaving in the way we expect, without errors or surprises.
* Software tests allow us to automate the checking of our code and application behavior, which speeds up development and reduces the bugs users encounter.
* We want our tests to work as similarly as possible to real users, so that we’re not checking implementation details, but the actual working of our application.
* We want our tests to encourage the use of good accessibility practices.
* When possible, we prefer to use tools that are widely adopted, actively maintained, and have robust support communities.

## Chosen option: Use Testing Library for automated UI testing

## Considered Alternatives

* Use Testing Library
* Use Enzyme
* Use built in tools in Jest (or other test runner) without adding an additional library 
* Don’t test and/or manual testing

## Pros and Cons of the Alternatives

### Use Testing Library

* `+` Good docs and a very large community of support (like all Kent Dodds projects, Testing Library has a very active Discord community, as well as lots of traffic on Stack Overflow). 
* `+` The querying conventions emphasize reading the DOM as a user would, using text and element roles.  This is both user-like, and encourages good accessibility practices, because Testing Library looks for the same things that accessibility guidelines look for.
* `+` This library excels at directly testing functionality similar to how a user would experience an application through  the use of [user events](https://testing-library.com/docs/ecosystem-user-event).
* `+` Won highest satisfaction award in 2020 state of JS survey with 97% satisfaction (https://2020.stateofjs.com/en-US/awards/)
* `+` Available with integrations for multiple web frameworks  (React, React Native, Angular, Vue, Svelte, etc) and integration for other testing tools (Cypress, Nightwatch, etc).
* `-` Another tool to learn

## Impact of a decision (financial, training, transitioning…)

* Potential technical debt of having to convert existing tests to use Testing Library  
    * This conversion time is an issue, but at root an issue of the technical debt of other libraries, like Enzyme, that aren’t compatible with more recent versions of React, and need to be replaced.  
* Potential training debt of having to have people learn how to use Testing Library
   * Also a real issue, but often learning how best to use Testing Library builds transferable knowledge about good markup and the DOM


### Use Enzyme

* `-` Enzyme is maintained by one person, and is two major React versions behind.  Effectively defunct.
* `-` Uses jquery-style queries, which don’t have the benefits of Testing Library’s text- and role-based queries, mentioned above.


### Use built in tools in Jest (or other test runner) without adding an additional library 

* `+` Reduces the number of tools developers have to learn
* `-` Doesn’t adhere to the paradigm of testing in the way the application is actually used
* `-` The main tool for testing complex rendered code in Jest is a snapshot test, which adds a graphical artifact to the codebase, and immediately breaks and must be updated when the UI changes. This is good for checking for unexpected changes to DOM, but very brittle when adding new features as part of regular development
* `-`  We don’t lose any Jest functionality by using Testing Library, because Jest is still our test runner.  Mocks, spies, and timers are all still available.

### Don’t test and/or manual testing

(This is not the “test your code” ADR, but for the sake of completeness, here are a few points to keep in mind.  Truss is 100% committed to automated testing.)

* `+` Developers don’t have to write tests.
* `+` Automated tests require a leap of faith, while manual testing feels more tangible.
* `+` Can test more edge cases and states with manual testing that may not have been found or written with automated testing
* `-` Extra time is spent doing manual testing
* `-` Manual testing is slow and doesn’t scale
* `-` Much tighter feedback loops with automated testing, which can test a wide range of regressions much more quickly than manual testing.
* `-` Between Jest and Cypress, which Testing Library works with, it’s very difficult to think of a test scenario that can be manually, but not programmatically, tested.  If it’s important enough to test, very likely it can be automated.

## Circumstances to not use this ADR / Exceptions

There will be projects where existing code has tests already written in other styles, not using Testing Library.  In those cases, the team will have to decide whether the effort to convert is worthwhile.  If something like Enzyme is blocking upgrading other libraries, it may be worthwhile, but in some cases the team might decide that the conversion time is better spent elsewhere.

## Decision Outcome

Wherever possible, we want to use Testing Library to write our front-end tests.  The library makes it possible to interact with the DOM in the way a user would, which makes our tests more robust against code/implementation changes, and encourages good accessibility practices.  The documentation is good and the community of support is very active. There is a learning curve with Testing Library, but it’s not very steep, and the conventions the developer needs to learn often lead to greater knowledge of good web design.


