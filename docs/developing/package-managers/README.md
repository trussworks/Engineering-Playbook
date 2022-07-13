# Package Managers

It is useful to divide software into a few broad categories based on how it is used and best managed.

## General Purpose Software

The most common general purpose software are command line tools that are used across many projects and don't require specific versions. Some examples include [direnv](https://direnv.net/), [entr](http://eradman.com/entrproject/limits.html), and [jq](https://stedolan.github.io/jq/), along with alternative shells like [fish](https://fishshell.com) or desktop applications such as [Postico](https://eggerapps.at/postico/).

In general, we recommend using the native package manager supplied by your operating system to install this kind of software. On a Mac, use [homebrew](https://brew.sh).

:::note

In situations where a project requires a specific version or build of what would otherwise be considered general purpose, that software should not be considered general purpose within the context of the project.

We don't recommend using homebrew to install anything that a project will need a specific version of.

:::

## Language Runtimes

Use [asdf](package-managers/asdf) to install and activate specific versions of language runtimes. You will need to also setup the corresponding [language plugin](https://asdf-vm.com/manage/plugins.html) for the language you want to manage with asdf.

## Language-specific Dependency Managers

Many programming languages have their own package managers to install and manage project dependencies. We recommend using the following dependency managers:

- [npm](https://www.npmjs.com/) for JavaScript and TypeScript (Node)
- [Poetry](https://python-poetry.org/) for Python
- [RubyGems](https://rubygems.org/) for Ruby
- `go mod` for Go

## Use Docker for Services and Anything Else

If a project needs to connect to a running service (such as a database), we recommend using Docker Compose to orchestrate and manage those dependencies without needing to install anything directly on a developer's machine.

Additionally, Docker is a useful way to run specific versions of software that doesn't share an ecosystem with the rest of a project. We've done this successfully to leverage [Flyway](https://flywaydb.org), a Java-based database migration system, within a project that didn't otherwise use Java.

## Other Project-specific Software

Any software that doesn't described by one of the above categories belongs to this one. It's difficult to manage this kind of software because it tends to not neatly fit within the domain of one of the tools covered in earlier sections.

As a general rule of thumb, minimize the dependencies of your project that can't be managed with asdf, a language-specific dependency manager, or Docker.

:::note

If you find yourself needing a lot of this kind of software, you might benefit from using [nix](./nix/README.md).

:::
