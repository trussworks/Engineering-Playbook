"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));a(8209);const i={},r="Atlantis",s={unversionedId:"infrasec/terraform/atlantis",id:"infrasec/terraform/atlantis",title:"Atlantis",description:"Atlantis is a Terraform automation tool which integrates with GitHub pull requests to automatically generate Terraform plans, hold them for approval, and then apply the Terraform changes and merge the branch. It also manages locks on namespaces, preventing conflicts between PRs on in the same Terraform namespace. Using Atlantis (or a similar tool like Terraform Cloud) is a way to ensure safe and auditable Terraform changes, something which is important for many Truss projects.",source:"@site/docs/infrasec/terraform/atlantis.md",sourceDirName:"infrasec/terraform",slug:"/infrasec/terraform/atlantis",permalink:"/docs/infrasec/terraform/atlantis",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/terraform/atlantis.md",tags:[],version:"current",frontMatter:{},sidebar:"practices",previous:{title:"Terraform",permalink:"/docs/infrasec/terraform/"},next:{title:"Naming conventions for Terraform",permalink:"/docs/infrasec/terraform/naming"}},l={},c=[{value:"Deploying Atlantis in Truss Projects",id:"deploying-atlantis-in-truss-projects",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"Setting up atlantis-global",id:"setting-up-atlantis-global",level:3},{value:"Setting up the Atlantis service",id:"setting-up-the-atlantis-service",level:3},{value:"Creating a robot GitHub user",id:"creating-a-robot-github-user",level:4},{value:"Add GitHub user access token to AWS SSM Parameter Store",id:"add-github-user-access-token-to-aws-ssm-parameter-store",level:4},{value:"Atlantis service configuration file",id:"atlantis-service-configuration-file",level:4},{value:"GovCloud prep: create ACM certificate",id:"govcloud-prep-create-acm-certificate",level:4},{value:"Set up Atlantis Terraform module",id:"set-up-atlantis-terraform-module",level:4},{value:"GovCloud followup: Add CNAME for ALB",id:"govcloud-followup-add-cname-for-alb",level:3},{value:"Setting up the GitHub webhook",id:"setting-up-the-github-webhook",level:3},{value:"Configure repo-level Atlantis config",id:"configure-repo-level-atlantis-config",level:3},{value:"Tips and Troubleshooting",id:"tips-and-troubleshooting",level:2},{value:"Links and other reading",id:"links-and-other-reading",level:2}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"atlantis"},"Atlantis"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://runatlantis.io"},"Atlantis")," is a Terraform automation tool which integrates with GitHub pull requests to automatically generate Terraform plans, hold them for approval, and then apply the Terraform changes and merge the branch. It also manages locks on namespaces, preventing conflicts between PRs on in the same Terraform namespace. Using Atlantis (or a similar tool like Terraform Cloud) is a way to ensure safe and auditable Terraform changes, something which is important for many Truss projects."),(0,o.kt)("h2",{id:"deploying-atlantis-in-truss-projects"},"Deploying Atlantis in Truss Projects"),(0,o.kt)("p",null,"The most important thing to keep in mind when planning your Atlantis deployment is that ",(0,o.kt)("strong",{parentName:"p"},"you can only have a single Atlantis instance per git repo"),". This is because Atlantis relies on an ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis.yaml")," configuration file which sits at the root of the repo that tells it what directories to operate on; if you had multiple Atlantis deployments in the same repo, they would share a configuration file and conflict with each other. This is one of the reasons we split commercial and GovCloud infrastructure repos."),(0,o.kt)("p",null,"Because of this, our general deployment pattern, when we are working in our standard ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/Engineering-Playbook/blob/main/infrasec/aws/aws-organizations.md"},"AWS organization setup"),", is to deploy the actual Atlantis service in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-infra")," account of the organization, and then create roles the service can assume in the other accounts to run Terraform there. This guide will describe how to build this pattern."),(0,o.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,o.kt)("p",null,"In our infrastructure repo, we'll have the directories like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"org-infra-repo/\n - org-infra\n   - admin-global\n   - atlantis-service\n   - atlantis-global\n - org-dev\n   - admin-global\n   - atlantis-global\n...\n")),(0,o.kt)("p",null,"In this structure, each account has an ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-global")," namespace which sets up the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis")," IAM role, and then there is a single ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-prod"),", or whatever you prefer) namespace which contains the functional components of the Atlantis service."),(0,o.kt)("h3",{id:"setting-up-atlantis-global"},"Setting up atlantis-global"),(0,o.kt)("p",null,"The first step to getting Atlantis set up is to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-global")," namespace within the accounts we want Atlantis to be able to operate in. This may be literally every account; for some deployments, we do not allow Atlantis to make changes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root")," account, but there's no reason Atlantis ",(0,o.kt)("em",{parentName:"p"},"cannot")," work there."),(0,o.kt)("p",null,"In the account we will be deploying the Atlantis service to (",(0,o.kt)("inlineCode",{parentName:"p"},"org-infra")," in our example), we will set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-global")," namespace with Terraform like so to allow Atlantis to assume roles in the other accounts:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"`atlantis-global/main.tf` for Atlantis service account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'locals {\n  org_root_account   = "000000000001"\n  org_id_account     = "000000000002"\n  org_dev_account    = "000000000003"\n  # Add any other accounts to be managed here\n}\n\ndata "aws_caller_identity" "current" {}\ndata "aws_partition" "current" {}\n\n# This is the atlantis role that will be assumed by the actual Atlantis service.\nresource "aws_iam_role" "atlantis" {\n  name               = "atlantis"\n  description        = "Role for atlantis to assume."\n  assume_role_policy = data.aws_iam_policy_document.atlantis_role_assume_policy.json\n}\n\ndata "aws_iam_policy_document" "atlantis_role_assume_policy" {\n  statement {\n    actions = ["sts:AssumeRole"]\n\n    principals {\n      type = "AWS"\n      identifiers = [\n        data.aws_caller_identity.current.account_id,\n        # This is the role your infra engineers use; we want them to be\n        # able to assume the atlantis role to run Terraform manually if\n        # necessary.\n        "arn:${data.aws_partition.current.partition}:${data.aws_caller_identity.current.account_id}:role/admin",\n      ]\n    }\n  }\n}\n\n# The atlantis role needs wide ranging permissions because the intent is\n# to use it for all AWS changes.\nresource "aws_iam_role_policy_attachment" "atlantis_iam_policy" {\n  role       = aws_iam_role.atlantis.name\n  policy_arn = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AdministratorAccess"\n}\n\n# This policy will be used in the atlantis-service namespace by the\n# atlantis module so that the service can assume the atlantis role in\n# other accounts.\ndata "aws_iam_policy_document" "atlantis" {\n  statement {\n    actions = ["sts:AssumeRole"]\n\n    resources = [\n      "arn:${data.aws_partition.current.partition}:iam::${local.org_root_account}:role/atlantis",\n      "arn:${data.aws_partition.current.partition}:iam::${local.org_id_account}:role/atlantis",\n      "arn:${data.aws_partition.current.partition}:iam::${local.org_dev_account}:role/atlantis",\n    ]\n  }\n}\n\nresource "aws_iam_policy" "atlantis" {\n  name   = "atlantis"\n  path   = "/"\n  policy = data.aws_iam_policy_document.atlantis.json\n}\n'))),(0,o.kt)("p",null,"In the other accounts, we'll add resources like the following to allow the Atlantis service in the above account to assume their ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis")," role:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"`atlantis-global/main.tf` for other accounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'locals {\n  org_infra_account = "000000000004"\n}\n\ndata "aws_caller_identity" "current" {}\ndata "aws_partition" "current" {}\n\n# The atlantis role in this account just needs to be able to be assumed\n# by the atlantis role in the infra account, as well as the role infra\n# engineers will be using if they need to run Terraform here.\nresource "aws_iam_role" "atlantis" {\n  name               = "atlantis"\n  description        = "Role for atlantis to assume"\n  assume_role_policy = data.aws_iam_policy_document.atlantis_role_assume_policy.json\n}\n\ndata "aws_iam_policy_document" "atlantis_role_assume_policy" {\n  statement {\n    actions = ["sts:AssumeRole"]\n\n    principals {\n      type = "AWS"\n      identifiers = [\n        local.org_infra_account,\n        "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:role/admin",\n      ]\n    }\n  }\n}\n\n# As in the infra account, the atlantis role needs expansive permissions\n# so it can do all Terraform operations we need.\nresource "aws_iam_role_policy_attachment" "atlantis_iam_policy" {\n  role       = aws_iam_role.atlantis.name\n  policy_arn = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AdministratorAccess"\n}\n'))),(0,o.kt)("p",null,"Once we've set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-global")," namespaces, we can move on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace."),(0,o.kt)("h3",{id:"setting-up-the-atlantis-service"},"Setting up the Atlantis service"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace is where we'll build the actual Atlantis service. The bulk of this work is done with the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/terraform-aws-modules/atlantis/aws/latest"},(0,o.kt)("inlineCode",{parentName:"a"},"atlantis"))," Terraform module. It creates a number of resources, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a VPC"),(0,o.kt)("li",{parentName:"ul"},"a Fargate service fronted by an ALB"),(0,o.kt)("li",{parentName:"ul"},"an ACM certificate and Route53 DNS entries"),(0,o.kt)("li",{parentName:"ul"},"Parameter Store entries for secrets")),(0,o.kt)("p",null,"Aside from this module, we'll also need to create some resources in GitHub for the integration; in GovCloud, we'll also need to create the DNS entries for the ALB and the ACM certificate verification separately, as Route53 is not available for public DNS in GovCloud. There are also two configuration files we'll need to add, one in the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace and one in the root of the Terraform repo."),(0,o.kt)("h4",{id:"creating-a-robot-github-user"},"Creating a robot GitHub user"),(0,o.kt)("p",null,'If your project does not already have a "robot" GitHub user for automation, you will need to create one to facilitate Atlantis\' integration with GitHub. The usual rules apply for accounts of that nature; they should be tied to an email address that is not a specific Trussel, and credentials should be stored in a project 1Password store. You will also need to create a user access token; the specifics you need are detailed in the ',(0,o.kt)("a",{parentName:"p",href:"https://www.runatlantis.io/docs/access-credentials.html#generating-an-access-token"},"Atlantis docs"),"."),(0,o.kt)("h4",{id:"add-github-user-access-token-to-aws-ssm-parameter-store"},"Add GitHub user access token to AWS SSM Parameter Store"),(0,o.kt)("p",null,"Once you have created the GitHub user and generated a user access token, you'll need to add that token into SSM so that Atlantis can use it. Use the following commmand line to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"-infra")," account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'aws ssm put-parameter --name "/atlantis-global/github-user-token" --type SecureString --description "GitHub user token for Atlantis" --value $ATLANTIS_USER_TOKEN\n')),(0,o.kt)("p",null,"We're adding this manually so that we're not keeping a secret in code; we'll use a data source too retrieve it later."),(0,o.kt)("h4",{id:"atlantis-service-configuration-file"},"Atlantis service configuration file"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis_repo_config.json")," file should go in your ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," Terraform namespace. This file configures how the service will work; the ",(0,o.kt)("a",{parentName:"p",href:"https://www.runatlantis.io/docs/server-configuration.html"},"Atlantis docs")," describe the various configuration options, but you can use this as a basic JSON config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "repos": [\n    {\n      "apply_requirements": [\n        "approved",\n        "mergeable"\n      ],\n      "id": "/.*/"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"This will require that pull requests be both approved and mergeable before Atlantis will allow it to be applied."),(0,o.kt)("h4",{id:"govcloud-prep-create-acm-certificate"},"GovCloud prep: create ACM certificate"),(0,o.kt)("p",null,"If you are working in GovCloud, you will need to create a certificate in the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace for your Atlantis instance. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/infrasec/aws/govcloud/gov-acm"},"ACM in GovCloud")," guide for details on how to do this."),(0,o.kt)("h4",{id:"set-up-atlantis-terraform-module"},"Set up Atlantis Terraform module"),(0,o.kt)("p",null,"Once we have the GitHub user set up and the user token in SSM (and the certificate created, if we're in GovCloud), we can set up the Atlantis Terraform module in the ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace. The Atlantis module can set up most of the resources you need itself, like the VPC, ACM certificate, and Route53 DNS entry, or you can specify these separately and plug them in. In most cases, we'll want to just let it do that, because it should be separate from all your other services anyway, but if you need to use a specific pre-existing VPC, or in GovCloud, where you'll need to create the certificate validation and ALB DNS entries in your commercial account, then you should be able to do this without issue."),(0,o.kt)("p",null,"In addition, if you have not already, you will need to add permissions to your AWS log bucket to allow the Atlantis ALB to write to it. This bucket is usually in the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-global")," namespace, and you will want to make sure you have configuration that looks similar to this:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Terraform code for org-infra account AWS logs bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'module "org_infra_logs" {\n  source = "trussworks/aws/logs"\n\n  s3_bucket_name = "org-infra-aws-logs"\n  alb_logs_prefixes = [\n    "alb/atlantis"\n  ]\n}\n'))),(0,o.kt)("p",null,"Calling the module will look something like this:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Terraform code for Atlantis module and associated resources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_caller_identity" "current" {}\n\ndata "aws_partition" "current" {}\n\n# Here, we\'re creating a data source to access the SSM parameter we added\n# before with the AWS CLI that has our github user token.\ndata "aws_ssm_parameter" "github_user_token" {\n  name = "/atlantis/github-user-token"\n}\n\n# This is an additional secret added for a webhook that makes sure that\n# Atlantis is getting a legitimate request (the Github repo uses this key\n# to confirm to Atlantis that it is allowed to use the service). If you\n# have multiple repos being served by the same Atlantis server, you must\n# make sure both repos are using the same secret for their webhooks.\n#\n# Unfortunately, because of the way Atlantis handles this (it will\n# generate a webhook secret when the module is applied), leave this out\n# until you have run the Atlantis module once, then add it when you add\n# the custom_environment_secrets parameter (see the module instance\n# below).\ndata "aws_ssm_parameter" "github_webhook_secret" {\n  name = "/atlantis/github-webhook-secret"\n}\n\n# This is used to make sure that Atlantis *only* accepts inbound\n# connections from Github IP ranges, which are provided by the Github\n# Terraform provider.\ndata "github_ip_ranges" "main" {}\n\n# The next two stanzas define a policy that allows Atlantis to access\n# the SSM parameters for the Github user token and the Github webhook\n# secret. This policy will be attached later in the Atlantis module\n# instance.\ndata "aws_iam_policy_document" "atlantis_ssm_github_user_token" {\n  statement {\n    effect  = "Allow"\n    actions = ["ssm:GetParameters"]\n    resources = [\n      data.aws_ssm_parameter.github_user_token.arn,\n      data.aws_ssm_parameter.github_webhook_secret.arn\n    ]\n  }\n}\n\nresource "aws_iam_policy" "atlantis_ssm_github_user_token" {\n  name   = "atlantis-ssm-access"\n  path   = "/"\n  policy = data.aws_iam_policy_document.atlantis_ssm_github_user_token.json\n}\n\n# This policy is created in the atlantis-global namespace -- because we\n# want to attach this policy to the Atlantis task role, we need to create\n# a data source here and pull it in this way.\ndata "aws_iam_policy" "atlantis_access_policy" {\n  arn = "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:policy/atlantis"\n}\n\n# This is where the magic happens -- this module sets up an ECS service for\n# Atlantis, an ALB, security groups, etc. See further comments for more\n# detail.\nmodule "atlantis" {\n  source  = "terraform-aws-modules/atlantis/aws"\n  version = "2.43.0"\n\n  # This will be the name of the service that shows up in ECS.\n  name = "atlantis-org-infra"\n\n  # A few notes about this image; first, we do not use the atlantis image\n  # maintained by the Atlantis folks so that we can add Python3 to the\n  # image, which allow us to handle the Python lambdas we use in the Slack\n  # notification Terraformm modules. We also do not specify the "latest"\n  # image, because if we do so then Terraform will not realize when the\n  # image has changed due to an update, so that will never get updated. We\n  # specify a SHA directly. You should use the latest version, which can\n  # be found at https://github.com/trussworks/trussworks-atlantis-ecs-image\n  atlantis_image = "trussworks/atlantis:cef8470b4f0aa0a9382f2c4149c53d6a0207f07e"\n\n  # GovCloud Note:\n  # If you are using this module in GovCloud, you will need to use this\n  # parameter so that the module does not try to create the DNS entry.\n  # create_route53_record = false\n  #\n  # In addition, you will need to add this parameter (with the correct\n  # resource reference) to add the ACM certificate you already created to\n  # the ALB. The Atlantis module *cannot* be deployed *until* the\n  # certificate has already been created.\n  # certificate_arn = aws_acm_certificate.atlantis_org_infra.arn\n\n  # In commercial, we can just let the module do the work of setting up\n  # the DNS and certificate resources.\n  route53_zone_name           = "example.com"\n  acm_certificate_domain_name = "atlantis.example.com"\n\n  # VPC\n  # If we have an already existing VPC that we want to put the service in,\n  # we should define that elsewhere with data sources (I recommend in a\n  # separate vpc.tf file) and then add the following parameters (with the\n  # correctly-named references):\n  # vpc_id             = data.aws_vpc.org_infra_vpc.id\n  # private_subnet_ids = data.aws_subnet_ids.org_infra_vpc_private.ids\n  # public_subnet_ids  = data.aws_subnet_ids.org_infra_vpc_public.ids\n\n  # If we\'re okay allowing the module to create the VPC itself, we\'ll need\n  # the following parameters instead (feel free to change the cidr numbers\n  # to suit; if Atlantis is the only thing in the VPC, they are essentially\n  # arbitrary):\n  cidr            = "10.10.0.0/16"\n  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]\n  private_subnets = ["10.10.1.0/24", "10.10.2.0/24", "10.10.3.0/24"]\n  public_subnets  = ["10.10.101.0/24", "10.10.102.0/24", "10.10.103.0/24"]\n\n  # ALB\n  # We want to turn on logging for the ALB the module will create. The\n  # S3 bucket here is defined in our admin-global namespace (and we have\n  # to allow the bucket to be written to in that namespace in order for\n  # this to work).\n  alb_log_bucket_name     = "org-infra-aws-logs"\n  alb_log_location_prefix = "alb/atlantis"\n  alb_logging_enabled     = true\n\n  # Security groups\n  # This parameter defines the networks allowed to access the Atlantis\n  # web interface (which can be used for clearing locks). That interface\n  # is actually not really necessary since those commmands can also be\n  # run via GitHub comments, but if you wanted to allow access to other\n  # hosts to connect -- say, VPN endpoints -- here\'s how:\n  alb_ingress_cidr_blocks = ["192.168.1.100/32", "10.0.0.1/32"]\n\n  # Here is where we\'re using the Github IPs data source to restrict\n  # the acceptable IPs for hitting the webhook.\n  github_webhooks_cidr_blocks = data.github_ip_ranges.main.hooks\n\n  # GitHub Access\n  # This is where we specify the GitHub user that we\'ll be using for\n  # Atlantis in this environment that you\'ve already created. We are\n  # also specifically saying where too put the webhook parameter because\n  # the default location does not match the format chamber expects,\n  # which is a commmon way for us to manage these parameters.\n  atlantis_github_user       = "atlantis-my-org"\n  webhook_ssm_parameter_name = "/atlantis/github-webhook-secret"\n\n  # This is where we define which repos Atlantis should be watching. You\n  # can specify multiple repos if you want, but for our example we\'ll\n  # just be using the one.\n  atlantis_repo_whitelist          = ["github.com/my-org/my-org-infra"]\n  atlantis_hide_prev_plan_comments = "true"\n\n  # This is where we specify the policies we want to attach to the role\n  # Atlantis is going to be using. The first is the basic AWS policy that\n  # allows task execution, the other two are the ones we have defined\n  # above to access SSM parameters and assume roles.\n  policies_arn = ["arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy", aws_iam_policy.atlantis_ssm_github_user_token.arn, data.aws_iam_policy.atlantis_access_policy.arn]\n\n  atlantis_security_group_tags = {\n    Type = "ecs"\n  }\n  alb_https_security_group_tags = {\n    Type = "alb-https"\n  }\n  alb_http_security_group_tags = {\n    Type = "alb-http"\n  }\n  tags = {\n    Environment = var.environment\n  }\n\n  # You can read about these environment variables in the Atlantis\n  # documentation; most of these are relatively self-explanatory.\n  # ATLANTIS_AUTOMERGE tells Atlantis to merge PRs after a successful\n  # terraform apply.\n  custom_environment_variables = [\n    {\n      name  = "ATLANTIS_DEFAULT_TF_VERSION"\n      value = "1.0.5"\n    },\n    {\n      name  = "ATLANTIS_REPO_CONFIG_JSON"\n      value = file("atlantis_repo_config.json")\n    },\n    {\n      name  = "ATLANTIS_AUTOMERGE"\n      value = "true"\n    },\n    {\n      name  = "ATLANTIS_WRITE_GIT_CREDS"\n      value = "true"\n    },\n    {\n      name  = "GITHUB_ORGANIZATION"\n      value = "my-org"\n    }\n  ]\n\n  # These two secrets are necessary because there\'s some jankiness\n  # with the Atlantis module and how we\'re using it (where we don\'t\n  # want to put the two secrets in the Terraform code if possible).\n  # Unfortunately, there\'s a hoop to jump through here -- you will\n  # to apply this module *without* this parameter first, *then*\n  # re-add this parameter and reapply so that you can get the\n  # webhook secret, which Atlantis will generate.\n  custom_environment_secrets = [\n    {\n      name      = "ATLANTIS_GH_TOKEN"\n      valueFrom = data.aws_ssm_parameter.github_user_token.name\n    },\n    {\n      name      = "ATLANTIS_GH_WEBHOOK_SECRET"\n      valueFrom = data.aws_ssm_parameter.github_webhook_secret.name\n    }\n  ]\n\n  allow_unauthenticated_access = true\n  allow_github_webhooks        = true\n}\n'))),(0,o.kt)("p",null,"Note that, as the comments in this code detail, you will need to do two Terraform runs, one without the custom environment secrets and then one with, in order for the Atlantis module to correctly generate the webhook secret and then for the task definition to call it. Once this is done, the service itself should be set up; we can then move on to setting up the webhook."),(0,o.kt)("h3",{id:"govcloud-followup-add-cname-for-alb"},"GovCloud followup: Add CNAME for ALB"),(0,o.kt)("p",null,"If you're working in GovCloud, you should also add the following output to your ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis-service")," namespace:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"output for ALB AWS DNS entry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'output "atlantis_alb_aws_fqdn" {\n  description = "AWS FQDN for Atlantis ALB"\n  value       = module.atlantis.alb_dns_name\n}\n'))),(0,o.kt)("p",null,"This will add an output that will give you the AWS DNS entry that corresponds to your ALB. With that, you will need to add a ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record"},"Route53 CNAME entry")," in your DNS that points your selected domain name to your ALB's AWS DNS entry. Note that for some projects, you may not be able to do this yourself (such as at CMS); in that case, you will need to provide that FQDN to the DNS manager and have them create the CNAME."),(0,o.kt)("h3",{id:"setting-up-the-github-webhook"},"Setting up the GitHub webhook"),(0,o.kt)("p",null,"Rather than restate the Atlantis docs, you can find the instructions on how to set up the webhook for Atlantis ",(0,o.kt)("a",{parentName:"p",href:"https://www.runatlantis.io/docs/configuring-webhooks.html#github-github-enterprise"},"here"),". Note that you will need to have the service configured (with DNS and certificate) and your webhook generated before you do this."),(0,o.kt)("h3",{id:"configure-repo-level-atlantis-config"},"Configure repo-level Atlantis config"),(0,o.kt)("p",null,"The last step is to configure the repo-level Atlantis configuration. The ",(0,o.kt)("inlineCode",{parentName:"p"},"atlantis.yaml")," file goes in the root of the Git repo you're using for your Terraform. The ",(0,o.kt)("a",{parentName:"p",href:"https://www.runatlantis.io/docs/repo-level-atlantis-yaml.html"},"Atlantis docs")," on this file will give you the full explanation of what you can put in here, but for most of our projects, the only thing you will need is a list of the Terraform namespaces you want Atlantis to manage. It will look something like this:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example `atlantis.yaml` config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 3\nprojects:\n  - name: org-id-bootstrap\n    dir: org-id/bootstrap\n  - name: org-id-admin-global\n    dir: org-id/admin-global\n  - name: org-infra-bootstrap\n    dir: org-infra/bootstrap\n  - name: org-infra-admin-global\n    dir: org-infra/admin-global\n...\n"))),(0,o.kt)("p",null,"We generally don't recommend having Atlantis handle the Terraform of its own namespace, just because that introduces the potential of breaking itself, and there is some debate whether having Atlantis administer the org-root account is a good idea. You should feel free to make the decision that makes the most sense for your project (especially since changing this in the future is possible)."),(0,o.kt)("p",null,"Once you've set up this file, you should be able to make a pull request and see Atlantis running a plan if you've set things up correctly."),(0,o.kt)("h2",{id:"tips-and-troubleshooting"},"Tips and Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you update an SSM parameter, be sure to cycle the task (you can kill the running Atlantis task and let AWS restart it); these are read into the container's environment at startup time, so they do not take effect unless you do this."),(0,o.kt)("li",{parentName:"ul"},"As the module configuration example states, we recommend against using ",(0,o.kt)("inlineCode",{parentName:"li"},"latest")," as the container version, because this will force you to to two steps in order to upgrade the container version; instead, we recommend using the actual git SHA of the container.")),(0,o.kt)("h2",{id:"links-and-other-reading"},"Links and other reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://runatlantis.io"},"Atlantis Official Site")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://truss.works/blog/infrastructure-management-with-atlantis"},"Truss's Atlantis blog post")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd12 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/legendary-waddle"},"Atlantis setup in Truss's commercial accounts"))))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);