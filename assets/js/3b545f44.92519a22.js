"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6087],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(i),h=r,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return i?n.createElement(d,l(l({ref:t},u),{},{components:i})):n.createElement(d,l({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=i[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5184:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var n=i(3117),r=i(102),a=(i(7294),i(3905)),l=["components"],o={},s="[Tools and Practice](/docs/developing/) / Command Line Tools",m={unversionedId:"developing/command-line-tools/README",id:"developing/command-line-tools/README",title:"[Tools and Practice](../README.md) / Command Line Tools",description:"Overview",source:"@site/docs/developing/command-line-tools/README.md",sourceDirName:"developing/command-line-tools",slug:"/developing/command-line-tools/",permalink:"/docs/developing/command-line-tools/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/command-line-tools/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best Practices for Submitting a Pull Request",permalink:"/docs/developing/code-reviews/pull-request-best-practices"},next:{title:"[Tools and Practice](../README.md) / Building internal tools with GoReleaser",permalink:"/docs/developing/command-line-tools/HOW2GORELEASER"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Terminal Emulators",id:"terminal-emulators",level:2},{value:"Resources",id:"resources",level:3},{value:"iTerm2",id:"iterm2",level:4},{value:"Configuration",id:"configuration",level:5},{value:"Shells",id:"shells",level:2},{value:"Resources",id:"resources-1",level:3},{value:"zsh",id:"zsh",level:4},{value:"Frameworks",id:"frameworks",level:5},{value:"fish",id:"fish",level:4},{value:"Frameworks",id:"frameworks-1",level:5},{value:"Configuration",id:"configuration-1",level:5},{value:"File compression and archiving",id:"file-compression-and-archiving",level:2},{value:"git tools",id:"git-tools",level:2},{value:"Colorizers",id:"colorizers",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Database access",id:"database-access",level:2},{value:"Data Manipulation",id:"data-manipulation",level:2},{value:"JSON",id:"json",level:3},{value:"Document format conversion",id:"document-format-conversion",level:2},{value:"Plain text search tools",id:"plain-text-search-tools",level:2},{value:"macOS system administration",id:"macos-system-administration",level:2},{value:"Remote host administration",id:"remote-host-administration",level:2},{value:"HTTP clients",id:"http-clients",level:2},{value:"Terminal recording/sharing",id:"terminal-recordingsharing",level:2},{value:"Learning/Debugging/Looking Things Up",id:"learningdebugginglooking-things-up",level:2},{value:"*nix tools",id:"nix-tools",level:2}],p={toc:c};function h(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tools-and-practice--command-line-tools"},(0,a.kt)("a",{parentName:"h1",href:"/docs/developing/"},"Tools and Practice")," / Command Line Tools"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This is a list of recommended tools used at Truss to enhance productivity and\ndeveloper happiness."),(0,a.kt)("p",null,"You may also be interested in these other pages from the Truss Engineering Playbook:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/trussworks/Engineering-Playbook/tree/master/developing/docker"},"docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/trussworks/Engineering-Playbook/tree/master/developing/direnv"},"direnv"))),(0,a.kt)("h2",{id:"terminal-emulators"},"Terminal Emulators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2"))),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("h4",{id:"iterm2"},"iTerm2"),(0,a.kt)("h5",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TomAnthony/itermocil"},"itermocil")," - Create pre-defined\nwindow/pane layouts and run commands in iTerm")),(0,a.kt)("h2",{id:"shells"},"Shells"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bash"),(0,a.kt)("li",{parentName:"ul"},"zsh"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fishshell.com/"},"fish"))),(0,a.kt)("h3",{id:"resources-1"},"Resources"),(0,a.kt)("h4",{id:"zsh"},"zsh"),(0,a.kt)("h5",{id:"frameworks"},"Frameworks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ohmyz.sh/"},"Oh My Zsh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sorin-ionescu/prezto"},"Prezto"))),(0,a.kt)("h4",{id:"fish"},"fish"),(0,a.kt)("h5",{id:"frameworks-1"},"Frameworks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oh-my-fish/oh-my-fish"},"Oh My Fish"))),(0,a.kt)("h5",{id:"configuration-1"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/JeanMertz/chruby-fish"},"chruby-fish")," - Thin wrapper around\n",(0,a.kt)("inlineCode",{parentName:"li"},"chruby")," to make it work with the Fish shell")),(0,a.kt)("h2",{id:"file-compression-and-archiving"},"File compression and archiving"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unarchiver.c3.cx/commandline"},"unar")," Universal unarchiver"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://facebook.github.io/zstd/"},"zstd")," Ridonkulously fast (de)compression algorithm")),(0,a.kt)("h2",{id:"git-tools"},"git tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jonas/tig"},"tig")," ncurses interface for git"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cli/cli"},"github-cli")," A ",(0,a.kt)("inlineCode",{parentName:"li"},"git")," helper for GitHub specific operations from the command-line")),(0,a.kt)("h2",{id:"colorizers"},"Colorizers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://korpus.juls.savba.sk/~garabik/software/grc.html"},"grc")," Generic colorizer.\nFor example: ",(0,a.kt)("inlineCode",{parentName:"li"},"alias ping='\\grc --stdout --stderr --colour=on ping'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/so-fancy/diff-so-fancy"},"diff-so-fancy")," Prettier colored diffs in git."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mookid/diffr"},"diffr")," Another colordiff alternative.\nFor example: ",(0,a.kt)("inlineCode",{parentName:"li"},"git diff | diffr"))),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux"},"tmux")," Terminal multiplexer with client-server architecture.\nCan easily recover lost shell sessions with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux-plugins/tpm"},"tpm"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux-plugins/tmux-resurrect"},"tmux-resurrect")," and (optionally) ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux-plugins/tmux-continuum"},"tmux-continuum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ranger.github.io/"},"ranger")," An ncurses file manager with vim-like bindings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://the.exa.website/"},"exa")," An ",(0,a.kt)("inlineCode",{parentName:"li"},"ls")," replacement with git integrations.\nFor example: ",(0,a.kt)("inlineCode",{parentName:"li"},"alias ll='exa --long --header --git --links --group-directories-first --color-scale --time-style=long-iso'"))),(0,a.kt)("h2",{id:"database-access"},"Database access"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.pgcli.com/"},"pgcli")," - CLI for Postgres with auto-completion and\nsyntax highlighting.")),(0,a.kt)("h2",{id:"data-manipulation"},"Data Manipulation"),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"))),(0,a.kt)("h2",{id:"document-format-conversion"},"Document format conversion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://waterlan.home.xs4all.nl/dos2unix.html"},"dos2unix")," Efficient conversion of line terminators between DOS and Unix format, and back"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pandoc.org/"},"pandoc")," Swiss-Army Knife of rich text document format conversion")),(0,a.kt)("h2",{id:"plain-text-search-tools"},"Plain text search tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," Stronger, faster, better grep.")),(0,a.kt)("h2",{id:"macos-system-administration"},"macOS system administration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mas-cli/mas"},"mas")," Control the Mac App Store from the command line")),(0,a.kt)("h2",{id:"remote-host-administration"},"Remote host administration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.funtoo.org/Keychain"},"keychain")," User-friendly front-end to ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh-agent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mosh.org/"},"mosh")," Mobile-friendly ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh")," replacement that performs better on unreliable network connections.")),(0,a.kt)("h2",{id:"http-clients"},"HTTP clients"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://httpie.org/"},"httpie"))),(0,a.kt)("h2",{id:"terminal-recordingsharing"},"Terminal recording/sharing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://asciinema.org/"},"asciinema")," - record and share Terminal sessions as\ntext that you can copy and paste.")),(0,a.kt)("h2",{id:"learningdebugginglooking-things-up"},"Learning/Debugging/Looking Things Up"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gleitz/howdoi"},"howdoi")," - instant coding answers via the command line"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tldr.sh/"},"tldr")," - simplifies ",(0,a.kt)("inlineCode",{parentName:"li"},"man")," with practical examples")),(0,a.kt)("h2",{id:"nix-tools"},"*","nix tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cal - quick monthly calendar view for the command line")))}h.isMDXComponent=!0}}]);