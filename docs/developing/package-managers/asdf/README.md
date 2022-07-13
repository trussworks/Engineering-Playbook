# asdf

[asdf](https://asdf-vm.com) is a program that manages multiple language versions. It uses language-specific plugins to define the specifics for each language it supports.

## Installation

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

## Language Plugins
