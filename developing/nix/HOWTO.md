# NIX HOWTO

This HOWTO assumes you already have nix installed.

## Nix Channels

We currently recommend using the [Nix Unstable channel][hydra-nixpkgs-unstable]
by default as it contains the latest tested updates on a rolling basis. This
means that the branch for the [NixOS/nixpkgs repository][gh-nixpkgs] that is
used is the `nixpkg-unstable` branch.

### Troubleshooting Git-related errors

In the step above, you may need to modify the `ref="{BRANCH_NAME}";` line
with the `master` branch for the [NixOS/nixpkgs repository][gh-nixpkgs] if you
encounter any Git-related errors.

Trussels using Nix for package management have run into issues related to
commits not being found on that specific `nixpkgs-unstable` branch. The
[nix-package-search][ahobson-nix-package-search] will report the `ref` to be
`nixpkgs-unstable` but the actual commit may not exist on that branch due to
integration errors within the [NixOS/nixpkgs repository][gh-nixpkgs] that
eventually may correct itself.

To read up on Nix Channels, see [their documentation][docs-nix-channels].
While the branch `nixpkgs-unstable` specifically lags behind `master` to
thoroughly test things, some of our Truss projects are required to be
up-to-date. This means that we may need to update some `ref="";` sections of
the Import statement to point to `master` to upgrade or downgrade a single
package in order to maintain our obligations to keep our dependencies
up-to-date.

## Setting up a new project

1. Create a `nix` directory

   mkdir -p `./nix`

1. Create `nix/update.sh` with the content below and make the script
   executable

   ```bash
   #!/usr/bin/env bash

   set -euo pipefail

   if [ ! -v NIX_PROFILE ]; then
     echo "NIX_PROFILE not set, not installing globally"
     echo "Try running 'direnv allow'"
     exit 1
   fi

   # Having NIX_SSL_CERT_FILE set means go won't use macOS keychain based certs
   # MOST projects can leave this alone, but if you unset it in `.envrc`
   # be sure to uncomment the following line
   # export NIX_SSL_CERT_FILE=$HOME/.nix-profile/etc/ssl/certs/ca-bundle.crt

   DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
   # install packages
   nix-env -f "${DIR}" -i
   # Store a hash of this file to the hash of the nix profile
   # This way if the config changes, we can warn about it via direnv
   # See the nix config in .envrc
   config_hash=$(nix-hash "${DIR}")
   store_hash=$(nix-store -q --hash "${NIX_PROFILE}")
   echo "${config_hash}-${store_hash}" > "${DIR}/../.nix-hash"
   ```

1. Create a `nix/default.nix` that looks like the below, but replace
   `_YOUR_PROJECT_NAME_` with the name of your project

   ```
   let
     pkgs = import <nixpkgs> {};
     inherit (pkgs) buildEnv;
   in buildEnv {
     name = "_YOUR_PROJECT_NAME_-packages";
     paths = [
     ];
   }
   ```

1. Create/add to your `.envrc` with the following, replacing `_YOUR_PROJECT_NAME_`

   ```
   # if nix is installed, use it
   if [ ! -r .nix-disable  ] && has nix-env; then
     # set NIX_PROFILE so nix-env operations don't need to manually
     # specify the profile path
     export NIX_PROFILE="/nix/var/nix/profiles/per-user/${LOGNAME}/_YOUR_PROJECT_NAME_"

     # Having NIX_SSL_CERT_FILE set means go won't use macOS keychain
     # based certs
     # MOST projects can leave this set, but if you are using go and
     # custom certificates, you might need to futz with this
     # export NIX_SSL_CERT_FILE_ORIG=$NIX_SSL_CERT_FILE
     # unset NIX_SSL_CERT_FILE

     nix_dir="nix"
     # add the nix files so that if they change, direnv needs to be reloaded
     watch_file "${nix_dir}"/*.nix
     config_hash=$(nix-hash "${nix_dir}")
     store_hash=$(nix-store -q --hash "${NIX_PROFILE}")

     # The .nix-hash file is created by nix/update.sh
     if [ ! -r .nix-hash ] || ! grep -q "${config_hash}-${store_hash}" .nix-hash; then
       log_status "WARNING: nix packages out of date. Run ${nix_dir}/update.sh"
     fi

     # add the NIX_PROFILE bin path so that everything we just installed
     # is available on the path
     PATH_add ${NIX_PROFILE}/bin

     # If you use go, add this
     #
     # nix is immutable, so we need to specify a path for local changes, e.g.
     # binaries can be installed local to this project
     export GOPATH=$PWD/.gopath
     PATH_add ./.gopath/bin

     # If you use node, add this
     #
     PATH_add ./node_modules/.bin
     export NPM_CONFIG_PREFIX=$PWD/.npmglobal
     PATH_add ./.npmglobal/bin

   fi
   ```

1. Use [nix-package-search][ahobson-nix-package-search] to find your package
   versions and add them to your `nix/default.nix` in the `paths` section. Your
   new `default.nix` might look something like (with NAME replaced with your
   project)

   ```
   let
     pkgs = import <nixpkgs> {};
     inherit (pkgs) buildEnv;
   in buildEnv {
     name = "_YOUR_PROJECT_NAME_-packages";
     paths = [

       (import (builtins.fetchGit {
         # Descriptive name to make the store path easier to identify
         name = "nodejs-14.17.0";
         url = "https://github.com/NixOS/nixpkgs/";
         ref = "refs/heads/nixpkgs-unstable";
         rev = "b65a64086f8c136545955d447e1918b97dad02af";
       }) {}).nodejs-14_x
     ];
   }
   ```

1. Use `direnv allow` to set up the new environment variables

1. Run `./nix/update.sh` to install the packages. It might take a
   while the first time and there isn't a progress bar or anything to
   let you know it's working

1. When the update script finishes, you are ready to go

1. You can then update `nix/default.nix` when you need to add/update
   packages and then `direnv` will let you know your packages are out
   of date and you need to run `./nix/update.sh`

[ahobson-nix-package-search]: https://ahobson.github.io/nix-package-search/#/
[docs-nix-channels]: https://nixos.wiki/wiki/Nix_channels
[gh-nixpkgs]: https://github.com/NixOS/nixpkgs
[hydra-nixpkgs-unstable]: https://hydra.nixos.org/job/nixpkgs/trunk/unstable
