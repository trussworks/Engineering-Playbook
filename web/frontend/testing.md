# [Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Testing

## Unit & partial frontend integration testing

- [Jest](https://jestjs.io/)
  - The go-to framework for testing React components, but can also be used to test regular JS.
  - If you use create-react-app, this is included.
  - Provides snapshot and DOM testing.
- [testing-library](https://testing-library.com/docs/react-testing-library/intro/)
  - The current recommendation for F/E unit testing, testing-library always renders components in full and makes assertions against the resulting DOM in order to most accurately capture an actual user experience
- [Enzyme](https://enzymejs.github.io/enzyme/)
  - Allows you to assert and manipulate rendered components with jQuery-like selectors.
  - More useful for testing implementations of React class components, Enzyme can make assertions against React props and state, and instances of class components

### Writing Tests

- Each React component should have a test.
  - At minimum, does the component render?
  - Container components have logic in them, and that logic should be tested.

## E2E & Browser Testing

- We use [Cypress](https://www.cypress.io) for most browser testing with both Chrome and headless Chrome.

## Visual Regression Testing

- We use [Happo](https://happo.io/) for cloud-based visual regression testing
