# Terraform Style Guide and Best Practices

## Style and Organization

### Basics
As a starting point, follow the [basic Terraform Style Conventions](https://developer.hashicorp.com/terraform/language/syntax/style). These can be enforced automatically by running `terraform fmt`. This formatting can also be done via [pre-commit hooks](https://github.com/antonbabenko/pre-commit-terraform?tab=readme-ov-file#terraform_fmt).

### File Tree Structure/Naming

A terraform directory generally should start off looking like this:
```text
main.tf
outputs.tf
terraform.tf
variables.tf
```

where:
- **main.tf** contains the core logic of the infrastructure
- **outputs.tf** contains any outputs that should be exposed. This may not be necessary if you are not writing a module.
- **terraform.tf** contains the terraform {} config block, which specifies backend and terraform/provider versions and initializes required providers
- **variables.tf** contains all variables.

As the complexity of the logic in `main.tf` grows, it should be broken up into smaller, well-named files.
These subdivisions should be made along *service-based* and *purpose-based* lines:
- A **service-based** file houses configuration for a specific AWS service. e.g. if you use SSM Parameter Store, you might have a file called `ssm.tf` that contains every parameter you provision.
- A **purpose-based** file houses configuration for a set of resources that work together to serve a single purpose and whose resources are derived from multiple AWS services. e.g. when provisioning a lambda, we want to provision resources from AWS Lambda, AWS Cloudwatch Triggers, AWS IAM to name a few. These may be contained in a file that is either named `lambda.tf` or `lambda-<lambda-name-or-use>.tf`.

### Meta-Arguments
The order of arguments when using [meta-arguments](https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on) should be as follows (all separated by a newline):
- `count / for_each`
- `provider`
- all arguments required by the data/resource/module, culminating with `tags`
- `depends_on`
- `lifecycle`

```terraform
resource "aws_instance" "foo" {
  count = var.instance_count

  provider "aws" {
    region = var.region
  }

  # ...required arguments...

  tags = {
    ...
  }

  depends_on = [ ... ]

  lifecycle {
    ...
  }
}
```