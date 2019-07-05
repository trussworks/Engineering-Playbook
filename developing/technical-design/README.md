# [Tools and Practice](../README.md) / Technical Design

## Overview

This section provides some guidance
for designing new features or architectural changes.
While process may change based on project needs
(such as existing client process or team size),
these resources can provide a foundation when necessary.

Some purposes of providing a process for technical design are to:

* clarify problem statements and client value.
* guide Engineers through breaking down complex problems.
* facilitate collaboration amongst Engineers.
* share information across teams.
* empower Engineers of all levels to make and contribute to architectural decisions.

## Design Documents

Design documents help share and collaborate on technical decisions.
They become necessary when a feature or architectural change
is unclear based on individual pieces or work,
has significant unknowns,
or has long term and widespread impact.
Some examples where they are appropriate include:

* building the foundation for a new application.
* designing a set of APIs with no existing pattern.
* implementating a new authorization pattern throughout a codebase.

Designs may vary significantly based on the problem domain,
but the [provided template](./design-document-template.md)
will address many commonalities.
Using a consistent template also helps to establish a common language among the team and company.

Try to keep these broad guidelines in mind while you work:

* Always define and readdress stakeholder value.
* Discover your audience and keep them in mind while writing.
  The document may be read by:
  * Engineers directly responsible for implementation.
  * Engineers on other teams who need to be aware of decisions and changes in the codebase.
  * Clients, Product Managers, and/or Team Leads looking for a solution overview and resource considerations.
  * Security experts assessing risk.
* Foster inclusive collaboration.
  * Emphasize main points,
  but provide resources for less experienced team members
  or people removed from the subject area.
  * Consider enabling less experienced Engineers to lead design with guidance.
  Learning technical design can be a great avenue for career growth,
  and ultimately levels up people and teams.
  * Find common language.
  Domain specific language may be necessary,
  but when possibile provide clarification
  or use common terms.

Note that design documents are not a substitute for early design discussions.
Ideas should be discussed before a more extensive design is applied.
Find subject experts and stakeholders early to vet proposals.

## Workflow Incorporation

Once a design document is accepted,
it becomes a resource for the Development Cycle.
The [Development Cycle Guide](../../cycle/README.md)
provides a more in depth view of how Truss iterates on work
and should be consulted for implementation.
However, a design doc can be helpful with starting that process.
It can help to:

* identify epics among the [proposed solution](./template.md#proposed-solution).
* break out small pieces of work from the [implementation section](./template.md#implementation).
* prioritize identified unknowns early on, clarifying long term work.

Note that design documents are not a go-ahead for implementation,
nor are they a substitute for agile workflow.
Priorities may change based on resources, roadmaps, or unknown constraints.
The initial design may be used as a measure for completion,
but maintain an agile approach,
readress tradeoffs,
and be adaptable to changes during the implementation phase.

## Resources

* [6 Lessons I learned while implementing technical RFCs as a management tool](https://buriti.ca/6-lessons-i-learned-while-implementing-technical-rfcs-as-a-management-tool-34687dbf46cb)
* [Rust RFC Template](https://github.com/rust-lang/rfcs/blob/master/0000-template.md)
