# [aws](./README.md) / Naming

*Naming* is one of the [hard problems in computing](https://martinfowler.com/bliki/TwoHardThings.html). This page contains patterns for naming things (resourcesw, roles, policies etc) in AWS.

## Context

Naming instances in a shared name space, such as AWS is especially rife with problems. Often a company uses a single AWS account across multiple projects and so the projects have to negotiate how to share the namespace for resources. There are a number of different axes of belonging we might want to include in the name: to which project does a resource belong, to which environment (dev, prod, staging), which function within the environment. Then there are entities which exist only in terms of their relationship to other objects, e.g. roles associated with a particular lambda function.

As with all naming schemes (and other stylistic things such as casing and comments) where the client already has a functional naming scheme we should follow that - there are more important issues to deal with.

However, for our own work and for projects where we are setting the standard tend to use the following:

## Resources

*${project.prefix}-${name}-${environment}*, e.g. `new_system-web_server-dev` for a web server in the dev environment for the new_system project

* *$project.prefix* is a prefix, unique to the project, which is used to distinguish between ressources based which project they belong to
* *$name* is the name of the resource within the environment. It is typically descriptive of the role the resource plays within the overall architecture of the project
* *$environment* is used to identify different versions of the environment that occur during the development lifecycle, e.g. `dev`, `perf_test`, `staging` and `prod`uction

## Policies

Policies are named for the resource to which they will be applied with -policy tagged on the end, i.e.

*${project.prefix}-${name}-${environment}-policy*, e.g. `new_system-database-prod-policy` policy detailing access to the database in the production environment of the new_system project

????