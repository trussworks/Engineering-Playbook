⚠️❗ __The engineering playbook is now deployed at [playbook.truss.dev](https://playbook.truss.dev/) using [Docusaurus](https://docusaurus.io/).
We recommend you read it there.
Links and formatting from the old layout may be broken.
Known problems are reported to [GitHub issues](https://github.com/trussworks/Engineering-Playbook/issues).
Feel free to open a PR if you see something that can be fixed.
Thanks for your patience!__ ❗⚠️

# Engineering Playbook

[![Build](https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/pre_commit.yaml/badge.svg)](https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/pre_commit.yaml)

[![Deployment](https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/deploy.yaml/badge.svg)](https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/deploy.yaml)

## Purpose

Within Truss we have much experience of and opinions regarding engineering tools, processes, and practices. The problems and choices that we encounter in our day-to-day practice are rarely new. Having a straightforward way of applying the things we collectively know to the problems we face would be a source of great efficiency for us.

This collection of documents is intended to be simple and searchable, each one containing the essence of Truss opinions on a particular topic. Whilst any Trussel is free to edit these documents, there is some expectation that these are to be curated by the broad engineering community at Truss. To that end, proposed changes should be submitted via a PR and SMEs will be identified to act as curators for particular areas of knowledge.

We build and deploy these docs using [Docusaurus](https://docusaurus.io/), a React-based static site generator, and GitHub Pages.

## Layout

- `/docs/` contains all of our documentation files (in markdown). If you are here to edit or peruse the docs, this is where you want to go.
- `/src/` contains our React components and pages. Currently, this only contains our main page. It will be rare to need to be in this folder.
- `/static/` contains all of our images and other static files. If you want to add a screenshot or other visual to your doc page, you will need to upload it to this folder.
- `/sidebars.js` contains the sidebars for our doc folders. We autogenerate our sidebars in order to minimize how often our JavaScript files need to be updated. It is unlikely that you will need to update this file directly.

## Contents

- [ATOs & Risk Management Framework](./docs/compliance/README.md) - A high level overview of Federal compliance requirements.
- [Developer Tools & Practice](./docs/developing/README.md) - Opinions and resources relating to the tools we use to do our work.
- [Documentation](./docs/documentation/README.md) - How to write effective documentation your users will read.
- [Web Development](./docs/web/README.md) - Languages, frameworks and tools used to develop web applications
- [InfraSec](./docs/infrasec/README.md) - Infrastructure and security are foundational disciplines for building and maintaining stable systems.
- [Leadership](./docs/leadership/README.md) - Guidance and resources around being an Engineering Lead or Manager at Truss.
- [Templates](./docs/templates/README.md) - "Ooh, ooh... I have a thing to add." Here's how to add to this Playbook.
- [Practices](./docs/practices/README.md) - Resources on how the Truss Engineering practices organize.

## Initial Setup (on MacOS)

### Clone the repo

1. Open your terminal/command line.

1. Clone the repo onto your machine and `cd` into it:

   ```
   git clone https://github.com/trussworks/Engineering-Playbook.git && cd Engineering-Playbook
   ```

### Install Dependencies

Choose one of the following methods to install the dependencies.

#### Manually

```
brew update
brew install nodenv
brew install yarn
brew install pre-commit
pre-commit install
```

#### With `fresh-brew`

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
[trussworks/fresh-brew](https://github.com/trussworks/fresh-brew).

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

#### With Nix

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

1. Quit and restart your terminal
1. Run `direnv allow`
1. Run `nix/update.sh`

### Run the server

```
npm install
npm start
```

The site should load automatically in your browser at
[http://localhost:4000/Engineering-Playbook/](http://localhost:4000/Engineering-Playbook/).

If you would like to enable the local search, use the production build instead:

```
npm run build
npm run serve
```

## Deployment

This site is currently deployed using GitHub pages: [https://trussworks.github.io/Engineering-Playbook/](https://trussworks.github.io/Engineering-Playbook/). We're using GitHub actions to redeploy whenever changes are merged to the main branch, which includes all commits that are made and saved directly in GitHub.

Be aware that GitHub pages has a _soft_ limit of 10 deploys per hour, and it is possible we could run up against this (read more about the limitations of pages here: [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#usage-limits)). It should not have a significant affect on our day-to-day activities, however, and may never become a noticeable issue.

## Licenses

This project uses two licenses. One is for the software components written by
TrussWorks, such as but not limited to plugins, modifications, and scripts to
integrate and deliver the Docusaurus repository. This license the is the
Apache-2.0 license. The other license is for non-software components such as
documentation which mostly reside in the `docs/` directory. This license is the
CCA-4.0 license.

### Apache License, Version 2.0

This license covers the software components of this project and not the
documentation (non-software) components of this project.

This license only references software components written by TrussWorks, LLC to
customize or modify the Docusaurus documentation framework. A list of software
components that fall under this license will be referenced in this file by file
path.

### Creative Commons Attribution 4.0 International Public License

This license covers the documentation (non-software) components of this project
and not the software components of this project.

The non-software components of this project mostly exist in the `docs/`
directory but include other documentation files within the repository. A list of
non-software components outside of the `docs/` directory will be referenced in
this file by file path.

- ./README.md
- ./CODE_OF_CONDUCT.md
- ./CONTRIBUTING.md
