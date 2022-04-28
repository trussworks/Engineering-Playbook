# Fix CircleCI Integrations

It's happened time to time that the CircleCI integration in GitHub decides to peace out. What this looks like is the lack of a CircleCI status check next to a commit hash.

![Commit CircleCI Status Check](images/github-commit-circleci-status-check.png "Commit CircleCI Status Check")

## Bring back CircleCI status checks

When this happens, you need to navigate to the GitHub repository's branch protection settings. This [link](https://circleci.com/docs/2.0/workflows/#workflows-waiting-for-status-in-github) has instructions to do so but you can also follow the next three steps below.

From the GitHub repository, click `Settings` then `Branches`.

Under `Branch protection rules`, there should be an existing rule. (If there's not, that is the source of your troubles. Go and make that rule.)

Click `Edit` for that rule and you should be navigated to the `Branch protection rule` page.

The second main checkbox, `Require status checks to pass before merging` is the section we want to focus on. There you want to uncheck any CircleCI status checks. Save these changes.

Now, we want to navigate to the `Installed GitHub Apps` page under the TrussWorks GitHub organization settings. You can just click this [link](https://github.com/organizations/trussworks/settings/installations/423606).

Here is where you'll find the `Repository Access` section under `CircleCI Checks`. For the final step, all that needs to be done is to add the repository you're fixing to the list of selected repositories and save this change.

![Repository Access](images/github-circleci-checks-repo-access.png "Repository Access")

To confirm that the CircleCI integration has been fixed, commit a new change and verify that this time a CircleCI status check appears next to the commit hash in GitHub.
