# [infra](../README.md) / [Terraform](README.md) / Terratest Guide

Terratest is a Go framework that is used to test Terraform infrastructure code.

It executes the defined Terraform and then validates things you're asserting.

## Basic Terratest example of a module

The most basic Terratest test you can write brings up an example in your `examples` directory, tears it down, and will only test that it runs.
We've got some basics in the [terraform-template-module repo](https://github.com/trussworks/terraform-module-template) so you can see it all in context.

Write an example in the `examples` directory that includes the module(s) and configuration that you're testing. In the `tests` directory create a file named `terraform_aws<NAME_OF_MODULE>_test.go`. Basic test is as follows:

```go
package test

import (
    "fmt"
    "strings"
    "testing"

    "github.com/gruntwork-io/terratest/modules/random"
    "github.com/gruntwork-io/terratest/modules/terraform"
    test_structure "github.com/gruntwork-io/terratest/modules/test-structure"
)

func TestTerraformAwsEcrRepo(t *testing.T) {
    t.Parallel()

    tempTestFolder := test_structure.CopyTerraformFolderToTemp(t, "../", "examples/simple")

    testName := fmt.Sprintf("terratest-%s", strings.ToLower(random.UniqueId()))
    awsRegion := "us-west-2"

    terraformOptions := &terraform.Options{
        // The path to where our Terraform code is located
        TerraformDir: tempTestFolder,

        // Variables to pass to our Terraform code using -var options
        Vars: map[string]interface{}{
            "test_name": testName,
        },

        // Environment variables to set when running Terraform
        EnvVars: map[string]string{
            "AWS_DEFAULT_REGION": awsRegion,
        },
    }

    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)

}

```

### Other Examples

* [terraform-aws-alb-web-containers](https://github.com/trussworks/terraform-aws-alb-web-containers)
* [terrraform-aws-ecs-service](https://github.com/trussworks/terraform-aws-ecs-service)
* [terraform-aws-logs](https://github.com/trussworks/terraform-aws-logs/)

## Run manually

To run these tests manually against the `trussworks-ci` AWS account you'll need AWS access in our AWS organization. You'll need help from someone in #infrasec and must follow the [setup instructions](https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md#setup-new-iam-user).

You'll also need to install `aws-vault` and ensure your `./aws/config` file is setup correctly.

In most of our modules, there is a `makefile` that defines `test` so you'll run the following from the root of the repo you're testing:

```sh
AWS_VAULT_KEYCHAIN_NAME=login aws-vault exec trussworks-ci -- make test
```

## Configure CircleCi to run the tests automatically

### Configure CircleCi Job

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
          export AWS_ACCESS_KEY_ID=$(jq --raw-output .Credentials.AccessKeyId <<< "$temp_role")"
          export AWS_SECRET_ACCESS_KEY=$(jq --raw-output .Credentials.SecretAccessKey <<< "$temp_role")"
          export AWS_SESSION_TOKEN=$(jq --raw-output .Credentials.SessionToken <<< "$temp_role")"
          make test
    - save_cache:
        key: pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}
        paths:
          - "~/.cache/pre-commit"
    - save_cache:
        key: go-mod-sources-v1-{{ checksum "go.sum" }}
        paths:
          - "~/go/pkg/mod"
    - store_test_results:
          path: /tmp/test-results/gotest
```

You'll either create a new workflow or add this job to an existing `workflow` definition to be run on every commit/push etc.

### Configure AWS Keys for the CircleCI project

These tests are running as the `circleci` user account configured in the `trussworks-id` account.

To add the access keys go to the project settings page `https://circleci.com/gh/trussworks/<PROJECT NAME>/edit#env-vars`.
Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to the current values.
These keys are rotated daily.

### Update the Key rotator configuration

We have automation in place that updates the AWS Access Keys used by CircleCI daily so you'll need to add this repo to rotator configuration if it is running Terratests against the trussworks-ci AWS account .

Update the `rotate.yaml` file in [Legendary Waddle Dev](https://github.com/trussworks/legendary-waddle-dev) to include a sink to your new repo. A sink stanza looks like this:

```yaml
      - kind: CircleCI
        key_to_name:
          accessKeyId: AWS_ACCESS_KEY_ID
          secretAccessKey: AWS_SECRET_ACCESS_KEY
        account: trussworks
        repo: <REPO NAME>
```

### Access test metadata stored in CircleCI

In order to access the test metadata we stored in the [`store_test_results`](https://circleci.com/docs/2.0/collect-test-data/) key of our `.circleci/config`, we'll need to make a few tweaks. This will allow us luxuries such as pinpointing flaky tests that cause intermittent failures.

## Documentation Links

* [Terratest repo](https://github.com/gruntwork-io/terratest)
* [Official Terratest Documentation](https://terratest.gruntwork.io/docs/)
