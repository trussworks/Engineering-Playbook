# [infra](../README.md) / [Terraform](README.md) / Terratest Guide

Terratest is a Go framework that is used to test Terraform infrastructure code.

It executes the defined Terraform and then validates things you're asserting.

## Basic Terratest example fo a module

TODO: How to write a simple terratest for an existing module. We've got some basics in the terraform-template-module repo

You'll write an example in the `examples` directory

The most basic example just spins up the defined `example` and tears it down.

### Other Examples

* [terraform-aws-alb-web-containers](https://github.com/trussworks/terraform-aws-alb-web-containers)
* [terrraform-aws-ecs-service](https://github.com/trussworks/terraform-aws-ecs-service)
* [terraform-aws-logs](https://github.com/trussworks/terraform-aws-logs/)

## Run "locally"

To run these tests "locally" against the `trussworks-ci` AWS account you'll need AWS access in our AWS organization. You'll need help from someone in #infrasec and follow the [setup instructions](https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md#setup-new-iam-user).

You'll also need to install `aws-vault` and ensure your `./aws/config` file is setup correctly.

In most of our modules, there is a `makefile` that defines `test` so you'll run the following from the root of the repo you're testing:

```sh
AWS_VAULT_KEYCHAIN_NAME=login aws-vault exec trussworks-ci -- make test
```

## Configure CircleCI to run the tests

How to configure circleci to run the tests automatically

Add a job to the `.circleci/config` file in the repository:

```yaml
terratest:
  docker:
    - image: *circleci_docker_primary
  steps:
    - checkout
    - restore_cache:
        keys:
          - pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}
          - go-mod-sources-v1-{{ checksum "go.sum" }}
    - run:
        name: Assume role, run pre-commit and run terratest
        command: |
          temp_role=$(aws sts assume-role \
                  --role-arn arn:aws:iam::313564602749:role/circleci \
                  --role-session-name circleci)
          export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
          export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
          export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)
          make test
    - save_cache:
        key: pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}
        paths:
          - "~/.cache/pre-commit"
    - save_cache:
        key: go-mod-sources-v1-{{ checksum "go.sum" }}
        paths:
          - "~/go/pkg/mod"
```

You'll either add this job to an existing `workflow` definition to be run on every commit/push etc.

### Configure AWS Keys for the CircleCI project

These tests are running as the `circleci` user account configured in the `trussworks-id` account.

To add the access keys go to the project settings page `https://circleci.com/gh/trussworks/<PROJECT NAME>/edit#env-vars`.
Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to the current values.
These keys are rotated weekly.

### Update the Key rotator configuration

We have (will) have automation in place that updates the rotated keys weekly so you'll need to add this repo to that configuration if it is running Terratests on ci.

TODO: How to update this. Needs the rotator automation work done.

## Documentation Links

* [Terratest repo](https://github.com/gruntwork-io/terratest)
* [Official Terratest Documentation](https://terratest.gruntwork.io/docs/)
