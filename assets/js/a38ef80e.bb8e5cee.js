"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[329],{3905:function(o,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function a(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function r(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.push.apply(n,t)}return n}function i(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}))}return o}function c(o,e){if(null==o)return{};var n,t,a=function(o,e){if(null==o)return{};var n,t,a={},r=Object.keys(o);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(a[n]=o[n]);return a}(o,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(o,n)&&(a[n]=o[n])}return a}var u=t.createContext({}),l=function(o){var e=t.useContext(u),n=e;return o&&(n="function"==typeof o?o(e):i(i({},e),o)),n},s=function(o){var e=l(o.components);return t.createElement(u.Provider,{value:e},o.children)},d={inlineCode:"code",wrapper:function(o){var e=o.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(o,e){var n=o.components,a=o.mdxType,r=o.originalType,u=o.parentName,s=c(o,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(g,i(i({ref:e},s),{},{components:n})):t.createElement(g,i({ref:e},s))}));function m(o,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof o||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=o,c.mdxType="string"==typeof o?o:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4498:function(o,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var t=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],c={},u="[GovCloud](/docs/infrasec/aws/govcloud/) / Setting Up a GovCloud Organization",l={unversionedId:"infrasec/aws/govcloud/gov-orgs",id:"infrasec/aws/govcloud/gov-orgs",title:"[GovCloud](README.md) / Setting Up a GovCloud Organization",description:"Setting up organizations in GovCloud requires some additional steps due",source:"@site/docs/infrasec/aws/govcloud/gov-orgs.md",sourceDirName:"infrasec/aws/govcloud",slug:"/infrasec/aws/govcloud/gov-orgs",permalink:"/docs/infrasec/aws/govcloud/gov-orgs",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/govcloud/gov-orgs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[GovCloud](README.md) / ACM in GovCloud",permalink:"/docs/infrasec/aws/govcloud/gov-acm"},next:{title:"[AWS](README.md) / GuardDuty for Organizations",permalink:"/docs/infrasec/aws/guardduty"}},s={},d=[{value:"GovCloud Organization master account",id:"govcloud-organization-master-account",level:2},{value:"Additional GovCloud accounts",id:"additional-govcloud-accounts",level:2},{value:"Adding new GovCloud accounts to the GovCloud Organization",id:"adding-new-govcloud-accounts-to-the-govcloud-organization",level:2},{value:"Handling GovCloud dummy accounts in AWS commercial",id:"handling-govcloud-dummy-accounts-in-aws-commercial",level:2},{value:"Enabling Business Support in GovCloud",id:"enabling-business-support-in-govcloud",level:2}],p={toc:d};function m(o){var e=o.components,n=(0,a.Z)(o,i);return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"govcloud--setting-up-a-govcloud-organization"},(0,r.kt)("a",{parentName:"h1",href:"/docs/infrasec/aws/govcloud/"},"GovCloud")," / Setting Up a GovCloud Organization"),(0,r.kt)("p",null,"Setting up organizations in GovCloud requires some additional steps due\nto the way GovCloud interacts (or rather, doesn't interact) with commercial\nAWS accounts. The instructions below will take you through the process of\ngetting an organization and its accounts set up properly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#govcloud-organization-master-account"},"GovCloud Organization master account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-govcloud-accounts"},"Additional GovCloud accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-new-govcloud-accounts-to-the-govcloud-organization"},"Adding new GovCloud accounts to the GovCloud Organization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handling-govcloud-dummy-accounts-in-aws-commercial"},"Handling GovCloud dummy accounts in AWS commercial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-business-support-in-govcloud"},"Enabling Business Support in GovCloud"))),(0,r.kt)("h2",{id:"govcloud-organization-master-account"},"GovCloud Organization master account"),(0,r.kt)("p",null,'To set up a new GovCloud AWS Organization, you must log in as root to the\norg-root account of your commercial AWS Organization. Then go to the "My\nAccount" screen with the pulldown in the upper right of the AWS dashboard,\nand scroll down; there will be a "Sign up for AWS GovCloud" button. When\nyou click that, you will need to accept an appendix to the AWS Customer\nAgreement; once you do so, you will get an email with instructions on how\nto log in to your GovCloud account.'),(0,r.kt)("p",null,"Once you create the account, you can create a temporary IAM user with full\ncredentials you can use to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-aws-bootstrap"},"bootstrap\nTerraform")," in the\naccount as you would in commercial AWS."),(0,r.kt)("p",null,"Once you have bootstrapped Terraform, you can create the GovCloud\norganization the same way you would in commercial; however, you cannot\nadd ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudtrail.amazonaws.com")," as a service access principal in your\norganization definition because organization CloudTrails are not available\nin GovCloud."),(0,r.kt)("h2",{id:"additional-govcloud-accounts"},"Additional GovCloud accounts"),(0,r.kt)("p",null,"To add more accounts to your GovCloud organization, you ",(0,r.kt)("em",{parentName:"p"},"cannot")," simply\nuse the Terraform ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_organizations_account")," resource. Using credentials\nfor the org-root account in your commercial AWS Organization, use the\nfollowing AWS CLI command. This will create two accounts; a dummy account\nin the commercial AWS Organization and a new corresponding GovCloud\naccount, both with the same account alias."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aws organizations create-gov-cloud-account \\\n  --email spacecats-infra+spacecats-govcloud-id@example.com \\\n  --account-name spacecats-govcloud-id\n")),(0,r.kt)("p",null,"(You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"--iam-user-access-to-billing DENY")," if you want, but this\nwon't really matter once we lock down the dummy account later.)"),(0,r.kt)("p",null,"This will give you output that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "CreateAccountStatus": {\n    "Id": "car-8d813980526511ea7184124ac536023e",\n    "AccountName": "spacecats-govcloud-id",\n    "State": "IN_PROGRESS",\n    "RequestedTimestamp": 1582040671.363\n  }\n}\n')),(0,r.kt)("p",null,"You can then run the following command to get the account ID of your new\nGovCloud account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aws organizations describe-create-account-status \\\n  --create-account-request-id car-8d813980526511ea7184124ac536023e\n")),(0,r.kt)("p",null,"You'll get output that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "CreateAccountStatus": {\n    "Id": "car-8d813980526511ea7184124ac536023e",\n    "AccountName": "spacecats-govcloud-id",\n    "State": "SUCCEEDED",\n    "RequestedTimestamp": 1582040671.446,\n    "CompletedTimestamp": 1582040736.794,\n    "AccountId": "123456789000",\n    "GovCloudAccountId": "000987654321"\n  }\n}\n')),(0,r.kt)("p",null,"In that output, ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," is the account number for the dummy account,\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"GovCloudAccountId")," is the account number for your new GovCloud\naccount."),(0,r.kt)("p",null,"Now that you have that, you can assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"OrganizationAccountAccessRole"),"\nin the new account from an account with sufficient privileges in the\n",(0,r.kt)("em",{parentName:"p"},"GovCloud")," organization org-root account. ",(0,r.kt)("em",{parentName:"p"},"Note that this is the case even\nthough at this point the GovCloud organization does not show up if you\nlook at the organization membership in the console.")),(0,r.kt)("p",null,"To do this, add a new profile to your ",(0,r.kt)("inlineCode",{parentName:"p"},".aws/config"),"; this assumes we\nalready have a working profile for the organization org-root account,\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-govcloud-org-root"),". The new profile for your\n",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-govcloud-id")," account should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[profile spacecats-govcloud-id]\nsource_profile=spacecats-govcloud-org-root\nrole_arn=arn:aws-us-gov:iam::000987654321:role/OrganizationAccountAccessRole\nregion=us-gov-west-1\noutput=json\n# If you have MFA turned on, you will also need to add the mfa_serial line\n# from the source_profile.\n")),(0,r.kt)("p",null,"Once you've added IAM users in the ",(0,r.kt)("inlineCode",{parentName:"p"},"-id")," account later on, you can change this profile to not use the OrganizationAccountAccessRole anymore; as with commercial AWS accounts, you should use resources from the organization org-root account as sparingly as possible."),(0,r.kt)("h2",{id:"adding-new-govcloud-accounts-to-the-govcloud-organization"},"Adding new GovCloud accounts to the GovCloud Organization"),(0,r.kt)("p",null,"To add the account you just created to your GovCloud organization, run\nthis command with your appropriate credentials from the GovCloud\norganization's org-root account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aws organizations invite-account-to-organization \\\n  --target Id=000987654321,Type=ACCOUNT\n")),(0,r.kt)("p",null,"This will return output that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "Handshake": {\n    "Id": "h-d6ac6154ef6a42e68513d0d8460af49a",\n\n...\n')),(0,r.kt)("p",null,"Using the credentials in the new account, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aws organizations accept-handshake \\\n  --handshake-id h-d6ac6154ef6a42e68513d0d8460af49a\n")),(0,r.kt)("p",null,"The account will now be in your GovCloud organization. You will want to\n",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/organizations_account.html#import"},"import this account"),"\ninto your Terraform state for the GovCloud organization org-root account\nlike so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_organizations_account" "spacecats_govcloud_id" {\n  name      = "spacecats-govcloud-id"\n  email     = "spacecats-infra+spacecats-govcloud-id@example.com"\n  parent_id = aws_organizations_organizational_unit.spacecats_govcloud.id\n  tags = {\n    Automation = "Terraform"\n  }\n}\n')),(0,r.kt)("p",null,"Then run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ terraform import aws_organizations_account.spacecats_govcloud_id 000987654321\n")),(0,r.kt)("h2",{id:"handling-govcloud-dummy-accounts-in-aws-commercial"},"Handling GovCloud dummy accounts in AWS commercial"),(0,r.kt)("p",null,"As stated above, when you use the AWS CLI to create your new GovCloud\naccounts, it will also create a dummy account with the same account name\nin your commercial AWS organization. In order to prevent misuse of these\naccounts (and any confusion, since they have the same account alias as\nyour GovCloud account), we can lock these down with the ",(0,r.kt)("inlineCode",{parentName:"p"},"suspended")," OU\nwe usually create in the commercial AWS organization."),(0,r.kt)("p",null,"To do this, import the account's Terraform resource into your commercial\nAWS organization by using the same sort of procedure described above to\nimport the new GovCloud account into the GovCloud organization, but\nreplace the ",(0,r.kt)("inlineCode",{parentName:"p"},"parent_id")," parameter with the Terraform resource describing\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"suspended")," OU -- usually something like\n",(0,r.kt)("inlineCode",{parentName:"p"},"aws_organizations_organizational_unit.suspended.id"),". This will make it\nimpossible to use that account for anything else, and has no effect on\nthe corresponding GovCloud account."),(0,r.kt)("h2",{id:"enabling-business-support-in-govcloud"},"Enabling Business Support in GovCloud"),(0,r.kt)("p",null,"If you intend to have more than just the basic AWS support for your GovCloud\naccount, you will need to enable it in the corresponding dummy account in your\ncommercial AWS organization. Yes you read that right, to enable the AWS Support\nin GovCloud you need to actually enable it in AWS commercial. It's also\nimportant to note that as of this writing Business Support needs to be enabled\non an account by account basis and can't be enabled at the Organization level."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the dummy commercial AWS account is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU, you will need\nto temporarily remove it from the",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU first."),(0,r.kt)("li",{parentName:"ol"},"Reset the root password for the dummy commercial AWS account tied to your\nGovCloud account. These credentials should be thrown away once you're done."),(0,r.kt)("li",{parentName:"ol"},"Log into the AWS account as root and enable Business Support."),(0,r.kt)("li",{parentName:"ol"},"Log into the corresponding GovCloud account and confirm you have Business\nSupport enabled."),(0,r.kt)("li",{parentName:"ol"},"Move the dummy commercial AWS account back into the ",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," OU.")))}m.isMDXComponent=!0}}]);