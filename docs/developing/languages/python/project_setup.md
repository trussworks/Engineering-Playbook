# Project Setup

## Layout

*These recommendations are based on [this article](https://docs.python-guide.org/writing/structure), updated to reflect the use of Pipenv.*

### Simple project

```
.gitignore
README.md
LICENSE
Pipfile
Pipfile.lock
sample.py               # module lives in a single file
tests/test_sample.py
```

### Application or larger project

```
.gitignore
README.md
LICENSE
Pipfile
Pipfile.lock
sample/__init__.py
sample/*.py             # module lives in a directory
docs/
tests/test_*.py
```

### Library

[Packaging a python library](https://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structure)

## .gitignore

We suggest copying [this Python-specific .gitignore](https://github.com/github/gitignore/blob/master/Python.gitignore) into the root of your project:

```
curl https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore -o .gitignore
```
