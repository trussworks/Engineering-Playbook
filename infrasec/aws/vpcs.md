# [AWS](./README.md) / VPC Configuration

## VPC basics

A VPC is a "Virtual Private Cloud".
This is a virtual network defined in AWS.
Each VPC is defined in a specified [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions).

The VPC needs a defined CIDR block.
These are private network blocks and need to have enough ip addresses for whatever you plan to deploy.
When in doubt, use a `/16`.

Note that each region has multiple [Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) and the ip space will be subdivided into subnets across these availabilty zones.

The following are objects associated with VPCs that can be configured.

### Subnets

A subnet is a logical subdivision of an IP network.
Generally, you will create a pair of public and private subnets in each availability zone for the region.
A good default CIDR range for each subnet is either a `/22` or `/24`.

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

For all public subnets in a VPC, use a singlle internet gateway for default routes.
This means they can route to the public internet.

For each private subnet, create a NAT gateway with an EIP.
You do not need a NAT instance.

### VPC endpoints

VPC endpoints are AWS provided and defined endpoints for AWS services.
You may want to use this to close up your network so you have no public traffic.

There are two types of VPC endpoints, Gateway endpoints and Interface endpoints.

Interface endpoints are a deployed elastic network interface with a private IP address connected to your VPC.
Note: In our internal test configuration we weren't sure it was worth the cost to just spin up one of everything.

Gateway endpoints are existing endpoints that require configuration in the route tables.
Available Gateway endpoints are: AWS S3 and AWS DynamoDB endpoints in your VPC and you should just deploy those.

The full list of supported endpoints is [here](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html).

### Flow logs

VPC Flow logs allow you to monitor all network traffic in your VPC.
Unless you have a plan to ingest, manage, view, and monitor network flow logs we do not recommend you turn these on.

## Default VPC configuration

Every AWS account comes with a default VPC.
In general, you will not want to use that.

Use our [VPC Terraform Module](https://github.com/trussworks/terraform-aws-default-vpc) to configure the default VPC to not allow public network access.

## Reference Links

* [AWS VPC documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
* [AWS VPC Endpoint documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html)
* [Truss Internal guidance doc](https://docs.google.com/document/d/1LeEfqBqVw8gyvSU-TD5IUvDYEwM-0wq5IhYE58fNB8c/edit)
