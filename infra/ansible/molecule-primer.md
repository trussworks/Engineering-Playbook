# [ansible](./README.md) / Molecule Primer

Molecule is the officially supported testing framework for Ansible. For now, this is mostly just a collection of
experiences and resources you can use when adding testing to your own Ansible roles; take these with a grain of salt.

## Molecule Documentation and Articles

These resources will likely come in handy when trying to get Molecule up and running for yourself:
* Molecule Official Docs: https://molecule.readthedocs.io/en/latest/
* Testing Your Ansible Roles with Molecule (Jeff Geerling):
  https://www.jeffgeerling.com/blog/2018/testing-your-ansible-roles-molecule
* Test-driven Infrastructure Development with Ansible and Molecule (Jonas Hecht):
  https://blog.codecentric.de/en/2018/12/test-driven-infrastructure-ansible-molecule/
* Continuous Cloud Infrastructure With Ansible, Molecule, and TravisCI on AWS (Jonas Hecht):
  https://blog.codecentric.de/en/2019/01/ansible-molecule-travisci-aws/

## Setup

You will want to use some sort of virtual environment for Molecule; hopefully you're already doing this with Ansible
anyway. Using Python 3 as the Python binary is also highly recommended. In addition to what you need for ansible, you
will need these Python modules as well:
* molecule
* molecule[docker] - For testing with docker containers (the default)
* molecule[ec2] - For testing on ec2 instances
* docker-py
* boto

## Creating a Role or Scenario

If you’re just about to start making an Ansible role, you can use Molecule to do it and it will automatically build out
the Ansible role directory structure in the Galaxy-expected format in addition to creating the files needed for Molecule
testing. You can do this with:

> `molecule init role -r your-role-name`

If you just want to add a Molecule scenario (a single test framework) to an already-existing role, go into the role
directory and run this command:

> `molecule init scenario -r your-role-name [ -s scenario-name ]`

By default, these commands will both create a molecule/ directory, inside which you will find the scenarios for molecule
testing. The only one there by default is the default scenario, but you can add others (if you wanted one with docker,
for instance, and one with EC2). These commands both take a number of command line switches, but the most important one
you’ll probably use is `--driver-name`: This tells molecule which driver to use for the scenario it is creating; by
default this is docker, but this is where you would put ec2 or vagrant or whatever else if you wanted to test it another
way. See the Molecule docs here for more information:
https://molecule.readthedocs.io/en/latest/configuration.html#driver.

## Configuration

The main configuration file for Molecule is `molecule.yml`, which is in the scenario directory. This is where you can
specify the different components you want to use like driver, linter, verifier, etc. It’s also where you’ll set up the
‘platform’; for docker, the platform section describes things like what image to use, while for EC2, this is where you
specify the AMI, instance type, and subnet. The Molecule driver docs above have more details on what can be set here.

Of special note is that for systemd-based docker images, you will need to use a few extra configuration options; the
bottom of the docker driver docs (https://molecule.readthedocs.io/en/latest/configuration.html#docker) has more details.
Since most modern Linux distributions use systemd, you’ll probably need to use this.

If you have other Ansible roles your role is dependent on, be sure to specify this in the `meta/main.yml` file in your
Ansible role configuration, and add it to the `requirements.yml` file in the Molecule scenario directory. Here’s an
example of that file:

```yml
---
- src: https://github.com/trussworks/ansible-role-aws-cloudwatch-logs-agent
```

Once you have everything configured, you can make sure that Molecule is plumbed right by running this command:

> `molecule --debug check`

If this works, you know that at least the Molecule parts are working right.

### Testing in EC2

With EC2, there a couple of other steps you’ll need to take. First, you’ll have to define an EC2_REGION environment
variable like so (this is due to the error described here: https://github.com/ansible/molecule/issues/1570):

> `export EC2_REGION=”us-west-2”`

Molecule also assumes that the user you’ll be using the log in to your EC2 instance is “ubuntu” by default. With Amazon
Linux 2 and a number of other distros, this will actually be “ec2-user”. This means you’ll have to fix this. You can
find this in `molecule/scenario_name/create.yml`; look for the “ssh_user” variable and change that to what it needs to
be for your AMI.

In addition, you’ll also need to provide credentials. I used aws-vault, but I didn’t want to preface *all* Molecule
commands with aws-vault, so when I ran it, I just prefaced each of my Molecule commands with aws-vault like this
example:

> `aws-vault exec my_aws_profile -- molecule check`

## Running Molecule Tests

You can run Molecule tests all at once or in stages; these are all done with the various subcommands. The ones I ended
up using the most were:

* `create`: This creates the docker container, EC2 instance, or what have you, to allow for further testing.
* `converge`: This attempts to converge the playbook against the created test environment.
* `verify`: This runs the tests you’ve written in, say, Test-infra (more on that a little later). Obviously, if you do
  this without converging first, they will likely fail.
* `destroy`: This tears down the created test environment; it’s especially important to do in EC2 so you don’t leave
  your instances lying around.
* `test`: This runs the entire test sequence. This includes everything above plus things like linting and an idempotence
  check (if you run a converge after a converge, is there anything to do?). It will destroy the test environment as its
  last step, so if you want to iterate on an environment, you probably don’t want to use this right away.

By default, you don’t get a ton of output about the state of your tests -- just a binary yes/no on success for the most
part. If you want more information, you can run with `--debug`, which will give you plenty of output. When running
Molecule in EC2 I also used `--debug` to find where Molecule was putting the ssh-key it was generating for its test
instances so I could poke around in them when something wasn’t working.

## Writing Tests in Molecule

By default, Molecule is not testing anything other than the accuracy of your Ansible code -- is it written right and
does it run without generating errors. This doesn’t tell you if it’s actually doing what you want it to, though. For
that, you’ll need to write additional tests. By default, these use Test-Infra
(https://testinfra.readthedocs.io/en/latest/); you’ll put these in the `molecule/scenario_name/tests` directory. You
should see a `test_default.py` file there already; this test is an example that just makes sure the `/etc/hosts` file
and root user exist, which is a bare minimum for things to actually work.

Writing tests for your role is going to depend a lot on what your role is supposed to do. Test-Infra is configured just
by writing Python functions and making assertions; you’ll need to read their docs in order to know how to test what you
want to.

Molecule does support other verifiers such as Goss and Inspec; see the Molecule docs for more information if you’d like
to use these.

