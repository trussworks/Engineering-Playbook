# Recommended Feature and QA testing framework

Truss utilizes [Cypress IO](http://cypress.io) as our qa/feature testing framework of choice.

## Why we selected cypress

Cypress was chosen for many reasons. It is designed from the ground up to tie into browser automation apis to add more stability when interacting with the browser. It provides more tools for better isolation of tests, which will allow tests to skip portions that take a long time (i.e. logging in to every test). Other benefits are to developer workflow as Cypress provides a GUI you can install locally to watch tests run, have tests automatically be re-run when code is changed, as well as a easy way to see what the application looked like at each step of the process after the test is completed.

## Pros

### Test Stability

Cypress IO was designed to use the new automation api's provided by modern browsers. As such it has allowed them to create a more stable library than selenium based tests. This makes it more consistent and more reliable to find dom elements for testing.

### Videos of sessions auto created

Cypress based tests automatically create videos of test runs and stores in user defined location. This is also true of the docker containers provided by Cypress team which means that videos of tests run in a ci environment can be automatically exported and saved as part of a ci run.

### Runs in Docker, with provided cypress containers

Between having screenshots of errors, videos of test runs, and being able to step through a recent local test run and inspect each step; test developers have a large variety of tools for diagnosing andebugging tests. This is especially true of the GUI that allows you to step through each phase of the test after the fact as it is not availble with other frameworks at the time of this writing.

In addition to the above, the GUI for cypress watches for file changes, and any changes to the test files will trigger a rerun of the open test, greatly improving the workflow of the developer.

### Possible to avoid logging in via the ui for every test allowing for better test isolation and speen

Test isolation is a key recommendation from the cypress team. In the [best practices](https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State) documentation the cypress team notes that you do not have to rely on using the browser interactions to do tasks common to all tests such as logging in. Cypress provides tools for making api calls that can allow a test to aquire tokens, and other data, in a quick time allowing for tests to focus on the area that is needed.

## Cons

### Currently only supports chrome and headless browsers

IE is in the works as is Firefox and mobile safari but no estimated date of release. This can be a hold up depending on the nature of the project. If IE support is critical, there are a couple of different workarounds that Truss has implemented on various projects.

* Manually testing PRs against IE before merging
* Executing tests via SauceLabs or similar service

## Other options considered

The main other option for feature/qa tests are selenium based frameworks, which have their own issues. Primarily selenium tests seem to suffer from consistency issues, the same run of a test against a clean version of an application may or may not result in the same test output.

## Additional Resources

* [Why Cypress?](https://docs.cypress.io/guides/overview/why-cypress.html)
* [Key differences](https://docs.cypress.io/guides/overview/key-differences.html)
* [Best practices](https://docs.cypress.io/guides/references/best-practices.html)
