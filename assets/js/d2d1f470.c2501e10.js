"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[787],{3905:function(e,t,A){A.d(t,{Zo:function(){return g},kt:function(){return u}});var n=A(7294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,n,o=function(e,t){if(null==e)return{};var A,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},g=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var A=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=l(A),u=o,d=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return A?n.createElement(d,a(a({ref:t},g),{},{components:A})):n.createElement(d,a({ref:t},g))}));function u(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=A.length,a=new Array(r);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=A[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}p.displayName="MDXCreateElement"},756:function(e,t,A){A.r(t),A.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=A(3117),o=A(102),r=(A(7294),A(3905)),a=["components"],i={},s="[InfraSec](/docs/infrasec/) / One-Time Passwords",l={unversionedId:"infrasec/tutorials/one-time-passwords",id:"infrasec/tutorials/one-time-passwords",title:"[InfraSec](../README.md) / One-Time Passwords",description:"One-Time Passwords (aka OTPs or TOPTs) are exactly what they sound like. They are randomly generated passwords that can only be used once. They are often used for two-factor or multi-factor authentication.",source:"@site/docs/infrasec/tutorials/one-time-passwords.md",sourceDirName:"infrasec/tutorials",slug:"/infrasec/tutorials/one-time-passwords",permalink:"/docs/infrasec/tutorials/one-time-passwords",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/tutorials/one-time-passwords.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](../README.md) / Fix CircleCI Integrations",permalink:"/docs/infrasec/tutorials/fix-circleci-integrations"},next:{title:"[InfraSec](../README.md) / Deploying your first AWS Lambda Function with Go and Terraform",permalink:"/docs/infrasec/tutorials/your_first_lambda_function"}},g={},c=[{value:"Storing one-time passwords in 1Password",id:"storing-one-time-passwords-in-1password",level:2}],p={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"infrasec--one-time-passwords"},(0,r.kt)("a",{parentName:"h1",href:"/docs/infrasec/"},"InfraSec")," / One-Time Passwords"),(0,r.kt)("p",null,"One-Time Passwords (aka OTPs or TOPTs) are exactly what they sound like. They are randomly generated passwords that can only be used once. They are often used for two-factor or multi-factor authentication."),(0,r.kt)("h2",{id:"storing-one-time-passwords-in-1password"},"Storing one-time passwords in 1Password"),(0,r.kt)("p",null,"You can store one-time passwords in a number of ways: Authy, Google Authenticator, 1Password, etc. This tutorial will focus on 1Password since this is where Truss stores passwords in the first place."),(0,r.kt)("p",null,"As I learn best with examples, let's pretend we're setting up 2FA on GitHub. If you want a more general tutorial, follow this ",(0,r.kt)("a",{parentName:"p",href:"https://support.1password.com/one-time-passwords/"},"link"),"."),(0,r.kt)("p",null,"On your GitHub Account, click Settings > Security. You will see a couple of methods for 2FA. In our case, we're interested in setting up 2FA with an authenticator app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GitHub Security 2FA Settings",src:A(8562).Z,title:"GitHub Security 2FA",width:"759",height:"637"})),(0,r.kt)("p",null,"You should be redirected to an intro screen. Click the green button ",(0,r.kt)("inlineCode",{parentName:"p"},"Set up using an app"),"."),(0,r.kt)("p",null,"Download the recovery codes and store them safely away before heading for the next step."),(0,r.kt)("p",null,"You should now see a QR code. This is where 1Password comes in."),(0,r.kt)("p",null,"Open the 1Password app on your computer (not the browser extension)."),(0,r.kt)("p",null,"If you already have your GitHub password saved in 1Password, go ahead and edit it."),(0,r.kt)("p",null,"If you don't, quickly generate a new password and edit it."),(0,r.kt)("p",null,"Scroll down until you see two fields called ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"new field"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1Password Empty Field",src:A(2979).Z,title:"1Password Empty Field",width:"440",height:"352"})),(0,r.kt)("p",null,"Click the drop-down next to the field and select ",(0,r.kt)("inlineCode",{parentName:"p"},"One-Time Password"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1Password Field Dropdown",src:A(9341).Z,title:"1Password Field Dropdown",width:"528",height:"439"})),(0,r.kt)("p",null,"The field will then transform."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1Password Transformed Field",src:A(663).Z,title:"1Password Transformed Field",width:"435",height:"61"})),(0,r.kt)("p",null,"You see that QR code icon? Click it. This will open a scanner window."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": This part can be finicky. You might have to save the password and edit again for the scanner window to pop up.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1Password Scanner Window",src:A(5405).Z,title:"1Password Scanner Window",width:"409",height:"435"})),(0,r.kt)("p",null,"Your goal is to now to drag the scanner window over the GitHub QR code to scan it."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": If you use multiple monitors, I recommend putting the scanner window and the browser window where you're configuring GitHub on the same monitor. It also helps to make sure the browser window is not full-sized."),(0,r.kt)("p",null,"Once scanned, save your edits."),(0,r.kt)("p",null,"You will now see that there is a six-digit code under your new label. It will have a running timer next to it."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": These tokens are time-based. Once the timer runs out, the code has expired and a new one will generate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1Password One True Pairing",src:A(1431).Z,title:"1Password OTP",width:"427",height:"44"})),(0,r.kt)("p",null,"Type in the code as requested in GitHub."),(0,r.kt)("p",null,"Press that ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable")," button."),(0,r.kt)("p",null,"Congrats, you have created a OTP in 1Password for your GitHub account!"))}u.isMDXComponent=!0},2979:function(e,t,A){t.Z=A.p+"assets/images/1password-empty-field-c0e585864049e60ff4f6fc93b1a94a72.png"},9341:function(e,t,A){t.Z=A.p+"assets/images/1password-field-dropdown-43dca48762b0e2e94632b4557061f9d4.png"},1431:function(e,t){t.Z="data:image/png;base64,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"},5405:function(e,t,A){t.Z=A.p+"assets/images/1password-scanner-window-48b35cd2b6ca5a7a500d999cfffee6e1.png"},663:function(e,t){t.Z="data:image/png;base64,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"},8562:function(e,t,A){t.Z=A.p+"assets/images/github-2fa-d9d00ac783f9eea3de6748ff4424bfd3.png"}}]);