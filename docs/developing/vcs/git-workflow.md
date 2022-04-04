# [Source Control](./README.md) / Git Workflow

At Truss, we've tried to come up with some standardized workflows for
working with Git. This page hopes to capture them so that new Trussels
can work cleanly with other developers and minimize friction.

## Branching Strategy

There are several well-established branching strategies and workflows out there.
[This article](https://web.archive.org/web/20191115042322/https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf) covers four leading types.

Each project will have its own requirements, and sometimes even individual
projects might need different approaches, but generally Truss recommends the
["GitHub Flow"](https://guides.github.com/introduction/flow/), for its
lightweight process and ease of use with [CI/CD](../cicd/README.md).

However, the "Git Flow" process is useful in scenarios where you have a
slower release process, e.g. for mobile apps that have a App Store as part
of its critical release path.

## Fork vs Clone

If it's a repo you have write and push access to, clone it. Otherwise, fork it.

## Cloning with SSH vs HTTPS

Use [HTTPS] for read-only repos (where you’re only ever going to clone and pull),
and use [SSH] for everything else. SSH supports certificates on security keys,
and HTTPS does not. Therefore, we should not use HTTPS for anything that requires
authentication. However, if you’re just pulling a public repo, HTTPS is more
convenient since you don’t need to authenticate anything (unlike SSH for
read-only repos).

## Working locally

Pick either `rebase` or `merge` to incorporate changes from the default branch onto your
local branch. Use the same method every time for consistency.

## PR Size

Pull requests should be small and focused enough to be reviewable in under 15,
or ideally under 5, minutes. Small PRs have a better chance of being quickly
accepted. The longer the PR, the more an engineer has to keep in their head, and
the more contiguous time they need to schedule for the review. This might lead
to a less thorough and delayed review, which could block you from your other
work. Long-lived PRs also often require more frequent updates with the main
branch, which could result in mistakes when conflicts are present.

## After creating a PR in GitHub

Once a branch has been pushed to GitHub and a PR has been submitted for review,
any changes should be made via individual new commits. Never force push while
a PR is under review. This avoids issues such as merge conflicts or accidental
overwriting of code when others are using your branch.

## Commit messages

For each meaningful commit, write a
[good commit message](https://chris.beams.io/posts/git-commit/) following these
seven rules:

1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the [imperative mood] in the subject line
1. Wrap the body at 72 characters
1. Use the body to explain what and why vs. how

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

[https]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[imperative mood]: https://en.wikipedia.org/wiki/Imperative_mood
[ssh]: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
