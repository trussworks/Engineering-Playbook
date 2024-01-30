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
- A **service-based** file houses configuration for a specific AWS service. e.g. if you use SSM Parameter Store, you might have a file called `ssm.tf` that contains every parameter you provision. (please redact your values!)
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

Keep in mind that the use of meta-arguments is not considered best practice. If you wish to enforce any semblance of order of operations in terraform, I recommend you consider the [dependency graph](https://developer.hashicorp.com/terraform/internals/graph). More on that in the [dependency graph](!NEEDS_LINK_TO_DOCUMENT) section 

### Variables
`variables.tf` should be organized in alphabetical order (`tfsort` is a potential tool to help do this automatically). Use descriptions and type declarations. Try to name your variables with proper nouns and explicit/obvious meaning interpretations.
```hcl
variable "ec2_desired_count" {
  description = "number of EC2 tasks to run ..."
  type        = number
  default     = 2
}

variables "image_tag" {
  description = "the image tag to use for ..."
  type        = string
}
```