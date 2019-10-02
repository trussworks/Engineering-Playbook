# [Tools and Practice](../README.md) / Source Control

## Overview

Source control has less to do with the VCS system you use, and more to do with the stages code goes through on the journey from inside a developer's head, tested and merged into the main line, deployed to production, and thence in time to being identified as that accursed legacy system that is causing all the problems.

## Repo maintenance and hygiene

* Avoid including files in source control that are specific to your development
machine or process. For example, your editor or OS might generate files that are
not pertinent to your project. Since those types of files will need to be
[ignored](https://help.github.com/en/github/using-git/ignoring-files) from all
the repos you work on, it's more convenient to set them once in a global
`.gitignore` file (typically named `~/.gitignore_global`), as opposed to in each
repo's `.gitignore`. Once you create your file and add rules to it, you can tell
Git to use it:

  ```
  git config --global core.excludesfile ~/.gitignore_global
  ```

* Delete local and remote feature branches after merging. This allows us to
reuse branch names, and makes it easier for you to differentiate between
your branches that are done and those that are still being worked on. Deleting
merged branches on GitHub should be automated with [Probot]. Locally, you can
add an alias to your `~/.gitconfig` file. Example:

  ```
  [alias]
    fresh = "!git co master && git pull && git branch --merged | grep -v '\\*' | xargs -n 1 git branch -d"
  ```

  Then instead of doing the typical `git checkout master && git pull`, you would
  only run `git fresh`.

[Probot]: https://probot.github.io/apps/delete-merged-branch/

### GitHub repo settings

* [Protect the master branch](https://help.github.com/en/articles/configuring-protected-branches)
by turning on the following settings at a minimum:

  * Require pull request reviews before merging
  * Require status checks to pass before merging
  * Include administrators

* Under `Settings->Merge button`:
  * Uncheck all options except for `Allow merge commits` because it's the only
  one that allows deleting local branches with `-d`. We should never have to use
  `-D` to delete a branch.

## PR size

Pull requests should be small and focused enough to be reviewable in under 15,
or ideally under 5, minutes. Small PRs have a better chance of being quickly
accepted. The longer the PR, the more an engineer has to keep in their head, and
the more contiguous time they need to schedule for the review. This might lead
to a less thorough and delayed review, which could block you from your other
work. Long-lived PRs also often require more frequent updates with the main
branch, which could result in mistakes when conflicts are present.

## Git workflow

### Fork vs clone

If it's a repo you have write and push access to, clone it. Otherwise, fork it.

### Cloning with SSH vs HTTPS

Use [HTTPS] for read-only repos (where you’re only ever going to clone and pull),
and use [SSH] for everything else. SSH supports certificates on security keys,
and HTTPS does not. Therefore, we should not use HTTPS for anything that requires
authentication. However, if you’re just pulling a public repo, HTTPS is more
convenient since you don’t need to authenticate anything (unlike SSH for
read-only repos).

[SSH]: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[HTTPS]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

### Commit messages

For each meaningful commit, write a
[good commit message](https://chris.beams.io/posts/git-commit/) following these
seven rules:

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the [imperative mood] in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

Example:

```
Replace chromedriver-helper with webdrivers

`chromedriver-helper` says in bold on their README that they are no
longer maintaining it and that people should use `webdrivers` instead.

Additionally, `webdrivers` has a very useful feature that will
automatically use the right version of `chromedriver` based on the
version of Chrome that is installed on the machine. This was not
possible with `chromedriver-helper`, which made it harder to deal with
versioning locally and in Circle CI.

Resolves #123
```

[imperative mood]: https://en.wikipedia.org/wiki/Imperative_mood

## Tools

### Git

> [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### pre-commit

> A framework for managing and maintaining multi-language pre-commit hooks.

We use [pre-commit](https://pre-commit.com/) at Truss to easily add git hooks to our Git repos. This allows us to automate things like checking for merge conflicts or mistakenly adding secret keys in our code. See [this example](https://github.com/trussworks/circleci-docker-primary/blob/master/.pre-commit-config.yaml) pre-commit config file from one of our projects.

### pre-reqs

> A tool to check your project prerequisites so your engineers don't have to.

We use [pre-reqs](https://github.com/trussworks/prereqs) to bootstrap system pre-requisites that are required to run the code we push to Github.

<!---
## Contents

* [Branch Management](./branches.md)
* [Pull Requests and Code reviews](./prs.md)

--->
