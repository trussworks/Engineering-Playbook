# [Tools and Practice](../README.md) / direnv

## Overview

[direnv](https://direnv.net/) is an MIT-licensed command-line tool that addresses the hassle of setting per-project environment variables.

## Installation

Via homebrew:

```console
brew install direnv
```

## Getting started

Create an `.envrc` file in a directory with some environment variables your project needs:

```console
$ cat <<ENVRC > .envrc
export DB_HOST=localhost
export DB_PORT=5432
export DB_USER=postgres
export DB_PASSWORD=mysecretpassword
export DB_NAME=dev_db
CLIENT_AUTH_SECRET_KEY=$(<client_auth_secret.key)
ENVRC
$
```

On first run, you should get a message indicating that you will have to explicitly authorize `direnv` to load the file:

```console
$ cd ./projectdir
direnv: error .envrc is blocked. Run `direnv allow` to approve its content.
$ direnv allow
direnv: loading .envrc
direnv: export +DB_HOST +DB_NAME +DB_PASSWORD +DB_PORT +DB_USER -PS2
$
```

Your local environment variables should be updated now. Any time the `.envrc` file is changed, you will need to re-approve the file, but it will load automatically otherwise.

### Usage example: Changing the git committer email

Some Trussels develop on projects where they must use a client email address. `direnv` can automate the process of changing the email address displayed in your git commits appropriately. For example, consider the following directory structure:

```console
$ pwd
/User/trussel/src/
$ tree -n -L 2
.
├── me
│   ├── personal_toy_project_1
│   └── personal_toy_project_2
├── client
│   └── client_project
└── truss
    └── Engineering-Playbook
$ cat me/.envrc
export GIT_AUTHOR_EMAIL="ryan.delaney@gmail.com"
export GIT_COMITTER_EMAIL="ryan.delaney@gmail.com"
$ cat client/.envrc
export GIT_AUTHOR_EMAIL="ryan.delaney@clientdomain.com"
export GIT_COMITTER_EMAIL="ryan.delaney@clientdomain.com"
$ cat truss/.envrc
export GIT_AUTHOR_EMAIL="ryan@truss.works"
export GIT_COMITTER_EMAIL="ryan@truss.works"
$
```

### Language-specific settings

#### direnv and golang

_From the [direnv wiki](https://github.com/direnv/direnv/wiki/golang):_

> If you're using [the gb build tool](http://getgb.io/) for Go projects, you may find this layout useful for helping many `GOPATH`-dependent ecosystem tools work seamlessly in your projects:
>
> ```
> # Usage: layout golang
> #
> # Sets up environment for a Go project using the alternative gb build tool. Also
> # works with the official dep package.In addition to project executables on
> # PATH, this includes an exclusive, project- local GOPATH which enables many
> # tools like gocode and oracle to "just work".
> #
> # http://getgb.io/
> # https://golang.github.io/dep/
> #
>
> layout_golang() {
>   export GOPATH="$PWD/vendor:$PWD"
>   PATH_add "$PWD/vendor/bin"
>   PATH_add bin
> }
> ```
>
> Add this to your `~/.direnvrc` and then use `layout golang` in your project `.envrc`s. With this loaded, the support for many tools like `gocode`, `oracle`, `godoc`, etc. in editor plugins like vim-go and GoSublime will usually "just work". This layout may also be completely applicable if you are using the Go 1.5 "vendor experiment" with the official `go` tool on your project.
>
> See [this pull request](https://github.com/direnv/direnv/pull/188) for some background discussion.

#### direnv and Docker Machine

_From the [direnv wiki](https://github.com/direnv/direnv/wiki/Docker-Machine):_

> When using Docker Machine on OS X, there's an incantation that needs to be run in every shell where you want to run Docker. Direnv can help mitigate that annoyance:
>
> Add to `~/.direnvrc`
>
> ```
> use_docker-machine(){
>   local env=${1:-default}
>   echo Docker machine: $env
>   local machine_cmd=$(docker-machine env --shell bash $env)
>
>   eval $(docker-machine env --shell bash $env)
> }
> ```
>
> Any project that's using docker, add to `.envrc`:
>
> ```
> use docker-machine
> ```
>
> One nice feature to this is that you can have different Docker machine VMs per project, if needed by saying `use docker-machine special`, for instance.
>
> Note that when using this pattern, when docker-machine warns you to `eval (docker-machine env)`, you'll want instead to `direnv reload`.

#### direnv and python

If using `pipenv`, add `layout_pipenv` to the `.envrc` and the virtualenv will be loaded automatically when you enter the project directory.

### Storing secrets with direnv

Sometimes, we want to put the `.envrc` in source control but also use direnv to store secrets that should not be source controlled. With this bit of code, we can separate local secrets into `.envrc.local`:

```console
$ cat << EOF >> .envrc
if [[ -s .envrc.local ]] ; then
  source_env .envrc.local
fi
EOF
$ echo ".envrc.local" >> .gitignore
```

Commands in `.envrc.local` will be loaded by direnv, but ignored by git.

### Other examples

Trussels have thoroughly exploited `direnv` on the [TransCom/mymove](https://github.com/transcom/mymove/blob/master/.envrc) GitHub repository.
