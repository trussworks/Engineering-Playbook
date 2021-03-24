# [CI/CD](README.md) / CircleCI Utilities

There are common tasks that may be useful to build into CircleCI commands and jobs to inform more complex build pipeline logic. Since CircleCI does not support orbs designed to return values which can be passed into other commands as parameters, it can be difficult to create reusable orbs for these purposes.

## Make Github API Requests

CircleCI pipelines provide some information about the VCS, but there are scenarios where more information may be required. One way to access more information is to use the [Github API](https://docs.github.com/en/rest/reference/) within a job or command.

The example below leverages a GET request to get the details of a given PR, specifically extracting the PR's base branch commit SHA. This base SHA combined with the CircleCI-provided pipeline SHA is used to get a list of which files were changed. The output could be used within other steps of a more complex job (e.g. determining what parts of a pipeline should run based on what files were changed)

<details>
  <summary>GET Pull Request changed files</summary>

  References:
  [Only build Pull Requests](https://circleci.com/docs/2.0/oss/#only-build-pull-requests)
  [Built-in environment variables](https://circleci.com/docs/2.0/env-vars/?section=pipelines#built-in-environment-variables)
  [Get PR number from CircleCI pull request build](https://support.circleci.com/hc/en-us/articles/360047521451-Why-is-CIRCLE-PR-NUMBER-empty-)
  [Github API - GET Pull Request API](https://docs.github.com/en/rest/reference/pulls#get-a-pull-request)
  [git diff](https://git-scm.com/docs/git-diff)

  ```yaml
  jobs:
    get-pull-request-changes:
      executor: main
      steps:
        - checkout
        - run:
            name: "git PR diff"
            command: |
              pr_number=${CIRCLE_PULL_REQUEST##*/}
              base_sha=$( \
                curl \
                -s \
                -H "Accept: application/vnd.github.v3+json" \
                https://api.github.com/repos/"${CIRCLE_PROJECT_USERNAME}"/"${CIRCLE_PROJECT_REPONAME}"/pulls/"${pr_number}" \
                | jq -r '.base.sha'
              )
              git diff "$base_sha" "$CIRCLE_SHA1" --name-only
            environment:
              TERM: xterm-256color
  ```

</details>
