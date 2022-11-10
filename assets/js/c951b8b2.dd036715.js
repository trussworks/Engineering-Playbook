"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={},l="Alert Providers",o={unversionedId:"infrasec/alert-providers",id:"infrasec/alert-providers",title:"Alert Providers",description:"In general, we will be using a third party provider to take alerts from",source:"@site/docs/infrasec/alert-providers.md",sourceDirName:"infrasec",slug:"/infrasec/alert-providers",permalink:"/docs/infrasec/alert-providers",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/alert-providers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"{short title of solved problem and solution}",permalink:"/docs/infrasec/adr/template"},next:{title:"Ansible",permalink:"/docs/infrasec/ansible/"}},s={},p=[{value:"Context",id:"context",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Other Considerations",id:"other-considerations",level:2},{value:"Comparisons",id:"comparisons",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alert-providers"},"Alert Providers"),(0,r.kt)("p",null,"In general, we will be using a third party provider to take alerts from\nthe systems which are doing the monitoring -- whether that's AWS\nCloudwatch, something like Sensu or Nagios, or a third party monitoring\nservice like Pingdom -- to the responders who can actual take care of\nthe problem."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Choosing which provider to use for a project is an important decision;\nnot only do you want to know how easy it is to tie in parts of the\ninfrastructure and services you're building into the alerting system,\nbut you are depending on the reliability of this service to ensure\nyour own reliability. If the alerting system doesn't notify you of\nproblems, you won't be able to address them in a timely manner."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"When making these decisions, here are some things you'll want to take\ninto account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Notification Reliability")," - In order to be alerted when there are\nproblems, we need a service which is ",(0,r.kt)("em",{parentName:"li"},"at least")," as reliable, if not\nmore reliable, than our own service. To some extent, this will boil\ndown to trust in the vendor and their SLA."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Notification Methods")," - The other issue is ensuring that the service\ncan use many different alerting methods; if someone is in an area of\nflaky cell phone coverage, app push alerts may not work properly, but\nSMS or phone calls may. Being able to use a number of methods (email,\nSMS, voice call, Slack, app push notifications) helps us improve the\nalerting workflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrations")," - Optimally, any alerting tool should have integrations\nwith the various services we're using to generate the alerts, like\nCloudwatch. Some tools can also take input from things like CircleCI\nto help tie service events to alerts (all the alerts started right\nafter the last deploy). At the very least, we want to make sure there\nis an API we can use to alert in an ad hoc manner."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"On-Call Scheduling and Escalation")," - Any alerting tool we use will\nneed to allow us to set up on-call schedules as well as escalation\npolicies so that we can ensure the right people are alerted quickly,\nand if there is no response, that it will be escalated to someone\nelse who will respond. Being able to tie alerts to teams so that\npeople will only get the alerts they can deal with is also important."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cost-Effectiveness")," - The alerting tool also needs to be\ncost-effective; in addition to making sure the service provides\nvalue comparable to its competitors, you should also be aware of\nconsiderations about how it is billed. Services that bill by alert\nor notification, for instance, can quickly spiral out of control in\na bad incident. Make sure the pricing matches our needs and use case.")),(0,r.kt)("h2",{id:"other-considerations"},"Other Considerations"),(0,r.kt)("p",null,"Some other questions that we don't have good answers for yet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In addition to the above, many of these products offer other services\nbeyond simple alerting and reporting; what other features are available\nto us?"),(0,r.kt)("li",{parentName:"ul"},"What about requirements about working in GovCloud or other\nhigher-security environments?")),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("p",null,"This is a comparison of three major alerting providers: OpsGenie (owned\nby Atlassian), PagerDuty, and VictorOps (owned by Splunk). These three\nprovide the basic services listed above, but vary in maturity and our\nexperience with them."),(0,r.kt)("p",null,'These comparisons were made with the OpGenie "Standard" ($19/user/month),\nPagerDuty "Platform Business" ($39/user/month), and VictorOps "Growth"\n($29/user/month) tiers, as they are the ones that capture the bulk of\nthe features we\'re looking for. Where capabilities vary more based on a\nlower or higher tier, notes have been made in the table with the price of\nthe option per user per month.'),(0,r.kt)("p",null,"Please feel free to add or update this table with other information you\nfind helpful in making a decision (including adding other vendors if\nit's merited)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature/Objective"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.opsgenie.com/pricing"},"OpsGenie Standard ($19)")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.pagerduty.com/pricing/"},"PagerDuty Platform Business ($39)")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://victorops.com/pricing"},"VictorOps Growth ($29)")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SLA"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.opsgenie.com/tos/sla"},"99.9% of alerts within 5m")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/pricing/"},"99.9% of alerts within 5m")),(0,r.kt)("td",{parentName:"tr",align:null},"(Couldn't find this on their website?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Notification Amounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited (users x 100 domestically at $9)"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited Globally (Domestically at $29)"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Notification Types"),(0,r.kt)("td",{parentName:"tr",align:null},"Email/Push/SMS/Voice"),(0,r.kt)("td",{parentName:"tr",align:null},"Email/Push/SMS/Voice"),(0,r.kt)("td",{parentName:"tr",align:null},"Email/Push/SMS/Voice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSO"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Available at $49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team Functionality"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scheduling"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Escalation Policies"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (",(0,r.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/api-overview"},"Documentation"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (",(0,r.kt)("a",{parentName:"td",href:"https://v2.developer.pagerduty.com/"},"Documentation"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (",(0,r.kt)("a",{parentName:"td",href:"https://help.victorops.com/knowledge-base/rest-endpoint-integration-guide/"},"Documentation"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloudwatch Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Slack Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other Notable Integrations"),(0,r.kt)("td",{parentName:"tr",align:null},"CircleCI,  Jira, New Relic, StatusPage"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira, New Relic, Statuspage"),(0,r.kt)("td",{parentName:"tr",align:null},"Jira, New Relic, Statuspage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Retention"),(0,r.kt)("td",{parentName:"tr",align:null},"1 year (unlimited at $29)"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited"),(0,r.kt)("td",{parentName:"tr",align:null},"Not listed (but unlimited noted at $49)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Terraform Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"No (",(0,r.kt)("a",{parentName:"td",href:"https://www.terraform.io/docs/providers/opsgenie/index.html"},"abandoned"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.terraform.io/docs/providers/pagerduty/index.html"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No official provider, some limited attempts")))))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);