"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3126],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1700:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),s=["components"],i={},c="[AWS](/docs/infrasec/aws/) / Bootstrapping an AWS Organization",l={unversionedId:"infrasec/aws/org-bootstrap",id:"infrasec/aws/org-bootstrap",title:"[AWS](README.md) / Bootstrapping an AWS Organization",description:"The purpose of this document is to take you step by step through the",source:"@site/docs/infrasec/aws/org-bootstrap.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/org-bootstrap",permalink:"/docs/infrasec/aws/org-bootstrap",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/org-bootstrap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[AWS](README.md) / Naming",permalink:"/docs/infrasec/aws/naming"},next:{title:"[AWS](README.md) / Using SNS, GuardDuty, and External Integrations with AWS Organizations",permalink:"/docs/infrasec/aws/sns-guardduty-alert-integrations"}},u={},p=[{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Create Organization Root Account",id:"create-organization-root-account",level:2},{value:"Bootstrap Terraform for org-root Account",id:"bootstrap-terraform-for-org-root-account",level:2},{value:"Terraforming the org-root Account",id:"terraforming-the-org-root-account",level:2},{value:"Create org-root Admin Users",id:"create-org-root-admin-users",level:3},{value:"Create AWS Organization",id:"create-aws-organization",level:3},{value:"A Note on Terraforming Accounts",id:"a-note-on-terraforming-accounts",level:4},{value:"Setting Up the id Account Users and Role Assumption",id:"setting-up-the-id-account-users-and-role-assumption",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Shared Resources",id:"shared-resources",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws--bootstrapping-an-aws-organization"},(0,r.kt)("a",{parentName:"h1",href:"/docs/infrasec/aws/"},"AWS")," / Bootstrapping an AWS Organization"),(0,r.kt)("p",null,"The purpose of this document is to take you step by step through the\nprocess of bootstrapping an ",(0,r.kt)("a",{parentName:"p",href:"/docs/infrasec/aws/aws-organizations"},"AWS Organization"),".\nThis is only intended for cases where we are setting up the AWS account\nstructure from scratch."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#naming-conventions"},"Naming Conventions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-organization-root-account"},"Create Organization Root Account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bootstrap-terraform-for-org-root-account"},"Bootstrap Terraform for org-root Account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#terraforming-the-org-root-account"},"Terraforming the org-root Account"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-org-root-admin-users"},"Create org-root Admin Users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-aws-organization"},"Create AWS Organization"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#a-note-on-terraforming-accounts"},"A Note on Terraforming Accounts")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-the-id-account-users-and-role-assumption"},"Setting Up the id Account Users and Role Assumption")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#next-steps"},"Next Steps"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shared-resources"},"Shared Resources"))))),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,'Before starting this process, decide on a naming convention for your\norganization. For instance, if you are setting up a new organization\nfor "spacecats", you will be creating AWS account aliases like\n',(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-org-root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-sandbox"),", etc."),(0,r.kt)("h2",{id:"create-organization-root-account"},"Create Organization Root Account"),(0,r.kt)("p",null,'First, you will use the AWS console to create an "organization root"\naccount. The purpose of this account is to handle root-level service\ncontrol policies ',(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html"},"(SCPs)"),"\nand encompass the the organizational units (OUs) underneath. If you\nneed to know how to create an AWS account, please see\n",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"),".\nYou should set the alias for this account to your project's name and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," suffix, like ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-org-root"),"."),(0,r.kt)("p",null,"If this is an organization Truss will be paying for, use your Truss\ncredit card to pay for this account (this may be changed later). For\nthe address, use the Market Street mailing address from our homepage.\nFor a phone number, have a Dialpad administrator create you a Dialpad\nnumber for this project and use that for the verification phone number.\nFor the moment, you can choose the free level of support; we can always\nupgrade this later."),(0,r.kt)("p",null,"Save the login and password to the 1Password vault you set up for this\nproject previously, and then be sure to add MFA to the root account using\nthe same 1Password entry. ",(0,r.kt)("em",{parentName:"p"},"This is imperative for security purposes.")),(0,r.kt)("p",null,"In order for the billing group users (created in the id account) to be\nable to access billing information in this account, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html#ControllingAccessWebsite-Activate"},"Activating\naccess to the Billing and Cost Management\nconsole"),".\nThis needs to be done as the root user, so now is a good time."),(0,r.kt)("h2",{id:"bootstrap-terraform-for-org-root-account"},"Bootstrap Terraform for org-root Account"),(0,r.kt)("p",null,"Following the pattern in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-layout-example"},"https://github.com/trussworks/terraform-layout-example"),",\nset up your infra Git repo that we created earlier. Name the directory for this\naccount after the account alias as usual. Then, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into this directory and\ncheckout the bootstrap repo like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:trussworks/terraform-aws-bootstrap.git bootstrap\n")),(0,r.kt)("p",null,"Follow the instructions in the bootstrap README and do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set up /bin directory with aws-vault-wrapper and symlinks"),(0,r.kt)("li",{parentName:"ul"},"set up .envrc in the top level and run ",(0,r.kt)("inlineCode",{parentName:"li"},"direnv allow")),(0,r.kt)("li",{parentName:"ul"},"set up .envrc in the account directory and run ",(0,r.kt)("inlineCode",{parentName:"li"},"direnv allow"),"; note\nthat this .envrc should set the ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_PROFILE")," environment variable\nto match the name of this account.")),(0,r.kt)("p",null,"Now create a temporary IAM user in the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root"),' account and give it\nadministrative privileges. Name this user something obvious, like\n"myuser-setup" so you can clean it up easily later. Generate an AWS key\npair and add an MFA for the user. Add the access keys to aws-vault by\nrunning ',(0,r.kt)("inlineCode",{parentName:"p"},"aws-vault add $AWS_PROFILE")," from within the account directory.\nOnce you've done that, you should be able to run the bootstrap script as\ndescribed in the README."),(0,r.kt)("h2",{id:"terraforming-the-org-root-account"},"Terraforming the org-root Account"),(0,r.kt)("p",null,"Once Terraform is bootstrapped in the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account, you will need to\ncreate an ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-global")," directory in the account directory of the infra\nrepo. Your first step should be setting up the ",(0,r.kt)("inlineCode",{parentName:"p"},"providers.tf")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tf")," files; see the examples in the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-layout-example"),"\nrepo linked above."),(0,r.kt)("h3",{id:"create-org-root-admin-users"},"Create org-root Admin Users"),(0,r.kt)("p",null,"Once those are set up, you can begin the rest of the work. Your first\naction should be to create administrative IAM users that will ",(0,r.kt)("em",{parentName:"p"},"only")," be\nused to manage the org-root account and bootstrap the subordinate accounts.\nThese should not be used for anything else. Suffix the user name with\n",(0,r.kt)("inlineCode",{parentName:"p"},".org-root")," to make it clear what these are for. They will be the only\naccounts that can manage the org-root account."),(0,r.kt)("p",null,"Example Terraform code (suggest using a ",(0,r.kt)("inlineCode",{parentName:"p"},"users.tf")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'locals {\n  admin_users = [\n    "myuser.org-root",\n  ]\n}\n\nresource "aws_iam_user" "admins" {\n  for_each      = toset(local.admin_users)\n  name          = each.value\n  force_destroy = true\n\n  tags = {\n    Automation = "Terraform"\n  }\n}\n\nmodule "admins_group" {\n  source  = "trussworks/iam-user-group/aws"\n  version = "1.0.2"\n\n  user_list     = local.admin_users\n  group_name    = "admins"\n  allowed_roles = ["admin"]\n}\n\n# This is a generic role assumption policy that enforces MFA.\ndata "aws_iam_policy_document" "role_assume_role_policy" {\n  statement {\n    actions = ["sts:AssumeRole"]\n    # only allow folks in this account\n    principals {\n      type        = "AWS"\n      identifiers = [data.aws_caller_identity.current.account_id]\n    }\n    # require MFA\n    condition {\n      test     = "Bool"\n      variable = "aws:MultiFactorAuthPresent"\n      values   = ["true"]\n    }\n  }\n}\n\nresource "aws_iam_role" "admin" {\n  name               = "admin"\n  description        = "Role for organization administrators"\n  assume_role_policy = data.aws_iam_policy_document.role_assume_role_policy.json\n  tags = {\n    Automation = "Terraform"\n  }\n}\n\nresource "aws_iam_role_policy_attachment" "admin_administrator_access" {\n  group      = aws_iam_role.admin.name\n  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"\n}\n')),(0,r.kt)("p",null,"Once you have applied the Terraform and have the users created, issue\nsecurity keys for this user and add them to aws-vault; change your\nprofile for this account to use these new credentials and delete the\ntemporary user from your aws-vault and the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account. You\nshould not use the root account anymore unless there is some kind of\nemergency."),(0,r.kt)("h3",{id:"create-aws-organization"},"Create AWS Organization"),(0,r.kt)("p",null,"Now we can begin creating the AWS Organization itself. There are a\nnumber of standard components that we'll want to create using Terraform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the AWS organization itself"),(0,r.kt)("li",{parentName:"ul"},"the initial OU which contains everything except the ",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU which will contain accounts quarantined due to\nsecurity concerns"),(0,r.kt)("li",{parentName:"ul"},"a policy which denies use of all AWS resources we can tie to the\n",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU (which will override the default FullAWSAccess policy);\nthis is a part of the Truss\n",(0,r.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/trussworks/org-scp/aws"},"org-scp"),"\nmodule"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," account (",(0,r.kt)("inlineCode",{parentName:"li"},"spacecats-id")," in our example) which will contain\nall of the IAM users we'll be using to interact with this organization"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"infra")," account where we can put specific infra-only resources; if\nyou are running Atlantis, this is where you can put the Terraform for\nthat deployment, or you might put the root DNS records for your\nproject's Route53 domain, etc.")),(0,r.kt)("p",null,"You can do all of this from the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account via Terraform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'# Create the AWS Organization\nresource "aws_organizations_organization" "main" {\n  aws_service_access_principals = [\n    "cloudtrail.amazonaws.com",\n    "config.amazonaws.com",\n  ]\n\n  enabled_policy_types = [\n    "SERVICE_CONTROL_POLICY",\n  ]\n\n  feature_set = "ALL"\n}\n\n# Organizational Units\n\n# The main OU, where all the resources we actually use will live.\nresource "aws_organizations_organizational_unit" "spacecats" {\n  name      = "spacecats"\n  parent_id = aws_organizations_organization.main.roots.0.id\n}\n\n# A suspended OU, where we can quarantine accounts.\nresource "aws_organizations_organizational_unit" "suspended" {\n  name      = "suspended"\n  parent_id = aws_organizations_organization.main.roots.0.id\n}\n\n# Add the Truss SCPs module and turn on the "deny all access" SCP for the\n# suspended account. Note that this module has many other useful SCPs --\n# see the docs for more info.\nmodule "org-scps" {\n  source  = "trussworks/org-scp/aws"\n  version = "~> 1.4.0"\n\n  deny_all_access_target_ids = [aws_organizations_organizational_unit.suspended.id]\n}\n\n# Organization Accounts\n\nresource "aws_organizations_account" "spacecats_id" {\n  name                       = "spacecats-id"\n  email                      = "spacecats-infra+aws-org-id@example.com"\n  parent_id                  = aws_organizations_organizational_unit.spacecats.id\n\n  # Allow IAM user access to billing for this account so that we can let\n  # project/delivery managers access billing info without a root account.\n  iam_user_access_to_billing = "ALLOW"\n  tags = {\n    Automation = "Terraform"\n  }\n}\n\nresource "aws_organizations_account" "spacecats_infra" {\n  name                       = "spacecats-infra"\n  email                      = "spacecats-infra+aws-org-infra@example.com"\n  parent_id                  = aws_organizations_organizational_unit.spacecats.id\n  iam_user_access_to_billing = "DENY"\n  tags = {\n    Automation = "Terraform"\n  }\n}\n\n# Outputs for Accounts -- so you get the account numbers for later use\n# You can put these in a separate outputs.tf file if you prefer\noutput "aws_organizations_account_spacecats_id_id" {\n  description = "ID for the Spacecats id account"\n  value       = aws_organizations_account.spacecats_id.id\n}\n\noutput "aws_organizations_account_spacecats_infra_id" {\n  description = "ID for the Spacecats infra account"\n  value       = aws_organizations_account.spacecats_infra.id\n}\n')),(0,r.kt)("h4",{id:"a-note-on-terraforming-accounts"},"A Note on Terraforming Accounts"),(0,r.kt)("p",null,"Creating accounts in this way keeps you from having to add billing info,\nverifying a phone number, or any of the other hoops you have to jump\nthrough when creating a new AWS account. However, it also means the root\nuser has no password set, making it impossible to log in as root without\ngoing through the password recovery process."),(0,r.kt)("p",null,"Instead, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_access-cross-account-role"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationAccountAccessRole")),"\nto access these accounts from the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account. Set up a new profile\nin your ",(0,r.kt)("inlineCode",{parentName:"p"},".aws/config")," for the new account that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[profile spacecats-id]\nsource_profile=spacecats-org-root\nrole_arn=arn:aws:iam::<spacecats-id account number>:role/OrganizationAccountAccessRole\nregion=us-west-2\noutput=json\n# If you have MFA turned on, you will also need to add the mfa_serial\n# line from the source_profile.\n")),(0,r.kt)("p",null,"You can then use this role to get access into these accounts to\nbootstrap them for Terraform. Once you have Terraform set up, you can\ncreate the resources necessary to either create an IAM user you can use\nor an IAM role you can assume to work with this account, at which point\nyou can use the profile pattern described in the next section."),(0,r.kt)("h2",{id:"setting-up-the-id-account-users-and-role-assumption"},"Setting Up the id Account Users and Role Assumption"),(0,r.kt)("p",null,"Follow the same steps you took to bootstrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account to\nbootstrap your ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account. Once you've done that, you can set up the\nusers and groups that team members will use to access all other AWS\nresources. Truss uses ",(0,r.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/trussworks/iam-user-group/aws/1.0.2"},(0,r.kt)("inlineCode",{parentName:"a"},"iam-user-group"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/trussworks/iam-cross-acct-dest/aws"},(0,r.kt)("inlineCode",{parentName:"a"},"iam-cross-acct-dest"))," modules to do this; see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-layout-example"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-layout-example"))," for how we use them."),(0,r.kt)("p",null,"In order to do this, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account, define your users and then\nuse the module like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_caller_identity" "current" {}\n\nlocals {\n  spacecats_infra_account_id = <spacecats-infra account number>\n  infra_users = [\n    "myuser",\n  ]\n}\n\nresource "aws_iam_user" "infra_users" {\n  for_each      = toset(local.infra_users)\n  name          = each.value\n  force_destroy = true\n\n  tags = {\n    Automation = "Terraform"\n  }\n}\n\nmodule "infra_group_role" {\n  source  = "trussworks/iam-cross-acct-src/aws"\n  version = "1.0.0"\n\n  destination_account_ids = [\n    data.aws_caller_identity.current.account_id,\n    local.spacecats_infra_account_id\n  ]\n  destination_group_role  = "infra"\n}\n\nmodule "infra_group" {\n  source  = "trussworks/iam-user-group/aws"\n  version = "1.0.2"\n\n  user_list     = local.infra_users\n  allowed_roles = [module.infra_group_role.arn]\n  group_name    = "infra"\n}\n\nresource "aws_iam_role_policy_attachment" "infra_local_policy_attachment" {\n  role       = module.infra_group_role.name\n  policy_arn = "arn:aws:iam::aws:policy/PowerUserAccess"\n}\n')),(0,r.kt)("p",null,"Using that code, we get an IAM user ",(0,r.kt)("inlineCode",{parentName:"p"},"myuser")," in the group ",(0,r.kt)("inlineCode",{parentName:"p"},"infra"),", which\nhas permission to assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," role in the current account and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-infra")," account. We also attach a policy to the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," role we\ncreated that grants power user access."),(0,r.kt)("p",null,"All user creation and grouping should be done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account. In the\nthe other accounts, we grant these groups permission to assume roles that\ngrant whatever permissions they need. So in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-infra")," account,\nif we want to allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," group to have similar permissions, we can\nuse this code in that account's namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'locals {\n  spacecats_id_acct_id = <spacecats-id account number>\n\nmodule "infra_role" {\n  source  = "trussworks/iam-cross-acct-dest/aws"\n  version = "1.0.0"\n\n  iam_role_name             = "infra"\n  source_account_id         = local.spacecats_id_account_id\n}\n\nresource "aws_iam_role_policy_attachment" "infra_local_policy_attachment" {\n  role       = module.infra_role.iam_role_name\n  policy_arn = "arn:aws:iam::aws:policy/PowerUserAccess"\n}\n')),(0,r.kt)("p",null,"This code creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," role in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-infra")," account and\nallows users in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-id")," account to assume that role in this\naccount as well. Note that we're not gating this based on the role in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account; instead, we assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account will do that gating for\nus. Then we grant the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," role the same level of permissions those\nusers had in the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account. Note that we ",(0,r.kt)("em",{parentName:"p"},"could")," give them a different\nlevel of access if we wanted to -- general engineers will not have\npermission to do much of anything in the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," account most of the time,\nbut we could grant them power user access in a sandbox account, and\nperhaps only access to look at Cloudwatch logs in the staging or prod\naccounts. Using this method allows you to do all your user management in\none place, and then give role-based access everywhere else."),(0,r.kt)("p",null,"In order for these users to access other accounts, you'll need to set up\ntheir profiles for these other accounts like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[profile spacecats-infra]\nsource_profile = spacecats-id\nrole_arn = arn:aws:iam::<spacecats-infra account number>:role/infra\nregion = us-west-2\noutput = json\n# If you have MFA turned on, you will also need to add the mfa_serial\n# line from the source_profile.\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Once you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," accounts created, you\ncan move on to setting up the other parts of your infrastructure. If you\nwant to create more accounts, follow the example with the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," account\nabove; you should refrain from creating any IAM users in non-",(0,r.kt)("inlineCode",{parentName:"p"},"id")," accounts\nif possible (though sometimes this is necessary for CI/CD or other\nautomation)."),(0,r.kt)("p",null,"You should also set up some basic AWS services for the organization. Both\nCloudtrail and GuardDuty can be set up at the organization level in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account, and Config should be set up in each account."),(0,r.kt)("p",null,"Finally, you should review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-aws-org-scp"},"Truss ",(0,r.kt)("inlineCode",{parentName:"a"},"org-scp")," module\nREADME")," and consider\nimplementing some of the standard SCPs to parts of your organization,\nsuch as denying root account access and preventing accounts from removing\nthemselves from the organization."),(0,r.kt)("h3",{id:"shared-resources"},"Shared Resources"),(0,r.kt)("p",null,"In general, with an organization, there should be a bias towards making\neach individual account as self-sufficient as possible and avoid using\ntoo many shared resources. One of the driving reasons for using an AWS\nOrganization is the ability to compartmentalize resources; engineers can\nhave wide permissions in a sandbox account, for instance, because they\nare not going to be able to touch anything in the main release pipeline.\nIf you use a shared resource, like an S3 bucket, you end up having to\ndo more detailed permission management to keep accounts from stepping on\neach other -- this essentially eliminates the advantage of the\norganization in the first place."),(0,r.kt)("p",null,"For most things, creating a separate resource for each account is likely\nthe better play -- for things like S3 buckets, having two S3 buckets with\nhalf as much stuff as a single larger S3 bucket ends up essentially being\nthe same cost. Even for things where the added cost is marginal, like VPCs\nor ECS services, the added peace of mind of splitting these services is\nusually worth it. In addition, separating resources like this makes it\neasy to spin up a complete new environment by simply stamping a new\nself-contained copy of all the necessary resources."),(0,r.kt)("p",null,"If you must have some shared resources, these should be served from an\naccount that is separate from the others -- the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra")," account is a\nlikely place to put many of these, and that's why it is part of the\npattern, but it may not be appropriate for everything. In addition, you\nwill need to implement strong controls around access to these resources."))}d.isMDXComponent=!0}}]);