# Command Line Tools

## Overview

This is a list of recommended tools used at Truss to enhance productivity and
developer happiness.

You may also be interested in these other pages from the Truss Engineering Playbook:

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Terminal Emulators

- [iTerm2](https://iterm2.com/)

### Resources

#### iTerm2

##### Configuration

- [itermocil](https://github.com/TomAnthony/itermocil) - Create pre-defined
  window/pane layouts and run commands in iTerm

## Shells

- bash
- zsh
- [fish](https://fishshell.com/)

### Resources

#### zsh

##### Frameworks

- [Oh My Zsh](https://ohmyz.sh/)
- [Prezto](https://github.com/sorin-ionescu/prezto)

#### fish

##### Frameworks

- [Oh My Fish](https://github.com/oh-my-fish/oh-my-fish)

##### Configuration

- [chruby-fish](https://github.com/JeanMertz/chruby-fish) - Thin wrapper around
  `chruby` to make it work with the Fish shell

## File compression and archiving

- [unar](https://unarchiver.c3.cx/commandline) Universal unarchiver
- [zstd](https://facebook.github.io/zstd/) Ridonkulously fast (de)compression algorithm

## git tools

- [tig](https://github.com/jonas/tig) ncurses interface for git
- [github-cli](https://github.com/cli/cli) A `git` helper for GitHub specific operations from the command-line

## Colorizers

- [grc](https://korpus.juls.savba.sk/~garabik/software/grc.html) Generic colorizer.
  For example: `alias ping='\grc --stdout --stderr --colour=on ping'`
- [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy) Prettier colored diffs in git.
- [diffr](https://github.com/mookid/diffr) Another colordiff alternative.
  For example: `git diff | diffr`

## Navigation

- [tmux](https://github.com/tmux/tmux) Terminal multiplexer with client-server architecture.
  Can easily recover lost shell sessions with [tpm](https://github.com/tmux-plugins/tpm), [tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect) and (optionally) [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum)
- [ranger](https://ranger.github.io/) An ncurses file manager with vim-like bindings
- [exa](https://the.exa.website/) An `ls` replacement with git integrations.
  For example: `alias ll='exa --long --header --git --links --group-directories-first --color-scale --time-style=long-iso'`

## Database access

- [pgcli](https://www.pgcli.com/) - CLI for Postgres with auto-completion and
  syntax highlighting.

## Data Manipulation

### JSON

- [jq](https://stedolan.github.io/jq/)

## Document format conversion

- [dos2unix](https://waterlan.home.xs4all.nl/dos2unix.html) Efficient conversion of line terminators between DOS and Unix format, and back
- [pandoc](https://pandoc.org/) Swiss-Army Knife of rich text document format conversion

## Plain text search tools

- [ripgrep](https://github.com/BurntSushi/ripgrep) Stronger, faster, better grep.

## macOS system administration

- [mas](https://github.com/mas-cli/mas) Control the Mac App Store from the command line

## Remote host administration

- [keychain](https://www.funtoo.org/Keychain) User-friendly front-end to `ssh-agent`
- [mosh](https://mosh.org/) Mobile-friendly `ssh` replacement that performs better on unreliable network connections.

## HTTP clients

- [httpie](https://httpie.org/)

## Terminal recording/sharing

- [asciinema](https://asciinema.org/) - record and share Terminal sessions as
  text that you can copy and paste.

## Learning/Debugging/Looking Things Up

- [howdoi](https://github.com/gleitz/howdoi) - instant coding answers via the command line
- [tldr](https://tldr.sh/) - simplifies `man` with practical examples

## \*nix tools

- cal - quick monthly calendar view for the command line
