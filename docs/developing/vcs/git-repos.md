---
sidebar_position: 2
---

# Git Repos

This page provides guidance on how to set up and manage your Git repos.
For Truss, most of these will be kept in [GitHub](https://github.com),
so much of this advice will be geared specifically to managing GitHub
repositories.

## Setting Up Repositories

We try to manage our Git repositories with [Terraform](https://terraform.io)
as much as possible. However, we haven't had great luck creating repos with
Terraform, so what we do is create the repo manually in GitHub, then import
it into Terraform. For an example of how we've done that, and what Terraform
code for GitHub repositories looks like, you can look in the
[legendary-waddle repo](https://github.com/trussworks/legendary-waddle/tree/master/trussworks-prod/github-global).

## Repo Maintenance and Hygiene

- Avoid including files in source control that are specific to your development
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

- Delete local and remote feature branches after merging. This allows us to
  reuse branch names, and makes it easier for you to differentiate between
  your branches that are done and those that are still being worked on. To turn
  this on in GitHub, check the "Automatically delete head branches" box under
  the "Merge button" heading in the Options settings for your repo. If you're
  maintaining the repo with our
  [terraform-github-repo](https://registry.terraform.io/modules/trussworks/repo/github)
  module, it will turn this on automatically.

## GitHub Repo Settings

- [Protect the default branch](https://help.github.com/en/articles/configuring-protected-branches) by turning on the following settings at a minimum:

  - Require pull request reviews before merging
  - Require status checks to pass before merging
  - Include administrators

  If you're maintaining the repo with our [terraform-github-repo](https://registry.terraform.io/modules/trussworks/repo/github)
  module, it will turn this on automatically.

## Splitting Out Code to a New Repository

If you need to split out code from one of your repositories into its own
separate repo, you can follow these steps to make sure you're preserving
the commit history when doing so.

The `filter-branch` subcommand to `git` can be used to accomplish this, but the
[documentation](https://git-scm.com/docs/git-filter-branch) strongly
discourages its use. Instead, a third-party utility called
[git-filter-repo](https://github.com/newren/git-filter-repo) is recommended.

First, create a new repo using the GitHub UI as you would normally.

In your terminal, clone a copy of the original repo into a new folder:

```sh
git clone git@github.com:OWNER/REPONAME.git NEWREPO && cd NEWREPO
```

Filter out commits that change the specified directory:

```sh
git-filter-repo --subdirectory-filter DIRNAME
```

The `origin` remote will be removed in this process. Add it back with the new
repo URL, and push the filtered work tree:

```sh
git remote add origin git@github.com:OWNER/NEWREPO.git
git push --set-upstream origin <main>
```

Note: This repo should be public and properly licensed. Truss has a
:lock:[decision record][license_tdr] on what licenses should be applied to
which sorts of projects.

If your project is managing its GitHub repositories with Terraform as
we suggest, make sure you add the repo to the Terraform code and import
it from GitHub. Speak to your project's infrasec team if you need help
with this.

[license_tdr]: https://docs.google.com/document/d/12UYIN3XfRPdKQV87_0ILa9-z6eWRBcLqtwP9fCyR6Tg/edit
