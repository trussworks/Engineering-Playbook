"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3630],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var i=n(7294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,A=function(e,t){if(null==e)return{};var n,i,A={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var a=i.createContext({}),s=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,A=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(n),h=A,p=g["".concat(a,".").concat(h)]||g[h]||u[h]||r;return n?i.createElement(p,o(o({ref:t},l),{},{components:n})):i.createElement(p,o({ref:t},l))}));function h(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:A,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(3117),A=n(102),r=(n(7294),n(3905)),o=["components"],c={},a="[InfraSec](/docs/infrasec/) / Fix CircleCI Integrations",s={unversionedId:"infrasec/tutorials/fix-circleci-integrations",id:"infrasec/tutorials/fix-circleci-integrations",title:"[InfraSec](../README.md) / Fix CircleCI Integrations",description:"It's happened time to time that the CircleCI integration in GitHub decides to peace out. What this looks like is the lack of a CircleCI status check next to a commit hash.",source:"@site/docs/infrasec/tutorials/fix-circleci-integrations.md",sourceDirName:"infrasec/tutorials",slug:"/infrasec/tutorials/fix-circleci-integrations",permalink:"/docs/infrasec/tutorials/fix-circleci-integrations",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/tutorials/fix-circleci-integrations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](./README.md) / CircleCi Honeycomb Integration",permalink:"/docs/infrasec/tutorials/circle-ci-honeycomb-integrations"},next:{title:"[InfraSec](../README.md) / One-Time Passwords",permalink:"/docs/infrasec/tutorials/one-time-passwords"}},l={},u=[{value:"Bring back CircleCI status checks",id:"bring-back-circleci-status-checks",level:2}],g={toc:u};function h(e){var t=e.components,c=(0,A.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"infrasec--fix-circleci-integrations"},(0,r.kt)("a",{parentName:"h1",href:"/docs/infrasec/"},"InfraSec")," / Fix CircleCI Integrations"),(0,r.kt)("p",null,"It's happened time to time that the CircleCI integration in GitHub decides to peace out. What this looks like is the lack of a CircleCI status check next to a commit hash."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Commit CircleCI Status Check",src:n(9296).Z,title:"Commit CircleCI Status Check",width:"827",height:"37"})),(0,r.kt)("h2",{id:"bring-back-circleci-status-checks"},"Bring back CircleCI status checks"),(0,r.kt)("p",null,"When this happens, you need to navigate to the GitHub repository's branch protection settings. This ",(0,r.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/workflows/#workflows-waiting-for-status-in-github"},"link")," has instructions to do so but you can also follow the next three steps below."),(0,r.kt)("p",null,"From the GitHub repository, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"Branches"),"."),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Branch protection rules"),", there should be an existing rule. (If there's not, that is the source of your troubles. Go and make that rule.)"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," for that rule and you should be navigated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Branch protection rule")," page."),(0,r.kt)("p",null,"The second main checkbox, ",(0,r.kt)("inlineCode",{parentName:"p"},"Require status checks to pass before merging")," is the section we want to focus on. There you want to uncheck any CircleCI status checks. Save these changes."),(0,r.kt)("p",null,"Now, we want to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Installed GitHub Apps")," page under the TrussWorks GitHub organization settings. You can just click this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/organizations/trussworks/settings/installations/423606"},"link"),"."),(0,r.kt)("p",null,"Here is where you'll find the ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository Access")," section under ",(0,r.kt)("inlineCode",{parentName:"p"},"CircleCI Checks"),". For the final step, all that needs to be done is to add the repository you're fixing to the list of selected repositories and save this change."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Repository Access",src:n(2242).Z,title:"Repository Access",width:"770",height:"504"})),(0,r.kt)("p",null,"To confirm that the CircleCI integration has been fixed, commit a new change and verify that this time a CircleCI status check appears next to the commit hash in GitHub."))}h.isMDXComponent=!0},2242:function(e,t,n){t.Z=n.p+"assets/images/github-circleci-checks-repo-access-7c8054ef52f5b28a440a03869a3754d8.png"},9296:function(e,t){t.Z="data:image/png;base64,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"}}]);