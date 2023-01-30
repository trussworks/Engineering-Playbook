# Terraform

## Overview

Terraform is our tool of choice for automating our 'cloud infrastructure'. In particular, we expect all but the earliest of prototype [AWS](../aws/README.md) resources to be created/deployed using terraform rather than by hand.

### Semantic Versioning

- When publishing a module for the first time, if you're uncertain what version to use, use `v1.0.0`
- Any changes to a module that don't result in a resource being recreated, increment the _patch_ version per [semantic versioning](https://semver.org/) guidelines.
- Any changes to a module that results in a resource being recreated, increment the _minor_ version per [semantic versioning](https://semver.org/) guidelines.
- Any changes to support GovCloud that do not result in changes to resources, increment the _minor_ version per [semantic versioning](https://semver.org/) guidelines.
- Any changes that results in a user having to update the module, increment the _major_ version per [semantic versioning](https://semver.org/) guidelines.
- Upgrading a module from \<0.12 to 0.12, increment the _major_ version per [semantic versioning](https://semver.org/) guidelines.

### Starting a module experiment

...

### Splitting a git repo

We often start out with Terraform code embedded into the infrastructure for a specific project before we decide we want to publish a chunk of it as stand-alone module. When moving code from one git repository to another, it is useful to maintain the revision history. To split a git repository while preserving the history, see [this page](../../developing/vcs/git-repos.md) in the Engineering Playbook.

Once the Terraform code has been split into a separate repo, you can add the usual trimmings for a Terraform module: README, pre-commit/CircleCI configuration, terratest(s), etc.

Before going public, consider sourcing the module from github as described in the [sources](https://www.terraform.io/docs/modules/sources.html) documentation to confirm that no changes are planned after the migration.

### Going public

When you're ready to turn the prototype module into a published one, there are a few things you'll need to do if you haven't already:

1. 🔒 Add your repo to the [list of repos](https://github.com/trussworks/legendary-waddle/blob/master/trussworks-prod/github-global/main.tf) managed by our GitHub repo management module.
1. 🔒 Add a subscription to your repo in our [#infra-feed](https://trussworks.slack.com/messages/C91SHMKFV/) channel:
   - `/github subscribe trussworks/your-repo-here`
   - `/github unsubscribe trussworks/your-repo-here commits deployments releases`
1. Wire the repo up to the [terraform module registry](https://registry.terraform.io).
   - First read through the Terraform docs on [Publishing Modules](https://www.terraform.io/docs/registry/modules/publish.html) and make appropriate changes to your repository
   - Ensure that the module you wish to publish has a SemVer tag attached to it. If not use `v1.0.0`.
   - Sign into the registry using the trussworks-infra Github credentials (available in 1Password)
   - In the upper right corner select "Publish" or go directly to the [Publish URL](https://registry.terraform.io/github/create)
   - Select the repository you wish to publish from the drop down list. If you don't see it hit the refresh icon.
   - Select the "Publish Module" button.
   - Verify on the next screen that everything you expect to see is correct.

### Publishing a release

To publish a release from a terraform module that's already connected to the [terraform module registry](https://registry.terraform.io), all you need to do after your PR merges is:

1. From the releases tab, click the "Draft a release" button.
1. Add a meaningful description.
1. Increment the package version per [semantic versioning](https://semver.org/) guidelines.
1. Click the "Publish release" button.

You don't need to add any binary files. GitHub will do this automatically for you.

![Screenshot of a release draft][draft-release]

![Screenshot of a published release][publish-release]

### Updating a module for a new version of Terraform

In order to preserve the ability to release updates for previous Terraform versions, when you update a module to support a new version, you should cut a separate branch we can use to publish updates for the old version. Follow this procedure:

1. Compose your PR for the module updating it to the new version of Terraform and get it approved.
1. _Before you merge_, create a branch off the _current_ default branch named after the previous Terraform version (for instance, if the old version is 0.11, create a `terraform011` branch) and push it to origin.
1. Add a note to the README in your PR that describes which major version of the module supports which version of Terraform and which branch to submit a PR to for each (e.g., "For Terraform 0.12, pin the module version to `~> 2.0`. Submit pull requests to the default branch. For Terraform 0.11, pin the module version to `~> 1.0`. Submit pull requests to the `terraform011` branch.")
1. Merge your changes in to the module's default branch.
1. Cut a new release as described above. Increment the _major_ version of the module as you described in the README.

### Version support policy

Truss policy is to support no more than 2 "current" versions of a
Terraform module; this usually means a version to support the latest
release of Terraform and the previous release, e.g. Terraform 1.0 and
Terraform 0.15.

### Version not appearing in the registry

If a release published in GitHub does not appear properly in the Terraform registry, see [Releasing New Versions](https://www.terraform.io/docs/registry/modules/publish.html#releasing-new-versions) for instructions on how to address.

If the steps outlined in the above link do not work, try publishing a new patch release with the same commit id.

### Terraform state mv

Refer to the Truss [`terraform state mv` info sheet](terraform-state-mv.md).

### Terraform import

Refer to the Truss [`terraform import` info sheet](terraform-import.md).

### How to layout/structure a Terraform Project

Refer to the Truss [Terraform Layout Example](https://github.com/trussworks/terraform-layout-example).

### How to test your Terraform code

Refer to the Truss [Terratest Guide](terratest.md).

[draft-release]: images/draft-release.png "Screenshot of a release draft"
[publish-release]: images/publish-release.png "Screenshot of a published release"
