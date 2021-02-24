# [Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Developer Experience

## Debugging Tools

The following browser extensions can be installed to assist with debugging React and Redux applications:

- [React Developer Tools](https://github.com/facebook/react-devtools#installation)
- [Redux DevTools Extension](http://extension.remotedev.io/#redux-devtools-extension)

## Style and Formatting

We generally adhere to the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), unless they conflict with project specific Prettier or lint rules.

## Auto-formatting

- [Prettier](https://prettier.io) is recommended.
  - [Prettier editor integration](https://prettier.io/docs/en/editors.html) to make it easy to format and autosave.
  - Prefer single quotes for non-JSX code (CLI: `--single-quote` API: `singleQuote: true`)
  - Prefer trailing commas for cleaner PRs and error reduction (CLI: `--trailing-comma true` API: `trailingComma: true`)
  - A `.prettierrc` will be in the project for custom settings.

## Linting

- [ESLint](https://eslint.org).
