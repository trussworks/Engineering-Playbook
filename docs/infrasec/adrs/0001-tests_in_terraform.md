# Remove tests from our open-source Terraform modules

## Context and Problem Statement

[Terratest](https://terratest.gruntwork.io/) is a Go library that provides
patterns and helper functions for testing infrastructure, including Terraform
code. Truss has [open source Terraform modules][modules], and we have added
tests for many of them using Terratest. Following Truss' understanding of best
practices for production code, we block updates to the modules pending
successful Terratests in CI.

There is no Truss policy that assigns responsibility for maintaining the code
repositories for these modules. In practice, it informally falls to InfraSec
Reserve. Importantly, there is no SLA for maintenance of our Terraform modules.
Because the Reserve is unevenly staffed across time, CI systems in these
repositories have become stale. Dependencies and tests themselves grow out of
date, and we have no monitoring or health checks that alert us to build
failures so they can be actioned. In turn, neglected and broken CI pipelines
block automated dependency updates from auto-merging, so these updates languish
as well. ([Example])

We remain committed to the value of, and need for, tests in software
engineering overall. However, the value Truss has realized from our experiment
with Terratests in these modules is limited. Typically, the tests create a
resource in the [`trussworks-ci`][trussworks-ci] account and pass the build if
a `terraform apply` was successful. Such tests are not sufficient basis for
confidence that functionality has not regressed, or that the module will do
anything useful at all in a practical environment: rather, Truss engineers rely
on Terraform plans to evaluate the impact of changes to a module and report
bugs if they observe anything unexpected. This casts further doubt on the value
of the tests.

## Decision Drivers

- Broken tests should not routinely block automation from applying dependency
  updates.
- Tests should _reduce_ the ongoing work required to maintain our Terraform
  modules. If they increase it, they are bad tests.
- The success or failure of a test suite should be a reliable signal that the
  code is healthy and new changes have not introduced bugs or regressions in
  functionality. If they aren't, they are bad tests.

## Considered Options

- Do nothing.
- Assign dedicated staff to maintain CI in the modules.
- Remove branch protection requiring tests pass before merging.
- Remove tests from the Terraform modules.

## Decision Outcome

Chosen option: Remove the tests from the Terraform modules.

## Validation

Terraform modules conform to this ADR if they do not have tests for Terraform
code.

## Pros and Cons of the Options

### Do nothing

- Good, because it's the least work in the short term.
- Bad, because none of the decision drivers are achieved.

### Assign dedicated staff to maintain CI in the modules

Maintenance of any production software is an on-going process. Having engineers
assigned to doing the non-billable work maintaining our modules would allow us
to keep the tests working and even expand them to make them more informative
and provide clearer signal.

- Good, because having good tests is better than not having tests.
- Good, because dedicated engineers could expand the test suites to make them
  more useful.
- Bad, because non-billable engineers are expensive, and only Truss leadership
  can create a new role for it.
- Bad, because without an understanding of how these modules are adopted, we
  won't know whether or to what extent the effort is a benefit to Truss'
  clients.

### Remove branch protection requiring tests pass before merging

Branch protection rules are separate from CI workflows in Github Actions. We
can configure the modules' repositories to continue running the tests, while
allowing PRs to merge even if the tests fail.

- Good, because Renovatebot or any other dependency automation we may employ
  will not be blocked by stale tests.
- Good, because we won't have to delete the tests from the codebase.
- Bad, because it does not meet the critical decision driver that tests should
  provide a reliable signal. Because this option does not address the lack of
  engineering time for maintaining the tests, they would be ignored and rot
  further.

### Remove tests from the Terraform modules

- Good, because Renovatebot or any other dependency automation we may employ
  will not be blocked by stale tests.
- Good, because it reduces noise from unreliable and uninformative tests.
- Good, because it brings the long-term effort required to maintain the modules
  into line with the resources available.
- Bad, because InfraSec Reserve will have to a lot of near-term work to remove
  the tests.
- Bad, because we'll have to delete all the tests, and we like tests.

<!---
## More Information

{You might want to provide additional evidence/confidence for the decision
outcome here and/or document the team agreement on the decision and/or define
when this decision when and how the decision should be realized and if/when it
should be re-visited and/or how the decision is validated. Links to other
decisions and resources might here appear as well.}
-->

[example]: https://github.com/trussworks/terraform-module-template/pull/96
[modules]: https://github.com/orgs/trussworks/repositories?q=terraform+in%3Aname&type=all
[trussworks-ci]: https://github.com/trussworks/legendary-waddle/tree/main/trussworks-ci
