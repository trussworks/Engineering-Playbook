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

[SSH]: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[HTTPS]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

## Working locally

Pick either `rebase` or `merge` to incorporate changes from master onto your
local branch. Use the same method every time for consistency. Most people
use `rebase`.

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

## Merging an approved PR

The recommendations below are based on a survey we sent out both internally and
outside Truss, although we only received 41 responses.

### PR with multiple commits

Once a PR has been approved, we recommend squashing commits so that the only
ones that remain are meaningful ones that pertain to the overall goal of the PR.
For example, if a PR is focused on a small specific task, and along the way you
created commits that fixed typos or broken tests, those deserve to be squashed.
It's easier to understand a PR when there aren't distracting commmits.

We don't require any particular way to squash commits, but we recommend using
GitHub's `squash and merge` button as it's the safest option. We do not
encourage nor require force pushing, but if you have experience using force push
responsibly, and prefer using interactive rebase to squash locally, you may use
it.

Take time to write a good commit message (as described in the
[Commit messages](#commit-messages) section below), and add any relevant
information from the PR review.

#### Rationale

Although most survey respondents stated they don't typically squash commits, we
still recommend squashing because the consequences of **not** squashing are
more negative than those of squashing.

Below are the most common consequences of not squashing chosen by survey
respondents:

* hard to read the Git history
* hard to link individual commits back to the GitHub PR
* hard to understand the reason behind a change

Conversely, the most common (90%) consequence of squashing chosen was:

* It was hard to understand or work with big commits that had too many unrelated
changes

And the most common reason for having big commits was:

* Keeping PRs small and focused was not enforced during code reviews

We feel this is much easier to address through team norms and communication, and
is one of the guidelines in this document. See [PR size](#pr-size) above.

Additional benefits of squashing mentioned by survey respondents include:

* Keeping a clean commit history with detailed commit messages serves as
documentation for our future selves and for future folks who will work on the repo

* It makes it easier to revert commits or PRs

* It allows us to update the final commit message to incorporate any relevant
discussion from the PR review

## Commit messages

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
