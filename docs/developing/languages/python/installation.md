# [Python](./README.md) / Installation

## Python

Use Python 3.

Use `brew` in order to keep Python up to date. Install the latest version like so:

```
brew install python
```

## Pipenv

If you also need a local Python development environment, we recommend using `pipenv` to provide a virtual environment. Install it using homebrew:

```
brew install pipenv
```

To create a local development environment and a `Pipfile`, specify the specific python interpreter to use:

```
$ pipenv --python 3.7.6
Creating a virtualenv for this project…
Pipfile: /Users/jimb/code/Engineering-Playbook/Pipfile
Using /usr/local/opt/python/libexec/bin/python (3.7.6) to create virtualenv…
⠹ Creating virtual environment...Already using interpreter /usr/local/opt/python/bin/python3.7
Using base prefix '/usr/local/Cellar/python/3.7.6_1/Frameworks/Python.framework/Versions/3.7'
New python executable in /Users/jimb/.local/share/virtualenvs/Engineering-Playbook-7M1kEMMv/bin/python3.7
Also creating executable in /Users/jimb/.local/share/virtualenvs/Engineering-Playbook-7M1kEMMv/bin/python
Installing setuptools, pip, wheel...
done.
Running virtualenv with interpreter /usr/local/opt/python/libexec/bin/python

✔ Successfully created virtual environment!
```

To work within the development environment, use `pipenv shell`.

*Further Reading: [Example Pipenv Workflow](https://pipenv.kennethreitz.org/en/latest/basics/#example-pipenv-workflow)*

To install additional dependencies for the project, use `pipenv` and **not** `pip`:

```
pipenv install flask
pipenv install pytest --dev # install a dependency only needed for development
```

*Further Reading: [Environment Management with Pipenv](https://pipenv.kennethreitz.org/en/latest/basics/#environment-management-with-pipenv)*
