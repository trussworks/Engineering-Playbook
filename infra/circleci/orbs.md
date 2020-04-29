# [Infra](../README.md) / Orbs

## Overview

As defined by CircleCI, orbs are "a reusable package of YAML configuration that condenses repeated pieces of config into a single line of code." You can think of them as libraries you can import into the CircleCI configuration.

There is a [registry of CircleCI orbs](https://circleci.com/orbs/registry/) including those created and managed by CircleCI and their partners.

We also have published one of our [own](https://circleci.com/orbs/registry/orb/trussworks/orb-ecr-image-scan-findings).

## Concepts

Before reading the rest of this doc, I recommend reviewing what [concepts](https://circleci.com/docs/2.0/using-orbs/) exist with orbs.

The following is a quick summary of key concepts

### Command

> A step you can use in a job.

### Job

> Uses steps and specifies an executor. You can add this directly to a workflow.

### Executor

> The image, shell, machine, etc in which the job's steps will run.

## [Using Orbs](#using-orbs)

Invoking orbs in your CircleCI configuration is a straightforward process.

Let's say you would like a CircleCI job to notify a Slack channel. You'll find in the CircleCI orb registry that there is an orb that accomplishes this: [circleci/slack](https://circleci.com/orbs/registry/orb/circleci/slack).

First, make sure your CircleCI configuration `.circle/config.yml` uses CircleCI version 2.1 at the top of the file.

```yaml
version: 2.1
```

You can then set up a key called `orbs` and provide a list of orbs you would like to use. In this case

```yaml
orbs:
  slack: circleci/slack@3.4.2
```

Looking at the commands within the [orb's quick start guide](https://circleci.com/orbs/registry/orb/circleci/slack), we can see that there's a `notify` command which encapsulates what we want: notifying a Slack channel.

_Note_: there's some additional setup that will need be done that I won't cover here (getting a Slack verification token, finding the Slack channel id, and so on).

The setup in `config.yml` to use the command

```yaml
jobs:
  build:
    docker:
      - image: < docker image >
    steps:
      - checkout
      - run: < some command >
      - slack/notify:
          channel: < channel id >
          color: "#42e2f4"
          mentions: < userid >
          message: < message >
          webhook: < slack verification token >
```

From then on, every time this CircleCI job runs, a slack notification will appear in the specified channel.

Using an orb's jobs versus its commands is slightly different. An example would be using `circleci/slack`'s `approval-notification` which notifies a channel of a pending approval through the `approval` command.

Instead of adding a step to a job, you add the job to a workflow

```yaml
workflows:
  your-workflow:
    jobs:
      - slack/approval-notification:
          message: < message >
          webhook: < slack verification token >
```

For concrete examples of the usage of this orb, check out [legendary-waddle-dev](https://github.com/trussworks/legendary-waddle-dev/blob/master/.circleci/config.yml).

## Creating Orbs

Unlike using orbs, the process around creating orbs can be tricky. There's plenty of [documentation](https://circleci.com/docs/2.0/creating-orbs/) to go through but I'll provide you a condensed version with some Truss pizzazz.

### Requirements

- [CircleCI CLI](https://circleci.com/docs/2.0/orb-author-cli/#configure-the-circleci-cli) is installed and set up on your machine

  ```sh
  brew install circleci
  ```

- You have the owner role within the Trussworks GitHub org or can snag some time with someone who is an owner

### GitHub

Your orb's source code needs to be housed somewhere. We'll be using GitHub to start as it's where our organization currently holds internal repositories and our CircleCI namespace is linked to GitHub.

A CircleCI orb repository should

- have the name prefixed with "orb-" (ie. `orb-ecr-image-scan-findings`)
- add the MIT license
- be set to public
- include a README describing what the orb does
- use pre-commit hooks to check the yaml and lint markdown
- possess CircleCI configuration for validation

### Setting up the orb

Now that we have a GitHub repo and a name for our orb, we can create the orb itself.

In your terminal, let's reserve the name of the orb via

```sh
circleci orb create trussworks/<name of the orb>
```

Within our GitHub repo, create a file called `orb.yml` with the following content

```yaml
version: 2.1

description: >
 < explanation of what your orb does >

display:
    home_url: https://truss.works/
    source_url: <github repo url>

# these are steps you can add to a job
commands:
    placeholder-command:
        description: < explanation of what this specific command does >
        parameters: < optional if you need to pass arguments in>
            <command parameter one>:
                type: < type of argument >
                description: < explanation of what is this argument>
        steps:
            - run:
                command: < the actual logic behind what your orb does>

# the environment the job will run in
executors:
    < placeholder-executor >:
        # can use a machine or some other environment
        docker:
            - image: < placeholder-image >

# these can be used directly in a workflow
jobs:
    placeholder-job:
        description: < explanation of what this specific command does >
        executor: < placeholder-executor >
        parameters: < optional if you need to pass arguments in>
            <parameter one>:
                type: < type of argument >
                description: < explanation of what is this argument>
        steps:
            - placeholder-command:
                <command parameter one>: <value of command parameter one>
```

An `orb.yml` will always contain at least a command. You can call this command directly in a CircleCI configuration as long as it's listed as a step in a job. The [Using Orbs](#using-orbs) section covers this.

In addition, you can establish jobs which will use the commands. The use case is to plug the orb's jobs directly in a workflow within a CircleCI configuration instead of listing commands as steps in another job. If your orb is going to have jobs, it must also set up executors. This is so the job can actually execute code in an environment instead of pretending to do something in a void.

That said, make changes to this template to suit your needs.

_Note_: We've put jobs, commands, and executors in one file but you can actually divide them into their own directories. This is useful if you're anticipating creating more than one of each and letting them have their own yaml file.

Before we can test that the orb does what we expect, we need to be able to validate that the configuration is sound and publish a dev version of it.

```sh
circleci orb validate orb.yml
```

Skipping to publishing also validates the yaml

```sh
circleci orb publish orb.yml trussworks/<orb name>@dev:first
```

You'll notice we used `first` as part of the version name of this orb since this will be the first version of this orb. This is following the best practice to utilize [semver versioning](https://circleci.com/docs/2.0/testing-orbs/).

As for `@dev`, this is derived from the [original documentation](https://circleci.com/docs/2.0/orb-author/) on how to author and publish orbs. I haven't found anything yet on why use this particular naming convention or even if the naming matters at all. There's some examples that use `@volatile` instead but, as said, I don't know the importance or the difference between the two.

### Testing

We have a dev version to test.

There's [several approaches for testing](https://circleci.com/docs/2.0/testing-orbs/). The least complicated way would be to test within the orb's repository itself. Another would be to test in another repository.

We had to go down the latter route with [orb-ecr-image-scan-findings](https://github.com/trussworks/orb-ecr-image-scan-findings/blob/master/orb.yml) as the orb's use was to scan images that were built within a GitHub repository. We used [trussworks-atlantis-ecs-image](https://github.com/trussworks/trussworks-atlantis-ecs-image/pull/3) to test the orb.

Whether you choose to test in the same repository of the orb or in another, you need to make/modify the CircleCI config. You can make the config through the CircleCI app or creating the directory yourself.

Testing from there on will be following along the [Using Orbs](#using-orbs) section but with your orb.

### Publishing

You've tested and proven your orb is functional. Congrats, we can publish your orb for real

```sh
circleci orb publish promote sandbox/hello-world@dev:first major
```

Following [semver guidelines](https://semver.org/), we're incrementing this as a `major` segment as this will be the first time our fully functioning orb will be published.

Your orb is officially in the CircleCI orb registry and ready for production!
