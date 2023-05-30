# CI/CD according to Truss

## Basics

Continuous integration (CI) is a software development practice that automates
the integration of code changes from multiple contributors into a single
project. This process involves frequently merging code changes into a central
repository, followed by automated builds and tests to detect errors early in
the development process.

Continuous deployment (CD) is a software development approach that
automatically deploys all code changes to production after passing automated
tests, without requiring human intervention. By releasing code changes to
production more frequently, continuous deployment enables developers to find
and fix bugs more quickly, while also speeding up the feedback loop with
customers.

There are usually four conceptual steps in a delivery pipeline:

1. `Build`: Where you build the code into a binary or other artifacts to
   eventually distribute.
1. `Test`: Where you validate or test the artifacts built in the previous step.
1. `Deploy`: Where you configure and deploy the artifacts to an environment.
   Could be a pre-prod or prod.
1. `Release`: Where you finally allow users access to that version of code
   you've configured and built.

In many cases you can merge or swap the steps `Release` and `Deploy`.

## What is this? Is this for me?

You just started on a brand-new project. It's day 1, and everything is
greenfield; there is no existing software, let alone anything to continuously
integrate or deploy. You are tasked to build CI/CD for the project. How do you
design toward your requirements? How do you set yourself up for success when
you don't even know what your requirements are going to be?

Or maybe you inherited a CI/CD system that the client already has. It's in bad
shape, and you are tasked to get it into good shape. But what is "good shape"
for CI/CD? What needs to be handled first?

If any of that feels familiar, this document is for you.

### Embrace your constraints

Working with constraints is a fact of life that we accept to deliver value to
our clients. We expect you will make strategic compromises in engineering
architecture where it is necessary or expedient, rather than unthinkingly
conforming to rules handed down from outside the project.

Truss leadership knows that there is no one better equipped and informed to
make those compromises than the people working with the project's requirements
day to day, and we trust you to make those decisions.

Also, good documentation is hard. Keeping it up to date is even harder. Some of
what you are about to read is out of date. Use your judgment, absorb what is
useful, and disregard what is not.

### Treat these points as a guiding star

Follow the star if you are lost and need direction. Ask questions. If you know
better than what's written here, update it to help those who will come after
you.

## Platform

- DO: Use [Github Actions] (GHA).

_Especially_ on FedGov projects, due to the FedRAMP status (or lack thereof)
for the alternatives.

GHA has good documentation, and a rich ecosystem for shared Actions. Deployment
orchestration is solid. Support for self-hosted runners is there.
Parallelization is good.

Using the same service for source control and CI/CD makes for a clearer access
control story.

- DON'T: Use [CircleCI] on Federal government projects.

CircleCI is not FedRAMP'd. That means you must use their self-hosted offering,
which always lags far behind on features and documentation.

We have had good experiences with CircleCI's cloud service. If a commercial
client wants it, then we should consider it.

However, using GHA means you have a smaller stack, so lean that way anyhow.

- DON'T: Use [Bitbucket Pipelines], at all.

Documentation is wholly inadequate.

It does not have feature parity with GHA or CircleCI, by a long shot.

The API is poorly implemented.

## Run time

CI/CD systems are classic accumulators of tech debt. Maintaining the
reliability and run time of these processes requires setting boundaries up
front and then doggedly sticking to them.

- DO: Maintain focus on how the run time for build and deploy workflows impacts
  developer effectiveness iterating on the app.

If a workflow increases the overhead on developers trying to iterate on the
software, it should be _removed_ until it can be fixed.

This often shows up as: "We don't know how to make it faster, but that's on our
roadmap." No. Make the time now, or get rid of the slow thing until you can do
it right.

- DON'T: Lose sight of how long build and deploy workflows _will_ inhibit fixes
  during an incident. Slow CI/CD is a security and availability risk to your
  project!

See above.

- DON'T: Tolerate flaky tests in CI.

Flaky tests in CI are even worse than a slow build because they add routine
toil for developers monitoring and re-running their builds.

"That test is flaky, just re-run it!" No. Remove the flaky test, or configure
it to run locally only. If it can be re-engineered later to fix the flakiness,
_then_ it can be restored to CI.

- DO: Get buy-in from product management on these points early.

- DO: Norm early and often on what is an acceptable duration for builds and
  deployments, and then _stick to the norm_.

- DO: Parallelize as much as you can.

Include parallelization as part of the acceptance criteria for planned
expansions to CI/CD workflows.

Routinely revisit the overall architecture to look for what else could be
parallelized.

- DON'T: Gate deploy steps on any kind of human intervention.

A merge to the main branch should be the final human action required to deploy
to production.

If you need blue/green deploys or such to avoid unplanned downtime with this
model, then you need blue/green deploys.

- DON'T: Accept the introduction of manual testing.

Manual tests are time consuming and tedious. They are a drag on the development
cycle like flaky or slow tests, except far worse.

It is not temporary, no matter what anyone says. Our experience shows clearly
that once there are any manual tests, you are on a slippery slope.

## Runners

- DO: Use self-hosted runners if CD can deploy into production.

This avoids complex credential management solutions.

- DO: Have separate runners following the principle of least privilege.

For example, a runner that only runs pre-commit doesn't need to have the same
access as a runner that deploys to a test environment, which doesn't need the
same access as a runner that deploys to production.

If you are dealing with an ATO process, your security officer will appreciate
this. If you don't have one, it's still best practice.

## Builds

- DO: Ensure builds are repeatable. This means you should be able to check out
  the code from your project at that same commit hash and build it again and
  get the same artifact(s).

- DO: Ensure builds are hermetic. This means that the build should be isolated
  from other builds. In CI, the build shouldn't share the same workspace or
  files from a previous build or from a build of a different project.

- DO: Output immutable artifacts from your build. Artifact outputs should not
  be rewritten or altered by subsequent builds. This allows you to distribute
  or redeploy from these unaltered artifacts for different points in code.

- DO: Use distroless base images in docker, and build everything on top of
  those.

### Versioning the containers

- DO: Pin the version of everything using deterministic, calculated tags, like
  the git commit digest, a Unix timestamp, or a combination.[^1]

- DON'T: Tag anything with \`:latest\`, \`:staging\` or anything of such.[^2]

- DO: Combine CalVer and the git commit digest in your tags to get the best of all worlds.

### CalVer plus git digest

<details>

> See also: [ADR on CalVer tags][adr_calver]

A combination of a calendar date plus the long git digest achieves the
aims of a good tagging scheme:

- Tags should be unique, immutable, and kept in a monotonically increasing sequence.
- Humans reading the tag need to quickly and easily determine which builds are newer
  or older than others.
- Both humans and the build system need to be able to identify where in the source tree
  the container was built from.

The combined schema looks like this:

`<%Y-%m-%d_%H.%M.%S>_<long git digest>`

Finally, you can add a schema version prefix. This way, if you decide to add (or remove)
information from the schema later, your parsing logic can be maintained to parse all tags
since the beginning.

`v01_<%Y-%m-%d_%H.%M.%S>_<long git digest>`

This yields human-readable, unique, monotonically increasing tags. A [regular expression](https://regex101.com/r/iP6tUn/2) can both validate and parse the
tags.

</details>

If your images are dependencies for other applications, you may need to track which
versions have new features or breaking changes. In that case, we recommend semantic
versioning.

### Semantic Versioning

<details>

Why semver? It tells you and your customer how much has changed since the last
released code and sets expectations accordingly. If you are tagging at mainline
where you are building from, you can rebuild the artifact from the same point.

From [semver.org](https://semver.org):

```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
```

</details>

#### Other versioning strategies

These are other versioning strategies we've seen. We do not recommend them.

<details>

- A commit hash is unique (with extremely few collisions) and is easily linked
  back to history in code. However, how much has changed is opaque
  and it is difficult to determine how old this version is in comparison to other
  versions.
- _Feature branch related names._ These should be short lived and maintained
  for no more than a few days. Most users will not find these useful.
- _Build id related names._ These are opaque to a user and harder to dig up
  history on when debugging.
- _Build date related names._ These are also opaque to a user and difficult to
  dig up history on when debugging. You at least get a sense of when these
  changes went in but are hard to tie to a commit in mainline.

</details>

## Artifact storage

- DO: Get money for [artifact storage] into the budget ASAP.

Budget amendments are hard, especially if they require contract modifications.
So get the paperwork in line well before you want artifact storage (and you'll
want artifact storage early).

Artifact storage is extremely cheap compared to the engineering time you will
bill the client later trying to work around not having it.

- DO: Set up artifact storage for caching builds.

Whether it's uploading a zip file to S3 or pushing a built image to ECR,
artifact caching and storage enables later optimizations for automated
vulnerability scanning, build promotion, sharing artifacts (e.g. docker layers)
between builds to accelerate build and deploy times, getting visibility into
failed builds, and more.

- DON'T: Fragment your artifact storage repositories.

For example, you need _one_ ECR repo shared across AWS accounts.
    <!--  TODO: Explain why. -->

## Alerting

- DO: Alert on build failures from the main branch.

A broken main branch is a fire drill.

- DO: Control [alert fatigue].

- DON'T: Alert on successful builds.

- DON'T: Put alerts in their own Slack channel.

If there are so many alerts from CI/CD that you feel tempted to put them in a
separate channel, then you have too many alerts.

## Running tests

- DO: Keep test runs hermetic. Ideally, multiple CI runs should be able to run
  at the same time without affecting each other.

- DO: Require that tests be idempotent. Tests in CI should be able to run
  several times over without producing inconsistent effects.

- DO: Ensure tests can be reproduced locally, so developers can troubleshoot
  and debug them more easily.

- DON'T: Wait for tests to finish before reporting failures. In CI you will
  want to give the waiting devloper signal on whether their work can be merged
  or requires changes as quickly as possible.

## Deployments

- DO: Use the exact same deployment process for each environment. This allows
  you to use dev and staging deployments as tests for the deployment process
  itself.
- DO: Keep deployments repeatable. The same code and configuration should be
  deployable again and again.

## Other

- DO: Apply the [steel cable] approach to building CI/CD.

[adr_calver]: https://github.com/trussworks/template-tech-challenge/blob/main/docs/adr/0005-define-image-tag-schema.md
[alert fatigue]: https://en.wikipedia.org/wiki/Alarm_fatigue
[artifact storage]: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
[bitbucket pipelines]: https://bitbucket.org/product/features/pipelines
[circleci]: https://circleci.com
[github actions]: https://github.com/features/actions
[steel cable]: https://playbook.truss.works/docs/01-how-we-execute/06-steel-cable/
[^1]: https://vsupalov.com/docker-better-image-tags/
[^2]: https://vsupalov.com/docker-latest-tag/
