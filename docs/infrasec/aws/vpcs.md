# VPC Configuration

## VPC basics

A VPC is a "Virtual Private Cloud".
This is a virtual network defined in AWS.
Each VPC is defined in a specified [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions).

The VPC needs a defined CIDR block.
These are private network blocks and need to have enough ip addresses for whatever you plan to deploy.
When in doubt, use a `/16`.

Note that each region has multiple [Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) and the ip space will be subdivided into subnets across these availabilty zones.

Depending on what you're doing you might just want to use the [terraform-aws-vpc module](https://github.com/terraform-aws-modules/terraform-aws-vpc) with the right toggles.

The following are objects associated with VPCs that can be configured.

### Subnets

A subnet is a logical subdivision of an IP network.
Generally, you will create a pair of public and private subnets in each availability zone for the region.
A good default CIDR range for each subnet is either a `/22` or `/24`.
You will not want to repeat CIDR ranges across your whole network otherwise your routing might get messy.

Creating additional subnets will create additional complexity in route tables.
If your project requires you to isolate resources from one another, use Security groups.

### Route tables

Route tables define the network routing in the VPC.
You can route specific ip address spaces to separate subnets or to gateways.

### Network ACLs

Network ACLs are like firewall rules applied to specific subnets in a VPC.
You can define inbound and outbound network traffic across ports for specific IP addresses.
We prefer to use Security Groups over Network ACLs as they can be applied to specific resources in a VPC.

### Security Groups

In a traditional corporate network these would be equivalent to firewall rules.
Security Groups allow you to define inbound and outbound network traffic across ports that than be specific to IP addresses OR other security groups.
Because you can define security group access using security group names, we find it easier to configure intended access to resources than Network ACLs.

### Gateways

Use an Internet Gateway for public subnets.
These allow traffic in and out of the VPC to the public internet.
For all public subnets in a VPC, use a single internet gateway for default routes.

Use a NAT Gateway for private subnets.
These only allow traffic out of the VPC to the public internet.
For each private subnet, create a NAT gateway.
Based on Terraform documentation, a NAT gateway will be provisioned with an EIP.
Note, you do not need a NAT instance.

### VPC endpoints

VPC endpoints are AWS provided and defined endpoints for AWS services.
You may want to use this to close up your network so you have no public traffic.

There are two types of VPC endpoints, Gateway endpoints and Interface endpoints.

Interface endpoints are a deployed elastic network interface with a private IP address connected to your VPC.
Note: In our internal test configuration we weren't sure it was worth the cost to just spin up one of everything.

Example of S3 endpoint (heavily modified and commented) from [terraform-aws-vpc module endpoints file](https://github.com/terraform-aws-modules/terraform-aws-vpc/blob/master/vpc-endpoints.tf):

```terraform
locals {
    vpc_id = "id of vpc"
    vpce_tags = { some map of tags... }
}

# Does a data lookup on the s3 service to determine the name of the service for aws_vpc_endpoint
data "aws_vpc_endpoint_service" "s3" {
  service = "s3"
}

# Creates the VPC endpoint
resource "aws_vpc_endpoint" "s3" {
  vpc_id       = local.vpc_id
  service_name = data.aws_vpc_endpoint_service.s3[0].service_name
  tags         = local.vpce_tags
}

# Create the route table association in the private rout tables
resource "aws_vpc_endpoint_route_table_association" "private_s3" {
  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id
  route_table_id  = element(aws_route_table.private.*.id, count.index)
}

# Create the route table association if you have intra subnets
resource "aws_vpc_endpoint_route_table_association" "intra_s3" {
  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id
  route_table_id  = element(aws_route_table.intra.*.id, 0)
}

# Create the route table for the public subnets if you have them
resource "aws_vpc_endpoint_route_table_association" "public_s3" {

  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id
  route_table_id  = aws_route_table.public[0].id
}
```

Gateway endpoints are existing endpoints that require configuration in the route tables.
Available Gateway endpoints are: AWS S3 and AWS DynamoDB endpoints in your VPC and you should just deploy those.

The full list of supported endpoints is [here](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html).
You can see some examples of how to set them up [here](https://github.com/terraform-aws-modules/terraform-aws-vpc/blob/master/vpc-endpoints.tf).

### Flow logs

VPC Flow logs allow you to monitor all network traffic in your VPC.

If you plan to use AWS GuardDuty you must turn these on.
Otherwise, unless you have a plan to ingest, manage, view, and monitor network flow logs we do not recommend you turn these on.

## Default VPC configuration

Every AWS account comes with a default VPC.
In general, you will not want to use that VPC.

Use our [Destroy default VPC Terraform Module](https://github.com/trussworks/terraform-aws-destroy-default-vpc) to effectively destroy the VPC.
WARNING: undoing this module is hard so if you have inherited the infrastructure you are managing and MIGHT have old resources in the default VPC we don't suggest using it.

## Reference links

- [AWS VPC documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [AWS VPC Endpoint documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html)
- [Truss Internal guidance doc](https://docs.google.com/document/d/1LeEfqBqVw8gyvSU-TD5IUvDYEwM-0wq5IhYE58fNB8c/edit)
