# [Ruby](./README.md) / Installation

## Context

Installing and configuring Ruby on a Mac is a common source of confusion and
frustration for folks of all experience levels due to inconsistent and
incomplete instructions found online.

Although macOS ships with Ruby, it is not recommended to use it for development
for several reasons:

- It is usually an older version, and is only updated as part of a major macOS
  release.

- Installing gems in the system Ruby requires the use of `sudo`. In general, it
  should be assumed that everything under `/System/Library` is part of macOS and
  is administered by Apple. Files in those directories should not be modified.

- [macOS will no longer include Ruby by default in future releases](https://developer.apple.com/documentation/macos_release_notes/macos_catalina_10_15_beta_9_release_notes).

## Approaches

### Limited to one version of Ruby at a time

- Install Ruby with homebrew

- Install Ruby manually

### Allows switching between multiple versions of Ruby

- Install and configure a Ruby manager, then install Ruby

- Use a vetted automated script that sets everything up for you

## The Trussel Way

For long-term day-to-day development, we recommend installing and using Ruby via
a Ruby manager. Inevitably, when working with Ruby projects, you will need to
install multiple different versions at the same time and switch between them.

Depending on your preferences and needs, the two recommended ways to install and
use Ruby on a Mac are via local installation of a Ruby manager, or via Docker.

Reasons to use Docker:

- You don't use Ruby regularly, and only need it occasionally, such as to
  review candidate work samples
- You don't want to install anything locally

### Local installation

The easiest and most reliable way to install Ruby locally is via an automated
[script] which installs the following tools (only if you don't already have them):

- [Homebrew](https://brew.sh/)
- Apple Command Line Tools (note that you do not need the full Xcode package)
- [chruby](https://github.com/postmodern/chruby) (our recommended Ruby manager)
- [ruby-install](https://github.com/postmodern/ruby-install) (chruby's companion
  tool for installing different Ruby versions)
- The latest version of Ruby at the time you run the script
- [bundler](https://bundler.io/)

The script also updates your shell startup file (such as `.bash_profile`) to
properly configure `chruby`.

### What to do if you already have RVM or rbenv

We recommend uninstalling them before running the script.

#### Uninstall RVM

```
rvm implode
```

Other directories that might need to be removed:

- `~/.rvm`
- `~/.rvmrc`
- `/etc/rvm`

Remove any `RVM`-related lines from the following files:

- `~/.bashrc`
- `~/.bash_profile`
- `~/.profile`
- `~/.zshrc`
- `~/.zprofile`
- `~/.zshenv`

Quit and relaunch Terminal/iTerm

#### Uninstall rbenv

```
rm -rf ~/.rbenv
```

or

```
brew uninstall rbenv
```

Remove any `rbenv`-related lines from the following files:

- `~/.bashrc`
- `~/.bash_profile`
- `~/.profile`
- `~/.zshrc`
- `~/.zprofile`
- `~/.zshenv`

Quit and relaunch Terminal/iTerm

### Using Ruby via Docker

1. [Install Docker](https://github.com/trussworks/Engineering-Playbook/tree/master/developing/docker#installation)
1. `cd` into the directory of the Ruby project you want to work with
1. Run a bash shell in Docker: `docker run -it --rm=true -v $PWD:$PWD -w $PWD ruby:${DESIRED_RUBY_VERSION}-slim bash`

For example, if you want an image with Ruby 2.6.4, you would run:

```
docker run -it --rm=true -v $PWD:$PWD -w $PWD ruby:2.6.4-slim bash
```

### Ruby managers

The most popular tools that allow you to manage multiple installations of Ruby
and switch between them are: RVM, rbenv, and chruby. We recommend
[chruby](https://github.com/postmodern/chruby) because it is the smallest and
easiest to understand. We like that it does not do some of the things that other
tools do:

- Does not hook `cd`.
- Does not install executable shims.
- Does not require Rubies be installed into your home directory.
- Does not automatically switch Rubies by default.
- Does not require write-access to the Ruby directory in order to install gems.

References:

- <https://kgrz.io/programmers-guide-to-choosing-ruby-version-manager.html>
- <https://stevemarshall.com/journal/why-i-use-chruby/>
- <https://linhmtran168.github.io/blog/2014/02/27/moving-from-rbenv-to-chruby/>

[script]: https://github.com/monfresh/install-ruby-on-macos
