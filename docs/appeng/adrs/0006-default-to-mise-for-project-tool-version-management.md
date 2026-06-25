# 0006 – Default to mise for project tool version management

**Status:** Proposed TODO

**Date Accepted:** TODO

**Reviewers:** @felipe-lee, @ieffendi-twks, @ronaktruss

## Context and Problem Statement

As consultants, we work on projects of a variety of maturity levels and differing tech stacks.
Developer setup with predictable tool versioning is critical and pays dividends when we onboard or transition work, beyond the day-to-day efficiency gains.

### Decision Drivers

- Each engagement brings a different stack and toolchain.
- A consistent default lowers the friction of practitioners moving between projects
- A recommended default lowers decision energy at the start of engagements when a team is trying to build momentum.

## Decision Outcome

Default to [mise](https://mise.jdx.dev/) for tool version management, because one configuration file pins versions across tech stacks while staying compatible with other version managers' file conventions for flexibility.

### Consequences

- Projects start with a recommended default solution for simple, opinionated tool version management.
- Projects can (and should) [choose another option](#when-not-to-apply-this-default) if Mise is not the best fit for project-specific circumstances.

## When Not to Apply This Default

This is a default, not a mandate. It does not apply when:

- A client mandates its own tooling with no alternatives. We work with what they have.
- The engagement does not touch dev setup. Do not introduce tooling we will not help demonstrate.
- The project needs hermetic, fully reproducible environments. That is [Nix](#nix) territory (see [nix README](../../developing/nix/README.md)).

## Options Considered

### [mise](https://mise.jdx.dev/)

- `+` Language and framework agnostic.
- `+` Reads existing `.tool-versions`, `.nvmrc`, and asdf plugins, easing migration and per-project adoption.
- `+` Rewrites `PATH` to point at real binaries, avoiding the [shim](#what-are-shims) approach.
- `+` Bundles documented extras beyond tool management ([tasks](https://mise.jdx.dev/tasks/), [environments](https://mise.jdx.dev/environments/)).
- `-` Newer than the alternatives and less battle-tested, though Trussels have used it for several years.
- `-` One primary maintainer, a potential bottleneck despite strong community engagement.

### [asdf](https://asdf-vm.com/)

- `+` Language and framework agnostic.
- `+` Mature, with the plugin ecosystem that set the standard.
- `-` [Shim-based](#what-are-shims); the indirection breaks `which` and can confuse IDEs.

### Language-specific managers ([nvm](https://github.com/nvm-sh/nvm), [pyenv](https://github.com/pyenv/pyenv), [sdkman](https://sdkman.io/), et al.)

- `+` Strong support for their one ecosystem.
- `-` Contractors rarely stay in one language.
- `-` N stacks means N tools per machine, reinstalled per engagement, with no single manifest to declare them.

### [Homebrew](https://brew.sh/)

Homebrew installs tools; it does not pin them per project. We keep using it for that (including to install mise itself).

- `+` Ubiquitous on macOS, with a large package catalog.
- `-` Manages one global version per tool. Two engagements needing different versions collide.
- `-` A `Brewfile` pins packages, not versions; reproducibility is not its goal.
- `-` macOS and Linux only, so it does not cover projects that require Windows (often for GFEs).

### [Nix](https://nixos.org/)

Not selected here, but kept on the table if reproducibility needs outgrow version pinning.

- `+` Reproduces whole environments, not just tool versions.
- `-` Tool availability within the Nix ecosystem has been hard to determine in past use.
- `-` New tools and versions land on an unpredictable cadence, which complicates version management.
- `--` Steep learning curve.

## Appendix

### What are shims?

A [shim](<https://en.wikipedia.org/wiki/Shim_(computing)>) is a small wrapper script that stands in for a real executable.
Shim-based managers put a directory of these wrappers on the `PATH`, one per tool. Running `node` runs the shim, which selects the version and calls the real binary.

This adds a layer of indirection. `which node` returns the shim's path, not the real binary.
Tools that run outside an interactive shell, such as IDEs, debuggers, and language servers, can resolve or cache the wrong version when the shim's environment is not fully set up.
