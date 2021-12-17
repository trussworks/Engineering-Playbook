#!/usr/bin/env bash

set -euo pipefail

if [ -z "${NIX_PROFILE+x}" ]; then
  echo "NIX_PROFILE not set, not installing globally"
  echo "Try running 'direnv allow'"
  exit 1
fi

# Having NIX_SSL_CERT_FILE set means go won't use macOS keychain
# based certs
# MOST projects can leave this alone, but if you unset it in `.envrc`
# be sure to uncomment the following line
#export NIX_SSL_CERT_FILE=$HOME/.nix-profile/etc/ssl/certs/ca-bundle.crt

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# install packages
nix-env -f "${DIR}" -i
# Store a hash of this file to the hash of the nix profile
# This way if the config changes, we can warn about it via direnv
# See the nix config in .envrc
config_hash=$(nix-hash "${DIR}")
store_hash=$(nix-store -q --hash "${NIX_PROFILE}")
echo "${config_hash}-${store_hash}" > "${DIR}/../.nix-hash"
