# [Source Control](./README.md) / Master to Main branch rename

These instructions will help moving repos from using the default branch name `master` and modify it to be
`main`.

<!-- toc -->

* [Prereqs](#prereqs)
* [Instructions to change default branch name](#instructions-to-change-default-branch-name)
* [Future proofing](#future-proofing)
* [Github](#github)
* [CircleCI Changes](#circleci-changes)
* [Terraform Registry](#terraform-registry)
* [IDE Changes](#ide-changes)
* [Tooling Changes](#tooling-changes)
* [References](#references)

<!-- Regenerate with "pre-commit run -a markdown-toc" -->

<!-- tocstop -->

## Prereqs

First, ensure that the version of `git` that you have installed is at least v2.28.0. This is important to ensure
you have access to the [init.DefaultBranch](https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch)
setting in the git config file.

## Instructions to change default branch name

To update the branch name use the npm tool [lgarron/main-branch](https://github.com/lgarron/main-branch):

```sh
npm install -g main-branch
main-branch trussworks/master-to-main-test replace master main
```

Follow up with local modifications:

```sh
cd git-repo-name
git pull origin main
git checkout main
git branch --delete master
git branch --set-upstream-to=origin/main main
git symbolic-ref HEAD refs/heads/main
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
git fetch --all --prune
```

Test that the `master` branch has been removed by running this command and getting a shell error (exit code not `0`):

```sh
git checkout master
```

## Future proofing

If you're using `git` v2.28.0 or later you should be able to configure git globally to ensure `main` is now
your default branch permanently.

```sh
git config --global init.defaultBranch main
```

Now in your `~/.gitconfig` file you'll see this addition:

```ini
[init]
    defaultBranch = main
```

For older versions of the `git` tool you'll have to be careful to not create new repos with `master` as the default
branch. First make a new git alias:

```sh
git config --global alias.main '!git init && git checkout -b main'
git main
```

You can add an alias to your `bash` or other shell to help:

```sh
alias git_init='git main'
```

Alternatively use this alias:

```sh
alias git_init='git init && git checkout -b main'
```

Don't forget to source your changes to your shell. For bash you can run: `source ~/.bash_profile`.

Which gives you the ability to run either `git main` or `git_init` to start a new repo with `main` as the default
branch.

## Github

The branch protection rules in Github will need to be modified for each repo that you touch.

## CircleCI Changes

In the UI ensure that the pipeline is filtering for All Branches instead of just master. The new builds should show up
automatically. Historical information for old builds is not destroyed in CircleCI during this change. So no changes
should be required.

When things don't work there are steps to re-sync the project that should be used as a last resort:

* [VCP Default Branch Isn't Reflected on CircleCI](https://support.circleci.com/hc/en-us/articles/360040969693-VCS-Default-Branch-Isn-t-Reflected-on-CircleCI)
* [CircleCI Doesn't Notice when github default branch is updated](https://discuss.circleci.com/t/circleci-doesnt-notice-when-github-default-branch-is-updated/10469/6)

## Terraform Registry

Terraform registry uses git tags to pull from github. As long as `main` is a reflection of `master` then no
changes are needed for the terraform registry.

## IDE Changes

Any ID that handles git integrations should be able to handle this change. Consider adding `main` to the set of protected
branches if your editor allows for that.

## Tooling Changes

As a quick reference for some tools that need to be updated here is a non-exhaustive list:

* [DangerJS](https://danger.systems/js/) should be updated to at least `v10.3.0` (see the [PR](https://github.com/danger/danger-js/issues/1057))
* [git](https://git-scm.com/) should be updated to at least `v2.28.0` (see the [Release Notes](https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch))

## References

References:

* [Git Renaming the master branch](https://dev.to/rhymu8354/git-renaming-the-master-branch-137b)
