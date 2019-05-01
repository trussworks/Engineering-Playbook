# [ansible](./README.md) / Ansible Primer

## Context

Ansible is a Python-based configuration management tool owned and supported by Red Hat; while it is essentially a
remote-execution tool originally designed to orchestrate a wider environment, it can also be used as a provisioning tool 
with things like Packer, which is where you are most likely to see it in a Truss environment.

This primer is not intended to replace the official documentation for Ansible, which can be found at
https://docs.ansible.com/ansible/latest/index.html. It is only intended to provide a high-level overview and give you an 
idea where to find more detailed resources.

## Setting Up Your Environment

When working with Ansible, you’ll probably want to set up a virtual environment so that you can install ansible and any
other Python modules necessary without contaminating your system Python installation. If you’ve never done this before,
this tutorial should help: https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv/. If you're an
experienced Python programmer and want to use `pipenv` or another alternative, that's perfectly fine too.

Activate your virtualenv and run: `pip install ansible`

This should install the ansible modules you’ll need and any prerequisites into your virtualenv.

## Overview

Ansible is an agentless configuration management tool; it does not require any additional software to be installed on the
target hosts, unlike say Puppet. Individual components of a system’s configuration are grouped into *roles*; for
instance, installing and configuring Apache might be contained within an “apache” role. Many of these are available in
Ansible Galaxy, a library of open-sourced roles that can be downloaded and used, similar to the Puppet Forge or Chef
Supermarket.

Each role contains *tasks*; these tasks could be installing a package, writing out a configuration file from a template,
restarting a service, or even running an arbitrary shell script. These are defined via YAML configurations. A role may
also contain other components, such as variables or handlers.

Ansible modules can be tested with [Molecule](./molecule-primer.md), which is the Red Hat-supported automated testing
method. Molecule can be configured to spin up a docker container or EC2 instance, among other providers, and run your
role in isolation to make sure it works as intended. Molecule will also use
[ansible-lint](https://github.com/ansible/ansible-lint) to lint your modules, which we recommend you install as a
precommit hook in any Ansible repositories you’re working in. You can do that by adding the following to
`.pre-commit-config.yaml` in the repository root, assuming you've installed precommit:

```yml
repos:
  - repo: https://github.com/ansible/ansible-lint.git
    rev: v4.1.0
    hooks:
      - id: ansible-lint
        types: [yaml]
```

## Ansible Repos

In general, if at all possible, each Ansible role you write should use a separate repo, so that it can be used
elsewhere. This means it should be written for the general case as much as possible; environment-specific variables
should have sane defaults and then get overridden if necessary in the playbook that calls them. It also means you should
have some minimum level of documentation so that people can see how your role is meant to be used in the wild.
