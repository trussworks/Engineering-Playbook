---
sidebar_position: 1
---

# Tools

This page provides a summary of tools we commonly use for source control
at Truss.

## Git

[Git](https://git-scm.com/) is a free and open source distributed version
control system designed to handle everything from small to very large
projects with speed and efficiency.

Use your work email when making commits to our repositories.
The simplest path to correctness is setting global config:

```bash
git config --global user.email "trussel@truss.works"
git config --global user.name "Trusty Trussel"
```

If you drop the `--global` flag,
these settings will only apply to the current repo.
If you ever re-clone that repo or clone another repo,
you will need to remember to set the local config again.
You won't.
Use the global config. :-)

For web-based Git operations,
GitHub will use your primary email unless you choose
"Keep my email address private".
If you don't want to set your work address as primary,
please [turn on the privacy setting](https://github.com/settings/emails).

Note that with 2-factor-authentication enabled,
in order to push local code to GitHub through HTTPS,
you need to [create a personal access token](https://gist.github.com/ateucher/4634038875263d10fb4817e5ad3d332f)
and use that as your password.

## pre-commit

We use [pre-commit](https://pre-commit.com/) at Truss to easily add git
hooks to our Git repos. This allows us to automate things like checking
for merge conflicts or mistakenly adding secret keys in our code. See
[this example](https://github.com/trussworks/circleci-docker-primary/blob/master/.pre-commit-config.yaml)
pre-commit config file from one of our projects.

Since git does not distribute hooks when a repository is cloned, you will
have to install pre-commit in each cloned repo manually using `pre-commit install --install-hooks` or pre-commit will not run in that repo.  To assist
with automating this step, pre-commit has a [feature] to exploit the
[template directory] setting in git:

```console
git config --global init.templateDir ~/.git-template
pre-commit init-templatedir ~/.git-template
```

From now on, each new repository you create or clone will have pre-commit
installed automatically.

## pre-reqs

We use [pre-reqs](https://github.com/trussworks/prereqs) to bootstrap
system pre-requisites that are required to run the code we push to Github.

[feature]: https://pre-commit.com/#pre-commit-init-templatedir
[template directory]: https://git-scm.com/docs/git-init#_template_directory
