# Naming conventions for Terraform

## Resource naming
- Always use underscores in resource names, consistent with the resource type.
- Always use dashes in arguments, values, and places where values will be exposed to a human or read in the AWS console. This is also important because some AWS resources have restrictions on allowed characters in description values, and the error messages that these cause can be opaque.
- Use descriptive singular nouns for resource names.
  - Do not repeat the resource type in the resource name
  - Within reason, do not use environment names in resource names either. Exceptions might include if you are working in one terraform directory that provisions the entirety of the AWS account and you have no choice :)
```hcl
#
# Good example
#
resource "aws_instance" "jenkins" {
  tags = {
    ...
    "environment" = "staging"
    ...
  }
}

#
# Bad example
#
resource "aws_instance" "jenkins_ec2_instance_staging" {
  ...
}
```
Please refer to the following sheet for various naming conventions, including of terraform modules.

[Infrasec Naming Conventions](../aws/naming.md)
