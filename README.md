# MilMove Documentation

<<<<<<< HEAD
[![GitHub pages deployment](https://github.com/transcom/mymove-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/transcom/mymove-docs/actions/workflows/deploy.yml)
=======
![Build](https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/pre_commit.yaml/badge.svg)

## Purpose
>>>>>>> main

## Overview

This repo contains the documentation for [MilMove](https://github.com/transcom/mymove), a possible next generation version of the Defense Personal Property System (DPS). DPS is an online system managed by the U.S. [Department of Defense](https://www.defense.gov/) (DoD) [Transportation Command](http://www.ustranscom.mil/) (USTRANSCOM) and is used by service members and their families to manage household goods moves.

This website is created using [Docusaurus](https://docusaurus.io/), a React-based static site generator. Information about running and testing the MilMove app, and coding against its APIs, is located here. If you have questions or notice inaccuracies, feel to either (if you are on the project) edit the docs directly or (if you an external contractor) open an issue regarding the problem.

## Layout

- `/docs/` contains all of our documentation files (in markdown). If you are here to edit or peruse the docs, this is where you want to go.
- `/src/` contains our React components and pages. Currently, this only contains our main page. It will be rare to need to be in this folder.
- `/static/` contains all of our images and other static files. If you want to add a screenshot or other visual to your doc page, you will need to upload it to this folder.
- `/sidebars.js` contains the sidebars for our doc folders. We autogenerate our sidebars in order to minimize how often our JavaScript files need to be updated. It is highly unlikely that you will need to update this file directly.

## Running locally (on macOS)

### Clone the repo

1. Open your terminal/command line.
2. Clone the repo onto your machine and `cd` into it:
   ```
   git clone https://github.com/transcom/mymove-docs.git && cd mymove-docs
   ```
### With Homebrew

```shell
bash <(curl -s https://raw.githubusercontent.com/trussworks/fresh-brew/main/fresh-press)
```

If you're using the Fish shell, run this command instead:

```shell
bash (curl -s https://raw.githubusercontent.com/trussworks/fresh-brew/main/fresh-press | psub)
```

This command will install Homebrew if you don't already have it, or update it
if you already have it. It will also install or update `git` and the GitHub CLI,
as well as the dependencies that are specific to this project, as defined in
`fresh-brew.local` and `Brewfile.local`. Finally, it will launch the MilMove docs
website for you. Read more about the script by visiting the repo:
https://github.com/trussworks/fresh-brew.

If the script fails, pay attention to any errors or warnings from Homebrew in
the terminal. Homebrew usually provides detailed instructions for fixing things,
so read them carefully and follow their instructions. For example, a common issue
is missing or outdated Command Line Tools. The message looks like this:

```
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences or run:
  softwareupdate --all --install --force

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/more/.
```

If you see this, follow the instructions, then quit and restart your terminal
once the Command Line Tools are installed, and run the setup script above again.


### With Nix

1. Install or update Homebrew using the same script as in the previous section,
but without running the `*.local` scripts:
```shell
export SKIP_LOCAL=true
bash <(curl -s https://raw.githubusercontent.com/trussworks/fresh-brew/main/fresh-press)
```

For Fish shell:
```shell
export SKIP_LOCAL=true
bash (curl -s https://raw.githubusercontent.com/trussworks/fresh-brew/main/fresh-press | psub)
```

1. Install Nix if you don't already have it:
```
sh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume --no-daemon
```

Note: if you're using the Fish shell, you'll need to [complete an extra step](https://github.com/trussworks/Engineering-Playbook/tree/main/developing/nix#extra-setup-only-fish-shell-users).

2. Quit and restart your terminal
3. Run `direnv allow`
4. Run `nix/update.sh`
5. Run `yarn install`
6. Run `yarn start`

The site should load automatically in your browser at
[http://localhost:4000/mymove-docs/](http://localhost:4000/mymove-docs/).

## Deployment

This site is currently deployed using GitHub pages: https://transcom.github.io/mymove-docs/. We're using GitHub actions to redeploy whenever changes are merged to the main branch, which includes all commits that are made and saved directly in GitHub.

Be aware that GitHub pages has a _soft_ limit of 10 deploys per hour, and it is possible we could run up against this (read more about the limitations of pages here: [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#usage-limits)). It should not have a significant affect on our day-to-day activities, however, and may never become a noticeable issue.

## API Documentation

[Please read more about how Redocusaurus is being used for API documentation.](https://transcom.github.io/mymove-docs/docs/dev/tools/redocusaurus)
