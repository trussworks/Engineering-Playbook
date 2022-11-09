"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[2343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));n(8209);const r={},i="VPC Configuration",s={unversionedId:"infrasec/aws/vpcs",id:"infrasec/aws/vpcs",title:"VPC Configuration",description:"VPC basics",source:"@site/docs/infrasec/aws/vpcs.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/vpcs",permalink:"/docs/infrasec/aws/vpcs",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/vpcs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SNS Topics",permalink:"/docs/infrasec/aws/sns-topics"},next:{title:"Book Club",permalink:"/docs/infrasec/book-club/"}},l={},u=[{value:"VPC basics",id:"vpc-basics",level:2},{value:"Subnets",id:"subnets",level:3},{value:"Route tables",id:"route-tables",level:3},{value:"Network ACLs",id:"network-acls",level:3},{value:"Security Groups",id:"security-groups",level:3},{value:"Gateways",id:"gateways",level:3},{value:"VPC endpoints",id:"vpc-endpoints",level:3},{value:"Flow logs",id:"flow-logs",level:3},{value:"Default VPC configuration",id:"default-vpc-configuration",level:2},{value:"Reference links",id:"reference-links",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vpc-configuration"},"VPC Configuration"),(0,o.kt)("h2",{id:"vpc-basics"},"VPC basics"),(0,o.kt)("p",null,'A VPC is a "Virtual Private Cloud".\nThis is a virtual network defined in AWS.\nEach VPC is defined in a specified ',(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"region"),"."),(0,o.kt)("p",null,"The VPC needs a defined CIDR block.\nThese are private network blocks and need to have enough ip addresses for whatever you plan to deploy.\nWhen in doubt, use a ",(0,o.kt)("inlineCode",{parentName:"p"},"/16"),"."),(0,o.kt)("p",null,"Note that each region has multiple ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones"},"Availability Zones")," and the ip space will be subdivided into subnets across these availabilty zones."),(0,o.kt)("p",null,"Depending on what you're doing you might just want to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/terraform-aws-modules/terraform-aws-vpc"},"terraform-aws-vpc module")," with the right toggles."),(0,o.kt)("p",null,"The following are objects associated with VPCs that can be configured."),(0,o.kt)("h3",{id:"subnets"},"Subnets"),(0,o.kt)("p",null,"A subnet is a logical subdivision of an IP network.\nGenerally, you will create a pair of public and private subnets in each availability zone for the region.\nA good default CIDR range for each subnet is either a ",(0,o.kt)("inlineCode",{parentName:"p"},"/22")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/24"),".\nYou will not want to repeat CIDR ranges across your whole network otherwise your routing might get messy."),(0,o.kt)("p",null,"Creating additional subnets will create additional complexity in route tables.\nIf your project requires you to isolate resources from one another, use Security groups."),(0,o.kt)("h3",{id:"route-tables"},"Route tables"),(0,o.kt)("p",null,"Route tables define the network routing in the VPC.\nYou can route specific ip address spaces to separate subnets or to gateways."),(0,o.kt)("h3",{id:"network-acls"},"Network ACLs"),(0,o.kt)("p",null,"Network ACLs are like firewall rules applied to specific subnets in a VPC.\nYou can define inbound and outbound network traffic across ports for specific IP addresses.\nWe prefer to use Security Groups over Network ACLs as they can be applied to specific resources in a VPC."),(0,o.kt)("h3",{id:"security-groups"},"Security Groups"),(0,o.kt)("p",null,"In a traditional corporate network these would be equivalent to firewall rules.\nSecurity Groups allow you to define inbound and outbound network traffic across ports that than be specific to IP addresses OR other security groups.\nBecause you can define security group access using security group names, we find it easier to configure intended access to resources than Network ACLs."),(0,o.kt)("h3",{id:"gateways"},"Gateways"),(0,o.kt)("p",null,"Use an Internet Gateway for public subnets.\nThese allow traffic in and out of the VPC to the public internet.\nFor all public subnets in a VPC, use a single internet gateway for default routes."),(0,o.kt)("p",null,"Use a NAT Gateway for private subnets.\nThese only allow traffic out of the VPC to the public internet.\nFor each private subnet, create a NAT gateway.\nBased on Terraform documentation, a NAT gateway will be provisioned with an EIP.\nNote, you do not need a NAT instance."),(0,o.kt)("h3",{id:"vpc-endpoints"},"VPC endpoints"),(0,o.kt)("p",null,"VPC endpoints are AWS provided and defined endpoints for AWS services.\nYou may want to use this to close up your network so you have no public traffic."),(0,o.kt)("p",null,"There are two types of VPC endpoints, Gateway endpoints and Interface endpoints."),(0,o.kt)("p",null,"Interface endpoints are a deployed elastic network interface with a private IP address connected to your VPC.\nNote: In our internal test configuration we weren't sure it was worth the cost to just spin up one of everything."),(0,o.kt)("p",null,"Example of S3 endpoint (heavily modified and commented) from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/terraform-aws-modules/terraform-aws-vpc/blob/master/vpc-endpoints.tf"},"terraform-aws-vpc module endpoints file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'locals {\n    vpc_id = "id of vpc"\n    vpce_tags = { some map of tags... }\n}\n\n# Does a data lookup on the s3 service to determine the name of the service for aws_vpc_endpoint\ndata "aws_vpc_endpoint_service" "s3" {\n  service = "s3"\n}\n\n# Creates the VPC endpoint\nresource "aws_vpc_endpoint" "s3" {\n  vpc_id       = local.vpc_id\n  service_name = data.aws_vpc_endpoint_service.s3[0].service_name\n  tags         = local.vpce_tags\n}\n\n# Create the route table association in the private rout tables\nresource "aws_vpc_endpoint_route_table_association" "private_s3" {\n  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id\n  route_table_id  = element(aws_route_table.private.*.id, count.index)\n}\n\n# Create the route table association if you have intra subnets\nresource "aws_vpc_endpoint_route_table_association" "intra_s3" {\n  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id\n  route_table_id  = element(aws_route_table.intra.*.id, 0)\n}\n\n# Create the route table for the public subnets if you have them\nresource "aws_vpc_endpoint_route_table_association" "public_s3" {\n\n  vpc_endpoint_id = aws_vpc_endpoint.s3[0].id\n  route_table_id  = aws_route_table.public[0].id\n}\n')),(0,o.kt)("p",null,"Gateway endpoints are existing endpoints that require configuration in the route tables.\nAvailable Gateway endpoints are: AWS S3 and AWS DynamoDB endpoints in your VPC and you should just deploy those."),(0,o.kt)("p",null,"The full list of supported endpoints is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html"},"here"),".\nYou can see some examples of how to set them up ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/terraform-aws-modules/terraform-aws-vpc/blob/master/vpc-endpoints.tf"},"here"),"."),(0,o.kt)("h3",{id:"flow-logs"},"Flow logs"),(0,o.kt)("p",null,"VPC Flow logs allow you to monitor all network traffic in your VPC."),(0,o.kt)("p",null,"If you plan to use AWS GuardDuty you must turn these on.\nOtherwise, unless you have a plan to ingest, manage, view, and monitor network flow logs we do not recommend you turn these on."),(0,o.kt)("h2",{id:"default-vpc-configuration"},"Default VPC configuration"),(0,o.kt)("p",null,"Every AWS account comes with a default VPC.\nIn general, you will not want to use that VPC."),(0,o.kt)("p",null,"Use our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-aws-destroy-default-vpc"},"Destroy default VPC Terraform Module")," to effectively destroy the VPC.\nWARNING: undoing this module is hard so if you have inherited the infrastructure you are managing and MIGHT have old resources in the default VPC we don't suggest using it."),(0,o.kt)("h2",{id:"reference-links"},"Reference links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"AWS VPC documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html"},"AWS VPC Endpoint documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1LeEfqBqVw8gyvSU-TD5IUvDYEwM-0wq5IhYE58fNB8c/edit"},"Truss Internal guidance doc"))))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);