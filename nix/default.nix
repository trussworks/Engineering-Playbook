# to install
# nix-env -p /nix/var/nix/profiles/eng-playbook -f nix -i
#
# use
#
# https://lazamar.co.uk/nix-versions/
# to find rev for specific package version

let
  pkgs = import <nixpkgs> {};
  inherit (pkgs) buildEnv;
in buildEnv {
  name = "eng-playbook-packages";
  paths = [

    (import (builtins.fetchGit {
      # Descriptive name to make the store path easier to identify
      name = "bash-5.1-p4";
      url = "https://github.com/NixOS/nixpkgs/";
      ref = "refs/heads/nixpkgs-unstable";
      rev = "253aecf69ed7595aaefabde779aa6449195bebb7";
    }) {}).bash_5

    (import
      (builtins.fetchGit {
        # Descriptive name to make the store path easier to identify
        name = "nodejs-16.16.0";
        url = "https://github.com/NixOS/nixpkgs/";
        ref = "refs/heads/nixpkgs-unstable";
        rev = "6c6409e965a6c883677be7b9d87a95fab6c3472e";
      })
      { }).nodejs-16_x

    (import (builtins.fetchGit {
      # Descriptive name to make the store path easier to identify
      name = "circleci-cli-0.1.15663";
      url = "https://github.com/NixOS/nixpkgs/";
      ref = "refs/heads/nixpkgs-unstable";
      rev = "23cedc3088a628e1f5454cab6864f9b1a059e1ba";
    }) {}).circleci-cli

    (import (builtins.fetchGit {
      # Descriptive name to make the store path easier to identify
      name = "pre-commit-2.14.0";
      url = "https://github.com/NixOS/nixpkgs/";
      ref = "refs/heads/nixpkgs-unstable";
      rev = "9c3de9dd586506a7694fc9f19d459ad381239e34";
    }) {}).pre-commit
  ];

  # the pre-commit hooks expects the binary to be `circleci`
  postBuild = ''
  ln -s $out/bin/circleci-cli $out/bin/circleci
  '';
}
