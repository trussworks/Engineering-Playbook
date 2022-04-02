"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4067],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={},l="[Incident Response](/docs/) / On-Call Best Practices",c={unversionedId:"incident-response/on-call",id:"incident-response/on-call",title:"[Incident Response](../README.md) / On-Call Best Practices",description:"Overview",source:"@site/docs/incident-response/on-call.md",sourceDirName:"incident-response",slug:"/incident-response/on-call",permalink:"/docs/incident-response/on-call",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/incident-response/on-call.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Incident Response](./README.md) / External Resources",permalink:"/docs/incident-response/external-resources"},next:{title:"[Incident Response](./README.md) / Overview",permalink:"/docs/incident-response/overview"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Definition of Terms",id:"definition-of-terms",level:2},{value:"On-Call Rotations",id:"on-call-rotations",level:2},{value:"On-Call Responsibilities",id:"on-call-responsibilities",level:2},{value:"Escalation and Notification Policies",id:"escalation-and-notification-policies",level:2},{value:"Project Expectations",id:"project-expectations",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"incident-response--on-call-best-practices"},(0,i.kt)("a",{parentName:"h1",href:"/docs/"},"Incident Response")," / On-Call Best Practices"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In a modern development environment, we want to make sure that the people\nwriting the code own the services they write in production. Part of that\nownership is sharing the burden of the on-call rotation. In order to make\nsure that said burden is not too arduous for everyone involved, here are\nsome best practices when developing the on-call practice for your project."),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"For the sake of argument, most of this article assumes you will be using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.pagerduty.com"},"PagerDuty")," for handling the actual alerting\nof the engineers on-call; if you are using another provider, most of these\nrecommendations can be adapted for them. You can read more about various\nalerting providers in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/infrasec/alert-providers"},"Alert Providers"),"\nguide."),(0,i.kt)("h2",{id:"definition-of-terms"},"Definition of Terms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Notification"),": A notification is message generated, usually by an\nautomated system, which is intended to make people ",(0,i.kt)("em",{parentName:"li"},"actively")," aware\nof something (as opposed to a simple log message, is which is merely\nmeant to record activity for later analysis if necessary). This is\ngenerally some change in system state -- a deploy has begun or\ncompleted, a region has been removed from receiving traffic, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alert"),": An alert is a type of notification which demands ",(0,i.kt)("em",{parentName:"li"},"an\nimmediate, active response"),". These are generally more targeted, going\nto a smaller subset of on-call engineers, and are usually delivered\nvia a method that requires acknowledgement.")),(0,i.kt)("h2",{id:"on-call-rotations"},"On-Call Rotations"),(0,i.kt)("p",null,"An on-call rotation consists of a pool of engineers who share a schedule\nthat determines who is on-call at any one time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'For a single on-call shift, you should have a primary responder, a\nsecondary responder, and a tertiary "backstop", usually a lead, as the\nfinal link in the chain. During the shift, the primary is expected to\nrespond to all alerts; the secondary and tertiary are there if for some\nreason they are unable to respond (see ',(0,i.kt)("a",{parentName:"li",href:"/docs/incident-response/on-call#escalation-and-notification-policies"},"Escalation and Notification\nPolicies")," to see how\nthis is accomplished)."),(0,i.kt)("li",{parentName:"ul"},"The secondary and tertiary also exist as additional resources for the\nprimary to call in as first points of contact for assistance if they\nhave a particularly bad or difficult incident. They can help diagnose\nor remediate issues, contact subject matter experts for assistance, or\nhandle the logistics of incident response if necessary."),(0,i.kt)("li",{parentName:"ul"},"In most cases, you should aim for 6-8 people in the pool for a rotation.\nThis allows a schedule that maximizes the time you are not on-call,\nwhile still having the rotation frequent enough that knowledge does not\nbecome stale. In almost no case should there be fewer than 4 people nor\nmore than 12 people in a rotation pool. A pool of 4 or fewer people\nmeans someone is likely on call at least half the time, which makes it\nextremely hard for them to recover before their next shift. A pool of\n12 or more means that knowledge can easily go stale between on-call\nshifts, and the area of coverage is likely so large that one person\ncannot have adequate knowledge to handle the incidents likely to come\nup. Instead, split the rotation up into two more specialized rotations\n(such as a backend and frontend rotation)."),(0,i.kt)("li",{parentName:"ul"},"Only one person should be paged for an alert at once; paging more than\none person increases the burden of on-call and can also result in\nconfusion if two people are making changes at the same time. If the\nperson responding needs additional assistance, they can always call in\nmore help after they start responding."),(0,i.kt)("li",{parentName:"ul"},"The usual method for doing on-call rotations is to change them weekly;\nhowever, it is not uncommon to see a Sun-Wed/Thurs-Sat half-week\nrotation, which has the benefit of giving every on-call rotation at\nleast one day on the weekend where they are not on-call. Either way,\nengineers are recommended to have PagerDuty notify them 24 hours before\ngoing on call so they are aware of their impending shift.")),(0,i.kt)("h2",{id:"on-call-responsibilities"},"On-Call Responsibilities"),(0,i.kt)("p",null,"If you are the engineer on-call, you have a number of responsibilities\nyou are expected to fulfill."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prior to going on-call, you should make sure that you have access to\nany resources necessary to diagnose and correct issues -- this means\nAWS or GitHub, documentation, or any other tools. Your project should\nhave an on-call checklist to make it easy for you to be confident you\nhave this covered."),(0,i.kt)("li",{parentName:"ul"},"If you know you will be away for an extended period during an on-call\nshift, it is ",(0,i.kt)("em",{parentName:"li"},"your")," responsibility to find someone to cover your shift.\nIf you are unable to, talk to your lead and see if they can help.  If\nyou will be gone for more than a day or two, it may be easiest to swap\nthe entire shift with someone. PagerDuty allows you to schedule these\nwith ",(0,i.kt)("a",{parentName:"li",href:"https://community.pagerduty.com/t/creating-a-schedule-override/850"},"overrides"),"."),(0,i.kt)("li",{parentName:"ul"},"When you are paged, you are expected to respond to the alert within\nfive minutes. This means that you have ",(0,i.kt)("em",{parentName:"li"},"acknowledged")," the alert and are\nlooking into the issue. Acknowledging the alert prevents it from\nautomatically escalating (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/incident-response/on-call#escalation-and-notification-policies"},"Escalation and Notification\nPolicies")," for\nmore information) and communicates that you are working on the issue.\nDo not forget to do this before you start working; there's nothing\nworse than getting a page as a secondary at an odd hour only to find\nthat someone else is already taking care of the problem. While this five\nminute window may seem tight, alerts should be well-tuned so that you\nare not paged for things which are not urgent (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/incident-response/on-call#project-expectations"},"Project\nExpectations"),")."),(0,i.kt)("li",{parentName:"ul"},"The response time expectation does mean that your flexibility to take\ncare of things away from internet access will be curtailed while on-call,\nbut we want to reduce that burden as much as possible. If you need to\nrun a quick errand, or if an emergency comes up, or you will be in\ntransit for an extended period, you should notify your secondary (or\nyour primary, if you are the secondary) and make sure they will be able\nto cover for you while you are away."),(0,i.kt)("li",{parentName:"ul"},"Despite the expectation you will be the first responder as the person\non-call, ",(0,i.kt)("em",{parentName:"li"},"this does not mean you are expected to go it alone"),". If you\nget an alert, and you can't figure out what is going on within 15\nminutes and you believe the impact is such that it needs to be addressed\nimmediately, you should feel free to page your secondary for assistance.\nIf you are still stuck (or you ",(0,i.kt)("em",{parentName:"li"},"were")," the secondary), you should feel\nfree to call upon the tertiary or a known subject matter expert (SME)."),(0,i.kt)("li",{parentName:"ul"},"If you are ",(0,i.kt)("em",{parentName:"li"},"not")," on-call, you should refrain from responding to alerts\neven if you see them in Slack or elsewhere. By doing so, you can reduce\nyour own interrupts. However, if you believe you might be responsible,\nor know the on-call person is dealing with another higher-priority issue\nand want to assist, ",(0,i.kt)("em",{parentName:"li"},"let the on-call engineer know")," and then make sure\nyou take ownership of the alert in PagerDuty. Remember that they likely\nalready got the alert notification and make sure they have acknowledged\nthat you will be taking care of the alert before taking action, so that\nyou are not working at cross-purposes or duplicating work."),(0,i.kt)("li",{parentName:"ul"},'You should make sure that you are keeping a persistent record of alerts\nand/or incidents each day. This can be as simple as a Google Doc filled\nout at the end of the day, but it should record at least the time of the\nalert, the alert that fired, and what was done to address the alert (even\nif that is "the alert went away on its own"). This serves as a way to\npass knowledge onto the other on-call engineers or the next shift, and\nallows us to look at the previous week or month for alerts that are\nparticularly troublesome.')),(0,i.kt)("h2",{id:"escalation-and-notification-policies"},"Escalation and Notification Policies"),(0,i.kt)("p",null,"In PagerDuty terms, an escalation policy determines how an alert will\nproceed if it is not acknowledged; a notification policy is something\nwhich is set for each engineer individually that determines how they will\nbe notified if they receive an alert."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PagerDuty and similar products can be set up to send notifications to\nSlack for each alert; we recommend doing so. Using the ",(0,i.kt)("a",{parentName:"li",href:"https://www.pagerduty.com/docs/guides/slack-integration-guide/"},"PagerDuty\nintegration"),"\nwill also allow engineers to acknowledge or resolve alerts from Slack\nif they so choose."),(0,i.kt)("li",{parentName:"ul"},"Engineers should have notification policies set to ensure that they\nwill be notified within the expected five minute response window. This\nshould use multiple notification methods to make sure things don't fall\nthrough the cracks; at least one method should notify you immediately\nthat the alert has fired. Keep in mind that an acknowledgement will break\nthe notification chain. An example might be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Immediately after the alert, notify me by push notification and email."),(0,i.kt)("li",{parentName:"ul"},"1 minute later, notify via SMS (in case data coverage is bad)."),(0,i.kt)("li",{parentName:"ul"},"5 minutes after the alert, notify via voice call.\nThese timings are an example, and should be used as a starting point;\nthey assume a service which requires high availability. The expectation\nfor your service may be different -- making a decision around your\nresponse expectations should be a combined effort between product,\nengineering, and the customer."))),(0,i.kt)("li",{parentName:"ul"},"Your on-call rotation should have an escalation policy that escalates\nfrom the primary to secondary after no more than 10 minutes, and from\nsecondary to tertiary after no more than an additional 10 minutes.\nOptimally, this should be as short as possible to ensure that there is\na quick response; remember that an alert going unnoticed can incur a\nsignificant SLO impact. A 99.99% uptime requires no more than 13\nminutes of downtime a quarter for instance -- if you have a 10 minute\nescalation, an alert that falls through to the secondary may blow the\nSLO on its own if the problem is serious enough.")),(0,i.kt)("h2",{id:"project-expectations"},"Project Expectations"),(0,i.kt)("p",null,"In addition to the expectations we have for on-call engineers, there are\nalso expectations we make for the project we are on-call for in order to\nensure that on-call is not an undue burden."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The on-call rotation ",(0,i.kt)("em",{parentName:"li"},"should not be getting more than 2-3 alerts per\nday"),", and even that is bordering on excessive, especially if these are\noff-hours. Optimally, this should be no more than 2-3 alerts ",(0,i.kt)("em",{parentName:"li"},"per shift"),'.\nIf the on-call burden for that rotation is higher than that, there\nshould be an understanding across engineering and product that project\ntime needs to be devoted to reducing the on-call burden. This could mean\nrelaxing SLOs or tuning alert thresholds, but it may also mean a deeper\ninvestigation, bug fixing, or code and/or infra improvements to prevent\nproblems. The "SRE" way to do this is formal ',(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tEylFyxbDLE"},"SLOs"),"\nand ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=y2ILKr8kCJU"},"error budgets"),", but\nthey aren't always the right choice if the project is small or does\nnot have the constraints that come with a 24/7 web service."),(0,i.kt)("li",{parentName:"ul"},"Engineers who are primary or secondary on-call should essentially be\nconsidered off project work; they should focus on taking care of\nimmediate needs like writing or tuning alerts, fixing stability-threatening\nbugs, addressing reported security vulnerabilities, or updating\ndocumentation. If they can contribute to project work as well, that\nshould be a bonus, not an expectation."),(0,i.kt)("li",{parentName:"ul"},"Alerts for any project should be well-documented so that an on-call\nengineer can at least begin the process of diagnosis. Questions this\ndocumentation should answer include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What does this alert mean, literally?"),(0,i.kt)("li",{parentName:"ul"},"What are common causes for this alert to fire?"),(0,i.kt)("li",{parentName:"ul"},"What logs, tools, or other resources can I use to find out more about\nwhy this alert fired?"))),(0,i.kt)("li",{parentName:"ul"},"It's not unusual for us to have infra teams that are significantly\nsmaller than application development teams on a project. For this\nreason, it is probably a good idea for all engineers to be involved\nin any sort of infra rotation; however, you should make sure that any\nsingle rotation has an infra engineer in the escalation path.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://landing.google.com/sre/sre-book/chapters/being-on-call/"},'"Being On-Call", Andrea Spadaccini, Google SRE Book')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://increment.com/on-call/crafting-sustainable-on-call-rotations/"},'"Crafting Sustainable On-Call Rotations", Ryn Daniels, Increment April 2017')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pagerduty.com/resources/learn/call-rotations-schedules/"},"On-Call Rotations and Schedules, PagerDuty"))))}p.isMDXComponent=!0}}]);