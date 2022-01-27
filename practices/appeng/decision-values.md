# AppEng Decision Making Primer and Values

This guide is intended to help
engineers navigate making an AppEng decision.
It is focused on the "why" of decisions
and meant to help align them
with the core values of the AppEng practice
and Truss organization

## Intended Audience

While we're here to focus on the "why",
taking a step back and focusing on the "who"
is a prequisite to making decision.
Within the context of an ADR,
it's important to enumerate who a decision benefits
and draw back to that group within decision factors.
Be curious about what that group's needs are
and how the values in this guide intertwine with them.

Commonly,
decisions will affect the following groups:

1. The users of a service.
   Depending on the makeup of a project team,
   this will include other client stakeholders.
1. The team building a service.
   If the team building the service includes client stakeholders
   (ex. a product owner involved in development),
   this group may encompass them.
1. When creating practice level ADRs,
   we're adding in one more group to focus on:
   the AppEng practice.
   This is mentioned in the
   "What makes this decision generally applicable" section
   of the [template](./adrs/template.md).

Here is an example drawing back to those groups
in an ADR focused on picking a new database:

> Currently, the org's database isn't easily learnable,
> causing difficult onboarding for developers
> and slow releases for database related features
> and bugfixes
> to users.

And for the practice:

> Most (if not all) of our projects use a database,
> and commonly they are relational.
> To make onboarding between projects easier
> and to generate better shared learning resources,
> deciding on a common relational database for the practice
> will increase effeciency delivering on all projects.

## Engineering Values and Decision Factors

Now that we've established a clear context and user group,
we can apply a set of common values
to aid in making a decision.

Note that these values won't always apply.
They're outlined as a guide for our work,
not an exhaustive list.
A single decision likely won't tick all these boxes.
In addition,
client or individual use case may have different needs.
Rely on these as a default
and be sure to review the context for your decision
for making exceptions.

Keeping with the above example
(choosing a relational store),
we'll follow an example for each value,
prefacing with this statement:

> We chose to standardize on PostgreSQL
> as a default relational database for the practice.
> ...

### Learnable

Due to the nature of contracting,
our teams are often shifting
and working on different services
and projects.
In order to facilitate these changes smoothly
we must build software that is easily understood
and modified.
In addition,
to be a successful organization in the long term,
and to support our craft,
we must teach and grow engineers
throughout their careers.

This means using tools that
can have easily accessible knowledge bases
and can be supported throughout the org.

> ... Postgres has one of the largest documentation sources
> and accessible community driven learning resources.
> In addition,
> it's widely used and supported,
> meaning supporting software (such as ORMs)
> are often beginner friendly.

### Maintainable

While software can be short lived,
we're most often focused on delivering long term value
to our clients and users.
In order to do so,
we must build maintainable software,
which remains modern from a user perspective
and malleable by an engineer.

This means seeking tools with active long support,
choosing design patterns that allow for change,
and avoiding locking into experimental/cutting edge libraries
that may become obsolete.

> ... Postgres has long standing support
> and regular receives bugfixes,
> language integration support,
> and feature updates.
> This makes it easier for us
> to keep our code up to date
> and adapt with more modern features
> without using a new database in the future.

### Shareable

[Open source](../../developing/open-source)
strengthens the collective quality of our software.
We seek to use and contribute to the open source community.

Like with this ADRs,
we also seek to share among the members of the practice
and beyond.
This means, reusing past code,
teaching best practices,
and sharing our experiments with each other.

> ... Postgres is widely used
> and open source,
> making it easier to write third party extensions
> when our work is applicable to the community at large.
> It also means third parties will more easily understand
> our open source code
> allowing for better collaboration.

### Automatable

From the team charter:
"People should not have to spend time and energy
on things computers can do better."
In order to better serve our users,
we seek to automate ourselves out of tasks
that can consume time
and not deliver value.
Consistently used tools and tasks
should be easy to deploy and operate,
and require little user interaction
(past customization and improvement)
to manage.

> ... Postgres is well supported by many popular ORMs
> allowing us to reduce repetitive work of
> writing manual SQL statements.
> There are also many SAS tools (like RDS)
> and Terraform libraries
> to reduce manual orchestration of the DB

### User Friendly

Drawing from our team charter,
"Software is only as valuable as the people it helps".
We seek to make decisions and use tools
that drive end user value
and usability.
Regardless of how cutting edge,
organized,
or fast
our software is underneath the hood,
if a user can't access it
and perform its intended purpose with ease,
we have not built good software.
This includes making our software accessible
to our users,
stakeholders,
and team.

Often,
not all the values will fit a decision perfectly.
Remember,
it's not a checklist,
but general guidance.
In this case,
Postgres may not be a shining example of how to imporve accessibility,
so you may choose to include/remove an example such as this:

> ... Postgres default internal types align well with common API level types
> and tooling --
> such as OpenAPI and GraphQL.
> This allows us to build easily consumable and readable
> APIs for end users.
> It also allows us to use commonly used data translation packages
> that save us time
> so we can focus more on how we're displaying data to our users.
