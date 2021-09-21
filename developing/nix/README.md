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

Homebrew has more packages than `nix`, and installs them globally. For
certain things, that might work great. However, that doesn't give
projects reproducible installs.

One other difference is that versions of particular packages may be more
up to date in one or the other. E.g. as of this writing, homebrew's
`watchman` version is `2021.06.07.00` but `nix` is on `4.9.0`, which is
from sometime in 2017 or 2018.

## Installation

MacOS requires that we add an argument to the installation command. We also want to
do the single user installation. So to install, run:

```shell
sh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume --no-daemon
```

See the [macOS installation](https://nixos.org/manual/nix/stable/#sect-macos-installation)
and [single user installation](https://nixos.org/manual/nix/stable/#sect-single-user-installation)
instructions for more details.

## Getting started

After installing `nix`, you should have `~/.nix-profile/bin` in your
PATH.

### Extra Setup (Only Fish Shell Users)

If you're using the fish shell, check out
[nix-env.fish](https://github.com/lilyball/nix-env.fish).

Add this to your `~/.config/fish/config.sh`

```
set -g fish_user_paths "/Users/[your_os_username]/.nix-profile/bin" $fish_user_paths
```

### Working With Packages

This is more of a quick overview, but more details can be found in the
[nix basic package management docs](https://nixos.org/manual/nix/stable/#ch-basic-package-mgmt).

#### Installing New Packages

```shell
nix-env -i <package>
```

E.g.

```shell
nix-env -i direnv
```

#### Seeing Installed Packages

```shell
nix-env -q
```

#### Looking for Packages

```shell
nix-env -qa <package name>
```

E.g.

```shell
nix-env -qa python3
```

#### Uninstalling a Package

```shell
nix-env -e <package>
```

E.g.

```shell
nix-env -e chamber
```

### Profiles

Profiles can be used at a global level and on a per-repo basis.

#### Default

When it's installed, `nix` creates a profile which will store all the
packages you install by default. It will initially only contain the
packages needed for `nix` itself to work properly.

If you want, you could tell it to use a different profile. Either on a
one-off command or by switching the active profile. This is covered
more in the [Profiles: Advanced section](#profiles:-advanced).

Default profile is in: `/nix/var/nix/profiles/per-user/<username>/profile/`
E.g. `/nix/var/nix/profiles/per-user/felipe/profile/`

#### Repo Profiles

Ideally you'll have a profile defined at a repo level that will house
your repo's dependencies.

You can use the `NIX_PROFILE` environment variable when working with this
type of profile so that `nix` commands know to use that profile, e.g.
when installing repo dependencies. E.g.

```shell
export NIX_PROFILE=/nix/var/nix/profiles/myproject
```

Then you can pre-pend this repo profile to your `PATH` when you're working
with the repo, while keeping your default profile in the `PATH` behind the
repo profile to still have access to `nix` commands.

See
[Working with Existing Nix Expressions](#working-with-existing-nix-expressions)
for more details on how to set this up.

### Working with Existing Nix Expressions

For more info see the
[nix expressions docs](https://nixos.org/manual/nix/stable/#chap-writing-nix-expressions).

If you have a project or directory with a pre-defined `default.nix` file,
you can install have `nix` install the packages defined in it. Usually
this file lives in a `nix` directory, and you can use it like this:

```shell
nix-env -p /nix/var/nix/profiles/<profile name> -f ./nix -i
```

Create an `.envrc` file in a directory with some environment variables
your project needs:

```shell
cat <<ENVRC > .envrc
export NIX_PROFILE=/nix/var/nix/profiles/myproject

PATH_add ${NIX_PROFILE}/bin
ENVRC
```

On first run, you should get a message indicating that you will have to
explicitly authorize `direnv` to load the file:

```shell
direnv: error .envrc is blocked. Run `direnv allow` to approve its content.
```

Running this should fix it:

```shell

$ direnv allow
direnv: loading .envrc
direnv: export +DB_HOST +DB_NAME +DB_PASSWORD +DB_PORT +DB_USER -PS2
```

Your local environment variables should be updated now. Any time the `.envrc`
file has changes, you will need to re-approve the file, but it will load
automatically otherwise.

Nix installations are immutable, so by default you cannot make changes
like installing additional global software via `go get` or `npm install -g`.

To use a local directory for installing go binaries, add to your
`.envrc`:

```
export GOPATH=$PWD/.gopath
PATH_add ./.gopath/bin
```

To use a local directory for installing npm binaries:

```
export NPM_CONFIG_PREFIX=$PWD/.npmglobal
PATH_add ./.npmglobal/bin
```

## Learn More About Nix

There are several [nix guides](https://nixos.org/learn.html)
that you may find helpful in learning more about how `nix` works
if you are curious.

## Advanced Usage

### Profiles: Advanced

In the main profiles section we mention having profiles at a global and
repo level. You can also have profiles on a per-project basis.

E.g. for MilMove, you might want a profile that contains things like
`aws-vault`, `chamber`, etc. which spans more than just the `mymove`
repo. On the other hand, you may not want to use a global profile
(like the default one mentioned in the next section) because you may
need different versions of `aws-vault` for different projects.

#### Creating a Profile

You can create a new profile wherever you want, though convention seems
to be to do so in
`/nix/var/nix/profiles/`
or
`/nix/var/nix/profiles/per-user/<username>/`

To create a new profile, you can run the command below. Note that this
won't actually set this new profile as the active one, that's in the
next section.

```shell
nix-env -p /nix/var/nix/profiles/<profile name> -i nix nss-cacert
```

E.g.

```shell
nix-env -p /nix/var/nix/profiles/milmove -i nix nss-cacert
```

The `-p` is telling it the path to the profile you want to use for
this `nix` command. This can be used to work with profiles that aren't
the active profile. It can also be used with profiles that don't yet
exist (like here) or with exising profiles.

You may remember the `-i` is used for installing, so we're installing
`nix` and `nss-cacert` into our new profile.

This is needed because of an issue if you just switch to a new profile.
If you don't install `nix` itself, you lose access to `nix` commands.
And without `nss-cacert`, you can't install packages because `nix` will
get SSL cert errors.

For more info see the
[nix github issue](https://github.com/NixOS/nix/issues/1396)

#### Switching Profiles

To switch profiles, run

```shell
nix-env -S <path to profile>
```

E.g.

```shell
nix-env -S /nix/var/nix/profiles/milmove
```

Note that it is possible to switch to a profile that doesn't exist yet
and break `nix` commands. See creating profiles section for more info.

#### More Profile Info

See the [nix profiles docs](https://nixos.org/manual/nix/stable/#sec-profiles)
for more info.

## Uninstalling

Uninstalling `nix` takes a few steps:

1. Remove the `nix` entry from `fstab` using `sudo vifs`
1. Destroy the data volume using `diskutil apfs deleteVolume 'Nix Store'`
1. Remove the `nix` line from `/etc/synthetic.conf` (w/`sudo`)
