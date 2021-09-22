# [InfraSec](README.md) / InfraSec Practice Charter

At Truss, we have a single practice combining infrastructure and security
practices, which is a pattern that is becoming more prevalent in the
industry as it becomes more clear that they are closely related in
building confidence in the services we run. This is part of an evolution
of the infrastructure practice that has been ongoing since computing
(and especially the Internet) became increasingly core to most businesses.

## How We Got Here

At Truss, the InfraSec practice covers both infrastructure engineering
and security engineering, two fields that provide the foundation for
the user-facing work that our application engineering practice focuses
on building. This is a practice that has been evolving in its modern
form since the advent of the web and consumer-facing network services
in the 1990s.

Both infrastructure and security originate in the late 1980s and 1990s
as computing became more and more prevalent; originally, infrastructure
and security were mostly the domain of “system administrators”, people
who would run computer and network systems for users like researchers
or internal developers. Many of these people did not think of themselves
as “programmers,” though some level of shell scripting and other kinds
of programming have always been part of the job description. Instead,
they were more like skilled technicians who had a strong grasp of the
intricacies of Linux (or other OSes), specific software like webservers
and databases, and/or networking gear like switches and routers. This
was a change from the previous period, where the people writing the
software and running the computers were largely the same people.

As the dot-com boom began in the late 1990s and the internet became
ubiquitous, the need for secure and stable networked computer systems
increased radically. Web services were no longer adjuncts to “real
business,” they *were* the business. Outages, breaches, and data leaks
could cost organizations thousands or millions of dollars. The scale
of these services was also increasing rapidly. Maintaining a dozen
hosts by hand might have been feasible, but a hundred or a thousand
hosts was not.

System and network administrators -- now usually grouped together under
the moniker of "Operations" -- attempted to solve this problem with
*infrastructure as code*, where you could describe the state a system
should be in via some kind of code, then hand that to a processor which
would change the machine state to match what was described.
[CFEngine](https://en.wikipedia.org/wiki/CFEngine) was one of the first
of these, but a number of other alternatives emerged during the 2000s,
all with roughly the same idea, if not the same manner of execution, and
many homegrown versions of similar products were in use as well.

Security in this era also began evolving from the host-specific tasks of
keeping patches up to date, locking down open ports, antivirus software,
and other similar measures to looking at the whole network as a single
ecosystem. This is when we see wider development and implementation of
things like intrusion detection systems, email scanning, and firewalls.
This is also when security begins to come into its own as a practice,
often with representation at the C-level.

The infrastructure as code movement culminated in the advent of the
["DevOps"](https://en.wikipedia.org/wiki/DevOps) paradigm (usually placed
around the debut of John Allspaw and Paul Hammond’s ["10 Deploys Per Day
at Flickr"](https://www.youtube.com/watch?v=LdOe18KhtT4) talk at Velocity
2009). This was an effort to break down the wall that had grown up between
developers and operations folks in order to make the process of deploying
application code both faster and more reliable through stronger
cooperation and knowledge sharing. While this is often seen as getting
operations to do more programming and build more tools, the other side
of the coin was encouraging developers to own their code in production
and internalize many of the values that had traditionally been the
domain of operations.

At the same time, it became clear that trying to add security to software
and architecture after the fact was a losing battle; it was better to
incorporate security into the design of software systems from the
beginning, to reduce the attack surface and prevent potential security
problems in the future, even those we cannot yet anticipate.

In the 2010s, Google established and publicized ["site reliability
engineering" as a practice](https://landing.google.com/sre/books/), an
effort to quantify the constraints around reliability and create a
software engineering practice specifically to improve it; many other
organizations did something similar at the same time or soon after
(sometimes with different names, such as “production engineering”.)
At the same time, there has been a move to integrate security into the
development and operational pipeline (with a move to change "DevOps" to
"DevSecOps") so that it is built into applications from the beginning,
rather than something bolted on after or enforced from outside. It’s
here that we find the Truss InfraSec practice.

## What the InfraSec Practice Is

At Truss, the InfraSec practice is built around the idea that
infrastructure and security are intimately linked around the idea of
creating a stable, secure, and yet responsive environment for applications,
and building security and robustness into those applications. This comes
down to a number of different responsibilities on a project:

- **Be an advocate for reliability and security as features.** Regardless
  of whatever else you’re doing, your job is to highlight the importance
  of treating reliability and security as necessary components of the
  software product. If no one can use the application, no one is going to
  care about any other features, and if users can’t feel like their data
  is safe when using the application, they will be far less likely to use
  it. In a perfect world, these would be values that everyone has
  internalized, but sadly, this is not a perfect world.
- **Quantify reliability and security risks.** That being said, it is up
  to the business (client and product managers) to ultimately decide what
  to prioritize. No system can be 100% reliable or secure; every decision
  is about tradeoffs. Sometimes, they will need to take a back seat to
  feature development for whatever reason -- client demands, staffing
  changes, etc. In order to help the team make good decisions about these
  tradeoffs, we need to be able to tell them what the risks are of not
  prioritizing reliability or security tasks. If we decide not to have a
  warm database replica, what does that mean for our recovery times if
  the DB fails? What is the tradeoff of incorporating one authentication
  method over another? This also means getting Product Management to
  define their reliability goals and holding them to it.
- **Be a subject matter expert for reliability and security.** When the
  question comes up about the most cost-effective ways to increase
  reliability and security, infrasec team members should be helping
  application developers to answer those questions. This can include
  actually writing application code which enhances the reliability or
  security of the system, or developing processes like incident response.
- **Build the infrastructure foundations for the application.** In
  practical terms, this also means building out the parts of the
  environment that the application developers will deploy their code on
  top of. At Truss, this usually means AWS infrastructure, CI/CD pipelines,
  and other tools which support the application; however, it does not mean
  that application developers cannot make changes to these systems too,
  just that we "own" that part of the system. It’s important to note
  that while it may not be directly visible to the end user, everything
  else depends on it working right, like the foundations of a building.
  However, without the building on top of it, the foundation is just a
  big hole in the ground.
- **Lead the security review process.** Many of our clients require the
  creation of documentation around security and infrastructure practices
  in order to meet some level of certification. While it is not the
  responsibility of the infrasec team to take care of this exclusively,
  they should lead the process and bring in other members of the project
  as necessary.

## What the InfraSec Practice Isn't

In contrast to the above list, here’s some things that are not part
of the infrasec practice.

- **Being on-call.** In ye olde days of the Internet, there was a
  paradigm where the application developers would throw their code over
  the wall to the operations folks, who would deploy it and then be
  on-call if the code blew up. We no longer live in ye olde days of the
  Internet; if you write application code, you should be the owner of
  that code in production. Being on-call isn’t just a job for
  infrastructure engineers, it’s for everyone. That being said, part of
  the infrasec practice is to make sure everyone has the tools they need
  to actually understand what is going on so that they can make smart
  decisions about alerting on and diagnosing issues with all aspects of
  the system.
- **Saying no reflexively.** There is a [particularly toxic
  reputation](https://en.wikipedia.org/wiki/Bastard_Operator_From_Hell)
  that both operations and security used to have (and still have in
  many cases) where there was no trust of developers and they existed to
  be the team that pushed back on every change. This is corrosive to
  morale, effectiveness, and productivity. The infrasec team’s job
  isn’t to just say no, it’s to figure out what the real need is
  (remember, even if someone asks for X, sometimes what they really want
  is Y, they just think X is the best way to get it) and find the best
  way to do that in a reliable fashion. If you get the reputation for
  just saying no all the time, people will try to work around you --
  making them even less likely to incorporate good reliability and
  security practices.
- **Being the IT group.** There are a lot of functions that usually fall
  to the infrasec team that are similar to traditional IT work. That can
  include provisioning accounts, working with email, setting up new
  authentication methods, etc. But infrasec is more of a superset of IT
  and focuses on a much broader set of problems. It is important to make
  sure that infrasec is included in estimating engineering tasks so that
  this work isn’t invisible.

## The Challenge of InfraSec

One of the challenges of the infrasec practice is that it’s a field
where someone just entering the workforce straight from college or
another field will often be unprepared for the types of challenges we
see. This isn’t always the case; internships, self-guided learning, and
code camps or the like can certainly teach valuable skills and specific
tools, but both infrastructure and security have traditionally been
something that is usually learned in an apprenticeship-like manner, where
experience often outweighs "book learning" (for lack of a better term).
Alice Goldfuss gave a [great
talk](https://www.usenix.org/conference/lisa16/conference-program/presentation/goldfuss)
about this from the infrastructure side a few years ago at LISA.

As software engineering has become more and more integrated with
traditional operations and security tasks, the value of programming
knowledge has certainly helped get people into the field, but it can
still be slow going. As members of the infrasec practice, part of our
job is to help all software engineers internalize the accumulated
knowledge of the field to help them incorporate reliability and security
into their own work -- and in turn, it’s in our best interests to learn
software engineering methodologies from people who have more experience
building complicated software projects. We should encourage knowledge
sharing and cross-training between both practices, and also promote the
value of cooperation as a core value of our practice. Rick Smith’s [LISA
2019](https://www.usenix.org/conference/lisa19/presentation/smith)
keynote highlighted the value of this cooperation, specifically for the
security practice.
