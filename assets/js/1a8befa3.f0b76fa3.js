"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3938],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="[Tools and Practice](/docs/developing/) / Slack Best Practices",c={unversionedId:"developing/slack/README",id:"developing/slack/README",title:"[Tools and Practice](../README.md) / Slack Best Practices",description:"Overview",source:"@site/docs/developing/slack/README.md",sourceDirName:"developing/slack",slug:"/developing/slack/",permalink:"/docs/developing/slack/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/slack/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why Pair",permalink:"/docs/developing/pairing/why-pair"},next:{title:"[Tools and Practice](../README.md) / Technical Design",permalink:"/docs/developing/technical-design/"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Tips",id:"tips",level:2},{value:"My Keywords",id:"my-keywords",level:3},{value:"1. Open Slack app preferences",id:"1-open-slack-app-preferences",level:4},{value:"2. Add a comma separated list of keywords",id:"2-add-a-comma-separated-list-of-keywords",level:4},{value:"3. Close preferences",id:"3-close-preferences",level:4},{value:"Setup Automatic Do Not Distrub",id:"setup-automatic-do-not-distrub",level:3},{value:"1. Open Slack app preferences",id:"1-open-slack-app-preferences-1",level:4},{value:"2. Enable Auto Do Not Disturb",id:"2-enable-auto-do-not-disturb",level:4},{value:"3. Close preferences",id:"3-close-preferences-1",level:4}],d={toc:u};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tools-and-practice--slack-best-practices"},(0,a.kt)("a",{parentName:"h1",href:"/docs/developing/"},"Tools and Practice")," / Slack Best Practices"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As a distributed team we rely heavily on slack for communication. Below is a collection of tips to make your life using slack better."),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("h3",{id:"my-keywords"},"My Keywords"),(0,a.kt)("p",null,"You are automatically alerted if someone uses your ",(0,a.kt)("inlineCode",{parentName:"p"},"@slackname")," but sometimes it is helpful to also be alerted of other keywords. For example having your ",(0,a.kt)("inlineCode",{parentName:"p"},"githubusername")," setup as a key word allows slack to ping you if a message comes in with your name in it. This should also apply if build failures come into slack automatically and have your github user name."),(0,a.kt)("h4",{id:"1-open-slack-app-preferences"},"1. Open Slack app preferences"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Slack team menu | Preferences",src:n(128).Z,width:"296",height:"251"})),(0,a.kt)("h4",{id:"2-add-a-comma-separated-list-of-keywords"},"2. Add a comma separated list of keywords"),(0,a.kt)("p",null,"Simply add a comma separated list of case insensitive keywords. ",(0,a.kt)("inlineCode",{parentName:"p"},"githubusername, last name")," are a good start"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Notifications | My keywords",src:n(8694).Z,width:"865",height:"780"})),(0,a.kt)("h4",{id:"3-close-preferences"},"3. Close preferences"),(0,a.kt)("h3",{id:"setup-automatic-do-not-distrub"},"Setup Automatic Do Not Distrub"),(0,a.kt)("p",null,"Turning off work when you are done can be a challenge in distributed teams. One way to mitigate this is to turn on Do Not Disturb automatically for non working hours so others know that you may not respond immediately. Another nice feature is if someone does need you they are given the option to override your Do Not Disturb setting."),(0,a.kt)("h4",{id:"1-open-slack-app-preferences-1"},"1. Open Slack app preferences"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Slack team menu | Preferences",src:n(128).Z,width:"296",height:"251"})),(0,a.kt)("h4",{id:"2-enable-auto-do-not-disturb"},"2. Enable Auto Do Not Disturb"),(0,a.kt)("p",null,"Turn on ",(0,a.kt)("em",{parentName:"p"},"Automatically disable notifications from:")," and select the times you are typically off from work."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Notifications | Do Not Disturb",src:n(8516).Z,width:"659",height:"188"})),(0,a.kt)("h4",{id:"3-close-preferences-1"},"3. Close preferences"))}f.isMDXComponent=!0},8516:function(e,t,n){t.Z=n.p+"assets/images/slack_auto_do_not_disturb-113b8eb481665563e766bb8a8b0b1bcf.png"},8694:function(e,t,n){t.Z=n.p+"assets/images/slack_keywords-0bb5c2292e26fc8f3c4a74900130b336.png"},128:function(e,t,n){t.Z=n.p+"assets/images/slack_preferences-948fb236e59605401a446be8f6e27e3a.png"}}]);