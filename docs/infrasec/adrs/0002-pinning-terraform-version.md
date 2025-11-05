# Guidance for Pinning Terraform Versions

## Context and Problem Statement

On projects, we've both inherited infrastructure as code and we've created it greenfield. In both cases, we have at times failed to pin terraform versions which led to having different versions across different terraform roots. This makes development harder. Additionally, once we've standardized and pinned to a version, when do we revisit that and update it? Based on our practical experience, this ADR seeks to offer that guideance.

## Decision Drivers

- Not pinning versions leads to confusion and difficulty working across a codebase
- Having TF versions get too out of date can make it harder to upgrade in the future
- Having versions get very out of date might make it difficult to stay abreast of providers

## Considered Options

- Do Nothing - All projects figure it out
- Pin, 5 Versions - Establish pinning and keep to no more than 5 minor versions behind
- Pin, 10 Versions - Establish pinning and keep to 10 minor versions behind

## Decision Outcome

Chosen option: "Pin, 5 Versions", because it does a good job of keeping us up to date but not chasing the bleeding edge of TF versions. For context, as of this writing, the current major release of Terraform is 1.13, released in August 2025. My current project is on 1.8.5, which is five versions back and was released in June of 2024. Using this example, five versions back gives us about a year on a version, which seems about the right cadence for making these kinds of "technical debt" fixes on a codebase.

### Consequences - Pros and Cons

- Good, because it ensures we have consistency of TF version across codebases
- Good, because it ensures our versions don't get too old
- Good, because we aren't changing versions too frequently
- Good, because we have a standard that projects can fall back on instead of re-inventing the wheel
- Bad, because at some point we do have to do the upgrade in order to stay current

## Validation

This ADR exists to provide guidance for project teams, and is not meant to force compliance. What we want to do is give guidelines for best practices so each project isn't starting over from scratch, and so that when practitioners change from project to project, they have consistency in how the projects operate. This shortens their onboarding time and helps them understand the "state of play" on their new project.

## Pros and Cons of the Other Options

### Do Nothing

We could do nothing and let every project team continue to figure this out for themselves.

- Bad, because we do not have consistency across projects
- Bad, because we have no standing for project teams when they need to argue for technical debt prioritization. i.e. Customers rarely see value in technical debt updates, yet they are necessary.
- Bad, because we can wind up in situations where teams go so fast they have wildly different versions across a codebase and it can slow down development (yes, this has happened)

### Pin Version, 10 versions back

We could pin versions and go much farther back so that we are not performing technical debt fixes as often. Pinning 10 vesions back would mean we'd accept TF versions 1.13 - 1.03. 1.03 was released in September 2022, nearly three years ago.

- Good, because we establish guidance for teams and standardize across projects
- Good, because we aren't changing versions frequently *at all*
- Good, because we would have consistency across a codebase
- Bad, because the version could get very old and very unsupported in that length of time
- Bad, because Terraform is making large changes between versions and could strand the code on an older AWS provider version. For example, AWS 5.x provider can be used from TF 1.0+. AWS 6.0 provider's minimum TF version is 1.5.7.
- Bad, because the number of changes in three years on a software project is pretty extensive, and could result in a difficult upgrade effort. Terraform has done this in the past.
