# [Tools and Practice](../README.md) / nix

## EXPERIMENT

We are experimenting with using Nix for developer environments.

## Overview

The [nix package manager](https://nixos.org/manual/nix/stable/) is a
"purely functional package manager". From that manual:

> This means that it treats packages like values in purely functional
> programming languages such as Haskell — they are built by functions
> that don’t have side-effects, and they never change after they have
> been built.
> ...
> You can have multiple versions or variants of a package installed at
> the same time. This is especially important when different
> applications have dependencies on different versions of the same
> package
> ...
> An important consequence is that operations like upgrading or
> uninstalling an application cannot break other applications, since
> these operations never “destructively” update or delete files that
> are used by other packages.

Nix is used to manage the dependencies of a project to ensure that
everyone is using the same version of all tools.

## Why Nix? Why not Docker?

Docker for local development provides many of the same advantages of
nix: reproducible environments with strict versioning. However, docker
for development, while awesome in many ways, also has some downsides.

### Advantages of Docker

The biggest downside of native development is that our deployments are
on Linux and it is possible for libraries and code paths to behave
differently on macOS than on Linux. We currently use native
development environments and haven't really hit something severe yet,
so this is more of a theoretical concern for Truss projects right now.

### Advantages of Nix

When doing local development using docker, you need to share your
mac filesystem with the docker container. Docker for mac has to keep
the files in sync between your mac and the docker container. That
synchronization has historically had poor performance. This means that
operations that access the filesystem inside docker are slow AND use
significant CPU. Running the same code outside the container is
sometimes 25-50% faster and that penalty is hard to swallow.

Using Docker for development also complicates committing code. When
using [pre-commit](../vcs/tools.md) you need access to the development
environment when committing code. This means either running git inside
docker or trying to find a way to run your pre-commit hooks inside
docker.

Running git inside docker has problems because it makes using a hardware
device for code signing like a
[yubikey](../../infrasec/tutorials/yubikey-configuration.md) much more
complicated and difficult.

Running pre-commit inside docker is not a supported configuration by
pre-commit which takes us even farther away from the well worn path.

Finally, configuring local tooling like editors to use the docker
development environment is generally much more complicated that
configuring it to use a native development environment.

For all of these reasons, a native development environment seems like
a less risky path forward.

Using Nix seems like a way to get almost all of the advantages of
docker and a native development environment.

### Differences with homebrew

Homebrew has more packages than nix, and installs them globally. For
certain things, that might work great. However, that doesn't give
projects reproducible installs.

## Installation

See the [macOS installation](https://nixos.org/manual/nix/stable/#sect-macos-installation)
instructions.

## Getting started

After installing nix, you should have `~/.nix-profile/bin` in your
PATH. If you're using the fish shell, check out [nix-env.fish](https://github.com/lilyball/nix-env.fish).

Now you want to create a new profile and install packages in that
profile. If you have a directory `nix` with a `default.nix` in it, you
can do

    nix-env -p /nix/var/nix/profiles/myproject -f ./nix -i

Create an `.envrc` file in a directory with some environment variables your project needs:

```
cat <<ENVRC > .envrc
PATH_add /nix/var/nix/profiles/myproject/bin
ENVRC
```

On first run, you should get a message indicating that you will have to explicitly authorize `direnv` to load the file:

```
direnv: error .envrc is blocked. Run `direnv allow` to approve its content.
$ direnv allow
direnv: loading .envrc
direnv: export +DB_HOST +DB_NAME +DB_PASSWORD +DB_PORT +DB_USER -PS2
```

Your local environment variables should be updated now. Any time the `.envrc` file is changed, you will need to re-approve the file, but it will load automatically otherwise.

Nix installations are immutable, so by default you cannot make changes
like installing additional global software via `go get` or `npm
install -g`.

To use a local directory for installing go binaries, add to your
`.envrc`:

    export GOPATH=$PWD/.gopath
    PATH_add ./.gopath/bin

To use a local directory for installing npm binaries:

    export NPM_CONFIG_PREFIX=$PWD/.npmglobal
    PATH_add ./.npmglobal/bin
