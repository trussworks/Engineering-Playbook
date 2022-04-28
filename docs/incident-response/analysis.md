# Incident Analysis and Retrospectives

This documentation is not intended to be a complete guide to incident
analysis; this is a complicated field and trying to sum this up in a
relatively short document is impossible. This is intended to be a surface
level guide to conducting a productive retrospective; for a more thorough
discussion of the topic, we recommend reading the [Etsy Debriefing
Facilitation Guide](https://github.com/etsy/DebriefingFacilitationGuide)
and Sidney Dekker's [Field Guide to Understanding 'Human
Error'](https://www.amazon.com/Field-Guide-Understanding-Human-Error-ebook-dp-B00BL0OZ0E/dp/B00BL0OZ0E/).

## Overview

The purpose of an incident retrospective is to create an opportunity for
**learning** about how the incident occurred. Our goal is for the people
participating in the retrospective (and hopefully the organization as a
whole) to gain a better understanding of our systems and how they operate;
to find out not only what caused the system to break down, but also what
was done to diagnose and solve the problem, and share that knowledge.

**The purpose of the retrospective is not to "fix" the system.** The fact
of the matter is that post-incident review processes that focus on
producing a list of action items with the intent of preventing an incident
from occurring end up falling short because they rarely address "second
stories" -- organizational and systemic failures -- in favor of smaller
scale fixes. What's worse, in many cases, these action items are never
completed due to other business priorities -- and the narrowly-focused
review does not help anyone learn how to improve the entire system.

We are also not trying to determine the "root cause" of an incident. No
incident has a single root cause; every single one is a complicated
intersection of environmental factors, human factors, technical systems,
and organizational factors. "Cause" is a logical abstraction created by
humans; at some point, we draw a line and say "the incident started here."
In reality, every event has a web of interactions behind it going back
to the Big Bang. Finding this line is less interesting than trying to
understand the whole complex chain of events, and how all of the people
involved saw them, in order to better understand how this incident
occurred, and how we can avoid similar incidents in the future.

## Preparing for the Retrospective

Before we are ready to conduct an incident retrospective, there are a
number of steps that the facilitator should take in order to make sure
we're using the time in the best way possible. All of these should be
done as soon as possible after the incident; people will begin to forget
what happened or have their perceptions influenced by outside forces
almost as soon as the incident is over, so following through on these
within 48-72 hours is important in order to get good information.

### Timeline

The first thing you should do as the facilitator of a retrospective is
to prepare a preliminary timeline of the incident. Hopefully, the scribe
and the other responders during the incident have already put together
a description of events; however, you will still want to review the chat
logs for the incident (and possible other records, if necessary) to
create a timeline to use as a guide in the rest of the investigation.

When compiling this timeline, keep in mind that at this stage we are not
looking to answer why or how something happened -- only *what* happened.
Looking beyond the actual events that transpired makes it much more likely
that we will start to introduce our own bias before we've even really
begun the investigation.

If possible, every event in your timeline should link to some sort of
primary source -- a chat record, a system log line, a PagerDuty alert,
or something else that allows you to easily reference the event later
during the retrospective.

### Collect Accounts

If at all possible, you should try to schedule a 30-minute session with
each member of the incident response team -- especially the incident
commander and investigators -- to have them give you their account of
the incident, starting with when they first became aware of the incident
and ending with when they stopped working on it.

At this stage, try let them just tell you the story; try to avoid asking
too many questions that are not centered on what they saw, felt, or did,
and try to avoid comparing their experiences with that of other team
members. At this stage, we want to avoid introducing bias as much as
possible; we're just trying to get their recollections of the events so
we can add that to our record.

### Prepare Questions

Once you have a timeline and the subjective accounts of the participants,
you should take some time to come up with some questions to *start*
discussion in the retrospective. It's important to note that during the
retrospective, things will likely go off in different directions than you
expect, so these are not necessarily prescriptive. Your goal is to get
people talking about what they experienced to highlight important events
during the incident. Here's some guidelines for the types of questions
you want to ask:

- Do not ask questions that could be answered by a "yes" or a "no". These
  are not going to create discussion.
- Don't ask "why" someone did something. Especially in English, "why" is
  heavily associated with blamefulness. Instead, ask *how* they made the
  decision to take action. This is more likely to get you an interesting
  answer about how people make decisions and expose hidden factors.
- If two people had different perceptions about the same event, this is
  often a key point to dig in to. What experiences or knowledge did they
  have to create different views of the incident?

Do not overdo this part; your job is to provoke discussion during the
retrospective, not necessarily guide it (with some important caveats).
5-10 questions is probably sufficient.

## The Retrospective

The actual incident retrospective should be a 60-90 minute meeting where
as many people involved in the incident (and others, if they want to
observe) should meet to go over the incident. During the retrospective,
it may be a good idea to have a deputy with you to take notes and help
guide the discussion, especially for incidents with large team of
responders or a lot of complexity.

As the facilitator, you should lead off the discussion by introducing the
goals of the retrospective; the Etsy Debriefing Guide suggests this:

> The goal for our time together today is to recreate the event, talking through
> what happened for each person at each stage in order to create as robust a
> portrait as possible of what happened, and what the circumstances in play were
> at each juncture (when decisions were made, and actions were taken) that made
> it make sense for people to do what they did in the moment. If one of you gains
> an insight into the complexity of another person’s role, this was an hour well
> spent.
>
> Throughout the duration of this debrief, we will all focus on being utterly
> blameless, to ourselves and to others. We will be focusing on the **HOW** of
> what happened, not the **WHY**.

As a structure for the retrospective, it's often easiest to start by just
following the timeline of the incident and asking your starting discussion
questions as they come up. The majority of your time (at least 2/3rds)
should be spent discussing the timeline and any questions that come up as
a result. **Resist the temptation to create "action items" or otherwise try
to "fix" problems until you have gone through the timeline.** Doing so can
lead to "solutions" that aren't actually that productive and cuts down the
time you have to discuss the actual incident. Suggest to everyone that if
they have ideas for fixes, that they write them down so you can discuss
them later. If you do your job right, you won't necessarily need to come up
with solutions here -- the learning from the retrospective will prompt
people to come up with them on their own going forward.

Other tips for running this retrospective:

- Be wary of any people dominating the conversation, *especially* managers
  or other authority figures. This can intimidate people and makes it far
  less likely to get honest assessments of the events of the incident. If
  you haven't heard from people, try asking them questions directly.
- Steer the conversation away from blame or any notion of 'human error'.
  It's extremely rare that someone involved in an incident isn't trying
  to do their best -- 'human error' is almost always a symptom of a larger
  systemic or organizational problem. These tend to be the biggest -- and
  hardest to fix -- problems that contribute to incidents, which makes it
  especially important to highlight them.
- Be extremely careful about anyone (including you) trying to decide on a
  narrative for the incident during this meeting. Incidents are not linear
  progressions of events; they are filled with dead ends, tangents, and
  feedback loops. Resist the temptation to try and guide the discussion
  unless it's wandering into blameful territory, or being sidetracked by
  conversations unrelated to the incident.

Once you have gotten through the timeline, you can open up more discussion
on what people learned from the incident and possible remediations. It is
important that people understand that there's no pressure to come up with
a load of tickets at this point; **you can have a good retrospective with
no "action items."** Once the retrospective is over, teams should take the
learnings back from the retrospective and turn these into more concrete
plans of action.

## The Retrospective Record

Once the retrospective meeting is over and you have your collected notes,
the last step in the incident retrospective is creating a written record
of the incident and the learnings from the retrospective. The goal of
this document is to provide a historical record that people who were not
involved in the incident or retrospective can learn from.

We recommend using a collaborative method to write the template (Google
Docs is the usual case), and then when complete and reviewed, it should
be put in the central document archive for the project, wherever that
may be. Other [guidance](../documentation/README.md) with regard to
documentation applies.

While we provide a [template](./retro-template.md) for this document,
it is meant to be a guide, not a straitjacket. If it is not the best
format to present the results of the retrospective, you are encouraged to
alter it as necessary. For more specific guidance on how to record your
findings, see the notes in the template.
