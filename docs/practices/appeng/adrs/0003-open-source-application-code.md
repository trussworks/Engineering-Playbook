# 0003 Open Source Application Code

**Status:** Accepted

**Date Superseded:** n/a

**Date Accepted:** 12/6/2021

**Reviewers:** @sarboc, @jim, @pkarman

## Context

As Truss starts new projects, teams set up source code repositories.
Part of this process involves answering where the code should live
and who should have access to it.

Note that for the purpose of this ADR,
we're referring to *just* the application code.
This does not refer to the infrastructure code
that is used to manage production environments
and cloud services.

[More information on our Open Source Statement of Intent](../../../developing/open-source/intent.md)
and
[This TDR](https://docs.google.com/document/d/12UYIN3XfRPdKQV87_0ILa9-z6eWRBcLqtwP9fCyR6Tg/edit)
outlines or preferred licenses.

## Decision

[Open Sourcing](https://opensource.org/osd)
allows for the free sharing and modification of code
and provides a number of benefits to software teams
and the outside community.

Open Sourcing application code
provides wins on many surfaces.
On an organizational level,
it increases technology transparency
which fosters public trust.
Especially for government projects, other agencies
will be able to benefit from the project's success
within both their development and user communities.
While the Truss development team would remain maintainers
and deciders of code contributions,
open source code allows us
to accept community input and contributions.
Sharing code among our internal Truss Engineering practice
is also how we better our engineering discipline,
and ultimately better serve our clients.

While sensitive data could potentially be shared through public repositories,
modern security practices,
such as secret storage separate of code,
can mitigate this risk.

Truss has had great success with this in the past,
including the
[MilMove Application Code](https://github.com/transcom/mymove),
and the
[EASi Application Code](https://github.com/CMSgov/easi-app).

## Why is this Applicable to the Practice as a Whole

We work on a number of government projects that
all benefit from having open source application code.
The more projects we convince to work open source,
the easier it gets to convince subsequent projects
to work open source.

## When to Not Implement This Decision

When working for private corporations that want
to keep their code proprietary.

## Alternatives Considered

- Open source application code
  - `+` Can easily share code
    with anyone,
    including CMS employees,
    Truss employees,
    or general software community.
  - `+` Community contribute code.
  - `+` Other agencies can copy, modify, and deploy their own EASi.
  - `+` Community can audit security practices and report bugs.
  - `+` Provides public transparency.
  - `-` Possible sensitive data public commits.
- Keep application code close sourced to the agency who owns the project
  - `+` Less concern for what,
    possibly private,
    information resides in repository.
  - `-` Hard to share code.
  - `-` Hard to share documentation.
  - `-` Code cannot be easily reused by outside community.

## Links

- [Federal Source Code Policy](https://sourcecode.cio.gov/OSS/)
- [MilMove Open Source Repository](https://github.com/transcom/mymove)
- [EASi Open Source Repository](https://github.com/CMSgov/easi-app)
