"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[2859],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},326:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={},p='[Learning Resources](/docs/developing/learning/) / "Asking For Help"',u={unversionedId:"developing/learning/asking_for_help",id:"developing/learning/asking_for_help",title:'[Learning Resources](./README.md) / "Asking For Help"',description:"When learning, it is expected one will encounter situations where you",source:"@site/docs/developing/learning/asking_for_help.md",sourceDirName:"developing/learning",slug:"/developing/learning/asking_for_help",permalink:"/docs/developing/learning/asking_for_help",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/learning/asking_for_help.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Tools and Practice](../README.md) / Learning Resources",permalink:"/docs/developing/learning/"},next:{title:'[Learning Resources](./README.md) / "Continuous Delivery"',permalink:"/docs/developing/learning/continuous_delivery"}},s={},c=[{value:"Bad Example",id:"bad-example",level:2},{value:"Good Example",id:"good-example",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"learning-resources--asking-for-help"},(0,i.kt)("a",{parentName:"h1",href:"/docs/developing/learning/"},"Learning Resources"),' / "Asking For Help"'),(0,i.kt)("p",null,"When learning, it is expected one will encounter situations where you\nneed help. ",(0,i.kt)("em",{parentName:"p"},"How")," you ask for help is an important skill to develop."),(0,i.kt)("p",null,"How you ask for help is very similar to how to submit a bug report. In\nparticular, you want to stick to the facts. Stay away from speculating\nabout why you are having the problem."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Explain what you are trying to do"),(0,i.kt)("li",{parentName:"ol"},"Explain what you tried"),(0,i.kt)("li",{parentName:"ol"},"Explain what you expected to see"),(0,i.kt)("li",{parentName:"ol"},"Explain what happened instead"),(0,i.kt)("li",{parentName:"ol"},"Explain what you searched for to try to solve the problem")),(0,i.kt)("h2",{id:"bad-example"},"Bad Example"),(0,i.kt)("p",null,"I have memory corruption when I try to run my program"),(0,i.kt)("h2",{id:"good-example"},"Good Example"),(0,i.kt)("p",null,'I am trying to capture the output of the "ls" command.'),(0,i.kt)("p",null,"I am trying to run this program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "fmt"\n    "os"\n    "os/exec"\n)\n\nfunc main() {\n    out, err := exec.Command("ls").Output()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error running ls: %s\\n", err)\n        os.Exit(1)\n    }\n    fmt.Println(out)\n}\n')),(0,i.kt)("p",null,"I invoke it with ",(0,i.kt)("inlineCode",{parentName:"p"},"go run prog.go")),(0,i.kt)("p",null,"I expect it to show ",(0,i.kt)("inlineCode",{parentName:"p"},"prog.go")),(0,i.kt)("p",null,"Instead, it prints ",(0,i.kt)("inlineCode",{parentName:"p"},"[112 114 111 103 46 103 111 10]")),(0,i.kt)("p",null,"I searched for how to print in go, but I didn't understand how to use\nthe format strings."))}g.isMDXComponent=!0}}]);