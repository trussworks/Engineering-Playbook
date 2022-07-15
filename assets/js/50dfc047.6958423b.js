"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8795],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={},s="Naming",p={unversionedId:"infrasec/aws/naming",id:"infrasec/aws/naming",title:"Naming",description:"Naming is one of the hard problems in computing. Naming instances in a shared name space, such as AWS, is especially rife with problems. Often a company uses a single AWS account across multiple projects and so the projects have to negotiate how to share the namespace for resources. There are a number of different axes of belonging we might want to include in the name: to which project does a resource belong, to which environment (dev, prod, staging), which function within the environment. Then there are entities which exist only in terms of their relationship to other objects, e.g. roles associated with a particular lambda function.",source:"@site/docs/infrasec/aws/naming.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/naming",permalink:"/docs/infrasec/aws/naming",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/naming.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GuardDuty for Organizations",permalink:"/docs/infrasec/aws/guardduty"},next:{title:"Bootstrapping an AWS Organization",permalink:"/docs/infrasec/aws/org-bootstrap"}},u={},c=[{value:"Globally unique",id:"globally-unique",level:2},{value:"S3 Buckets",id:"s3-buckets",level:3},{value:"Unique per account",id:"unique-per-account",level:2},{value:"IAM resources",id:"iam-resources",level:3},{value:"IAM policies",id:"iam-policies",level:4},{value:"IAM users",id:"iam-users",level:4},{value:"Unique per region",id:"unique-per-region",level:2},{value:"SNS topics",id:"sns-topics",level:3},{value:"Slackbot",id:"slackbot",level:3},{value:"VPC",id:"vpc",level:3},{value:"Subnets",id:"subnets",level:3},{value:"ECR",id:"ecr",level:3},{value:"Container images",id:"container-images",level:3},{value:"Terraform modules",id:"terraform-modules",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"naming"},"Naming"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Naming")," is one of the ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TwoHardThings.html"},"hard problems in computing"),". Naming instances in a shared name space, such as AWS, is especially rife with problems. Often a company uses a single AWS account across multiple projects and so the projects have to negotiate how to share the namespace for resources. There are a number of different axes of belonging we might want to include in the name: to which project does a resource belong, to which environment (dev, prod, staging), which function within the environment. Then there are entities which exist only in terms of their relationship to other objects, e.g. roles associated with a particular lambda function."),(0,r.kt)("p",null,"Things are further complicated in AWS because there are different uniqueness constraints in play:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Uniqueness constraint"),(0,r.kt)("th",{parentName:"tr",align:null},"Example resources"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global (the entirety of AWS)"),(0,r.kt)("td",{parentName:"tr",align:null},"S3 buckets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Per account"),(0,r.kt)("td",{parentName:"tr",align:null},"IAM resources (users, groups, roles, policies, \u2026)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Per region"),(0,r.kt)("td",{parentName:"tr",align:null},"Most everything else (ALB, ECS, RDS, \u2026)")))),(0,r.kt)("p",null,"As with all naming schemes (and other stylistic things such as casing and comments) where the client already has a functional naming scheme we should follow that - there are more important issues to deal with. However, for our own work and for projects where we are setting the standard tend to use the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#globally-unique"},"Globally unique"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#s3-buckets"},"S3 Buckets")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unique-per-account"},"Unique per account"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iam-resources"},"IAM resources"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iam-policies"},"IAM policies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iam-users"},"IAM users")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unique-per-region"},"Unique per region"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sns-topics"},"SNS topics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#slackbot"},"Slackbot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vpc"},"VPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subnets"},"Subnets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ecr"},"ECR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#container-images"},"Container images")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#terraform-modules"},"Terraform modules"))),(0,r.kt)("h2",{id:"globally-unique"},"Globally unique"),(0,r.kt)("h3",{id:"s3-buckets"},"S3 Buckets"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${account.alias}-${application.name}[-${environment}][-${region}]")," - these names begin with a consistent account/usage prefix as they are globally scoped across all of AWS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$account-alias"),' - is a prefix for the account, e.g. "truss", "client-name"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$application-name"),' - is application for which the resource is created, e.g. "aws-logs", "webserver", "terraform-state"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$environment")," - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"perf_test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"staging")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"prod"),"uction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$region")," - when an app can or will be distributed across AWS regions with distinct instances in each region, this postfix distinguishes between them")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"truss-aws-logs-us-east-1")),(0,r.kt)("h2",{id:"unique-per-account"},"Unique per account"),(0,r.kt)("h3",{id:"iam-resources"},"IAM resources"),(0,r.kt)("p",null,"IAM resource names are account unique (i.e., visible across all regions), e.g. for roles:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${service/realm}[-${role}]-${project/application}-${environment}")," - is the general form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$service/realm"),' - to what does this role pertain, e.g. "ecs", "lamda" or "circleci".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$role"),' - where there may be multiple roles associated with a service, this can be used as a way of disambiguating, e.g "task-execution" or "rds-snapshot-cleaner"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$project/application"),' - where there may be multiple applications/projects being managed with independent deploy cycles, this is used, e.g. "webapp", "honeycomb"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$environment")," - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"perf_test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"staging")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"prod"),"uction")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lambda-rds-snapshot-cleaner-app-experimental"),(0,r.kt)("li",{parentName:"ul"},"ecs-task-role-app-client-tls-experimental")),(0,r.kt)("h4",{id:"iam-policies"},"IAM policies"),(0,r.kt)("p",null,"Where the details of an IAM role are in an associated policy (usually the case) they are named after the associated role, but with ",(0,r.kt)("inlineCode",{parentName:"p"},"-policy")," appended, e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lambda-rds-snapshot-cleaner-app-experimental-policy"),(0,r.kt)("li",{parentName:"ul"},"ecs-task-role-app-client-tls-experimental-policy")),(0,r.kt)("h4",{id:"iam-users"},"IAM users"),(0,r.kt)("p",null,"When you create a new user, you should follow a first initial last name format (firstinitialLastName), e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eeady for Elizabeth Eady"),(0,r.kt)("li",{parentName:"ul"},"rkilberg for Rebecca Kilberg")),(0,r.kt)("h2",{id:"unique-per-region"},"Unique per region"),(0,r.kt)("p",null,"Where the name is scoped by the resource type and the region, e.g. lambda functions, then it is enough to give a meaningful name and qualify by environment. If the purpose is common, e.g. rds-log-cleaner, it may need an application."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${purpose}[-${application}]-${environment}")," - is the general form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$purpose"),' - a simple name describing the role/purpose of the resource, e.g. "slack-pivotal-bot", "webserver", "rds-log-cleaner"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$application"),' - if needed, disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$environment")," - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"perf_test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"staging")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"prod"),"uction")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"slack-pivotal-tracker-bot-test"),(0,r.kt)("li",{parentName:"ul"},"rds-log-cleaner-webapp-prod")),(0,r.kt)("h3",{id:"sns-topics"},"SNS topics"),(0,r.kt)("p",null,"The main purpose of the SNS topics are for notifications to teams. The naming convention reflects that, closely followed by the AWS account type (Gov or Com) and action."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${team}-${account_type}-${action}")," - is the general form"),(0,r.kt)("p",null,"Sample names:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"app-com-notification"),(0,r.kt)("li",{parentName:"ul"},"infra-gov-alert")),(0,r.kt)("h3",{id:"slackbot"},"Slackbot"),(0,r.kt)("p",null,"When you are creating a bot in Slack to alert team members to issues, you should include team to alert and app name the alert is coming from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{team}-${application}"))),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"app-eclkc"),(0,r.kt)("li",{parentName:"ul"},"hosting-ipd")),(0,r.kt)("h3",{id:"vpc"},"VPC"),(0,r.kt)("p",null,"VPCs are unique by region but they should indicate which application and environment level they contain."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[${application}-]${environment}")," - is the general form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$application"),' - if needed, disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$environment")," - can be used to distinguish different versions of the resource/app that occur during the development lifecycle, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"perf_test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"staging")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),"uction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"eec-prod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"staging"))),(0,r.kt)("h3",{id:"subnets"},"Subnets"),(0,r.kt)("p",null,"For non-db subnets: Although they are unique by region, we also want subnets to be descriptively named according to their AZs and public/private status."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${VPC name}-${public/private/db}-${AZ}")," - is the general form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$public/private/db")," - can be used to distinguish whether the subnet is a private, public, or db subnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$AZ")," - Availability Zone (AZ) are within a region and are ordered initials (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east-2b"),").")),(0,r.kt)("p",null,'In a VPC named "eec-prod":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eec-prod-public-us-east-1a"),(0,r.kt)("li",{parentName:"ul"},"eec-prod-private-us-west-2c")),(0,r.kt)("h3",{id:"ecr"},"ECR"),(0,r.kt)("p",null,"Elastic Container Repositories are unique by region within your account. They should be named according to the united principal of what they will contain. For example, if all the images in the repo will be related to a specific app team, then you can name the repo after the app team. If, on the other hand, they will all be images with variations of a set of software, you could name it after the software."),(0,r.kt)("p",null,"e.g.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eclkc"),(0,r.kt)("li",{parentName:"ul"},"php-nginx")),(0,r.kt)("h3",{id:"container-images"},"Container images"),(0,r.kt)("p",null,"Container images such as Docker or ECR images should include the date as a way to version. Although the convention is to name the latest version ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),", this can become a sticky situation when folks are trying to refresh a build in terraform and they end up not pulling the latest because the name ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," hasn't changed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${date}-${application}")," - is the general form\n",(0,r.kt)("inlineCode",{parentName:"p"},"${git commit hash}-${application}")," - for applications that build new images on main and therefore may have multiple images per day"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$date")," - YYYY-MM-DD - disambiguates between other images for the same application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$git commit hash")," - disambiguates between other images for the same application taken on the same day"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$application"),' - disambiguates between a similar purpose across applications, e.g. "webapp" vs "honeycomb"')),(0,r.kt)("p",null,"e.g. 2020-07-20-eclkc"),(0,r.kt)("h2",{id:"terraform-modules"},"Terraform modules"),(0,r.kt)("p",null,"Typically when building resources and services in terraform, you will follow the naming conventions described above for AWS resources. However, when creating a standalone module, you should use the following convention, which is ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/registry/modules/publish.html"},"required to add the module to the Terraform registry"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"terraform-${provider}-${purpose}")," - is the general form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$provider"),' - the terraform provider, e.g. "aws", "pagerduty", "github"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$purpose"),' - a simple name describing the role/purpose of the resource, e.g. "slack-pivotal-bot", "webserver", "rds-log-cleaner"')),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"terraform-aws-rds-log-cleaner"),(0,r.kt)("li",{parentName:"ul"},"terraform-aws-cloudtrail-alarms")))}d.isMDXComponent=!0}}]);