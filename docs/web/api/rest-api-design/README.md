# REST API Design

Most of this structure was pulled from [https://apiguide.readthedocs.io/en/latest/index.html](https://apiguide.readthedocs.io/en/latest/index.html) which is an API guide written by the AusDTO which appears to be the Aussie version of the U.S. Digital Services.

## Overview

### Audience

This guide is for developers of an API, including:

- Engineers starting on a project looking to develop a REST API
- Feature leads for API development
- Individual developer implementing / extending / testing an API

## Principles

I like the concept of shared principles, so I'm including this section here. But ideally we share principles between the GraphQL and REST API guides, and this moves up a level.

These principles were copied from [https://apiguide.readthedocs.io/en/latest/principles/index.html](https://apiguide.readthedocs.io/en/latest/principles/index.html) and don't need to be our principles, but they are listed here to prompt thought and discussion.

We will first be focusing on the **Building REST APIs** section. And will decide our principles in collaboration with the GraphQL documentation team.

- Developer empathy
- Functionality
- Ubiquitous standards
- Special technologies
- Endpoint stability
- Security
- Documentation
- Dogfooding
  - Dogfooding is the term applied to using your own public apis as much as possible when implementing internal features.

## Building REST APIs

This guide is **not meant to be comprehensive**. Rather it outlines what we have already learned in projects here at Truss. Please do contribute more sections if you have tackled some of these and have more or different insight to offer.

- [HTTP Methods](HTTP-Methods.md) - Use HTTP methods and status codes correctly

- [URL Design](URL-Design.md) - How to pick the right URL for your endpoint.

  - URL Depth
  - Using plurals for the objects
  - Noun vs. verb endpoints
  - Good and bad RESTful url examples

- [Style Guide](Style-Guide.md) - Simple style guide for a REST API

  - Cases for url and body
  - Linter to enforce rules

- [Data Design](Data-Design.md)

  - Path, Query, Body and Header Parameters
  - Security considerations related to parameter location
  - Batching, filtering and pagination \[content needed\]

- [Error Response Strategy](Error-Response-Strategy.md)

- Versioning \[Open Questions\]

  - How are we versioning the api and how does that effect work on any one endpoint?
  - When is it ok to make a breaking API change?  How is that communicated?

- Security \[Open Questions\]

  - What security considerations should I be aware of
  - What is/are valid authentication strategies for contacting the API?
  - Is CORS applicable? What client(s) can access it?
  - Is MTLS supported or required, how is authorization and revocation handled
  - How are permissions handled? What if there are different levels of permissions?

- Data coherence strategies \[Open Questions\]

  - [Concurrency Control](Concurrency-Control.md)
    - Optimistic Locking
  - Is the API data cached? Should the client cache it? When should it be refreshed?

- Documentation \[Open Questions\]

  - How are we documenting the API for the end-user?
  - What level of documentation is expected?
  - How should I indicate how an endpoint is supposed to be used? Is there a description template?

> Heavily borrowed from [https://apiguide.readthedocs.io/en/latest/preface.html](https://apiguide.readthedocs.io/en/latest/preface.html)
