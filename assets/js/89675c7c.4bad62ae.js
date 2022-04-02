"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7891],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6173:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Authorization package",l={unversionedId:"compliance/risk-management/package",id:"compliance/risk-management/package",title:"Authorization package",description:"In order to satisfy an agency\u2019s requirements for a completed ATO, a team must complete a set of documents called the \u201cauthorization package\u201d that fully describe the security controls that are in place to protect the information system. NIST SP 800-37 defines the authorization package as:",source:"@site/docs/compliance/risk-management/package.md",sourceDirName:"compliance/risk-management",slug:"/compliance/risk-management/package",permalink:"/docs/compliance/risk-management/package",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/compliance/risk-management/package.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Risk Management Framework - Step 6: Monitor",permalink:"/docs/compliance/risk-management/monitor"},next:{title:"Problems of the Assessment and Authorization",permalink:"/docs/compliance/risk-management/problems"}},m={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization-package"},"Authorization package"),(0,o.kt)("p",null,"In order to satisfy an agency\u2019s requirements for a completed ATO, a team must complete a set of documents called the \u201cauthorization package\u201d that fully describe the security controls that are in place to protect the information system. NIST SP 800-37 defines the authorization package as:"),(0,o.kt)("p",null,"The essential information that an authorizing official uses to determine whether to authorize the operation of an information system or the provision of a designated set of common controls. At a minimum, the authorization package includes an executive summary, system security plan, privacy plan, security control assessment, privacy control assessment, and any relevant plans of action and milestones."),(0,o.kt)("p",null,"The exact process and document titles vary from agency to agency, but in general the most common required document names are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"System Security Plan (SSP)")," - A formal document that provides an overview of the security security controls, whether in place or planned, and implementation details for meeting those requirements. This document summarizes the overall approach taken to address each of the control families. Sometimes the SSP document includes the NIST SP 800-53 security and privacy controls; other agencies prefer to break the details of those out into a supplemental document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Privacy Impact Assessment (PIA)")," - An analysis of how information is handled that ensures handling conforms to applicable legal, regulatory, and policy requirements regarding privacy. Determines the risks and effects of collecting, maintaining, and disseminating information in an identifiable form in an electronic information system. Examines and evaluates protections and alternative processes for handling information to mitigate potential privacy risks. Defined and required by Office of Management and Budget OMB M-03-22."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Privacy Threshold Assessment (PTA)")," - A questionnaire used to determine if a system contains personally identifiable information (PII), whether a PIA is required, whether a System of Records Notice (SORN) is required, and if any other privacy requirements apply to the information system. A PTA should be completed when proposing a new information technology system through the budget process that will collect, store, or process identifiable information, when starting to develop or significantly modify such a system, or when a new electronic collection of identifiable information is being proposed. A PTA will determine if a PIA is required."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Risk Assessment (RA)")," - A document that identifies risks to organizational operations (including mission, functions, image, reputation), organizational assets, individuals, other organizations, and the nation resulting from the operation of an information system. Part of risk management, an RA incorporates threat and vulnerability analyses and considers mitigations provided by security controls or privacy controls planned or in place. Synonymous with risk analysis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Incident Response Plan (IRP)")," - The documentation of a predetermined set of instructions or procedures to detect, respond to, and limit consequences of malicious cyber attacks against an organization\u2019s information system(s)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disaster Recovery Plan (DRP)")," - A written plan for recovering one or more information systems at an alternate facility in response to a major hardware or software failure or destruction of facilities."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ATO Boundary Diagram")," - A visual layout of the information system that clearly describes the authorization boundary. This diagram shows which technology resources are included within the ATO boundary and all external connections."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Interconnection Systems Agreements / Memoranda of Understanding / Memoranda of Agreement (ISA/MOU/MOA)")," - Agreements between the federal agency operating an information system with an ATO and outside organizations. These agreements include details of sensitive information being shared and how it is being secured. These are generally included in ATO processes in order to clearly document how Personal Identifying Information (PII) is being shared between the federal agency and other agencies or third parties."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Plan of Action and Milestones (POA&M or POAM)")," - A document that identifies tasks needing to be accomplished. It details resources required to accomplish the elements of the plan, any milestones in meeting the tasks, and scheduled completion dates for the milestones."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Security Assessment Report (SAR)")," - Assesses the findings of the assessor and the recommendations for correcting any identified vulnerabilities in the security controls."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Risk Assessment Report (RAR)")," - Assesses and documents the use of resources and controls to eliminate and/or manage vulnerabilities that are exploitable by internal and external threats."))}d.isMDXComponent=!0}}]);