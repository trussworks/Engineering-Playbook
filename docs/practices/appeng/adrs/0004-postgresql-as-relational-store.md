# 0004 - Use PostgreSQL as a relational store

**Status:** Accepted

**Date Accepted:** 5/5/2022

**Reviewers:** @felipe-lee @ferlatte @JasonLin0991 @macrael @mikena-truss @reggieriser @sandy-wright @suzubara

## Context

It is typical for our projects to require the persistent storage of data. A relational database is
often a good choice for this as it allows us to predefine a schema for and relationships
between data. A database management system (DBMS) can interpret and enforce these rules
while providing a means to efficiently and safely interact with the data. This ADR documents the
reasoning behind our recommendation of a preferred DBMS.

## Decision

Use [PostgreSQL](https://www.postgresql.org) when you need a relational store.

## Why is this Applicable to the Practice as a Whole

Since the requirement for a relational data store is common, there are advantages of us standardizing
on one DBMS across the practice. Benefits include:

- ability to transfer knowledge across projects
- reduced ramp-up time when switching projects
- support by cloud providers, allowing reuse of infrasec practices
- norming on a common SQL/DDL dialect

Historically, most Truss projects deploy a database on AWS. Note that AWS provides two PostgreSQL options:
RDS PostgreSQL and Aurora PostgreSQL. The typical Truss project will likely use RDS PostgreSQL since Aurora targets
very large or high-availability sites. That said, evaluate the features and pricing for each against your project's
needs.

## When to Not Implement This Decision

- If the project's client/sponsor has an established and/or inflexible existing DBMS requirement
- If the nature of the data lends itself to a different type of data store (NoSQL database, graph database, etc.)
- The project is so small, self-contained, or temporary that a lightweight solution like SQLite is more appropriate

## Alternatives Considered

### PostgreSQL

#### Pros

- `+` Mature and full-featured DBMS with a 25-year history
- `+` Free and open-source
- `+` Good documentation and user community
- `+` Advanced JSON support, so flexible enough for some unstructured data
- `+` Supported by most database tools and ORMs
- `+` Most Truss projects have used PostgreSQL for a relational store, so we already have experience we can build upon

#### Cons

- `-` No guaranteed support (unless you pay for third-party support)
- `-` Some clients may not be comfortable with an open-source DBMS

### MySQL

#### Pros

- `+` Mature DBMS with a 25-year history
- `+` Community edition is free and open-source
- `+` Good documentation and user community
- `+` Supported by most database tools and ORMs

#### Cons

- `-` No guaranteed support (unless you pay for third-party support)
- `-` Some clients may not be comfortable with an open-source DBMS
- `-` Given that MySQL is owned by Oracle, some worry that it may be harder to contribute to or not always be free
- `-` More advanced features are found in the paid Enterprise Edition
- `-` ACID support is not as mature

### Commercial Databases (Oracle, SQL Server, DB2, etc.)

#### Pros

- `+` Mature DBMS with long history
- `+` Traditional paid software backed by a company and a support team
- `+` Supported by most database tools and ORMs

#### Cons

- `-` Licensing fees and support can be very expensive
- `-` Not open source so you are reliant on company for fixes
- `-` Support by ORMs can be spotty
- `-` Differences in SQL syntax and error codes can make it difficult to get help compared to more popular
  open-source options
