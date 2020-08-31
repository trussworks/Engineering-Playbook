# [Engineering Playbook](../README.md) / InfraSec

## Overview

Infrastructure and security engineering (infrasec) is the practice of
building secure, robust systems that are foundational to having reliable
applications and services. While infrastructure as code is a core area
for this practice, it also involves system design, [incident
response](../incident-response/README.md), and a number of other fields.

## The InfraSec Practice

- [InfraSec Practice Charter](./charter.md)

## Infrastructure As Code

- [Ansible](./ansible/README.md)
- AWS CloudFormation
- Circle-CI
  - [CircleCI Patterns (in Tools and Practice)](../developing/cicd/circleci-patterns.md)
  - [Orbs](./circleci/orbs.md)
- Packer
- [Terraform](./tf/README.md)

## Immutable Infrastructure

- Containers (Docker)
- Functions as a Service (Lambda, etc)

## Cloud Providers

- [AWS](./aws/README.md)
- GCP
- Azure

## Tutorials

### AWS

- [Setting Up Your AWS User](https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md)
  How to set up your AWS user in the Truss internal infrastructure. You
  will need the assistance of someone with administrative privileges in
  our AWS organization to help you.
- [Your First Lambda Function](./tutorials/your_first_lambda_function.md)
  A guide to deploying your first AWS Lambda Function with Go and Terraform.

### Security

- [One-Time Passwords](./tutorials/one-time-passwords.md)
  How to set up one-time passwords for GitHub with 1Password.
- [YubiKey Configuration Guide](./tutorials/yubikey-configuration.md)
  How to get and configure a YubiKey for use in commit signing.
- [YubiKey SSO](./tutorials/yubikey-sso.md)
  How to configure a Google Account to use YubiKey (for GSuite admins).

## Other Topics

- [Alert Providers](./alert-providers.md)
- [Project Teardown Guide](./teardown.md)
- [SSL Certificates](./certs.md)
