# [Engineering Playbook](../../../README.md) / [Web Development](../../README.md) / [API Guide](../README.md) / REST API Design

Most of this structure was pulled from [https://apiguide.readthedocs.io/en/latest/index.html](https://apiguide.readthedocs.io/en/latest/index.html) which is an API guide written by the AusDTO which appears to be the Aussie version of the U.S. Digital Services.

I pulled in all the questions that were solicited from our meetings within the team into the different headings, to help illuminate what goes in the section but also to ensure our guide answers our own questions.

## Overview

* Who is the audience for this guide
* Who is the audience for the API

## Principles

I like the concept of shared principles, so I'm including this section here. But ideally we share principles between the GraphQL and REST API guides, and this moves up a level.

These principles were copied from [https://apiguide.readthedocs.io/en/latest/principles/index.html](https://apiguide.readthedocs.io/en/latest/principles/index.html) and don't need to be our principles, but they are listed here to prompt thought and discussion.

We will first be focusing on the **Building REST APIs** section. And will decide our principles in collaboration with the GraphQL documentation team.

* Developer empathy
* Granularity
  * What is the philosophy behind the design and breakdown of the endpoints?
* Functionality
* Ubiquitous standards
  * Don't rewrite/reinvent standards that already exist
* Special technologies
  *
* Endpoint stability
* Security
* Documentation
* Dogfooding (need better terminology)

## Building REST APIs

* Use RESTful design practices (Shimona 20210114)
  * [URL Design] **COMPLETED**
    * How to pick a good url for the endpoint
    * ids in path, url depth
    * plurals for the objects
    * noun updates vs verb actions
    * good and bad restful url examples
  * What about other data, such as query, body, header?
    * should be careful about putting any secure data in query
    * headers tend to be consistent across the api (we use content-type and if-match)
    * everything else we put in the body, and we use json
  * Versioning,

  * [Style Guide] **COMPLETED**
    * What are the basic style components of paths/queries/headers/params
    * kebab-case for url, plurals, nouns
    * use the case that natural for the type of response so for json it should javascript styled variables
    * yaml
      * Alphabetize the definitions
    * Suggest linter usage - link?

* Use HTTP methods and status codes

  * [HTTP Methods](HTTP-Methods.md) - **COMPLETED**
    * What requirements are there of put/post/patch vs get endpoints
  * How are requests for multiple nested objects handled? - **Sandy/Shimona to deliver 20201209**
    * Which IDs for which objects are required? It’s possible that in a nested set-up that some IDs for children could be found by the system without user input
    * Which IDs should be in the path?
      * May be able to reference this MilMove ADR: [0045-nesting-swagger-paths.md](https://github.com/transcom/mymove/blob/master/docs/adr/0045-nesting-swagger-paths.md)
    * Which object is considered the parent? Which object is most important from a data integrity perspective?
      * May be able to reference this MilMove ADR: [0049-etag-for-child-updates.md](https://github.com/transcom/mymove/blob/master/docs/adr/0049-etag-for-child-updates.md)
    * If an update fails for one of the nested objects, how will that affect the entire transaction? Should the entire update fail in that case?

* [Error Response Strategy](Error-Response-Strategy.md) - **COMPLETED**

* Use versions
  * How are we versioning the api and how does that effect work on any one endpoint?
  * When is it ok to make a breaking API change?  How is that communicated?

* Batching, filtering and paginating results
  * How is filtering handled? And sorting!

* Security
  * What security considerations should I be aware of
  * What is/are valid authentication strategies for contacting the API?
  * Is CORS applicable? What client(s) can access it?
  * Is MTLS supported or required, how is authorization and revocation handled
  * How are permissions handled? What if there are different levels of permissions?

* Data coherence strategies
  * [Concurrency Control](Concurrency-Control.md) - **COMPLETED**
    * Optimistic Locking
  * Is the API data cached? Should the client cache it? When should it be refreshed?

* Document your API
  * How are we documenting the api and what level of documentation is expected?
  * How should I indicate how an endpoint is supposed to be used? Is there a description template?

> Heavily borrowed from [https://apiguide.readthedocs.io/en/latest/preface.html](https://apiguide.readthedocs.io/en/latest/preface.html)
