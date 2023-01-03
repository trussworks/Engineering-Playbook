"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?o.createElement(g,a(a({ref:t},c),{},{components:r})):o.createElement(g,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));r(8209);const i={},a="Tools",s={unversionedId:"developing/vcs/tools",id:"developing/vcs/tools",title:"Tools",description:"This page provides a summary of tools we commonly use for source control",source:"@site/docs/developing/vcs/tools.md",sourceDirName:"developing/vcs",slug:"/developing/vcs/tools",permalink:"/docs/developing/vcs/tools",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/vcs/tools.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Master to Main branch rename",permalink:"/docs/developing/vcs/master-to-main"},next:{title:"Documentation",permalink:"/docs/documentation/"}},l={},p=[{value:"Git",id:"git",level:2},{value:"pre-commit",id:"pre-commit",level:2},{value:"pre-reqs",id:"pre-reqs",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tools"},"Tools"),(0,n.kt)("p",null,"This page provides a summary of tools we commonly use for source control\nat Truss."),(0,n.kt)("h2",{id:"git"},"Git"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," is a free and open source distributed version\ncontrol system designed to handle everything from small to very large\nprojects with speed and efficiency."),(0,n.kt)("p",null,"Use your work email when making commits to our repositories.\nThe simplest path to correctness is setting global config:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.email "trussel@truss.works"\ngit config --global user.name "Trusty Trussel"\n')),(0,n.kt)("p",null,"If you drop the ",(0,n.kt)("inlineCode",{parentName:"p"},"--global")," flag,\nthese settings will only apply to the current repo.\nIf you ever re-clone that repo or clone another repo,\nyou will need to remember to set the local config again.\nYou won't.\nUse the global config. :-)"),(0,n.kt)("p",null,'For web-based Git operations,\nGitHub will use your primary email unless you choose\n"Keep my email address private".\nIf you don\'t want to set your work address as primary,\nplease ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/settings/emails"},"turn on the privacy setting"),"."),(0,n.kt)("p",null,"Note that with 2-factor-authentication enabled,\nin order to push local code to GitHub through HTTPS,\nyou need to ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/ateucher/4634038875263d10fb4817e5ad3d332f"},"create a personal access token"),"\nand use that as your password."),(0,n.kt)("h2",{id:"pre-commit"},"pre-commit"),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit")," at Truss to easily add git\nhooks to our Git repos. This allows us to automate things like checking\nfor merge conflicts or mistakenly adding secret keys in our code. See\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/circleci-docker-primary/blob/master/.pre-commit-config.yaml"},"this example"),"\npre-commit config file from one of our projects."),(0,n.kt)("p",null,"Since git does not distribute hooks when a repository is cloned, you will\nhave to install pre-commit in each cloned repo manually using ",(0,n.kt)("inlineCode",{parentName:"p"},"pre-commit install --install-hooks")," or pre-commit will not run in that repo.  To assist\nwith automating this step, pre-commit has a ",(0,n.kt)("a",{parentName:"p",href:"https://pre-commit.com/#pre-commit-init-templatedir"},"feature")," to exploit the\n",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-init#_template_directory"},"template directory")," setting in git:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"git config --global init.templateDir ~/.git-template\npre-commit init-templatedir ~/.git-template\n")),(0,n.kt)("p",null,"From now on, each new repository you create or clone will have pre-commit\ninstalled automatically."),(0,n.kt)("h2",{id:"pre-reqs"},"pre-reqs"),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/prereqs"},"pre-reqs")," to bootstrap\nsystem pre-requisites that are required to run the code we push to Github."))}m.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);