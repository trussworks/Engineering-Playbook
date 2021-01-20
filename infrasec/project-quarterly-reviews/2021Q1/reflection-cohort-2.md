# Quarter Reflection: Cohort 2

Attendees: Misty Hall, Carter Jones, Erik Burgess, Rebecca Kilberg, Sheena Todhunter, Mike Kania

## How would you describe your current infrastructure? Why would you describe it this way?

Erik: transitional

Carter: yes

Erik: AWS commercial -> Gov cloud and some things are dependent on commercial and trying to weed out and update… 90% of the way to prod

Rebecca: Sure it’s transitional… It’s important to note that we’ve used this project to test and model things in. These things have eventually become canonical. There is a fair amount used underlying for other projects… so Informative.

Carter: Crufty. Having messed around in it a bit. Performing archaeology. Seeing a lot of good decisions that were good at the time. Then code that was written to add on and supersede those decisions. Which were also good moves but the continual iteration.. .I cannot fault anyone for the choices and architecture. The course of years and multiple teams it is hard to comprehend.

Misty: I sometimes find our infrastructure confusing. Comm/Gov fight is not quite over and so navigating understanding both sides of that. I feel less sure than Carter that decisions were good at the time.

## Would you have described it this way 3 months ago?

Rebecca: Yes. It’s getting better.

Erik: Absolutely.

Rebecca: A lot of the best things they’ve been doing… a lot of their issues are related to documenting after the fact. More documentation/adrs before decisions so there’s historical record. If that’s the only win that’s still a win.

## How often do folks deploy?

Erik: Appeng is x2 a day. Infra is as needed. service that infra is maintaining is x1 week.

Eady: What is this service?

Erik: Drupal ….

## Are there problems with deployment?

Erik: Appeng pipeline feels broken more often than its not. Sees a lot of failures in deployment. Appeng is wrestling with it and its gotten better but there are still issues.

Rebecca: There’s also a ton of stuff in deployment that’s questionably useful/running. Recently pulled out an acceptance test because they weren’t sure what it was doing.

(Mike): The master branch breaks daily. Integration tests are unreliable

Carter: They’re flakey.

Misty: there’s also the experimental deploy structure. We borrow experimental in a channel and pass it back… the pipeline is not the same.

Carter: Seen this before… if I understand this before. I haven’t seen the ideal case… but an infinitely scalable deploys so you can have things deployed against a PR. Only seen current situation with a shared environment.

(e)What are the differences between production/experimental?

Carter: Pessimistic… whatever hasn’t been cleaned up properly… doesn’t mirror staging or prod.

Erik: Probably more cruft in experimental vs everywhere else. It’s outside of the ATO boundary.

Carter: humans touch it

Erik: staging is much closer to prod than experimental
Don’t tear it down and make it fresh.

## How are the app engineers working with the infrastructure?

Erik: App eng doesn’t have permission to push and test the terraform.

Limitation of levels of security access. Sec+ among other.

Rebecca: This is what made atlantis very attractive. Even before any of the infra team had sec+ none of the engineers had TF access or the ability to change AWS resources… Thought it was the pain of teaching 30+ devs to learn TF. Talked about the different ways to talk/work with appeng. Having them write tickets for us and being firm that you are welcome to write the ticket, put it in the backlog and we can try to pull it up next sprint. More urgent interrupts etc… Onboarding new folks. Paul has an idea … appeng/infraeng bandcamp and come intern. Every engineer she’s talked to they’re all curious. It’s been hard to make that happen and then hard not to be something to throw code over the wall to.

Would atlantis help? Is there a way we can give appeng more access to AWS?

Erik: Atlantis might help… they have a new dev account where they have more access.

How about monitoring/debugging problems? Is appeng able to debug?

Misty: there’s some weirdness around requirements for where the logs need to live for certain groups. Client partner needs logs in one spot but don’t have an IAM user but needs access to logs that’s there… Other client partner will eventually need access and they have an IAM user. As far as appeng goes… we used to use athena to see logs… Lee started work so it’s a little in flux. There are guard duty/pager duty alerts and is super disorganized. Trying to set something up that’s cohesive. will eventually have to use splunk because that’s what the client wants.

Erik: There are certain issues that appeng has a good understanding of how to debug and how to get that log information but there is also a lot of unknown. Dunno if this team knows where all the logs are…

Misty: We’re not necessarily giving them what they need right now

Rebecca: I feel ill equipped to debug. Keen on the monitoring and alerting stuff. Talking about it this morning… where are the lines of who is responding to what. What are we trying to alert on and how would we know we’re alerting on the right thing. Split into different accounts….can’t find shit. Not a good look or feel when you’re trying to help and you can’t find things.

Misty: What phase we’re at: Pulled in a ticket to correlate services with owners to then use to decide who gets what alerts. Something that is awesome that is of note: rebecca recommended talking to James in content design in framing the approach to monitoring and alerting that was SUPER helpful in thinking about things differently. -> Is this something we can try to generalize/share?

Misty: what’s going to cloud watch … setup etc? James slowed her down and helped her think about the human end… who is best equipped to handle X vs Y and let’s not shove everything into infrasec.

## Anything to round out?

Carter: Sometimes I don’t even know what to be looking for. Having a simple architecture from an infra perspective… to figure out how the infra side of things work to help a general conception would work out.

> can we get an architecture diagram and an infra perspective on how these things fit together … that are core and fundamental.

Erik: We do have architecture diagrams… they are built around being sufficient for ATO. there are probs things that would help for onboarding if expanded.

How would this have helped?

Erik: Longest tenured… there’s absolutely nothing that was provided for me. No walkthroughs etc…. We are better than we were when I onboarded but there’s room to grow.

Misty: This feels very confessional. <3 Also struggled and to be fair, inherited a different structure of humans than Erik… Its not that there was no effort made to help understand but there was a big lag of documentation from pushing into gov cloud. Tight team? Maybe didn’t see the need.

Rebecca: This is as clear example of the tension of working for a client who doesn’t value the documentation as a feature

Mike: Some data points of history of documentation: Anecdotal… a year and a half of ADRs. A lot of things were being done and not a lot of records. These were built in that time and not written up. It’s been 3 years and not in production. This is a side effect of prioritizing a service… when it’s not being used ….

Add -> How often are you writing ADRS? When was the last time you wrote one?

## Have there been any problems that have come up in the last few months?

Misty: Request that somebody talk about difficulties with the client in this section.

Erik: The client doesn’t understand the value that infrasec brings to the project. They only care about appeng features and they have point blank said they don’t care about infra until appeng says they are waiting on infrasec for something. This is getting better but it is getting better. Mike and Jen are making sure this is changing. This is also a problem for Design.

On the other hand, I don’t know that I want to engage the client on this adn be under the same scrutiny that appeng is in.

Are there mitigations?

Erik: there are a lot of things that the client doesn’t understand about agile. They want waterfall… their metrics are how many stories are completed. A completion of a set number of stories motivates them. A lot of stories change.

Rebecca: sidestep… a problem that has come up but kinda comes and goes… lack of being in production. Thinking they’ll be in production and something happens. It makes it hard to understand what they’re building and what they care about.

Erik: This is also something we can’t do anything about. There is the prime contractor that manages the bigger project as a whole. it’s being rebid entirely again which keeps shifting the date.

Mike: If we had cleared the canyon to prod… and a sense of production, it would have fixed a lot of the prioritization problem. Client told them to turn it off because it wasn’t important because it wasn’t a majority of the events that come through.

## Is there a problem you’ve been avoiding?

Misty: Something that she’s avoiding… with the help of Paul Sackley. THe things I can’t control. Not being senior or being privy to the uncomfortable client convos… the benefit that I get is that the things that we can’t control… the PM does a good job of putting those in context in a way that allows me to accept and move forward. Refocusing on a project with as many stumbling blocks as this.
