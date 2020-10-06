# Configuration

Projects should adhere to the following guidelines for managing configuration:

1. Configuration values should be provided to programs via environment variables.
2. Programs should validate configuration at boot time.
3. If config is incomplete or invalid, programs should:
   1. Exit with a non-zero status
   2. Print a helpful error message to assist humans in resolving the issue
4. All environment values should be cataloged in a project's `.envrc` file, although values can be left blank. The purpose of this file is to document all possible configuration points.
5. Projects should define default configuration for local development in an `.envrc.local` file. This file should be loaded from the project's main `.envrc` file if it exists. [Here is an example](https://github.com/CMSgov/easi-app/blob/master/.envrc#L77-L80).

Following the above guidelines should yield projects with a setup that allows developers to get a new project clone running with minimal manual configuration.
