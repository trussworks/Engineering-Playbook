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

You'll need to know if the project you are running requires a specific version of Ruby. The convention is for this to be defined in a project's `Gemfile`. Look for a line that looks like this:

```ruby
ruby "~> 2.7.2"
```

In the above example, any version of Ruby in the range `2.7.2` to `2.7.99999` will suffice.

#### Install Prerequisites

- Install [Homebrew](https://brew.sh/)
- Install Apple Command Line Tools using `xcode-select --install`

#### Install `asdf`

[asdf](https://asdf-vm.com) is a program that manages multiple language versions. It uses language-specific plugins to define the specifics for each language it supports. We'll be using [the officially supported plugin for Ruby](https://github.com/asdf-vm/asdf-ruby) in this guide.

Install asdf using homebrew:

```console
$ brew install asdf
```

Then, configure your shell to load asdf. The following instructions are for ZSH (the default shell in macOS); for other shells or OSes, find the relevant section in [the asdf installation documentation](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf).

```console
$ echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

Close your shell and open a new one. Type `asdf` and you should see something like the following:

```console
$ asdf
version: v0.10.2

MANAGE PLUGINS
asdf plugin add <name> [<git-url>]      Add a plugin from the plugin repo OR,
                                        add a Git repo as a plugin by
                                        specifying the name and repo url

...
```

If that is working, continue on to the next step.

#### Install asdf-ruby

To add support for Ruby to asdf, add the plugin:

```console
$ asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

Then ensure that you have a build environment setup to install Ruby:

```console
$ brew install openssl@1.1 readline
$ export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
```

Then you can install the specific version of Ruby you identified earlier:

```console
$ asdf install ruby 2.7.2
```

This command will install the [ruby-build](https://github.com/rbenv/ruby-build) tool, which it will then use to compile and setup the version of Ruby specified. This will take a few minutes. If you have issues, [the ruby-build documentation](https://github.com/rbenv/ruby-build/wiki#troubleshooting) has some helpful tips.

Close your terminal and open another one to reload the Ruby configuration.

#### Enable a specific Ruby version

Once you have installed a version of Ruby, you'll want to set that as the version for use by your project.

To set the version to use within the current directory (which will be stored in a `.tool-versions` file):

```console
$ asdf local ruby 2.7.2
```

To set the version to use globally by default:

```console
$ asdf global ruby 2.7.2
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
ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-darwin21]
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
