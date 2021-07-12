# Quarter Reflection: Cohort 1

Attendees: Josh Clarridge, Ryan Delaney, Elizabeth Eady, Mike Kania

## How would you describe your current infrastructure?

Josh: Honestly sometimes, it’s a bit basic. There’s more we can have with monitoring etc.

Ryan: ...not sure where to begin

## Why would you describe it this way?

Josh: This is a very vague description. Our architecture is pretty simple compared to other projects so there’s that. Our overall application infra is decent.
There’s more we can add around security tooling. The observability into application metrics could be more robust. The user base is small and traffic is minor.

## Would you have described it this way 3 months ago?

Josh: yeah.

## How often do folks deploy?

Ryan: Max 1x per business day. Been skipping because folks are locked out of the identity system. The general pattern is that someone logs into circleci and runs a deploy around 9am pacific.

Josh: Clarify: To prod? Yes.

## Are there problems with deployment?

Ryan: Hindrance with identity/access is there are times where the whole app team didn’t have any access at all. When things are going well, it’s 1x day. Hindering more is app engineer preference. I had been pushing to deploy any time when main is merged, but they prefer the manual deployment.

Josh: Client is not saying you can only deploy 1x day. Things on our side… maybe not having confidence in testing. There’s still some manual testing.

Mike (q): Are there issues in the size of deployment/ number of things that go out in a deploy?

Ryan: No.. no issues with having multiple things
Josh: There aren’t always a lot of commits day to day tbh. Sometimes it’s just documentation.

Mike(q): Rollbacks? Have there been any in prod?
Ryan: No. No rollbacks have been needed.

Eady (q): Do you know ~avg commits per day in a deploy? Might be commits/PRs.
Ryan/Josh: No clue.

Eady (q): Are there problems? Follow-ups?
Ryan: Not enough deployable environments. Made compromises because of the difficulty with creating new AWS accounts.
Number of Dev/Stage/Prod environments… if an app engineer wants to see their branch in dev it’ll squash each other.
They’ve gotten good at doing this locally but earlier, it was harder.
App engineers don’t like to have to log into the VPN to deploy things.
There are also some things in CI that just that take too long.
For example, we rebuild static assets on every build, whether they changed or not (fixing this stuff is on the roadmap).
CI workflow and vpn are friction.

Eady(q): What are the roadblocks to deploying multiple dev environments in the dev account?

Ryan: They’re not complaining about it as much since they got local working… kicked around the idea though...

Josh: 1vpc/aws account is from the new client model. Different devs are working on related parts of the feature… things need to be deployed in order.

Eady(q): Can you add a little more color?

Ryan: DB migration conflicts have happened.

Josh: Does get handled with sequential deploys. With DB migrations that are potentially backwards incompatible are not really an issue.

Ryan: the DB schema is pretty simple. If/when they made a backward incompatible change ...not sure if it’s happened yet actually.

Josh: A column rename/drop… can be done in 2-3 steps.

Ryan: On the app side, this came up more before feature flagging so launch darkly has been helpful with these kinds of problems.

Mike(q): So has launch darkly protected against schema changes that would have taken things down?

Ryan: No. I switched back to the previous topic… about the general question "Is it important to merge things in a specific order?" For awhile I was pushing for more integration branches, but feature flagging has helped a lot.
Default to auth? And then deploy when ready.

## How are the app engineers working with the infrastructure?

Ryan: going into CI to deploy the app. If the build fails they may or may not need to look at logs to figure out why. They generally try to do as little as possible.

Josh: some are updating params in SSM. A couple have updated CI deployment scripts. Some are looking at splunk to search logs.

Eady: Are these friction points enough to merit trying to change?

Josh: VPN requirement for CI is addressable… vpn for AWS and splunk… less so.. (Ryan confirms these are Client friction)

Eady: Do you have a sense of how much this is hindering devs?

Ryan: App eng would definitely use ci more if they didn’t have to use the VPN. it comes up every time talking to them. If there's a build failure, they’ll try to figure it out without looking at CI at all.

Mike(q): How much have you communicated that problem with client?

Ryan: Not sure if we mentioned it to shane/scott. Kind of thing you rarely think you’re blocked by it, but it’s a constant mild drag.

Josh: VPN requirement… testing external service integrations locally.

Ryan: they change things underneath and don’t always notify.

## How about monitoring/debugging problems?

Ryan: Hat tip to Josh for the Slackbot that notifies when there’s a build failure on master.
Folks still need to log into the VPN to debug and dig in but folks don’t need to be on the VPN to know if a build was successful.
Perf/Load monitoring? Haven’t really thought about it.
Not a highly available or concurrent system, so it’s not a high priority to figure out the baseline performance metrics.
One ECS service is kinda all there is.

Josh: There’s a very basic Cloudwatch dashboard tracking metrics but it only gets checked periodically.
Monitoring and debugging… in terms of VPN requirement is addressable…?
If we had a different tool that wasn’t AWS or Splunk then the monitoring and debugging would be easier.
What part are we monitoring or debugging?

Eady(q): do you have enough to do proactive research on your services?

Josh: yeah there’s enough to see CPU/memory… sure it’s fine no huge redflags jump out.some basic cloudwatch alarms for critical things… there’s some but hesitate to say it’s robust.

Mike(q): Has this ever been a problem? Visibility or lack thereof in performing and working?

Josh: Recent issue around Nick (client) if some emails were being sent out. Dunno the latest on that or if it was …. Users submitting something and not getting an email or loggin… it was difficult to trace the state of the app or identifying the issue.

Overall, performance hasn’t been an issue.

Something that’s been a persistent problem, is the availability of a particular service integration. Shut off sending data to this service integration. Need to enable sending data.

(Mike: isn’t that required??)

It’s okay if it gets there eventually.
Changing the model to not synchronous.

## Have there been any problems that have come up in the last few months?

(see integrations thing above)

Ryan: Besides everything we talked about so far?

## (If yes) What were the problems that came up in the last few months?

See integrations thing.

## Have you done anything or do you have plans to address these problems?

Turned off synchronous comms with them.

## (if no) Why haven’t you done anything to address them?

## How have those solutions been working?

Great.

## How satisfied/happy or dissatisfied/unhappy are you with these solutions?

Ryan: Seems least terrible of the alternatives.

Josh: Doing things synchronously wasn’t the right way and haven’t solved asynchronous.

Mike(q): Can you talk more about why they can’t fix their shit?

Josh: Breaking API changes on their side. App engineers are still ironing out the api issues. What data do you need to send them… what are they expecting?

Mike(q): Do they version their api? - No

Ryan: Their comms are so shit, it might not matter. They ship breaking changes without telling anyone and EASI has to keep running.

Mike(r): the eventual consistency won’t necessarily fix it… it just unblocks the main flow.
Ryan: The API breakages come but don’t immediately kill the app or break anything for our users, so app engineers don't immediately need to break the app.

Josh: The recent meetings aren’t bad… at the personal level … sometimes its better than others depending on their devs vs team lead. It’s weird… sometimes hostile and sometimes not.

Eady(q): Have you gotten to a point where you can give them feedback… to make their shit work better?

Josh: Kara got them to make a healthcheck endpoint… that was one thing.

Ongoing comms meetings… where app eng needs to work with them.

The problem integration created custom endpoints for us… do they continue down that route? Should we migrate to their core API? Still back and forth about these approaches.

## Is there a problem you’ve been avoiding?

Ryan: The problem with not having deployable environments… want to avoid it because without client friction, it’s easy… to deploy workarounds for its just easier.

Mike(q): Why Client friction? The VPN or something else?

Ryan: making more aws accounts and tiers of testing environments is not impossible but more work than it should be.

Josh: Flirted the idea of making an impl2. Alternative to feature flagging…. Dropped it.
Still a question around the definition of a deployable environment…. Is it an account/vpc etc?

Eady: Clarify/follow up… what is a deployable env?

Ryan”: Let's define this in terms of what’s needed that we don’t have. There are different ways to implement the solution. What we need is more places to put dev versions of the app where app engineers can look at it and test it. We don’t have the ability to deploy multiple versions of the app in enough different ways.

Could be more aws accounts/vpc etc? That's an implementation question. I'm using the phrase "deployable environment" to intentionally bracket implementation.

Eady: You have launch darkly… can you use the flags to do these kinds of tests/validations?

Ryan: there might be more configurations to test… don’t want to speak for App eng… not sure he can quantify that.

Is there a problem coming up you’re concerned about?

Ryan: Synack? Topical one today. (Pen test)

## [If answer is yes to these questions] Can you tell me more about this? (Encourage folks to tell stories wherever possible!)

Ryan: Gave them some test accounts to run their pen tests… they tried to log in and that MFA is enabled… they don’t wanna use it. Got no compelling reason for that. We are not going to turn it off for a pen test so that 5000 red teamers can rip through our system.

Josh: During the pairing session with Shane … his response was “this is dumb and we’ll push back”. Sounds like there will be a solution eventually. They won’t disable mfa so client will figure something out. ITs a new team/contractor doing testing. Other folks are going to run into this

## What else do you have?

Josh: AWS workspaces/JAWS the accessibility software. Jim asked about it again. A solution for JAWS in AWS workspaces in aws and communicating with the version on your machine..

Problem: How to run JAWS in such a way to test the app on your machine.
Windows VM wasn’t great.. How do you securely connect to local host?

Mike: Mark had a thing? Tailscale?

Ryan: Need to test db snapshot restores… Very mildly worried about it but don't really expect any issues. We just need to do it.

## Is there a reason you haven’t tested yet?

Ryan: I mean, I can't give you a good reason. We just haven't.
Josh: there’s a ticket on the backlog.
