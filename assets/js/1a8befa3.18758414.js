"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));r(8209);const a={},i="Slack Best Practices",s={unversionedId:"developing/slack/README",id:"developing/slack/README",title:"Slack Best Practices",description:"Overview",source:"@site/docs/developing/slack/README.md",sourceDirName:"developing/slack",slug:"/developing/slack/",permalink:"/docs/developing/slack/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/slack/README.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"Support Pairing Template",permalink:"/docs/developing/pairing/pairing-framework/support-pairing"},next:{title:"Technical Design",permalink:"/docs/developing/technical-design/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Tips",id:"tips",level:2},{value:"My Keywords",id:"my-keywords",level:3},{value:"1. Open Slack app preferences",id:"1-open-slack-app-preferences",level:4},{value:"2. Add a comma separated list of keywords",id:"2-add-a-comma-separated-list-of-keywords",level:4},{value:"3. Close preferences",id:"3-close-preferences",level:4},{value:"Setup Automatic Do Not Distrub",id:"setup-automatic-do-not-distrub",level:3},{value:"1. Open Slack app preferences",id:"1-open-slack-app-preferences-1",level:4},{value:"2. Enable Auto Do Not Disturb",id:"2-enable-auto-do-not-disturb",level:4},{value:"3. Close preferences",id:"3-close-preferences-1",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack-best-practices"},"Slack Best Practices"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"As a distributed team we rely heavily on slack for communication. Below is a collection of tips to make your life using slack better."),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("h3",{id:"my-keywords"},"My Keywords"),(0,o.kt)("p",null,"You are automatically alerted if someone uses your ",(0,o.kt)("inlineCode",{parentName:"p"},"@slackname")," but sometimes it is helpful to also be alerted of other keywords. For example having your ",(0,o.kt)("inlineCode",{parentName:"p"},"githubusername")," setup as a key word allows slack to ping you if a message comes in with your name in it. This should also apply if build failures come into slack automatically and have your github user name."),(0,o.kt)("h4",{id:"1-open-slack-app-preferences"},"1. Open Slack app preferences"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Slack team menu | Preferences",src:r(128).Z,width:"296",height:"251"})),(0,o.kt)("h4",{id:"2-add-a-comma-separated-list-of-keywords"},"2. Add a comma separated list of keywords"),(0,o.kt)("p",null,"Simply add a comma separated list of case insensitive keywords. ",(0,o.kt)("inlineCode",{parentName:"p"},"githubusername, last name")," are a good start"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Notifications | My keywords",src:r(8694).Z,width:"865",height:"780"})),(0,o.kt)("h4",{id:"3-close-preferences"},"3. Close preferences"),(0,o.kt)("h3",{id:"setup-automatic-do-not-distrub"},"Setup Automatic Do Not Distrub"),(0,o.kt)("p",null,"Turning off work when you are done can be a challenge in distributed teams. One way to mitigate this is to turn on Do Not Disturb automatically for non working hours so others know that you may not respond immediately. Another nice feature is if someone does need you they are given the option to override your Do Not Disturb setting."),(0,o.kt)("h4",{id:"1-open-slack-app-preferences-1"},"1. Open Slack app preferences"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Slack team menu | Preferences",src:r(128).Z,width:"296",height:"251"})),(0,o.kt)("h4",{id:"2-enable-auto-do-not-disturb"},"2. Enable Auto Do Not Disturb"),(0,o.kt)("p",null,"Turn on ",(0,o.kt)("em",{parentName:"p"},"Automatically disable notifications from:")," and select the times you are typically off from work."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Notifications | Do Not Disturb",src:r(8516).Z,width:"659",height:"188"})),(0,o.kt)("h4",{id:"3-close-preferences-1"},"3. Close preferences"))}u.isMDXComponent=!0},8516:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slack_auto_do_not_disturb-113b8eb481665563e766bb8a8b0b1bcf.png"},8694:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slack_keywords-0bb5c2292e26fc8f3c4a74900130b336.png"},128:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slack_preferences-948fb236e59605401a446be8f6e27e3a.png"},8209:(e,t,r)=>{r(7294)}}]);