# 0006 - Use GraphQL for the API Transport Protocol

**Status:** Draft by: MacRae

**Reviewers:**

## Context

Most of our projects involve a web-app communicating with an API over HTTPS in some format or another. For most of my career, the default choice for what they send back and forth has been “REST”. For just as long, teams have had arguments about what exactly is the RESTful way to do things. GraphQL is a protocol that exposes your api as a graph of connected entities, allowing the client to fetch related entities in a single request. More importantly, it standardizes much of the things that robust REST implementations eventually implement on their own, leading to more robust generated code, and automatic clients being available in different languages.

Specifically, with respect to it being a graph, it is very common for mature REST implementations to add features for including related objects in a request for a single object. You might `GET /customers/3?include=[‘address’, ‘shipments.approver’]` for instance, to reduce the number of requests that a client needs to make to render a specific page. That kind of thing is something every team that implements a REST API ends up needing to specify and implement themselves. GraphQL took that, and made it a core part of the protocol. If you have a page that needs those related entities, you just specify that in your request, and the server will return all of them together.

There are many different trade offs involved in an API transport protocol. Message size is an easy one to measure, but others like flexibility, standardization, and prevalence are important as well. In considering choosing a default protocol for Truss, we want to pick something that sets up an application engineering team for success as much as possible.

## Decision

Truss projects should default to using GraphQL for communicating between the client and the server. The strict specification of the protocol allows for tools like [GraphQL Code Generator](https://www.graphql-code-generator.com) to generate very solid code, and saves teams time from having to figure out how to implement those kinds of features in REST from scratch. It eliminates the hassle of building custom endpoints to support specific front end requests except when there is a proven performance need, by default you just design your resources and their relationships. It simplifies client code by allowing most pages to get their data from a single request, reducing the number of error cases the UI needs to handle.

## Why is this Applicable to the Practice as a Whole

Standardizing on an API transport layer opens the door to increasingly sharing tools and patterns across different teams. Since, as a contracting org, we regularly start new projects, having a library of tools and patterns and experience we can rely on makes it easier for teams to get going at the start of a project.

For the API transport layer in particular, this is a decision where there are many different ways to accomplish the same goal, which is essentially to provide a medium for the app to make requests of the API. GraphQL is good enough and the benefits of standardizing outweigh any of the benefits of alternatives.

## When to Not Implement This Decision

- If you need to work with multi-part uploads you will probably need to do that outside of graphQL at the very least.
- If your project requires very high network performance (or very low network traffic) other tools will give you more control over message size
- If you need to build an API for external consumption, GraphQL might be too big of an ask for other teams to figure out

## Alternatives Considered

### Do Nothing

Keep this off the list of truss recommendations, allow teams to continue to choose what transport protocol to use from scratch every time

- `+` So easy
- `+` There are lots of considerations that go into picking a transport protocol, not having a rec would force teams to consider the decision carefully every time
- `-` With different teams doing their own thing, it becomes much harder for us to share tooling and experience when starting a new project. If we pick a default, it opens the door to better collaboration as a contracting firm

### [GraphQL](https://graphql.org)

GraphQL is a strictly specified protocol built on top of HTTP that exposes your API as a graph of related entities, providing mechanisms for retrieving related entities along with any request.

- `+` Strictly specifies the types of everything that can be sent over the wire. It specifies how arguments are passed and parsed and specifies how to model relationships between entities. This saves everyone time, those questions are already answered.
- `+` Has a “modern” type system with union types and optionals
- `+` Has a sophisticated system for requesting related entities from any request. This allows the client to fetch what it needs without having to make N+1 HTTP requests, or forcing the server to build a custom endpoint
- `+` [Apollo Client](https://www.apollographql.com/docs/react/) is an excellent React library for doing GraphQL, it makes it easy for different components to trigger the requests they need and handles caching
- `+` Uses a schema to define the whole API, this can be used as the basis for generating web-app and server code. Having a schema makes it clear where the single source of truth for the API is, and is useful as part of a process for making changes.
- `+` Custom types allow you to parse types into custom types on the server, offloading validating that the request matches the spec to the framework.
- `+` Docs are good
- `-` GraphQL is not on rails, setting up graphql across your stack for the first time requires some plumbing work
- `-` The server side resolver model that allows for requests to request arbitrary related types is complex enough to take some getting used to
- `-` If an API were to be made for public consumption, it might be too much to ask of other potential integrators to understand GraphQL
- `-` Allowing the client to specify what relationships to request allows the client to ask the server to do more work on a given request than may be expected. If that becomes a problem you have to implement some kind of query throttling

### JSON over REST

REST is a standard as old as HTTP itself, built on CRUD operations for individual entities using HTTP verbs like GET, POST, PUT, and DELETE

- `+` Literally built into HTTP from the beginning, it was the model that inspired GET/POST/PUT/DELETE etc.
- `+` JSON is very straightforward, it's easy to parse in any language
- `+` Tools like [OpenAPI](https://www.openapis.org) exist for specifying restful APIs explicitly, and generating code based on a schema
- `+` Very industry standard, it would be reasonable to expect others to be able to figure out how to interop with us
- `+` [React Query](https://react-query.tanstack.com) sets up nice hooks for making API calls in React and doing caching
- `+` Lots of monitoring/caching/design patterns exist already to handle RESTful protocols
- `-` There are a lot of decisions you still have to make as a REST implementer that are not part of the spec. Those decisions have to mesh well with whatever tooling you end up using for client and server
- `-` You will likely need to invent your own standard for including related objects in your API, or use something like [JSON:API](https://jsonapi.org)
- `-` the more requests the client needs to make to render a page increases load times and also increases the complexity of the required UI error handling
- `-` No inherent way to specify types, all requests need to be evaluated as arbitrary json structs by default
- `-` Trying to map everything in your app as a CRUDdy resource can lead to some very awkward endpoints

### [gRPC](https://grpc.io)

gRPC: gRPC is an RPC protocol that defines the communication layer itself (it doesn't quite use HTTP) and is used for sending protobuf messages back and forth between client and server

- `+` Very small on the wire
- `+` strict specification with a schema describing your endpoints
- `+` robust tooling support for many languages
- `+` Designed with api schema evolution in mind, everything is optional
- `-` No way of fetching related entities automatically
- `-` Doesn't work natively in the browser (truly shocking coming from Google)
- `-` Harder to debug since you can't see what's going on easily in the inspect tab
