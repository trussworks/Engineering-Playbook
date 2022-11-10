"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));r(8209);const i={},o="InfraSec",l={unversionedId:"infrasec/README",id:"infrasec/README",title:"InfraSec",description:"Infrastructure and security engineering (infrasec) is the practice of",source:"@site/docs/infrasec/README.md",sourceDirName:"infrasec",slug:"/infrasec/",permalink:"/docs/infrasec/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Security Incidents",permalink:"/docs/incident-response/security-incidents"},next:{title:"Remove tests from our open-source Terraform modules",permalink:"/docs/infrasec/adr/tests_in_terraform"}},s={},c=[{value:"Theory",id:"theory",level:2},{value:"Practice",id:"practice",level:2},{value:"Education recommendations",id:"education-recommendations",level:3},{value:"Useful Repo Templates",id:"useful-repo-templates",level:3},{value:"Tutorials",id:"tutorials",level:3},{value:"AWS",id:"aws",level:4},{value:"CI/CD",id:"cicd",level:4},{value:"Security",id:"security",level:4},{value:"Other topics",id:"other-topics",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"infrasec"},"InfraSec"),(0,n.kt)("p",null,"Infrastructure and security engineering (infrasec) is the practice of\nbuilding secure, robust systems that are foundational to having reliable\napplications and services. While infrastructure as code is a core area\nfor this practice, it also involves system design, ",(0,n.kt)("a",{parentName:"p",href:"/docs/incident-response/"},"incident\nresponse"),", and a number of other fields."),(0,n.kt)("h2",{id:"theory"},"Theory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/charter"},"InfraSec Practice Charter")," - How we think about the Truss InfraSec Practice."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/good-infra"},"Good Infrastructure - A Philosophy")," \u2014 How we think about building good infrastructure."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd12 ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1X0GDtCMrPnl_Zdpo0qEtaxUW4SocxnZairCM9JQAcyo/edit"},'InfraSec "Book" Club - Talk and Article Suggestions')," \u2014\xa0Talks and articles we \ud83d\udc96.")),(0,n.kt)("h2",{id:"practice"},"Practice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/"},"AWS")," \u2014 Our primary cloud provider."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/terraform/"},"Terraform")," \u2014 Our primary infrastructure as code (IaC) tool."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/ansible/"},"Ansible")," \u2014 For when we have to build non-container based images (e.g., AMIs).")),(0,n.kt)("h3",{id:"education-recommendations"},"Education recommendations"),(0,n.kt)("p",null,"Things to help you level up your skills."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/pro-dev"},"Professional development recommendations"))),(0,n.kt)("h3",{id:"useful-repo-templates"},"Useful Repo Templates"),(0,n.kt)("p",null,"To get you up and running faster, we have created a few template repos. Please feel free to submit PRs and help us stay up to date!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-module-template"},"Terraform Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trussworks/docker-template"},"Docker container")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trussworks/golang-cli-template"},"Golang CLI tool"))),(0,n.kt)("h3",{id:"tutorials"},"Tutorials"),(0,n.kt)("h4",{id:"aws"},"AWS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md"},"Setting Up Your AWS User")," \u2014 How to set up your AWS user in the Truss internal infrastructure. You will need the assistance of someone with administrative privileges in our AWS organization to help you."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/your_first_lambda_function"},"Your First Lambda Function")," \u2014\xa0A guide to deploying your first AWS Lambda Function with Go and Terraform.")),(0,n.kt)("h4",{id:"cicd"},"CI/CD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/circle-ci-honeycomb-integrations"},"Honeycomb CircleCi Metrics")," - How to add Honeycomb to CircleCi for build metrics.")),(0,n.kt)("h4",{id:"security"},"Security"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/one-time-passwords"},"One-Time Passwords")," \u2014 How to set up one-time passwords for GitHub with 1Password."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/yubikey-configuration"},"YubiKey Configuration Guide")," \u2014\xa0How to get and configure a YubiKey for use in commit signing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/yubikey-sso"},"YubiKey SSO")," \u2014\xa0How to configure a Google Account to use YubiKey (for GSuite admins).")),(0,n.kt)("h3",{id:"other-topics"},"Other topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/alert-providers"},"Alert Providers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/bootstrap"},"Project Bootstrap Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/teardown"},"Project Teardown Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/infrasec/certs"},"SSL Certificates"))))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);