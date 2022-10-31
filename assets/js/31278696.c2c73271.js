"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8142],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(c,o(o({ref:t},h),{},{components:a})):n.createElement(c,o({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(8209);const r={},o="Shell programming",l={unversionedId:"developing/languages/BASH",id:"developing/languages/BASH",title:"Shell programming",description:"Overview",source:"@site/docs/developing/languages/BASH.md",sourceDirName:"developing/languages",slug:"/developing/languages/BASH",permalink:"/docs/developing/languages/BASH",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/languages/BASH.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Programming Languages",permalink:"/docs/developing/languages/"},next:{title:"Go",permalink:"/docs/developing/languages/GO"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Tools",id:"tools",level:3},{value:"Pitfalls",id:"pitfalls",level:2},{value:"PATH",id:"path",level:2},{value:"Resources",id:"resources",level:2},{value:"Notes",id:"notes",level:3}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shell-programming"},"Shell programming"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Best practices tl;dr:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Think hard before using bash. Something else is ",(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/BashWeaknesses"},"often better"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For portability, ",(0,i.kt)("a",{parentName:"li",href:"http://gondor.apana.org.au/~herbert/dash/"},"dash")," provides a minimal POSIX shell feature set."),(0,i.kt)("li",{parentName:"ul"},"For complicated tasks, a more modern language like Go or Python may be more reliable and easy to maintain."))),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://shellcheck.net"},"shellcheck")),(0,i.kt)("li",{parentName:"ul"},"Don't copy & paste code from Google or StackExchange unless you fully understand it"),(0,i.kt)("li",{parentName:"ul"},"Keep your bash version up to date with your package manager (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install bash")," and routinely running ",(0,i.kt)("inlineCode",{parentName:"li"},"brew upgrade"),"), or stick to whatever version your team has agreed to standardize on (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"brew pin bash"),"). However, be aware that behavior of bash code can vary slightly between different versions of the interpreter."),(0,i.kt)("li",{parentName:"ul"},"Consolidate your bash profiles into a single ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," file to streamline machine instructions affecting your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," environment variables.")),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Bash will emit debugging output after ",(0,i.kt)("inlineCode",{parentName:"p"},"set -x")," is executed. ",(0,i.kt)("inlineCode",{parentName:"p"},"set +x")," to disable debugging output. ",(0,i.kt)("inlineCode",{parentName:"p"},"bash -x ./brokenscript")," has the same effect without requiring edits to the file. It is also possible to configure the format of the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export PS4='+$BASH_SOURCE:$LINENO:$FUNCNAME: '\n")),(0,i.kt)("p",null,"For extra verbose debugging, it may be useful to combine this option with ",(0,i.kt)("inlineCode",{parentName:"p"},"set -v"),": this will also display the shell lines as they are read (i.e. before substitutions are resolved, etc)."),(0,i.kt)("h3",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shellcheck.net"},"shellcheck")," is an excellent code linter for bash that catches many common anti-patterns. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/koalaman/shellcheck#user-content-in-your-editor"},"Integrations"),' with several popular editors are available. If you only take one thing from this document, make it "use ',(0,i.kt)("inlineCode",{parentName:"li"},"shellcheck"),'".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://bashdb.sourceforge.net/"},"bashdb")," is an interactive bash debugger inspired by gdb.")),(0,i.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("p",null,"Shell programming is deceptively perilous (see ",(0,i.kt)("a",{parentName:"p",href:"https://mywiki.wooledge.org/BashPitfalls"},"Bash Pitfalls")," on Greg's Wiki and ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bash-hackers.org/scripting/newbie_traps"},"Beginner Mistakes")," on Bash-Hackers Wiki). Sites like tldp.org and StackOverflow have high pagerank for shell programming questions, but code blocks posted on these sites will not uncommonly have smells or dangerous errors. Check the ",(0,i.kt)("a",{parentName:"p",href:"#Resources"},"Resources")," section of this document for some more trustworthy sources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"POSIX is ",(0,i.kt)("em",{parentName:"li"},"very permissive")," about what can go in a file name. In fact, ",(0,i.kt)("em",{parentName:"li"},"anything")," except a null byte could be in a filename. Problematic characters include (but are by no means limited to) tabs, newlines, non-breaking spaces, ",(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/glob"},"glob")," characters, and leading dashes. Many beginner mistakes are a result of failure to fully grok the implications of this; e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/WordSplitting"},"word splitting")," on whitespace, or globs getting expanded in surprising ways. Aggressively ",(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/Quotes"},"quoting")," substitutions without a specific reason not to is good practice."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bash")," is ubiquitous, but bash != bash. Not infrequently, a version of bash will change its handling of a particular case, only to revert to the old behavior in the next version. MacOS ships bash 3.2.57, but as of this writing bash 5.0 is in homebrew. Other versions may be on whatever host your script will run on, but there is no portable way to force which ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," version you will get. On many systems, ",(0,i.kt)("inlineCode",{parentName:"li"},"/bin/sh")," resolves to ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," in POSIX compatibility mode, but you can't be guaranteed of that: prefer being explicit and using ",(0,i.kt)("inlineCode",{parentName:"li"},"#!/usr/bin/env bash")," for the shebang."),(0,i.kt)("li",{parentName:"ul"},"Be aware of the unpredictable behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"set -e")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"set -o errexit"),". This is useful when developing a script, but ",(0,i.kt)("a",{parentName:"li",href:"http://www.fvue.nl/wiki/Bash:_Error_handling"},"may not behave as you expect"),". The behavior is ",(0,i.kt)("a",{parentName:"li",href:"https://www.in-ulm.de/~mascheck/various/set-e/"},"unpredictable")," depending on which shell version your script ultimately runs on; based on this history, consider that it may even change further in future versions of ",(0,i.kt)("inlineCode",{parentName:"li"},"bash"),"."),(0,i.kt)("li",{parentName:"ul"},"Avoid using ",(0,i.kt)("inlineCode",{parentName:"li"},"cd")," in the main thread when possible, and always include error handling in case the command fails. Losing track of this state can lead to disastrous consequences. Try to use absolute paths, or a subshell like ",(0,i.kt)("inlineCode",{parentName:"li"},"( cd somedir || exit ; somecommand )"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/DontReadLinesWithFor"},"Don't")," iterate through lines in a stream with ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),"."),(0,i.kt)("li",{parentName:"ul"},"Prefer ",(0,i.kt)("inlineCode",{parentName:"li"},"[[")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"["),": ",(0,i.kt)("inlineCode",{parentName:"li"},"[[")," is a bash extension that is a strict upgrade over ",(0,i.kt)("inlineCode",{parentName:"li"},"["),".")),(0,i.kt)("h2",{id:"path"},"PATH"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," is a shortcut to a certain location on your machine, which you can view by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"echo $PATH")," in the terminal. To oversimplify, a ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," is an environment variable which consists of a list of directories. Adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," profile will give your machine direct instructions on where to look for a certain program.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One of several files can affect how your machine searches for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", listed in the order a Mac searches for them:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," (read on every new shell, so looked at far more often)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.bash_profile")," (read only on login)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.profile")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have multiple files affecting your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", consider consolidating them into one ",(0,i.kt)("inlineCode",{parentName:"p"},"/.bashrc")," and deleting the others. Next, organize each ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," directory in your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," from most-used to least-used to maximize efficiency."))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The bash man page: ",(0,i.kt)("inlineCode",{parentName:"li"},"man bash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://gnu.org/s/bash/manual"},"GNU Bash Manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://mywiki.wooledge.org/BashGuide"},"Bash Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://mywiki.wooledge.org/BashFAQ"},"Bash FAQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mywiki.wooledge.org/BashPitfalls"},"Bash Pitfalls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.bash-hackers.org/"},"Bash-Hackers Wiki")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://truss.works/blog/2016/2/26/engineer-how-to-access-and-edit-your-path-system-variable"},"Path Variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/manual/bash.html#Introduction-and-Notation"},"CLI Navigation Shortcuts"))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The Bash CLI navigation shortcuts resource linked above refers to a keyboard\nshortcut for moving the cursor from word to word: ",(0,i.kt)("inlineCode",{parentName:"p"},"meta key + f or b")," (under\nsection ",(0,i.kt)("inlineCode",{parentName:"p"},"8.2.2 Readline Movement Commands"),"). This shortcut does not work out of\nthe box on a Mac. In the macOS Terminal app and iTerm2, the default keyboard\nshortcut for moving from word to word is ",(0,i.kt)("inlineCode",{parentName:"p"},"option + left or right arrow"),". If you\nwant to use ",(0,i.kt)("inlineCode",{parentName:"p"},"option + f or b"),", there is a checkbox in Terminal app to\n",(0,i.kt)("inlineCode",{parentName:"p"},"Use Option as Meta key")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"Preferences -> Profiles -> Keyboard"),". In iTerm2,\nyou can change key mappings under ",(0,i.kt)("inlineCode",{parentName:"p"},"Preferences -> Profiles -> Keys"),"."))}u.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);