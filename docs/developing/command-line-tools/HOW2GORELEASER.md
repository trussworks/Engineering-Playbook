# Building internal tools with GoReleaser

## Overview

This is a biased document for how to build and release tools written in go.

If someone else has already written a tool and open sourced it use it and contribute to it.

Feel free to update and make changes!

## Install GoReleaser

To install GoReleaser visit the [installation instructions](https://goreleaser.com/install/). It can be installed
with brew if you use:

```sh
brew install goreleaser/tap/goreleaser
brew install goreleaser
```

## Split a tool out from an existing project

If you are splitting a tool from an existing project, you can follow the
instructions in [here](../vcs/git-repos.md#splitting-out-code-to-a-new-repository).

## Get the project building binaries

This assumes you are creating a binary from a Go project.

### Generate a `go.mod` file

Your project may not have a `go.mod` file already, you can skip ahead if so.

Initializes your `go.mod` file with your current version of Go:

```sh
go mod init github.com/OWNER/NEWREPO
```

Fills out your `go.mod` and `go.sum` files and builds your binary for your current OS:

```sh
go build
```

You might run into some issues getting this to work outside of a project you may have split this code from. Spend some time getting it to build.

When you feel good about it, add `go.mod` and `go.sum` to your git index with a commit.

[Blog post I used to figure this out](https://medium.com/mindorks/create-projects-independent-of-gopath-using-go-modules-802260cdfb51)

## Add pre-commit hooks

Write a `.pre-commit-config.yaml` file and add it to git with a commit.
Then install the hooks and run the hooks against all files for the first time.

```sh
pre-commit install --install-hooks
pre-commit run --all-files
```

Fix any issues you find and commit your changes to your repo.

### Example .pre-commit-config.yaml and .markdownlintrc

The following example `.pre-commit-config.yaml` does some nice things for a basic go project.
Ensure you're using the latest versions of these tools by running `pre-commit autoupdate` and
checking in changes to source control.

```yml
repos:
  - repo: https://github.com/golangci/golangci-lint
    rev: v1.51.2
    hooks:
      - id: golangci-lint
        entry: golangci-lint run --fix --timeout 300s
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: check-merge-conflict
      - id: check-yaml
      - id: detect-private-key
      - id: trailing-whitespace

  - repo: https://github.com/igorshubovych/markdownlint-cli
    rev: v0.33.0
    hooks:
      - id: markdownlint

  - repo: https://github.com/trussworks/pre-commit-hooks
    rev: v1.1.1
    hooks:
      - id: goreleaser-check
```

This example `.markdownlintrc` will work with the above `.pre-commit-config.yaml` example.
This ignores some stylistic but annoying triggers.

```json
{
  "default": true,
  "first-header-h1": false,
  "first-line-h1": false,
  "line_length": false,
  "no-multiple-blanks": false,
  "fenced-code-language": false
}
```

## Create Docker configuration

Suggested but optional. This is just another distribution method.

Create a `Dockerfile` at the root of your repo and commit it to git.

### Example Dockerfile

This example is a very basic Dockerfile that works with goreleaser with a tool/binary name of `binaryname`.

Goreleaser will use the binary it determines is correct to copy into the container.

```docker
FROM alpine:3
COPY binaryname /bin/binaryname
ENTRYPOINT [ "binaryname" ]
```

## Create a Docker repo

Create a Docker repo. There's Docker Hub, ECR, and GitHub.
You'll need to be sure to enable automation to push into whatever you use.

### Create a Docker Hub repo

We don't use the trussworks Docker Hub org very much so you'll need to reach out to the #infrasec Slack channel to find someone to help you.

Log into [Docker Hub](https://hub.docker.com/) with your personal account. If you don't have an account then make one
and then have someone on InfraSec add you to the Trussworks organization.

[Create a new Docker Hub repo](https://hub.docker.com/repository/create) following the same naming convention of the
repo like `trussworks/NEWREPO`. You should be able to select `trussworks` from a drop down on the form. Then set
the name to the same name as your tool or github repository name. The repository should be `Public` and not `Private`
if it is an open-source tool.

After creating the repo configure the permissions to allow the `bots` user group to have `Read & Write`
access to that repo.

### Get an API key for pushing the docker image

Use the `trussworksbot` user credentials in 1Password to log into [Docker Hub](https://hub.docker.com/) (you may have
to log out of your personal user session). In the [Security Settings](https://hub.docker.com/settings/security)
for `trussworksbot` create a "New Access Token" named for the repository you just created. Save this access key to
the `trussworksbot` 1Password as you will need it later for configuring GitHub Actions.

## Create goreleaser configuration

Create a `.goreleaser.yml` file and commit it.

### Example .goreleaser.yml

This has some decent build defaults. This will get dependencies from go.mod then build for both OSX and Linux.
Goreleaser will also update the release in GitHub with the artifacts it builds.
It will also push to a brew tap. Build a Docker container but skip shipping to it.

Note: I had to add `CGO_ENABLED=0` so the linux binary would work in Docker.

If you don't need to build a Docker container, just remove the docker stanza.

```yml
env:
  - GO111MODULE=auto
before:
  hooks:
    - go mod download
builds:
  - env:
      - CGO_ENABLED=0
    goos:
      - darwin
      - linux
    goarch:
      - amd64
    main: main.go
brews:
  - description: "USE THE DESCRIPTION FROM THE GITHUB REPO"
    github:
      owner: trussworks
      name: homebrew-tap
    homepage: "https://github.com/trussworks/NEWREPO"
    commit_author:
      name: trussworks-infra
      email: infra+github@truss.works
dockers:
  - binaries:
      - <BINARYNAME>
    image_templates:
      - "OWNER/NEWREPO:{{ .Tag }}"
    skip_push: true
archives:
  - replacements:
      darwin: Darwin
      linux: Linux
      amd64: x86_64
checksum:
  name_template: "checksums.txt"
  algorithm: sha256
snapshot:
  name_template: "{{ .Tag }}-next"
changelog:
  sort: asc
  filters:
    exclude:
      - "^docs:"
      - "^test:"
```

### Test goreleaser locally

Validate your file with the command:

```sh
goreleaser check
```

Then try to build from this configuration using:

```sh
goreleaser build --snapshot --clean
```

Now you should have build artifacts in the `dist/` directory in your repository. This is a good time to ensure
that `dist/` is in your `.gitignore` file.

In your terminal from the root of your repo, try runing goreleaser without releasing with:

```sh
goreleaser --snapshot --skip-publish --clean
```

This goes beyond the build process and tests out the parts of the releaser related to pushing artifacts.

## Set up CI

The next step is to write a GitHub Actions config file and commit it to your repo.

### Project Environment Variables

Configure the `GITHUB_TOKEN`, `DOCKER_USER`, and `DOCKER_PASS` environment variables.

`GITHUB_TOKEN` is used by goreleaser to update release notes and push binaries to the release on GitHub. It is also
used to update the [trussworks/homebrew-tap](https://github.com/trussworks/homebrew-tap) with the new artifact
locations and checksums. In the `infra+github@truss.works` 1Password you will find an API Key named
`gorelreaser-homebrew-tap-token` which can be used for this value.

`DOCKER_USER` and `DOCKER_PASS` are configured from the `trussworksbot` in 1Password. Use the API Key you configured
in an earlier step to fill out these values. This is how CI will push to Docker Hub.

### Run a release from GitHub

Cut a release from `main` with a tag using semantic versioning in the style of `v0.0.0` using:

```sh
git tag v0.0.0
git push --tags
```

This will create a tag and CI will automatically run the `release` workflow. This will work even on
a branch, meaning you can test the release process before merging this code into the mainline branch.

You can also cut a release from the `https://github.com/trussworks/$REPO/releases` view.

And if CLI is more your thing, you can cut a release with `gh release create v0.0.0 --title "My First Release" --notes "Notes go here"`.

## Verify the release

### Verify you can install from your configured Homebrew Tap

First see if your tool appears in the [trussworks/homebrew-tap](https://github.com/trussworks/homebrew-tap) repo.
There should be a Ruby file with your tool's name. If it is there then proceed to install it.

Install the Trussworks tap to homebrew and then install the tool you built.

```sh
brew tap trussworks/tap
brew install tool-name
```

Test your tool by using the help command:

```sh
tool-name -h
tool-name version
```

Verify the version matches the release version.

Be sure you updated the `README.md` in the new tool repo to have installation instructions.

### Verify you can install from docker hub

You will want to verify that your docker image was pushed to Docker Hub. Try pulling the image and running from
the container:

```sh
docker pull trussworks/tool-name:v0.0.0
docker run -it trussworks/tool-name:v0.0.0 --help
docker run -it trussworks/tool-name:v0.0.0 version
```

## Broadcast this to others

Be sure you let other folks know you broke this out for them to use and contribute to! Consider doing one of these to help get more eyes on your new tool repo:

- Add the people you worked with on this tool to your PRs on this repo.
- Add some documentation to your repo and send the repo to Trussels in Slack!
- Do a demo for your team or other teams or as an OTT.
