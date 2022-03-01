# GraphQL API

This guide was heavily influenced by [https://graphql.org/learn/best-practices/](https://graphql.org/learn/best-practices/)

## Overview

- Who is the audience for this guide
- Who is the audience for the API

## Principles

One of the most important things to keep in mind when building a
GraphQL API is that GraphQL is not REST. In particular, GraphQL is
most powerful when used as a way to model your problem domain. This is
probably not an exact 1:1 mapping with your database models.

GraphQL is ... a graph. Graphs offer a [different way of
thinking](https://graphql.org/learn/thinking-in-graphs/) or modeling
your data than you may be used to.

See also [GraphQL Rules](https://graphql-rules.com) for additional recommendations and best practices

### Building GraphQL APIs

#### Schema First

Prefer schema first tooling that allows producers and consumers agree
upon a data shape prior to implementation.  This allows a discussion
about the problem domain that is independent of the technology being
used on either side of the API.

By designing your GraphQL schema to fit the way you want to think
about the data instead of your implementation, you can evolve your
implementation without changing clients.

#### Versioning and Backwards Compatibility

The [Versioning](https://graphql.org/learn/best-practices/#versioning)
section of GraphQL Best Practices describes why GraphQL APIs should be
backwards compatible and not versioned. [Building Evolvable
Schemas](https://www.apollographql.com/blog/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5/)
has some concrete advice on how to structure your schema.

[Nullability also influences schema
evolution](https://medium.com/@calebmer/when-to-use-graphql-non-null-fields-4059337f6fc8),
so think carefully about which fields to require.

#### Mutations Communicate Intent

GraphQL mutations should be specific enough to communicate the intent
of the change.  Avoid [anemic
mutations](https://medium.com/@__xuorig__/graphql-mutation-design-anemic-mutations-dd107ba70496)

#### Errors and Nullability

GraphQL is designed for returning as much data as possible, even if an
error occurs.  That can be [surprising](https://medium.com/@calebmer/when-to-use-graphql-non-null-fields-4059337f6fc8), and surprisingly powerful.

That means both data and errors can be returned.

#### Pagination

[Pagination](https://graphql.org/learn/pagination/) can heavily
influence schema design. The concept of [GraphQL
Connections](https://relay.dev/graphql/connections.htm) is yet another
new and powerful concept to grasp when designing a schema.  By
thinking about this early, you can avoid having to make breaking
changes to your schema.

Simplicity is nice when first starting out and prototyping, but
it is *strongly* recommended to use the connection concept when using
the schema in production.

#### Caching

GraphQL prefers to use GUID for objects to facilitate
[Caching](https://graphql.org/learn/caching/).

#### Errors

Error handling in GraphQL is [not fully
standardized](https://blog.atomist.com/error-handling-in-graphql/).

Some folks are using [unions and interfaces to handle
errors](https://blog.logrocket.com/handling-graphql-errors-like-a-champ-with-unions-and-interfaces/)
to encode errors in the response data instead of in the basically
untyped `errors` field. This makes the most sense for errors that are
specific to the operation being made that you want the client to
handle gracefully. It also encourages you to include errors as part of
your domain modeling, which is a good thing.

### Tooling

Using a schema linter (such as [graphql-schema-linter](https://github.com/cjoudrey/graphql-schema-linter)) and running it as part of your pre-commit checks is recommended. Some of the defaults of such linters may be optimized for large public APIs and should be adjusted to best suit your project.
