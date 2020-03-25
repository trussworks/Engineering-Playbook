# Example Circleci config.yml

Add the contents of this code block to .circleci/config.yml in your repo after setting your repo up with CircleCI.

Also configure the `GITHUB_TOKEN`, `DOCKER_USER`, and `DOCKER_PASS` environment variables from the CircleCi UI.

`GITHUB_TOKEN` is used by goreleaser to update release notes and push binaries to the release on GitHub.

This configuration creates two CircleCI workflows `validate` and `release`.

The `validate` workflow is run on each commit to the repository or branch push.
This will run your pre-commit hooks as defined in `.pre-commit-config.yaml`.

The `release` workflow will only run on certain tag pushes to the repo.
This workflow will setup to build Docker containers then run goreleaser as defined in `.goreleaser.yml`.
After binaries and containers are built by `.goreleaser.yml` this validates the container works by running the container with its default entry point using the `--help` flag.
This should just be a sanity check that the container "does the right thing".

If you are not building a Docker container, you must remove these steps in the release job:

* `setup_remote_docker`
* `Login to Docker Hub`
* `Check Docker container`
* `Docker push`

```yml
version: 2.1

references:
  circleci-docker-primary: &circleci-docker-primary trussworks/circleci-docker-primary:99bee5627ff234eb0f31f5899628bff03df78b6d

jobs:
  validate:
    docker:
      - image: *circleci-docker-primary
    steps:
      - checkout
      - restore_cache:
          keys:
            - pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}
      - run:
          name: Run pre-commit tests
          command: pre-commit run --all-files
      - save_cache:
          key: pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}
          paths:
            - ~/.cache/pre-commit
  release:
    docker:
      - image: *circleci-docker-primary
    steps:
      - checkout
      - setup_remote_docker
      - run:
          name: Run goreleaser
          command: goreleaser --debug
      - run:
          name: Login to Docker Hub
          command: docker login -u $DOCKER_USER -p $DOCKER_PASS
      - run:
          name: Check Docker container
          command: docker run -it OWNER/NEWREPO:<< pipeline.git.tag >> --help
      - run:
          name: Docker push
          command: docker push OWNER/NEWREPO:<< pipeline.git.tag >>
workflows:
  version: 2.1
  validate:
    jobs:
      - validate
  release:
    jobs:
      - release:
          filters:
            branches:
              ignore: /^.*/
            tags:
              only: /^v.*/
```
