# [Engineering Playbook](../README.md) / Infrastructure and Deployment

## Overview

Infrastructure and deployment is really important, and at all opportunities we should try to automate it.

## Getting Started

- [Setting up your AWS account 🔒](https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md)
  - You will need to pair with someone that has access to AWS already to run the Terraform commands in the instructions.
- [Your first Lambda Function 🔒](./getting_started/your_first_lambda_function.md)
  - After you have AWS access you can deploy your first AWS Lambda Function with Go and Terraform.

## Immutable infrastructure techniques

- Packer
- Containers (Docker)
- Functions as a Service (Lambda, etc)
- [Terraform](./tf/README.md)

## Infrastructure as code techniques

- [Terraform](./tf/README.md)
- CloudFormation
- Concourse-CI
- Circle-CI
  - [Orbs](./circleci/orbs.md)

## Cloud Providers

- [AWS](./aws/README.md)
- GCP
- Azure

## Other Topics

- [SSL Certificates](./certs/README.md)
- [Project Teardown Guide](./teardown.md)

## Resources

- [Examples of common infrastructure patterns at Truss 🔒](https://github.com/trussworks/truss-infra)
- [Terraform layout example 🔒](https://github.com/trussworks/terraform-layout-example): a basic approach Truss takes towards Terraform layout.
