# [Tools and Practice](../README.md) / nix

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

### Differences with homebrew

Homebrew has more packages than nix, and installs them globally. For
certain things, that might work great. However, that doesn't give
projects reproducible installs.

## Installation

See the [macOS installation](https://nixos.org/manual/nix/stable/#sect-macos-installation)
instructions.

## Getting started

After installing nix, you should have `~/.nix-profile/bin` in your
PATH. Now you want to create a new profile and install packages in that
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
