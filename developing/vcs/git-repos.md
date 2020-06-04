# [Source Control](./README.md) / Git Repos

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
    fresh = "!git co master && git pull && git branch --merged | grep -v '\\*' | xargs -n 1 git branch -D"
  ```

  Then instead of doing the typical `git checkout master && git pull`, you would
  only run `git fresh`.

  If you're maintaining the repo with our [terraform-github-repo](https://registry.terraform.io/modules/trussworks/repo/github)
  module, it will turn this on automatically.

[Probot]: https://probot.github.io/apps/delete-merged-branch/

## GitHub Repo Settings

* [Protect the master branch](https://help.github.com/en/articles/configuring-protected-branches) by turning on the following settings at a minimum:

  * Require pull request reviews before merging
  * Require status checks to pass before merging
  * Include administrators

  If you're maintaining the repo with our [terraform-github-repo](https://registry.terraform.io/modules/trussworks/repo/github)
  module, it will turn this on automatically.

## Splitting Out Code to a New Repository

If you need to split out code from one of your repositories into its own
separate repo, you can follow these steps to make sure you're preserving
the commit history when doing so.

In your terminal clone a copy of the original repo into a new folder:

```sh
git clone git@github.com:OWNER/REPONAME.git NEWREPO
```

In that new repo folder remove the origin:

```sh
git remote rm origin
```

Filter out commits that change the specified directory:

```sh
git filter-branch --prune-empty --subdirectory-filter DIRNAME master
```

Create a new repo using the GitHub UI as you would normally.

Note: This repo should be public and properly licensed. You can use a
Github license template for MIT or BSD-3.

If your project is managing its GitHub repositories with Terraform as
we suggest, make sure you add the repo to the Terraform code and import
it from GitHub. Speak to your project's infrasec team if you need help
with this.

Add the new repo as upstream:

```sh
git remote add origin https://github.com/OWNER/NEWREPO.git
```

Push history:

```sh
git push origin .
```

### References

* [GitHub's documentation](https://help.github.com/en/github/using-git/splitting-a-subfolder-out-into-a-new-repository)
* [Chris Gilmer’s full instructions](https://github.com/chrisgilmerproj/silliness#how-to-break-out-projects)
