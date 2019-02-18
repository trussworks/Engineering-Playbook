# [Tools and Practice](../README.md) / Source Control

## Overview

Source control has less to do with the vcs system you use and more to do with the stages code goes through on the journey from inside a developers head, tested and merged into the main line, deployed to production and thence in time to being identified as that accursed legacy system that is causing all the problems.

## Tools

### Git
> [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### pre-commit
> A framework for managing and maintaining multi-language pre-commit hooks.

We use [pre-commit](https://pre-commit.com/) at Truss to easily add git hooks to our Git repos. This allows us to automate things like checking for merge conflicts or mistakenly adding secret keys in our code. See [this example](https://github.com/trussworks/circleci-docker-primary/blob/master/.pre-commit-config.yaml) pre-commit config file from one of our projects.

<!---
## Contents

* [Branch Management](./branches.md)
* [Pull Requests and Code reviews](./prs.md)

--->
