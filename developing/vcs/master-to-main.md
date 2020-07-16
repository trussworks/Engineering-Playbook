# [Source Control](./README.md) / Master to Main branch rename

These instructions will help moving repos from using the default branch name `master` and modify it to be
`main`.

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

Test that the `master` branch has been removed by running this command and getting an error:

```sh
git checkout master
```

## Future proofing

Until the `git` tool is modified you'll have to be careful to not creat new repos with `master` as the default
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

Which gives you the ability to run either `git main` or `git_init` to start a new repo with `main` as the default
branch.

## Github

The branch protection rules in Github will need to be modified for each repo that you touch.

## CircleCI Changes

In the UI ensure that the pipeline is filtering for All Branches instead of just master. The new builds should show up
automatically. Historical information for old builds is not destroyed in CircleCI during this change. So no changes
should be required.

When things don't work there are steps to re-sync the project that should be used as a last resort:

- [VCP Default Branch Isn't Reflected on CircleCI](https://support.circleci.com/hc/en-us/articles/360040969693-VCS-Default-Branch-Isn-t-Reflected-on-CircleCI)
- [CircleCI Doesn't Notice when github default branch is updated](https://discuss.circleci.com/t/circleci-doesnt-notice-when-github-default-branch-is-updated/10469/6)

## Terraform Registry

Terraform registry uses git tags to pull from github. As long as `main` is a reflection of `master` then no
changes are needed for the terraform registry.

## IDE Changes

### GoLand

Appears that no changes are required. Consider adding `main` to the set of protected branches.

## References

References:

- [Git Renaming the master branch](https://dev.to/rhymu8354/git-renaming-the-master-branch-137b)
