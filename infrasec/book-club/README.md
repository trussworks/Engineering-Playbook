# [InfraSec](README.md) / book-club

__First rule of Book Club is tell everyone about Book Club!__

InfraSec Reserve runs "book club" for the practice.
We watch talks, read articles, or read books on topics that relate to the InfraSec practice.

Discussion sections are scheduled every other week on Thursday afternoons.
We record the Zoom discussion sections so that folks don't have to take notes.
The event is on the Truss Events calendar and are open to all Trussels.

If you have any questions, please ask in the #infrasec Slack channel.

## Planned "reading" for 2021

For 2021 we will be reading [The DevOps Handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/ref=sr_1_1?crid=1ONCS7O6HFMTZ&dchild=1&keywords=devops+handbook&qid=1609356569&sprefix=devops+han%2Caps%2C223&sr=8-1) by Gene Kim, Patrick Debois, John Willis, Jez Humble.

A TL;DR will be posted here before we discuss every other Thursday.
Events are on the Truss calendar and are open to all Trussels.

## Talks we have discussed in 2020

* [The Seven Deadly Sins of Documentation](https://www.usenix.org/conference/srecon18europe/presentation/blackwell) - Chastity Blackwell 2018
* [The Container Operator's Manual](https://www.youtube.com/watch?v=Fm2tDgf40ss) - Alice Goldfuss 2019
* [Ethics in Computing](https://www.youtube.com/watch?v=UjMo1mgSMDo) - Theo Schlossnagle 2018
* [Organizing for your Ethical Principles](https://www.youtube.com/watch?v=8Dro0mreAxk) - Liz Fong-Jones and Emily Gorcenski 2018
* [Chaos Engineereing and Continuous Verification in Production](https://launchdarkly.com/blog/chaos-engineering-and-continuous-verification-in-production/) - Casey Rosenthal 2020
* [Traps and Cookies: A mystery Package from Your Former Self](https://www.usenix.org/conference/lisa16/workshop-program/presentation/reilly) - Tanya Reilly 2016
* [The History of Fire Escapes](https://www.youtube.com/watch?v=4Vs5AH0Oh7Q) - Tanya Reilly 2018

## Suggested Reading/Possible book club candidates

Feel free to add to the list.
Please mark that you added it so if we have questions we know who to ask.

### Talks

* [“Incidents as We Imagine Them Versus How They Actually Are”](https://www.youtube.com/watch?v=8DtzmV1jiyQ), John Allspaw
Probably the best introduction to incident analysis in a half hour I’ve ever seen, touching on why metrics-focused, surface-level approaches are doomed to failure. (Chas)
* [“Why Are Distributed Systems So Hard?”](https://www.youtube.com/watch?v=bG9AQ9ce5Zo), Denise Yu
This is a great talk on some of the fundamental questions about the difficulties in distributed systems in general (with some amazing hand-drawn art by the speaker). (Chas)
* [“Linux Systems Performance”](https://www.youtube.com/watch?v=fhBHvsi0Ql0), Brendan Gregg
Brendan is probably the foremost expert on Linux performance tuning, and this is the latest iteration on his talk about what tools to use to find performance bottlenecks. This is much lower level than most of the work we do at Truss, but it’s a great talk for learning about how the OS is working under the hood. (Chas)
* [“Engineering Resilience Into Modern IT Operations”](https://www.youtube.com/watch?v=DZBvANyq9PQ), J Paul Reed
(Ignore the fact that the title for this video is something else, the reason will become clear when you watch) This is a great talk about how systems and people behave in ways to create resilience, and how simply engineering redundancies and adding automation is insufficient. (Chas)
* [“A Young Lady’s Illustrated Primer to Technical Decision Making”](https://www.youtube.com/watch?v=PSIPhVjWBO0), Charity Majors
This is a talk about how to figure out how to make technology tradeoffs when developing new systems -- how to make sure you are putting your effort in the right places in an increasingly complex software ecosystem. (Chas)
* [“Resilience In Complex Adaptive Systems”](https://www.youtube.com/watch?v=PGLYEDpNu60), Richard Cook, MD
A great introduction to Safety Engineering. This talk has one of my favorite quotes about systems: “The thing that amazes you is not that your system goes down sometimes, it's that it’s up at all." (Jeremy)
* [“One Year after the Launch of the U.S. Digital Service: What’s Changed?”](https://www.usenix.org/conference/lisa15/conference-program/presentation/dickerson), Mikey Dickerson
This was a LISA 2015 keynote about the Healthcare.gov rescue and the establishment of the USDS afterward, which was basically my first real introduction to civic tech. Mikey talks about a lot of the problems working within government and how they were able to get around them. As a bonus, you may see some familiar faces here… (Chas)

### Articles

* [“The Infinite Hows”](https://www.oreilly.com/radar/the-infinite-hows/), John Allspaw
A more in-depth exploration of how incident analysis should be done at a deeper level, and why the “five whys” method is not expansive enough to really give us the answers we need when it comes to incident analysis. (Chas)
* [“How Complex Systems Fail”](https://how.complexsystems.fail/), Richard Cook, MD
A listicle going through the various reasons complex systems break. The surprise here (and SPOILER): this was written by a medical doctor, not an engineer, and it’s completely applicable to our work. (Jeremy)
* [“Automation Should Be Like Iron Man, Not Ultron”](https://queue.acm.org/detail.cfm?id=2841313), Tom Limoncelli
This article explains the issues with overengineering automation, how adding too much autonomy can obscure failures and actually make systems more fragile, rather than improving their stability. (Chas)
* [“Contempt Culture”](https://blog.aurynn.com/2015/12/16-contempt-culture/), Aurynn Shaw
How the practice of being critical about other folks technology choices leads to exclusion and a toxic culture. (Jeremy)

### “DevSecOps” materials

These are good to read for folks working with a client that is learning how to build an effective "DevSecOps" practice in government orgs.

* [The Data Behind DevOps: Becoming a High Performer](https://www.youtube.com/watch?v=-OiOUwaRsXk), Dr. Nicole Forsgren
This is the talk I recommended to Mariesa that's basically a half hour tl;dr of Accelerate from Nicole Forsgren. (Chas)
* [One Year after the Launch of the US Digital Service: What's Changed?](https://www.usenix.org/conference/lisa15/conference-program/presentation/dickerson), Mikey Dickerson
This is a long talk, but it's a good one if you've never seen Mikey Dickerson talk about the Healthcare.gov rescue in 2013/2014, which I suspect will  be instructive for us (and is a good talk in general). (Chas)
* [The 2019 Accelerate State of DevOps: Elite performance, productivity, and scaling](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling), Nicole Forsgren
2019 State of DevOps Report (RD)
* [How to Improve a Service by Roasting It](https://www.usenix.org/conference/srecon16/program/presentation/dickson), Caskey L. Dickson & Jake Welch
This might be another talk worth watching. (Chas)
* [LISA17 - Stories from the Trenches of Government Technology](https://www.youtube.com/watch?v=3_dx1K0wGkQ), Matt Cutts
Another talk which illustrates some of the problem space. (Chas)
* [LISA17 - Persistent SRE Antipatterns: Pitfalls on the Road to Creating a Successful SRE Program Like Netflix and Google](https://www.youtube.com/watch?v=KhJbbrKy1pw), Blake Bisset & Jonah Horowitz
Another good one, although it might be a bit ambitious for our purposes. (Chas)
* [LISA18 - Familiar Smells I’ve Detected in Your Systems Engineering Organization and How to Fix Them](https://www.youtube.com/watch?v=HOKTVxT-UsE), Dave Mangot
This one seems relevant. (Chas)
* [LISA18 - How Houghton Mifflin Harcourt Went from Months to Minutes with Infrastructure Delivery](https://www.youtube.com/watch?v=6Z8ZLXoCY6s), Robert Allen
This seems like an interesting case study with another legacy tech shop. (Chas)
* [Effective DevOps: Building a Culture of Collaboration, Affinity, and Tooling at Scale](https://www.amazon.com/Effective-DevOps-Building-Collaboration-Affinity/dp/1491926309?pldnSite=1), Jennifer Davis
And for some reason I completely forgot about this book until this morning, which seems criminal. (Chas)

### Books

* [The DevOps Handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/ref=sr_1_1?crid=1ONCS7O6HFMTZ&dchild=1&keywords=devops+handbook&qid=1609356569&sprefix=devops+han%2Caps%2C223&sr=8-1) by Gene Kim, Patrick Debois, John Willis, Jez Humble. So far has some nice nuggets of information and a better written version of what I try to convey to juniors about InfraSec Philosophy roots. (sEady)
* [The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290/ref=sr_1_1?dchild=1&keywords=the+phoenix+project&qid=1609356784&sr=8-1) by Gene Kim. An easy reading story that introduces examples of how our practice can be applied. (Eady)
* [Accelerate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339/ref=sr_1_1?dchild=1&keywords=Accelerate&qid=1609356802&sr=8-1) by Nicole Forsgren PhD, Jez Humble, Gene Kim. This is how to describe and pitch a "DevOps" workflow to execs that don't really get it. (Eady)
* [Google SRE Book](https://sre.google/sre-book/table-of-contents/) A rather good reference book for several different practices that you can implement. (Eady)
