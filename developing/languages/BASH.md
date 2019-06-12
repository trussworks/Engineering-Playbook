# [Engineering Playbook](../README.md) / Shell programming

## Overview

Best practices tl;dr:

* Think hard before using bash. Something else is [often better](https://mywiki.wooledge.org/BashWeaknesses).
  * For portability, [dash](http://gondor.apana.org.au/~herbert/dash/) provides a minimal POSIX shell feature set.
  * For complicated tasks, a more modern language like Go or Python may be more reliable and easy to maintain.
* Use [shellcheck](https://shellcheck.net)
* Don't copy & paste code from Google or StackExchange unless you fully understand it
* Keep your bash version up to date with your package manager (e.g. `brew install bash` and routinely running `bash upgrade`), or stick to whatever version your team has agreed to standardize on (e.g. `brew pin bash`). However, be aware that behavior of bash code can vary slightly between different versions of the interpreter.

## Debugging

Bash will emit debugging output after `set -x` is executed. `set +x` to disable debugging output. `bash -x ./brokenscript` has the same effect without requiring edits to the file. It is also possible to configure the format of the output:

```sh
export PS4='+$BASH_SOURCE:$LINENO:$FUNCNAME: '
```

For extra verbose debugging, it may be useful to combine this option with `set -v`: this will also display the shell lines as they are read (i.e. before substitutions are resolved, etc).

### Tools

* [shellcheck](https://shellcheck.net) is an excellent code linter for bash that catches many common anti-patterns. [Integrations](https://github.com/koalaman/shellcheck#user-content-in-your-editor) with several popular editors are available. If you only take one thing from this document, make it "use `shellcheck`".
* [bashdb](http://bashdb.sourceforge.net/) is an interactive bash debugger inspired by gdb.

## Pitfalls

Shell programming is deceptively perilous (see [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls) on Greg's Wiki and [Beginner Mistakes](https://wiki.bash-hackers.org/scripting/newbie_traps) on Bash-Hackers Wiki). Sites like tldp.org and StackOverflow have high pagerank for shell programming questions, but code blocks posted on these sites will not uncommonly have smells or dangerous errors. Check the [Resources](#Resources) section of this document for some more trustworthy sources.

* POSIX is _very permissive_ about what can go in a file name. In fact, _anything_ except `/` and a null byte could be in a filename. Problematic characters include (but are by no means limited to) tabs, newlines, non-breaking spaces, [glob](https://mywiki.wooledge.org/glob) characters, and leading dashes. Many beginner mistakes are a result of failure to fully grok the implications of this; e.g. [word splitting](https://mywiki.wooledge.org/WordSplitting) on whitespace, or globs getting expanded in surprising ways. Aggressively [quoting](https://mywiki.wooledge.org/Quotes) substitutions without a specific reason not to is good practice.
* `bash` is ubiquitous, but bash != bash. Not infrequently, a version of bash will change its handling of a particular case, only to revert to the old behavior in the next version. MacOS ships bash 3.2.57, but as of this writing bash 5.0 is in homebrew. Other versions may be on whatever host your script will run on, but there is no portable way to force which `bash` version you will get. On many systems, `/bin/sh` resolves to `bash` in POSIX compatibility mode, but you can't be guaranteed of that: prefer being explicit and using `#!/usr/bin/env bash` for the shebang.
* Be aware of the unpredictable behavior of `set -e` / `set -o errexit`. This is useful when developing a script, but [may not behave as you expect](http://www.fvue.nl/wiki/Bash:_Error_handling). The behavior is [unpredictable](https://www.in-ulm.de/~mascheck/various/set-e/) depending on which shell version your script ultimately runs on; based on this history, consider that it may even change further in future versions of `bash`.
* Avoid using `cd` in the main thread when possible, and always include error handling in case the command fails. Losing track of this state can lead to disastrous consequences. Try to use absolute paths, or a subshell like `( cd somedir || exit ; somecommand )`.
* [Don't](https://mywiki.wooledge.org/DontReadLinesWithFor) iterate through lines in a stream with `for`.
* Prefer `[[` to `[`: `[[` is a bash extension that is a strict upgrade over `[`.

## Resources

* The bash man page: `man bash`
* [GNU Bash Manual](http://gnu.org/s/bash/manual)
* [Bash Guide](http://mywiki.wooledge.org/BashGuide)
* [Bash FAQ](http://mywiki.wooledge.org/BashFAQ)
* [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Bash-Hackers Wiki](http://wiki.bash-hackers.org/)
