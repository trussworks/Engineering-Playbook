# Standard Delivery Pipeline

The following is a standardized workflow for developing and deploying our
code using CI/CD. This is meant to be an example, not a prescriptive
ideal; if your project needs to use a different workflow, that's fine.
Your goal should still be to provide a workflow that can support frequent
updates, good testing, and prompt deploys.

## Developing Your Code

Here at Truss, we generally use Git for our code repository, and Github
more specifically. Our preferred method for making changes and integrating
them into the project is relatively simple:

1. Check out the repository for `my-project`.
1. Create a new branch `my-feature` in the repository.
1. Make your changes to the code and commit them, then push your code to
   the central repository.
1. Create a pull request, get approvals, and then merge your `my-feature`
   branch into the default branch.

The virtue of this workflow over more complicated methods like the one
shown [here](https://nvie.com/posts/a-successful-git-branching-model/) is
that we are constantly merging to the default branch, so the drift of any specific
branch from the default branch is kept to a minimum. The idea of more frequent small
changes over less frequent large changes is a fundamental aspect of many
development practices (such as Agile). The core of this belief is that
things which break the the application can quickly be noticed, isolated,
and rolled back (or fixed), without requiring a lengthy period of
diagnosis, or requiring delicate operations to pull out problem code
without sacrificing code which is benign.

This process is known as *continuous integration* or CI (because code is
constantly being integrated into the mainline of the project). Its
relative simplicity belies the fact that it also requires a great deal
of additional work to ensure that this process can occur without
disrupting the project's development.

## Unit Testing

Key to ensuring that our CI workflow is safe is making sure we are doing
unit testing of our code *prior* to merging in to the default branch. To do this,
we use CI to run a battery of tests against
every branch we create a PR from. We want to run a variety of tests that
cover a variety of things like:

- Code formatting and syntax
- Acceptance testing for configuration
- Functional code testing

Our goal is to be as sure as possible *before* anyone even looks at the
pull request that this code does what we want and won't break things.

## Deploying Our Code

Merging your code is just the first step to actually getting it in front
of a real person to use it. The other component for this how your code
gets from a Git repository into a live environment where someone can touch
it. This workflow is orchestrated via CI, and looks something like this:

1. New code is merged into the default branch.
1. CI detects that the default branch has been updated and deploys the code to
   our `development` environment.
1. CI checks to make sure the deploy was successful. Is our
   environment running the right version of the code?
1. CI performs post-deployment
   testing. Does it pass some functional tests to ensure user workflows
   are functional (eg, can someone log in, pull up a user record, put
   things in a shopping cart, etc)? Are logs filling up with error now
   that the new version is deployed?
1. If the tests pass, CI goes ahead and deploys to our `production`
   environment, then runs the same sort of tests it ran in development.
   In some cases, there may be an additional manual approval step, or
   this may be a deployment to a `staging` environment as an additional
   step prior to "real" production.

This means that we are constantly releasing new versions of our code to
users -- we may deploy a dozen times a day, all with a reasonable degree
of confidence that everything will be fine, thanks to our automated
tests. If something doesn't work, we can stop the process (or roll back,
if the problem is detected post-deploy), and users will be protected from
malfunctioning code. This *requires* that we write a battery of tests at
every stage of the release process, however.

This automated workflow that allows rapid release of merged code is called
*continuous delivery* or CD.
