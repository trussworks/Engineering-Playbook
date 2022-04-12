---
title: Template topic
---

# Topic

*Topic* is _add a brief description of what the topic means in the context of this subject area_. E.g. Authentication is the process of establishing whether or not we can trust that the person or entity interacting with an application is who they claim to be. Login is an example of a user giving a password as credentials to authenticate that they are the rightful owner of the username they claim. *Authentication* should be distinguished from [Authorization](#) which is the process of determining whether or not a person/entity is entitled to perform a particular action.

## Context

Provide a Paragraph here which gives some context for why Trussels should care about the topic, how it occurs in client engagements and any relevant background

## Approaches

Give examples of approaches to the problem that may be relevant. These might be broken down by language/framework if there are different dominant tools per framework. These might also be broken down by framework independent tools, e.g.

### Ruby on Rails

In the RoR world [Devise](https://github.com/plataformatec/devise) is a standard, if slightly heavyweight, solution. Use it unless you have a good reason not to.

### OAuth

[OAuth](#) is a standard pattern for delegating authorization across systems. It is well supported in most frameworks and ...

## Pitfalls

This is the place to point out any common gotchas, e.g. confusing authentication and authorization, or confusing the authentication entities (oAuth token etc) with the Users they apply to.

## The Trussel Way

Often we have to work within the constraints of the Client's existing frameworks and choices. In those cases the [Approaches](#approaches) and [Pitfalls](#pitfalls) sections should hopefully contain the information a Trussel needs to think critically about the choices and alternatives. On those occasions where we have a blank slate or are being asked for recommendations, this section should give a sound default choice to pick an answer and move forward.
