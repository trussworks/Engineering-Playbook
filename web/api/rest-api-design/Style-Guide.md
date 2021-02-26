# Style Guide

In addition to consistent design of the API, a consistent style is also important.

The details of a style guide are often a matter of personal opinion, but the most important aspect is simply consistency.

Here's one example for the Milmove Prime API.

- All URLs must be in `kebab-case`, however any params listed in the URL documentation must be in `camelCase`.
- All resources must be plural.
- All JSON response payloads must use `camelCase` for all keys.
- All simple resource identifier keys, with no prefix, should be lowercase `id`.
- All keys postfixed with ID in response payloads should be capitalize ID, so `shipmentID` is correct - not `shipmentId` or `shipmentid`.
- All timestamps are post-fixed with `At`, such as `updatedAt`, `createdAt`.

It does not matter if you choose a different style than what is described here, just that you define it and stick with it.

## Linters

A good way to ensure compliance is to use a linter. If you are using a `yaml` format such as OpenAPI to define the REST API, you can use [Spectral](https://stoplight.io/open-source/spectral) as a linter.

In this [sample ruleset we use on Milmove](https://github.com/transcom/mymove/blob/master/swagger/.spectral.yml), you can see examples that enforce some rules of the above style guide.
