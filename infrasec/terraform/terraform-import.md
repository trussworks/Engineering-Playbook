# [Terraform](README.md) / `terraform import`

If you're adding Terraform to an environment where Terraform was not being
used, often you'll need to import existing resources into your Terraform
deployment so they can be managed with your other Terraformed resources.
The [Terraform documentation](https://www.terraform.io/docs/import/index.html)
describes how to do this and will give you a detailed breakdown of the
command; this page provides a tangible example and tries to explain potential
pitfalls.

## A Word of Warning

Remember when importing resources that you may need to import multiple
resources to get everything that might seem like a single component in
AWS. If you import an S3 bucket, that does *not* import its analytics
configuration, for instance, which is a completely different Terraform
resource.

## Importing a resource as a raw Terraform resource

In this case, we're going to be importing an existing S3 bucket from AWS
named `my-s3-bucket` into our Terraform deployment as a Terraform
`aws_s3_bucket` resource.

1. Write the Terraform code that will describe this resource in your
   infrastructure. For our example, we would add this to our Terraform
   infrastructure:

   ```hcl
   resource "aws_s3_bucket" "my_s3_bucket" {
     bucket = "my-s3-bucket"

     tags = {
       Name        = "My Bucket"
       Environment = "Dev"
     }
   }
   ```

1. Run `terraform import` in the namespace that file is in to import the
   resource. The `import` command requires two arguments; the `ADDRESS` and
   the `ID`. The `ADDRESS` is the terraform resource we just described, so
   `aws_s3_bucket.my_s3_bucket` in the example above. The `ID` depends on
   the resource we're importing; you can find out at the bottom of the
   documentation for that resource in the Terraform docs. You can see in the
   docs for
   [`aws_s3_bucket`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#import)
   that for that resource, it's just the bucket name. So we would run this
   command:

   ```bash
   $ terraform import aws_s3_bucket.my_s3_bucket my-s3-bucket
   aws_s3_bucket.my_s3_bucket: Importing from ID "my-s3-bucket"...
   aws_s3_bucket.my_s3_bucket: Import prepared!
     Prepared aws_s3_bucket for import
   aws_s3_bucket.my_s3_bucket: Refreshing state... [id=my-s3-bucket]

   Import successful!

   The resources that were imported are shown above. These resources are now in
   your Terraform state and will henceforth be managed by Terraform.

   Releasing state lock. This may take a few moments...
   ```

1. Our resource has been imported. Now if we run a `terraform plan`, we
   can see that Terraform has added the bucket to the state:

   ```bash
   $ terraform plan

   ...

   An execution plan has been generated and is shown below.
   Resource actions are indicated with the following symbols:
     ~ update in-place

   Terraform will perform the following actions:

     # aws_s3_bucket.my_s3_bucket will be updated in-place
     ~ resource "aws_s3_bucket" "my_s3_bucket" {
         + acl                         = "private"
           arn                         = "arn:aws:s3:::my-s3-bucket"
           bucket                      = "my-s3-bucket"
           bucket_domain_name          = "my-s3-bucket.s3.amazonaws.com"
           bucket_regional_domain_name = "my-s3-bucket.s3.us-west-2.amazonaws.com"
         + force_destroy               = false
           hosted_zone_id              = "Z3BJ5K6RIION3M"
           id                          = "my-s3-bucket"
           region                      = "us-west-2"
           request_payer               = "BucketOwner"
         ~ tags                        = {
             + "Environment" = "Dev"
               "Name"        = "My Bucket"
           }

           versioning {
               enabled    = false
               mfa_delete = false
           }
       }

   Plan: 0 to add, 1 to change, 0 to destroy.
   ```

   Note that it is only changing an existing resource. Also note that the
   `Name` tag already existed on the existing bucket, so that will not be
   changed, but that we're adding the `Environment` tag to the bucket. To
   make these changes, we'd run a `terraform apply` and then we should have
   a clean plan after that. We can then use this resource as if it had
   always been in Terraform.

## Importing a resource as a component of a module

It's also possible to import an existing resource as a component of a
Terraform module, we just have to change our Terraform code and the
`ADDRESS` component of the `terraform import` command. So if we wanted
to use the Truss `terraform-aws-s3-private-bucket` module for our bucket
instead of the raw S3 resource, we'd have Terraform code like this:

```hcl
module "my_s3_bucket" {
  source         = "trussworks/s3-private-bucket/aws"
  bucket         = "my-s3-bucket"
  logging_bucket = "my-logging-bucket"

  tags = {
    Name        = "My Bucket"
    Environment = "Dev"
  }
}
```

Then we would run this command:

```bash
$ terraform import module.my_s3_bucket.aws_s3_bucket.private_bucket my-s3-bucket
```

We're getting that `ADDRESS` by looking at the code of the module and
seeing where it is actually defining that resource that we want to import;
in this case, it's the
[`main.tf`](https://github.com/trussworks/terraform-aws-s3-private-bucket/blob/master/main.tf)
file, on this line:

```hcl
resource "aws_s3_bucket" "private_bucket" {
  bucket        = local.bucket_id
  acl           = "private"

...
```

## Resources

- [Importing Infrastructure](https://www.terraform.io/docs/import/index.html)
