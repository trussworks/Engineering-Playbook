# Wiremock

## Overview

[Wiremock](https://wiremock.org/) is an open source API mocking tool that makes it easy to isolate development environments (or CI pipelines) from flakey or non-existent 3rd party APIs.

Wiremock [can be run as a standalone service within a docker container](https://wiremock.org/docs/docker/), making it ideal for projects with multiple technologies and frameworks within the tech stack.

It features an approachable JSON syntax for [stubbing API responses](https://wiremock.org/docs/stubbing/), which can be included in version control for other developers (or automated tests) to use.

## When to use it

- When your project interfaces with external APIs over which you have no control
- When external APIs are not accessible from developer environments due to network or security constraints
- When your project needs consistent API mocking agnostic to the part of the stack making the request

## When not to use it

- If [Mock Service worker (MSW)](https://mswjs.io/) suits your needs (your project is likely heavily JS based), consider using that instead
- If your project uses a framework that has baked-in API mocking that suits your needs
