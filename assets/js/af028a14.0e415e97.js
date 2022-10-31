"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));n(8209);const a={},i="Building internal tools with GoReleaser",l={unversionedId:"developing/command-line-tools/HOW2GORELEASER",id:"developing/command-line-tools/HOW2GORELEASER",title:"Building internal tools with GoReleaser",description:"Overview",source:"@site/docs/developing/command-line-tools/HOW2GORELEASER.md",sourceDirName:"developing/command-line-tools",slug:"/developing/command-line-tools/HOW2GORELEASER",permalink:"/docs/developing/command-line-tools/HOW2GORELEASER",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/command-line-tools/HOW2GORELEASER.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Line Tools",permalink:"/docs/developing/command-line-tools/"},next:{title:"Configuration",permalink:"/docs/developing/configuration/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Install GoReleaser",id:"install-goreleaser",level:2},{value:"Split a tool out from an existing project",id:"split-a-tool-out-from-an-existing-project",level:2},{value:"Get the project building binaries",id:"get-the-project-building-binaries",level:2},{value:"Generate a <code>go.mod</code> file",id:"generate-a-gomod-file",level:3},{value:"Add pre-commit hooks",id:"add-pre-commit-hooks",level:2},{value:"Example .pre-commit-config.yaml and .markdownlintrc",id:"example-pre-commit-configyaml-and-markdownlintrc",level:3},{value:"Create Docker configuration",id:"create-docker-configuration",level:2},{value:"Example Dockerfile",id:"example-dockerfile",level:3},{value:"Create a Docker repo",id:"create-a-docker-repo",level:2},{value:"Create a Docker Hub repo",id:"create-a-docker-hub-repo",level:3},{value:"Get an API key for pushing the docker image",id:"get-an-api-key-for-pushing-the-docker-image",level:3},{value:"Create goreleaser configuration",id:"create-goreleaser-configuration",level:2},{value:"Example .goreleaser.yml",id:"example-goreleaseryml",level:3},{value:"Test goreleaser locally",id:"test-goreleaser-locally",level:3},{value:"Set up CircleCI",id:"set-up-circleci",level:2},{value:"Project Environment Variables",id:"project-environment-variables",level:3},{value:"CircleCI config.yml example",id:"circleci-configyml-example",level:3},{value:"Run a release from GitHub",id:"run-a-release-from-github",level:3},{value:"Verify the release",id:"verify-the-release",level:2},{value:"Verify you can install from your configured Homebrew Tap",id:"verify-you-can-install-from-your-configured-homebrew-tap",level:3},{value:"Verify you can install from docker hub",id:"verify-you-can-install-from-docker-hub",level:3},{value:"Broadcast this to others",id:"broadcast-this-to-others",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-internal-tools-with-goreleaser"},"Building internal tools with GoReleaser"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This is a biased document for how to build and release tools written in go."),(0,r.kt)("p",null,"If someone else has already written a tool and open sourced it use it and contribute to it."),(0,r.kt)("p",null,"Feel free to update and make changes!"),(0,r.kt)("h2",{id:"install-goreleaser"},"Install GoReleaser"),(0,r.kt)("p",null,"To install GoReleaser visit the ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/install/"},"installation instructions"),". It can be installed\nwith brew if you use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install goreleaser/tap/goreleaser\nbrew install goreleaser\n")),(0,r.kt)("h2",{id:"split-a-tool-out-from-an-existing-project"},"Split a tool out from an existing project"),(0,r.kt)("p",null,"If you are splitting a tool from an existing project, you can follow the\ninstructions in ",(0,r.kt)("a",{parentName:"p",href:"/docs/developing/vcs/git-repos#splitting-out-code-to-a-new-repository"},"here"),"."),(0,r.kt)("p",null,"If you are adding your tool to the Trussworks GitHub org, please add the repo to\nour ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/legendary-waddle/tree/master/trussworks-prod/github-global"},"Infra Management\nRepo"),".\nIf you need help, please reach out to the #infrasec Slack channel."),(0,r.kt)("h2",{id:"get-the-project-building-binaries"},"Get the project building binaries"),(0,r.kt)("p",null,"This assumes you are creating a binary from a Go project."),(0,r.kt)("h3",{id:"generate-a-gomod-file"},"Generate a ",(0,r.kt)("inlineCode",{parentName:"h3"},"go.mod")," file"),(0,r.kt)("p",null,"Your project may not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod")," file already, you can skip ahead if so."),(0,r.kt)("p",null,"Initializes your ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod")," file with your current version of Go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go mod init github.com/OWNER/NEWREPO\n")),(0,r.kt)("p",null,"Fills out your ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"go.sum")," files and builds your binary for your current OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go build\n")),(0,r.kt)("p",null,"You might run into some issues getting this to work outside of a project you may have split this code from. Spend some time getting it to build."),(0,r.kt)("p",null,"When you feel good about it, add ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"go.sum")," to your git index with a commit."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/mindorks/create-projects-independent-of-gopath-using-go-modules-802260cdfb51"},"Blog post I used to figure this out")),(0,r.kt)("h2",{id:"add-pre-commit-hooks"},"Add pre-commit hooks"),(0,r.kt)("p",null,"Write a ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file and add it to git with a commit.\nThen install the hooks and run the hooks against all files for the first time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pre-commit install --install-hooks\npre-commit run --all-files\n")),(0,r.kt)("p",null,"Fix any issues you find and commit your changes to your repo."),(0,r.kt)("h3",{id:"example-pre-commit-configyaml-and-markdownlintrc"},"Example .pre-commit-config.yaml and .markdownlintrc"),(0,r.kt)("p",null,"The following example ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," does some nice things for a basic go project.\nEnsure you're using the latest versions of these tools by running ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-commit autoupdate")," and\nchecking in changes to source control."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"repos:\n  - repo: https://github.com/golangci/golangci-lint\n    rev: v1.21.0\n    hooks:\n      - id: golangci-lint\n\n  - repo: https://github.com/pre-commit/pre-commit-hooks\n    rev: v2.4.0\n    hooks:\n      - id: check-json\n      - id: check-merge-conflict\n      - id: check-yaml\n      - id: detect-private-key\n      - id: pretty-format-json\n        args:\n          - --autofix\n      - id: trailing-whitespace\n\n  - repo: https://github.com/igorshubovych/markdownlint-cli\n    rev: v0.21.0\n    hooks:\n      - id: markdownlint\n\n  - repo: https://github.com/trussworks/pre-commit-hooks\n    rev: v0.0.4\n    hooks:\n      - id: circleci-validate\n      - id: goreleaser-check\n")),(0,r.kt)("p",null,"This example ",(0,r.kt)("inlineCode",{parentName:"p"},".markdownlintrc")," will work with the above ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," example.\nThis ignores some stylistic but annoying triggers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": true,\n  "first-header-h1": false,\n  "first-line-h1": false,\n  "line_length": false,\n  "no-multiple-blanks": false,\n  "fenced-code-language": false\n}\n')),(0,r.kt)("h2",{id:"create-docker-configuration"},"Create Docker configuration"),(0,r.kt)("p",null,"Suggested but optional. This is just another distribution method."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," at the root of your repo and commit it to git."),(0,r.kt)("h3",{id:"example-dockerfile"},"Example Dockerfile"),(0,r.kt)("p",null,"This example is a very basic Dockerfile that works with goreleaser with a tool/binary name of ",(0,r.kt)("inlineCode",{parentName:"p"},"binaryname"),"."),(0,r.kt)("p",null,"Goreleaser will use the binary it determines is correct to copy into the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},'FROM alpine:3\nCOPY binaryname /bin/binaryname\nENTRYPOINT [ "binaryname" ]\n')),(0,r.kt)("h2",{id:"create-a-docker-repo"},"Create a Docker repo"),(0,r.kt)("p",null,"Create a Docker repo. There's Docker Hub, ECR, and GitHub.\nYou'll need to be sure to enable automation to push into whatever you use."),(0,r.kt)("h3",{id:"create-a-docker-hub-repo"},"Create a Docker Hub repo"),(0,r.kt)("p",null,"We don't use the trussworks Docker Hub org very much so you'll need to reach out to the #infrasec Slack channel to find someone to help you."),(0,r.kt)("p",null,"Log into ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," with your personal account. If you don't have an account then make one\nand then have someone on InfraSec add you to the Trussworks organization."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/create"},"Create a new Docker Hub repo")," following the same naming convention of the\nrepo like ",(0,r.kt)("inlineCode",{parentName:"p"},"trussworks/NEWREPO"),". You should be able to select ",(0,r.kt)("inlineCode",{parentName:"p"},"trussworks")," from a drop down on the form. Then set\nthe name to the same name as your tool or github repository name. The repository should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Public")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"Private"),"\nif it is an open-source tool."),(0,r.kt)("p",null,"After creating the repo configure the permissions to allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"bots")," user group to have ",(0,r.kt)("inlineCode",{parentName:"p"},"Read & Write"),"\naccess to that repo."),(0,r.kt)("h3",{id:"get-an-api-key-for-pushing-the-docker-image"},"Get an API key for pushing the docker image"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"trussworksbot")," user credentials in 1Password to log into ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," (you may have\nto log out of your personal user session).  In the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/settings/security"},"Security Settings"),"\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"trussworksbot"),' create a "New Access Token" named for the repository you just created. Save this access key to\nthe ',(0,r.kt)("inlineCode",{parentName:"p"},"trussworksbot")," 1Password as you will need it later for configuring CircleCI."),(0,r.kt)("h2",{id:"create-goreleaser-configuration"},"Create goreleaser configuration"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".goreleaser.yml")," file and commit it."),(0,r.kt)("h3",{id:"example-goreleaseryml"},"Example .goreleaser.yml"),(0,r.kt)("p",null,"This has some decent build defaults. This will get dependencies from go.mod then build for both OSX and Linux.\nGoreleaser will also update the release in GitHub with the artifacts it builds.\nIt will also push to a brew tap. Build a Docker container but skip shipping to it."),(0,r.kt)("p",null,"Note: I had to add ",(0,r.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0")," so the linux binary would work in Docker."),(0,r.kt)("p",null,"If you don't need to build a Docker container, just remove the docker stanza."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'env:\n  - GO111MODULE=auto\nbefore:\n  hooks:\n    - go mod download\nbuilds:\n- env:\n    - CGO_ENABLED=0\n  goos:\n    - darwin\n    - linux\n  goarch:\n    - amd64\n  main: main.go\nbrews:\n  - description: "USE THE DESCRIPTION FROM THE GITHUB REPO"\n    github:\n      owner: trussworks\n      name: homebrew-tap\n    homepage: "https://github.com/trussworks/NEWREPO"\n    commit_author:\n      name: trussworks-infra\n      email: infra+github@truss.works\ndockers:\n  -\n    binaries:\n      - <BINARYNAME>\n    image_templates:\n      - "OWNER/NEWREPO:{{ .Tag }}"\n    skip_push: true\narchives:\n  -\n    replacements:\n      darwin: Darwin\n      linux: Linux\n      amd64: x86_64\nchecksum:\n  name_template: \'checksums.txt\'\n  algorithm: sha256\nsnapshot:\n  name_template: "{{ .Tag }}-next"\nchangelog:\n  sort: asc\n  filters:\n    exclude:\n    - \'^docs:\'\n    - \'^test:\'\n')),(0,r.kt)("h3",{id:"test-goreleaser-locally"},"Test goreleaser locally"),(0,r.kt)("p",null,"Validate your file with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"goreleaser check\n")),(0,r.kt)("p",null,"Then try to build from this configuration using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"goreleaser build --snapshot --rm-dist\n")),(0,r.kt)("p",null,"Now you should have build artifacts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," directory in your repository. This is a good time to ensure\nthat ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," is in your ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file."),(0,r.kt)("p",null,"In your terminal from the root of your repo, try runing goreleaser without releasing with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"goreleaser --snapshot --skip-publish --rm-dist\n")),(0,r.kt)("p",null,"This goes beyond the build process and tests out the parts of the releaser related to pushing artifacts."),(0,r.kt)("h2",{id:"set-up-circleci"},"Set up CircleCI"),(0,r.kt)("p",null,"First log into CircleCI and go to the ",(0,r.kt)("a",{parentName:"p",href:"https://app.circleci.com/projects/project-dashboard/github/trussworks"},"Projects Dashboard"),'.\nFrom this page you can find your repository and either select "Set Up Project" or "Follow Project".'),(0,r.kt)("p",null,"The next step is to write a CircleCI config file and commit it to your repo.\nYou will need to do some manual configuration in CircleCI to get this working."),(0,r.kt)("h3",{id:"project-environment-variables"},"Project Environment Variables"),(0,r.kt)("p",null,"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_USER"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_PASS")," environment variables from the CircleCI UI."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," is used by goreleaser to update release notes and push binaries to the release on GitHub. It is also\nused to update the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/homebrew-tap"},"trussworks/homebrew-tap")," with the new artifact\nlocations and checksums. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"infra+github@truss.works")," 1Password you will find an API Key named\n",(0,r.kt)("inlineCode",{parentName:"p"},"personal access token for releases")," which can be used for this value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_USER")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_PASS")," are configured from the ",(0,r.kt)("inlineCode",{parentName:"p"},"trussworksbot")," in 1Password. Use the API Key you configured\nin an earlier step to fill out these values. This is how CircleCI will push to Docker Hub."),(0,r.kt)("p",null,"These values are configured at the URL ",(0,r.kt)("a",{parentName:"p",href:"https://app.circleci.com/settings/project/github/trussworks/NEWREPO/environment-variables"},"https://app.circleci.com/settings/project/github/trussworks/NEWREPO/environment-variables"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"NEWREPO")," with the name of your github repo."),(0,r.kt)("h3",{id:"circleci-configyml-example"},"CircleCI config.yml example"),(0,r.kt)("p",null,"Add the contents of this code block to .circleci/config.yml in your repo after setting your repo up with CircleCI."),(0,r.kt)("p",null,"This configuration creates two CircleCI workflows ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"release"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," workflow is run on each commit to the repository or branch push.\nThis will run your pre-commit hooks as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," workflow will only run on certain tag pushes to the repo.\nThis workflow will setup to build Docker containers then run goreleaser as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},".goreleaser.yml"),".\nAfter binaries and containers are built by ",(0,r.kt)("inlineCode",{parentName:"p"},".goreleaser.yml")," this validates the container works by running the container with its default entry point using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),' flag.\nThis should just be a sanity check that the container "does the right thing".'),(0,r.kt)("p",null,"If you are not building a Docker container, you must remove these steps in the release job:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setup_remote_docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Login to Docker Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Check Docker container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Docker push"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: 2.1\n\nreferences:\n  circleci-docker-primary: &circleci-docker-primary trussworks/circleci-docker-primary:99bee5627ff234eb0f31f5899628bff03df78b6d\n\njobs:\n  validate:\n    docker:\n      - image: *circleci-docker-primary\n    steps:\n      - checkout\n      - restore_cache:\n          keys:\n            - pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}\n      - run:\n          name: Run pre-commit tests\n          command: pre-commit run --all-files\n      - save_cache:\n          key: pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}\n          paths:\n            - ~/.cache/pre-commit\n  release:\n    docker:\n      - image: *circleci-docker-primary\n    steps:\n      - checkout\n      - setup_remote_docker\n      - run: goreleaser\n      - run:\n          name: Login to Docker Hub\n          command: docker login -u $DOCKER_USER -p $DOCKER_PASS\n      - run:\n          name: Test that Docker container works\n          command: docker run -it OWNER/NEWREPO:<< pipeline.git.tag >> --help\n      - run:\n          name: Docker push\n          command: docker push OWNER/NEWREPO:<< pipeline.git.tag >>\nworkflows:\n  version: 2.1\n  validate:\n    jobs:\n      - validate\n  release:\n    jobs:\n      - release:\n          filters:\n            branches:\n              ignore: /^.*/\n            tags:\n              only: /^v[0-9]+(\\.[0-9]+)*(-.*)*/\n')),(0,r.kt)("h3",{id:"run-a-release-from-github"},"Run a release from GitHub"),(0,r.kt)("p",null,"Cut a release from ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," with a tag using semantic versioning in the style of ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.0.0")," using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git tag v0.0.0\ngit push --tags\n")),(0,r.kt)("p",null,"This will create a tag and CircleCI will automatically run the ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," workflow. This will work even on\na branch, meaning you can test the release process before merging this code into the mainline branch."),(0,r.kt)("h2",{id:"verify-the-release"},"Verify the release"),(0,r.kt)("h3",{id:"verify-you-can-install-from-your-configured-homebrew-tap"},"Verify you can install from your configured Homebrew Tap"),(0,r.kt)("p",null,"First see if your tool appears in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/homebrew-tap"},"trussworks/homebrew-tap")," repo.\nThere should be a Ruby file with your tool's name. If it is there then proceed to install it."),(0,r.kt)("p",null,"Install the Trussworks tap to homebrew and then install the tool you built."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap trussworks/tap\nbrew install tool-name\n")),(0,r.kt)("p",null,"Test your tool by using the help command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tool-name -h\ntool-name version\n")),(0,r.kt)("p",null,"Verify the version matches the release version."),(0,r.kt)("p",null,"Be sure you updated the ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," in the new tool repo to have installation instructions."),(0,r.kt)("h3",{id:"verify-you-can-install-from-docker-hub"},"Verify you can install from docker hub"),(0,r.kt)("p",null,"You will want to verify that your docker image was pushed to Docker Hub. Try pulling the image and running from\nthe container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull trussworks/tool-name:v0.0.0\ndocker run -it trussworks/tool-name:v0.0.0 --help\ndocker run -it trussworks/tool-name:v0.0.0 version\n")),(0,r.kt)("h2",{id:"broadcast-this-to-others"},"Broadcast this to others"),(0,r.kt)("p",null,"Be sure you let other folks know you broke this out for them to use and contribute to! Consider doing one of these to help get more eyes on your new tool repo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the people you worked with on this tool to your PRs on this repo."),(0,r.kt)("li",{parentName:"ul"},"Add some documentation to your repo and send the repo to Trussels in Slack!"),(0,r.kt)("li",{parentName:"ul"},"Do a demo for your team or other teams or as an OTT.")))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);