# [Incident Response](./README.md) / Overview

Incident response for production systems owes a great deal to the incident
response process developed by the National Forest Service and later
standardized by DHS for all emergency services, known as the [Incident
Command System (ICS)](https://en.wikipedia.org/wiki/Incident_Command_System).
This document will describe how we adopt this process to work for our
projects.

## What Is An Incident

Before we describe incident response, we should define what exactly
constitutes an incident. An incident is a service disruption, usually
with user impact, that needs to be addressed outside of the normal
sprint process, and requires an increased degree of coordination and
communication.

This definition is intentionally vague because there's no hard and fast
rule about what qualifies for the incident response process. Basically,
if the initial responders think this framework will be useful in taking
care of the problem, they should invoke the incident response process.

## Roles

### Incident Commander

The incident commander runs the incident response. This *does not* mean
that they are leading the investigation; in fact, they should not be
investigating at all directly. Their responsiblities are:

* Keep track of the current state of the incident response; what is the
  impact to the service and users? What is the state of any mitigations
  or attempted fixes? How are the other members of the incident response
  team holding up?
* Make any final decisions about incident response. No one should put in
  place any mitigations, attempted solutions, or active diagnostic
  measures *without* running it by the IC first. This is imperative to
  ensure no one is working at cross purposes and that the current state
  of the system is understood.

During especially severe incidents, the commander may also have a deputy
to assist with their tasks.

### Technical Lead/Investigator

There may be one or more investigators on any one incident. These are the
people responsible for actual diagnosis of problems and implementation of
any mitigations or attempted fixes for the cause of the incident.

If there is more than two investigators on the incident, one should be
designated as the technical lead. This will be the person who reports to
the incident commander and coordinates the investigation to keep people
from duplicating effort or stepping on each other's toes.

Before taking any *active* measures to investigate, the investigator(s)
should coordinate with the incident commander to make sure they are aware
and approve of taking the action.

### Communicator

The communicator is responsible for handling external communication during
the incident, both by keeping the rest of the engineering team informed
and notifying stakeholders (such as clients) about the status of the
incident. Similarly, if non-responders want to ask questions or notify
the incident response team of issues, they should use the communicator as
a conduit to the incident commander, not talk to the commander directly.

During less severe incidents, the communicator role may be folded into
the scribe role.

### Scribe

The scribe is responsible for recording what is going on during the
incident, both so that the incident response team has something they can
reference during the incident, and for the use of the person coordinating
the retrospective after the incident is over. While most communication
during the incident should be taking place somewhere it can be easily
recorded (such as Slack), parsing through hundreds or thousands of Slack
messages to find the one that is important can be difficult. The scribe
should highlight notable events in the incident process, such as:

* when the incident is first noticed
* when the incident response begins and ends
* when the impact of the incident changes (for the better or worse, or
  new symptoms appear)
* when mitigations or attempted fixes are applied
* any other events that have a significant impact on the progress of the
  incident

These should be recorded somewhere easily available to the rest of the
team; a Google Doc is usually the best place, since it can be added to
or commented on collaboratively.

## Severity

Incidents are usually graded on a 3-5 point scale, with SEV1 being the
most severe type of incident. This may be decided on a project-by-project
basis, since clients may have specific reporting requirements around
certain incident severities. In general, the severity index should look
something like this:

* SEV1 - Complete service outage or major security incident. Requires an
  immediate response at the highest priority.
  *Example: Service containers stuck in a crash loop, PII data known to
  have leaked.*
* SEV2 - Significant service degradation or severe known security
  vulnerability. Requires an immediate response at high priority.
  *Example: 20% HTTP error rate, library with known remote exploit in
  use.*
* SEV3 - Service is in a degraded state but is not currently impacting
  users. If further issues occur, is in danger of reaching SEV1 or SEV2.
  Should be addressed promptly, but not necessarily immediately.
  *Example: One member of a database replica pair is down.*

Additional severity levels are left to the project's discretion.

## Process

### Starting the Process

An incident begins with someone being notified of an issue, usually by
monitoring or a user complaint. The initial responder then notifies the
rest of the team in an appropriate channel (projects should have their
own channel designated for incident coordination) and begins the
incident response.

Immediately after declaring the incident, the responder should find an
incident commander. This could be the initial responder, but they may be
better suited for taking the lead investigator role if they have already
started trying to diagnose the problem. If they are going to be the
incident commander, they should find someone (such as the secondary
on-call) to take the lead on the investigation.

The incident commander should then find a scribe and communicator. For
smaller incidents, this could be one person. The initial responder should
give the scribe as much context to begin recording the opening stages of
the incident, and the scribe should start the incident record and make a
link to the document available to responders.

### During the Incident

The incident response team's priorities during the incident should be
as follows:

* Assess the impact of the incident (affecting random 10% of users, the
  us-west-2 region, users whose accounts were created today, etc)
* Mitigate the impact to the service (failing over to another region,
  placing the service into read-only mode, rolling back to a previous
  known good version, etc)
* Attempt to diagnose the problem via passive measures (reading logs,
  probing read-only endpoints, examining metrics, etc)
* Take active measures to diagnose the problem (pushing config or code
  changes, submitting data to see how the system responds, etc)
* Take action in an attempt to resolve the problem.

The response process during the incident should basically be a 15-20
minute loop that looks something like this:

* The technical lead or investigators report to the incident commander
  on the current state of the service. Special attention should be paid
  to changes in status (it is getting better or worse, affecting a new
  set of users, spreading to another region, etc).
* The team reviews the status of any mitigation or solution efforts that
  were put in place during the previous iteration of the loop.
* If the incident is not yet resolved, the team determines what their
  course of action will be for the next 15-20 minutes; any new active
  measures need to be approved by incident commander.
* Team members go back and take their appropriate actions, and start
  the loop over again in 15-20 minutes.

In general, you do not want to repeat this loop in less than 15 minutes,
otherwise your team members will be too busy checking in to actually do
what they need to. Repeating less often means that the situation can
change too much between check-ins, which is bad for the incident
commander's situational awareness.

If the incident is resolved, it's usually a good idea to wait an
additional 15 minutes before you disband the response team, just to
make sure it's *actually* resolved, and not just a temporary blip. If
things are quiet after that, you can move to the post-incident steps.

### After the Incident

Once the incident is over, the incident commander should wind down the
incident response and notify the rest of the engineering team and any
stakeholders that the incident response is ending.

Each member of the team should review the incident record and make sure
that any of their own notes are in the record. The scribe should reread
the log of incident communication and make sure they have highlighted
the important events in the record.

The incident commander should create a ticket to generate a retrospective
and add links to the incident record as well as the first Slack message
that started the incident so that the facilitator for the retrospective
can review it. They should also find someone (if at all possible, someone
who was *not* involved in the incident directly themselves) to facilitate
the retrospective and assign the ticket to them.
