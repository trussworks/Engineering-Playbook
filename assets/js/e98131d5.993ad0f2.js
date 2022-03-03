"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3059],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7245:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},c="[InfraSec](/Engineering-Playbook/docs/infrasec/) / SSL Certificates",l={unversionedId:"infrasec/certs",id:"infrasec/certs",title:"[InfraSec](README.md) / SSL Certificates",description:"SSL Certificates are most commonly used to verify a server's identity and",source:"@site/docs/infrasec/certs.md",sourceDirName:"infrasec",slug:"/infrasec/certs",permalink:"/Engineering-Playbook/docs/infrasec/certs",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/certs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](README.md) / Project Bootstrap Guide",permalink:"/Engineering-Playbook/docs/infrasec/bootstrap"},next:{title:"[InfraSec](README.md) / InfraSec Practice Charter",permalink:"/Engineering-Playbook/docs/infrasec/charter"}},p={},u=[{value:"Getting a real certificate",id:"getting-a-real-certificate",level:2},{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:3},{value:"SSLMate",id:"sslmate",level:3},{value:"External resources",id:"external-resources",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infrasec--ssl-certificates"},(0,i.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/infrasec/"},"InfraSec")," / SSL Certificates"),(0,i.kt)("p",null,"SSL Certificates are most commonly used to verify a server's identity and\nencrypt HTTP traffic. Usually, we try to use offerings like Amazon's\n",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/certificate-manager/"},"AWS Certificate Manager")," to\neliminate the toil of obtaining certificates and keeping them up to date."),(0,i.kt)("p",null,"However, this isn't always feasible. Sometimes we can use self-signed\ncertificates if it will not be exposed to users (for instance, to encrypt\nthe connection between containers and their ALB), but in many cases we'll\nneed to get a real certificate."),(0,i.kt)("p",null,"Note: TLS (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"Transport Layer Security"),')\nis essentially the second generation of SSL. It is not uncommon for both\nterms to be used interchangeably at this point, but "real" SSL is\ndeprecated. Any modern systems should be using TLS.'),(0,i.kt)("h2",{id:"getting-a-real-certificate"},"Getting a real certificate"),(0,i.kt)("h3",{id:"lets-encrypt"},"Let's Encrypt"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," provides free short-lifetime\ncertificates; they also provide a daemon which can autorenew these\ncertificates if you are running on actual hosts (or full instances) where\nrunning an additional daemon makes sense. However, this doesn't work\nfor many of our use cases, where we are trying to run our applications in\nbare containers."),(0,i.kt)("h3",{id:"sslmate"},"SSLMate"),(0,i.kt)("p",null,"If you need to get a certificate and cannot use a service like ACM or\nLet's Encrypt, you can get one via ",(0,i.kt)("a",{parentName:"p",href:"https://sslmate.com/"},"SSLMate"),"; they\noffer a command line client that makes it relatively easy to get new\ncertificates or update old ones, autorenewal, and a reasonable price for\none-off certificates. Their documentation is\n",(0,i.kt)("a",{parentName:"p",href:"https://sslmate.com/help/"},"here")," but the general process is this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register a new account with SSLMate; save the username and password\nto 1Password for your project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the SSLMate client:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install sslmate\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Generate a new certificate. If you just need a cert for a single\ndomain, this should be just:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ mkdir ~/sslmate\n$ cd ~/sslmate\n$ sslmate buy example.com --approval=dns\n")),(0,i.kt)("p",{parentName:"li"},"This will prompt you for your SSLMate username and password, and\nask you to confirm your order. Once you do, it will provide you with\na DNS record you need to create to verify you have access to this\ndomain. Create this record (usually via Terraform) and then continue\nthis workflow.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once your certificate has been validated, ",(0,i.kt)("inlineCode",{parentName:"p"},"sslmate")," will dump a key,\na certificate, an intermediate CA certificate, and a combined server\nchain certificate into your current directory. You will probably only\nneed the first two; everything but the key can be later retrieved from\nSSLMate if you need to. ",(0,i.kt)("em",{parentName:"p"},"The key only exists where you generated the\nkey")," (so, your laptop) -- make sure you put this somewhere safe (like\nthe AWS Parameter Store); if you lose it you will need to regenerate\nthe key and the certs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The easiest way to pass these certificates to your application is\nlikely via the AWS Parameter Store using ",(0,i.kt)("inlineCode",{parentName:"p"},"chamber"),", but it may vary for\nyour project. To add it to the Parameter Store with ",(0,i.kt)("inlineCode",{parentName:"p"},"chamber"),", you can\nuse a command similar to this one:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aws-vault exec my-aws-profile -- chamber write "app-myapp-myenv" server-cert - < example.com.crt\n$ aws-vault exec my-aws-profile -- chamber write "app-myapp-myenv" server-key - < example.com.key\n')))),(0,i.kt)("h2",{id:"external-resources"},"External resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How an SSL/TLS handshake works: ",(0,i.kt)("a",{parentName:"li",href:"https://www.ssl.com/article/ssl-tls-handshake-overview/"},"https://www.ssl.com/article/ssl-tls-handshake-overview/"))))}f.isMDXComponent=!0}}]);