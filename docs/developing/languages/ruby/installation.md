# Installation

## Context

Although macOS ships with Ruby, it is not recommended to use it for development
for several reasons:

- It is usually an older version, and is only updated as part of a major macOS
  release.

- Installing gems in the system Ruby requires the use of `sudo`. In general, it
  should be assumed that everything under `/System/Library` is part of macOS and
  is administered by Apple. Files in those directories should not be modified.

## The Trussel Way

We recommend installing and managing Ruby using asdf.

It's also possible to use Docker, instructions for which are at the bottom of this document.

### Setup Instructions

If you don't have a specific project in mind, install the [latest version that has been released](https://www.ruby-lang.org/en/news/) and then configure that to be the global default version.

If you are planning to work on a specific project, you'll need to know what version of Ruby that project requires. The convention is for this to be defined in a project's `Gemfile`. Look for a line that looks like this:

```ruby
ruby "~> 3.1.2"
```

In the above example, any version of Ruby in the range `3.1.2` to `3.1.99999` will suffice.

#### Install Prerequisites

- Install [Homebrew](https://brew.sh/)
- Install Apple Command Line Tools using `xcode-select --install`

#### Install `asdf`

Refer to [asdf](../../package-managers/asdf/README.md) for more information.

#### Install asdf-ruby

We'll be using [the officially supported plugin for Ruby](https://github.com/asdf-vm/asdf-ruby) in this guide. Add the plugin to your local asdf installation:

```console
$ asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

Then ensure that you have a build environment setup to install Ruby. We're using the pre-built OpenSSL from homebrew as it more reliably installs than other options:

```console
$ export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
```

Then you can install the specific version of Ruby you identified earlier:

```console
$ asdf install ruby 3.1.2
```

This command will install the [ruby-build](https://github.com/rbenv/ruby-build) tool, which it will then use to compile and setup the version of Ruby specified. This will take a few minutes. If you have issues, [the ruby-build documentation](https://github.com/rbenv/ruby-build/wiki#troubleshooting) has some helpful tips.

Close your terminal and open another one to reload the Ruby configuration.

#### Enable a specific Ruby version

Once you have installed a version of Ruby, you'll want to set that as the version for use by your project.

To set the version to use within the current directory (which will be stored in a `.tool-versions` file):

```console
$ asdf local ruby 3.1.2
```

To set the version to use globally by default (handy for ad-hoc use):

```console
$ asdf global ruby 3.1.2
```

#### Verify that it worked

First, make sure that the `ruby` command is being resolved to one provided by asdf:

```console
$ which ruby
/Users/<USERNAME>/.asdf/shims/ruby
```

If you see something like `/usr/bin/ruby`, then your shell isn't picking up your asdf configuration.

Check that you have the correct Ruby installed:

```console
$ ruby --version
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]
```

#### Install bundler

Almost all Ruby projects will need bundler installed. You can do that with:

```console
$ gem install bundler
```

At this point, you can probably switch over to your project's setup instructions. They will usually start off by telling you to run `bundle install`.

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

Using Docker makes sense if :

- You don't use Ruby regularly, and only need it occasionally, such as to
  review candidate work samples
- You don't want to install anything locally

1. [Install Docker](https://github.com/trussworks/Engineering-Playbook/tree/master/developing/docker#installation)
1. `cd` into the directory of the Ruby project you want to work with
1. Run a bash shell in Docker: `docker run -it --rm=true -v $PWD:$PWD -w $PWD ruby:${DESIRED_RUBY_VERSION}-slim bash`

For example, if you want an image with Ruby 2.6.4, you would run:

```
docker run -it --rm=true -v $PWD:$PWD -w $PWD ruby:2.6.4-slim bash
```
