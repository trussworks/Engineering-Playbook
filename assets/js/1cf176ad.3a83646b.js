"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));r(8209);const a={},i="Project Teardown Guide",l={unversionedId:"infrasec/teardown",id:"infrasec/teardown",title:"Project Teardown Guide",description:"When a project reaches the end of its lifetime and the client doesn't",source:"@site/docs/infrasec/teardown.md",sourceDirName:"infrasec",slug:"/infrasec/teardown",permalink:"/docs/infrasec/teardown",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/teardown.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Professional Development",permalink:"/docs/infrasec/pro-dev"},next:{title:"Terraform",permalink:"/docs/infrasec/terraform/"}},s={},c=[{value:"Terraform and AWS",id:"terraform-and-aws",level:2},{value:"SSL certificates",id:"ssl-certificates",level:2},{value:"CircleCI",id:"circleci",level:2},{value:"GitHub",id:"github",level:2},{value:"1Password",id:"1password",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-teardown-guide"},"Project Teardown Guide"),(0,o.kt)("p",null,"When a project reaches the end of its lifetime and the client doesn't\nwant to continue it, we need to teardown all the infrastructure we've\ncreated for the project -- sometimes on relatively short notice. This\nguide is intended to provide a step-by-step procedure for tearing down\ninfrastructure we've created for a project and highlight any potential\nsources of trouble."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#terraform-and-aws"},"Terraform and AWS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ssl-certificates"},"SSL certificates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#circleci"},"CircleCI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#github"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1password"},"1Password"))),(0,o.kt)("h2",{id:"terraform-and-aws"},"Terraform and AWS"),(0,o.kt)("p",null,"Your first task should be shutting down all the AWS infrastructure\nyou've built for your project. When you do this, you'll need to proceed\nin basically the reverse order you created all the resources. Here are\nsome guidelines when tearing down Terraform namespaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tear down accounts that don't hold resources for organization-wide\npurposes first -- leave your infra, id, and org-root accounts for last.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you were using Atlantis to maintain a namespace, and you have this\ncomponent in your ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tf")," ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'role_arn       = "arn:aws:iam::123456789000:role/atlantis"\n')),(0,o.kt)("p",{parentName:"li"},"Then before you begin tearing down that namespace, you need to remove\nthis line, run a ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply"),", and then do your ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform destroy"),".\nIf you do not do this, then your ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," will fail and the state will\nbecome corrupted because you will destroy the role Terraform is using\nto perform the destroy. Doing the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," allows Terraform to\ncleanly change the backend configuration first.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Similarly, when tearing down the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-global")," namespace, you should\nchange your ",(0,o.kt)("inlineCode",{parentName:"p"},".aws/config")," profile for the account you're destroying to\nuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"OrganizationAccountAccessRole")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root")," account as\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"source_profile"),". This prevents you from having the same problem\nwhen your ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role is destroyed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not destroy resources in the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-global")," namespace until all\nother namespaces for the account except the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," namespace have\nbeen torn down. Don't destroy ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," until ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-global")," has been\ntorn down.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When you are ready to tear down the ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root")," account, create an IAM\nuser ",(0,o.kt)("em",{parentName:"p"},"without")," Terraform, give it credentials and attach an MFA, and\nchange your ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root")," profile to use those credentials. This will allow\nyou to cleanly tear down the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root")," account safely, otherwise\nyou will delete the IAM user you are using to tear down the account in\nthe middle of the ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," and corrupt the state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's easiest to wait until all resources in all your accounts are\ndestroyed to begin closing accounts; this will remove all the\norganization SCPs and let you remove accounts from the organization\nas you go.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your organization has an SCP applied to OUs which restricts editing billing data (which is a common practice for Truss), you will need to remove that SCP from accounts you're attempting to close first. You can do this either by removing the SCP from the affected OU or moving the account out of the affected OU.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In order to completely close an account (aside from the ",(0,o.kt)("inlineCode",{parentName:"p"},"org-root"),'\naccount), you\'ll need to go through the password recovery procedure for\nthe root user account (ie, you need to try to log in with the email\naddress for the account and click the "Forgot Password" link), then\nset up billing information for the account. Once you have done that,\nyou can safely remove the account from the AWS Organization (either\nfrom the console or using the CLI) and then close it from the My\nAccount panel.'))),(0,o.kt)("h2",{id:"ssl-certificates"},"SSL certificates"),(0,o.kt)("p",null,"For most projects, we'll hopefully be able to use AWS ACM certificates,\nand those will get torn down with our Terraform teardown above. However,\nif we've bought additional SSL certificates through another vendor, such\nas SSLMate, we should revoke those certificates and close that account\nas well."),(0,o.kt)("h2",{id:"circleci"},"CircleCI"),(0,o.kt)("p",null,"Assuming you've used CircleCI for your CI/CD pipeline on the project,\nyou should be able to just terminate your CircleCI support plan as soon\nas you don't need to do anymore deploys or validate code. You can do this\nfrom the \"Project Settings\" page on the CircleCI dashboard."),(0,o.kt)("h2",{id:"github"},"GitHub"),(0,o.kt)("p",null,"Once you've torn down your AWS infrastructure and CircleCI, you can\nshutdown your GitHub organization for the project. Here are the\nguidelines for taking down your GitHub organization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the client has been able to make an archive of all\nrepositories before you do anything else. Code we build for a client\nbelongs to them, so we need to ensure they are able to keep a copy."),(0,o.kt)("li",{parentName:"ul"},"If we are allowed (this varies based on the terms of the contract), we\nshould make sure we keep an archive of any code repositories we want\nto retain."),(0,o.kt)("li",{parentName:"ul"},"Delete any GitHub users that were created for CI/CD automation or other\npurposes. These are commonly created to allow CI/CD to access private\nrepositories."),(0,o.kt)("li",{parentName:"ul"},"Once the above steps have been completed, you can go into the settings\nfor the GitHub organization and close it down. ",(0,o.kt)("em",{parentName:"li"},"This will delete all\nrepositories in the organization"),", so make sure you're ready for that\nbefore you do this.")),(0,o.kt)("h2",{id:"1password"},"1Password"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Deleting your 1Password account and vault for the project should be the\nvery last thing you do.")," This is (hopefully) where you've kept all your\ncredentials for services, software, and accounts that this project uses,\nso getting rid of this makes it ",(0,o.kt)("em",{parentName:"p"},"extremely")," difficult to clean up anything\nelse you were using for your project. We recommend that you carefully\nreview the previous steps of this guide and look at the credentials kept\nin 1Password to ensure that you've closed down everything else that you\nare relying on 1Password for."))}d.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);