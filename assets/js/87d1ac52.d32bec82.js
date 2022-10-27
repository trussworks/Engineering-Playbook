"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="GuardDuty for Organizations",s={unversionedId:"infrasec/aws/guardduty",id:"infrasec/aws/guardduty",title:"GuardDuty for Organizations",description:"GuardDuty is an anomaly detection",source:"@site/docs/infrasec/aws/guardduty.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/guardduty",permalink:"/docs/infrasec/aws/guardduty",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/guardduty.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up a GovCloud Organization",permalink:"/docs/infrasec/aws/govcloud/gov-orgs"},next:{title:"Naming",permalink:"/docs/infrasec/aws/naming"}},u={},d=[{value:"Initial configuration",id:"initial-configuration",level:2},{value:"Adding GuardDuty to existing accounts",id:"adding-guardduty-to-existing-accounts",level:2},{value:"Adding more regions",id:"adding-more-regions",level:2}],c={toc:d};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guardduty-for-organizations"},"GuardDuty for Organizations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/guardduty/"},"GuardDuty")," is an anomaly detection\nsystem that can alert you via SNS when it detects unusual activity within\nyour AWS accounts, such as someone using it from an unusual IP."),(0,r.kt)("p",null,"Setting up GuardDuty through an organization can be done with a relatively\nsmall amount of Terraform, but there are some issues you may run into as\nyou do so. This document is intended to help you get GuardDuty set up in\nyour organization and work around these pitfalls."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initial-configuration"},"Initial configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-guardduty-to-existing-accounts"},"Adding GuardDuty to existing accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-more-regions"},"Adding more regions"))),(0,r.kt)("h2",{id:"initial-configuration"},"Initial configuration"),(0,r.kt)("p",null,"To get GuardDuty set up within your organization, the first task will be\nto make some changes in your ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account to get it started. First,\nyou will need to make sure that GuardDuty is set up as a service principal\nfor your AWS organization like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_organizations_organization" "main" {\n  enabled_policy_types = ["SERVICE_CONTROL_POLICY"]\n  feature_set          = "ALL"\n  aws_service_access_principals = [\n    "config.amazonaws.com",\n    "cloudtrail.amazonaws.com",\n    "guardduty.amazonaws.com" # Make sure this is present\n  ]\n}\n')),(0,r.kt)("p",null,'Using GuardDuty via organizations means that you can consolidate all your\nfindings in one account, known as the "GuardDuty admin account". AWS best\npractice is to ',(0,r.kt)("em",{parentName:"p"},"not")," have this in your ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account (because we want\nto use that account for as little as possible). As a result, you will want\nto set your admin account to be another account, usually the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra"),"\naccount. The code below will make the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-infra")," account the\nGuardDuty admin account for our organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_guardduty_organization_admin_account" "main" {\n  depends_on = [aws_organizations_organization.main]\n\n  admin_account_id = aws_organizations_account.spacecats_infra.id\n}\n')),(0,r.kt)("p",null,"Once we've done that, we can then go over to the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacecats-infra"),"\naccount and configure GuardDuty there. There are two components you'll\nneed to set it up: a GuardDuty detector (which is the basic component\nfor GuardDuty that generates your findings), and a GuardDuty organization\nconfiguration. The code for these looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_guardduty_detector" "main" {\n  enable = true\n}\n\nresource "aws_guardduty_organization_configuration" "main" {\n  auto_enable = true\n  detector_id = aws_guardduty_detector.main.id\n}\n')),(0,r.kt)("p",null,"Once you've created this, GuardDuty is set up and ready to go for the\norganization. New accounts added the the organization after this point\nwill automatically have a detector created that is connected to the\ndetector in the GuardDuty admin account. Accounts that already exist\nwill not have GuardDuty set up in them yet, however."),(0,r.kt)("h2",{id:"adding-guardduty-to-existing-accounts"},"Adding GuardDuty to existing accounts"),(0,r.kt)("p",null,"To add an account to an organization's GuardDuty configuration, in the\nGuardDuty admin account, you'll need to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_guardduty_member"),"\nresource for the account. The code for that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'locals {\n  spacecats_sandbox_id    = "123456789000"\n  spacecats_sandbox_email = "aws+spacecats-sandbox@example.com"\n}\n\nresource "aws_guardduty_member" "spacecats_sandbox" {\n  account_id                 = local.spacecats_sandbox_id\n  detector_id                = aws_guardduty_detector.main.id\n  email                      = local.spacecats_sandbox_email\n  invite                     = false\n  disable_email_notification = true\n}\n')),(0,r.kt)("p",null,"Unfortunately, due to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terraform-providers/terraform-provider-aws/issues/13906"},"bug"),",\nonce you apply this to fix it, subsequent runs will try to destroy and\nrecreate this resource. However, if we comment out this resource and\napply, despite Terraform claiming the resource was destroyed, the\nmembership will still be there. You can confirm this using these\ncommands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aws guardduty list-detectors\n{\n    "DetectorIds": [\n        "1234567890abcdef0000000000000000"\n    ]\n}\n\n$ aws guardduty list-members --detector-id 1234567890abcdef0000000000000000\n{\n    "Members": [\n        {\n            "AccountId": "123456789000",\n            "DetectorId": "deadbeef627C78CEBDeE47FAC9CdA7Cd",\n            "MasterId": "000987654321",\n            "RelationshipStatus": "Enabled",\n            "UpdatedAt": "2020-06-23T14:31:35.220Z"\n        },\n\n...\n')),(0,r.kt)("p",null,"You will still see the detector for the account you added in this list of\nmembers, even though Terraform will claim to have destroyed it."),(0,r.kt)("h2",{id:"adding-more-regions"},"Adding more regions"),(0,r.kt)("p",null,"GuardDuty is a regional service -- creating the detectors and members as\nabove will only enable GuardDuty in a single region. Our best practice\nuses SCPs to prevent AWS actions in regions we're not using, so you don't\nneed to turn on GuardDuty in say, ",(0,r.kt)("inlineCode",{parentName:"p"},"eu-central-1")," probably, but at the very\nleast, most commercial organizations will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-2")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1"),", simply because some resources (like Route53) can only work in\n",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1"),". So at the very least, you'll want to have GuardDuty set up in\nboth of those."),(0,r.kt)("p",null,"If we assume we've set up our original infrastructure in ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-2"),", we\nwant to set up GuardDuty for ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1")," as well. To do this, we need to\nadd duplicate resources to the GuardDuty admin account."),(0,r.kt)("p",null,"To start off, we'll need to define a second provider for the other region\nin our ",(0,r.kt)("inlineCode",{parentName:"p"},"providers.tf")," file (this may already be done if the account already\nhas resources in the ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1")," region:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "aws" {\n  version = "~> 2.67"\n  alias   = "us-east-1"\n  region  = "us-east-1"\n}\n')),(0,r.kt)("p",null,"Then we will need to define a new GuardDuty detector and organization\nGuardDuty configuration for the new region like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_guardduty_detector" "main_useast1" {\n  provider = aws.us-east-1\n\n  enable = true\n}\n\nresource "aws_guardduty_organization_configuration" "main_useast1" {\n  provider    = aws.us-east-1\n  auto_enable = true\n  detector_id = aws_guardduty_detector.main_useast1.id\n}\n')),(0,r.kt)("p",null,"As with the originals, this should take care of any new accounts;\nany accounts that already exist that need to be connected to this\ndetector, however, will need to be created according to the same method\ndescribed in the previous section, with the addition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),"\nargument and pointing to the new detector, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_guardduty_member" "spacecats_sandbox_useast1" {\n  provider                   = aws.us-east-1\n  account_id                 = local.spacecats_sandbox_id\n  detector_id                = aws_guardduty_detector.main_useast1.id\n  email                      = local.spacecats_sandbox_email\n  invite                     = false\n  disable_email_notification = true\n}\n')))}l.isMDXComponent=!0}}]);