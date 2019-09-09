# [infra](../README.md) / Terraform

## Overview

Terraform is our tool of choice for automating our 'cloud infrastructure'. In particular, we expect all but the earliest of prototype [AWS](../aws/README.md) resources to be created/deployed using terraform rather than by hand.

## Contents

* Something about Truss Terraform Modules
* How to layout/structure a Terraform Project

### Starting a module experiment

...

### Going public

When you're ready to turn the prototype module into a published one, there's a few things you'll need to do if you haven't already:

1. 🔒 Add your repo to the [list of repos](https://github.com/trussworks/truss-infra/blob/master/truss/github/main.tf) managed by our GitHub repo management module.
2. 🔒 Add a subscription to your repo in our [#infra-feed](https://trussworks.slack.com/messages/C91SHMKFV/) channel:
   * `/github subscribe trussworks/your-repo-here`
   * `/github unsubscribe trussworks/your-repo-here statuses commits deployments public releases`
3. Wire the repo up to the [terraform module registry](https://registry.terraform.io).
   * First read through the Terraform docs on [Publishing Modules](https://www.terraform.io/docs/registry/modules/publish.html) and make appropriate changes to your repository
   * Ensure that the module you wish to publish has a SemVer tag attached to it. If not use `v1.0.0`.
   * Sign into the registry using your Github credentials
   * In the upper right corner select "Publish" or go directly to the [Publish URL](https://registry.terraform.io/github/create)
   * Select the repository you wish to publish from the drop down list. If you don't see it hit the refresh icon.
   * Select the "Publish Module" button.
   * Verify on the next screen that everything you expect to see is correct.

### Publishing a release

To publish a release from a terraform module that's already connected to the [terraform module registry](https://registry.terraform.io), all you need to do after your PR merges is:

1. From the releases tab, click the "Draft a release" button.
2. Add a meaningful description.
3. Increment the package version per [semantic versioning](https://semver.org/) guidelines.
4. Click the "Publish release" button.

You don't need to add any binary files. GitHub will do this automatically for you.

![Screenshot of a release draft][draft-release]

![Screenshot of a published release][publish-release]

### Updating a module for a new version of Terraform

In order to preserve the ability to release updates for previous Terraform versions, when you update a module to support a new version, you should cut a separate branch we can use to publish updates for the old version. Follow this procedure:

1. Compose your PR for the module updating it to the new version of Terraform and get it approved.
1. *Before you merge*, create a branch off the *current* master named after the previous Terraform version (for instance, if the old version is 0.11, create a `terraform011` branch) and push it to origin.
1. Add a note to the README in your PR that describes which major version of the module supports which version of Terraform and which branch to submit a PR to for each (e.g., "For Terraform 0.12, pin the module version to `~> 2.0`. Submit pull requests to the `master` branch. For Terraform 0.11, pin the module version to `~> 1.0`. Submit pull requests to the `terraform011` branch.")
1. Merge your changes in to the module's master branch.
1. Cut a new release as described above. Increment the *major* version of the module as you described in the README.

[publish-release]: ./publish-release.png "Screenshot of a published release"
[draft-release]: ./draft-release.png "Screenshot of a release draft"
