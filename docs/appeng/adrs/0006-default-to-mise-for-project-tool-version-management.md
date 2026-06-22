---
title: Default to mise for tool version management
---

# 0006 - Default to mise for tool version management

**Status:** Proposed TODO

**Date Accepted:** TODO

**Reviewers:** @felipe-lee, @ieffendi-twks, @ronaktruss

## Context

As consultants, every engagement means a new codebase, a new stack, and a new pile of tools to install before we can run anything.
We need one tool we can bring to any project that pins every runtime it needs, in one file, the same way on every machine.

## Decision

Default to [mise](https://mise.jdx.dev/) to manage tool dependencies on our projects.

Mise covers every runtime we'll meet and respects whatever a client repo already uses: `.tool-versions`, `.nvmrc`, asdf plugins.
Tools are pinned in one `mise.toml`, installed the same way locally and in CI, with no shims in the way.
Because mise does not rely on shims, comamnds like `which {tool}` points to real binaries, meaning IDEs and other tools that don't typically run inside interactive shells resolve binaries consistently.

Its task runner and env management are bonuses (and near drop-in replacements for Makefile and direnv), but they're not the basis for _this_ decision.

## Why is this Applicable to the Practice as a Whole

Because it doesn't care what the stack is. One tool works on a Node project, a Python project, a JVM project, or all three at once.
It slots in to new and existing repos alike, and we can be as opinionated (or not) as we want about its use.
Setup is fast, and the knowledge transfers between engagements instead of resetting with each one.

## When to Not Implement This Decision

- The client mandates their own dev tooling accepting no alternatives. We work with what they have.
- We're not touching dev setup at all on the engagement. Don't introduce tooling that we won't help demonstrate the advantages of.
- The project needs hermetic, fully reproducible environments. That falls into Nix territory (See [nix README](../../developing/nix/README.md)).

## Options Considered

### [mise](https://mise.jdx.dev/)

#### Pros

- `+` Language and framework agnostic.
- `+` Seamless interoperability with other popular tool version manager conventions for easy migration or even individual adoption if a project already uses a different tool version manager.
- `+` Points to real binaries by rewriting `PATH`, as opposed to the shim approach.
- `+` Includes additional useful, well-documented features beyond tool management (e.g. [tasks](https://mise.jdx.dev/tasks/), [environments](https://mise.jdx.dev/environments/)).

#### Cons

- `-` mise is a relatively newer tool at the time of writing. While Trussels have used it with success for several years, it is not as battle-tested as other options.
- `-` At the time of writing, mise has one primary maintainer which presents a potential for bottlenecks despite strong community engagement.

### [asdf](https://asdf-vm.com/)

#### Pros

- `+` Language and framework agnostic.
- `+` Mature, and its plugin ecosystem set the standard.
- `+` The Go rewrite (0.16+) fixed the old performance complaints.

#### Cons

- `-` It's shim-based, and the indirection breaks `which` and can confuse IDEs, leading to potential developer swirl.
- `-` Everything it does for us, mise also does, including running its plugins.

### Language-specific managers ([nvm](https://github.com/nvm-sh/nvm), [pyenv](https://github.com/pyenv/pyenv), [sdkman](https://sdkman.io/), et al.)

#### Pros

- `+` Native support for the specific language/framework likely means unparalleled support for that narrow ecosystem

#### Cons

- `-` Contractors don't typically stick to one language.
- `-` N stacks means N tools per machine, reinstalled per engagement, with no single manifest to declare them.

### [Homebrew](https://brew.sh/)

Brew answers a different question: it installs tools, it doesn't pin them per project.
We'll keep using it for what it's good at, including installing mise itself.

#### Pros

- `+` Ubiquitous on most macOS machines, with an enormous package catalog.

#### Cons

- `-` Manages one version of each tool globally. Two engagements wanting different tool versions collide causing issues for practitioners splitting their time.
- `-` A `Brewfile` declares version-agnostic packages. Reproducibility isn't the tool's goal.
- `-` Mac (and Linux) only, which does not suit projects where Windows support (often for GFEs) is required.

### [Nix](https://nixos.org/)

While not selected for this specific decision, we're fond of Nix, so it stays on the table if reproducibility needs outgrow basic version pinning and ease of use.

#### Pros

- `+` Reproduces entire environments, not just tool versions.

#### Cons

- `-` Where we've used Nix in the past, clear information on the availability of tools within the Nix ecosystem was not strightforward.
- `-` New tools and tool versions don't land in the Nix ecosystem on a predictable cadence, making version management challenging.
- `--` _Steep_ learning curve.
