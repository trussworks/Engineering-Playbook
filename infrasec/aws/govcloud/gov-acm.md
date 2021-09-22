# [GovCloud](README.md) / ACM in GovCloud

AWS Certificate Manager (ACM) is our preferred way to handle certificates
in AWS whenever possible. Unfortunately, due to the fact that Route53
cannot create public DNS entries in GovCloud, the modules which create
ACM certificates and validate them with DNS will not work. This means the
process of creating these certificates becomes slightly more complicated.

## The problem: ACM DNS validation

In both the Truss and `terraform-aws-modules` ACM module, the module
attempts to create three resources:

- the ACM certificate
- the Route53 DNS entry to validate the certificate
- the Terraform [`aws_acm_certificate_validation`](https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html) resource

It's important to note that the `aws_acm_certificate_validation` resource
does not actually represent a real AWS resource -- it is an internal
mechanism Terraform uses to correctly order the creation of resources
dependent on a valid Terraform certificate. It is *not required* to
actually validate an ACM certificate.

However, the problem that the `aws_acm_certificate_validation` resource
was designed to solve -- preventing Terraform from trying to use an
invalid certificate on another resource, like an ALB -- still exists in
GovCloud. The ACM certificate resource itself *cannot be used* until it
has been validated. This means trying to create an ALB using an certificate
that has not yet been validated will fail, and in GovCloud, this creates
a timing issue, because we need to create the certificate to get the
DNS validation information, but we have to create the DNS entry in the
commercial organization before we can use it elsewhere in GovCloud.

## The solution: step-by-step creation

We can solve this by using a step-by-step creation method for our systems
which require ACM certificates. We recommend *not* creating these
certificates inside modules for your application, but instead providing
the certificate as a parameter that resources in your module can use, as
anything contingent on the successful creation of the certificate will fail
on your first apply of the module if you do include it.

To do this, here's some sample code for the creation of the ACM certificate
in our GovCloud account:

```hcl
resource "aws_acm_certificate" "acm_myapp" {
  domain_name       = "myapp.example.com"
  validation_method = "DNS"

  tags = {
    Name        = "myapp.example.com"
    Automation  = "Terraform"
  }

  lifecycle {
    create_before_destroy = true
  }
}

output "myapp_cert_validation" {
  description = "Map of data for myapp cert validation"
  value       = aws_acm_certificate.acm_myapp.domain_validation_options
}
```

The output is necessary because this is what will provide us the information
we need to create the validation DNS entry in our commercial AWS account. It
will look like this:

```terraform
testing_cert_validation = [
  {
    "domain_name" = "myapp.example.com"
    "resource_record_name" = "_42ef3fd691a332acfe219f37910eee14.myapp.example.com."
    "resource_record_type" = "CNAME"
    "resource_record_value" = "_31d89bcda5baf24c2518526a81f86617.tfmgdnztqk.acm-validations.aws."
  },
]
```

We can then take that output and create a DNS entry in our commercial DNS
account with this code:

```hcl
resource "aws_route53_record" "myapp_acm_validation" {
  zone_id = aws_route53_zone.myzone.zone_id
  name    = "_42ef3fd691a332acfe219f37910eee14.myapp.example.com."
  type    = "CNAME"
  records = ["_31d89bcda5baf24c2518526a81f86617.tfmgdnztqk.acm-validations.aws."]
  ttl     = 60
}
```

Once this entry has been created, you should be able to use your certificate
on other resources within a minute or two. If you want to confirm that the
certificate has been validated, you can run these commands in the GovCloud
account:

```console
$ aws acm list-certificates
{
    "CertificateSummaryList": [
        {
            "CertificateArn": "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef",
            "DomainName": "myapp.example.com"
        }
    ]
}

$ aws acm describe-certificate --certificate-arn "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef"
{
    "Certificate": {
        "CertificateArn": "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef",
        "DomainName": "myapp.example.com",
        "SubjectAlternativeNames": [
            "myapp.example.com"
        ],
        "DomainValidationOptions": [
            {
                "DomainName": "myapp.example.com",
                "ValidationDomain": "myapp.example.com",
                "ValidationStatus": "SUCCESS",

...
```

If your `ValidationStatus` is `SUCCESS`, your certificate should be ready to go.
