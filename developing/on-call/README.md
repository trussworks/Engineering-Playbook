# [Tools and Practice](../README.md) / On-Call Best Practices

## Overview

In a modern development environment, we want to make sure that the people
writing the code own the services they write in production. Part of that
ownership is sharing the burden of the on-call rotation. In order to make
sure that said burden is not too arduous for everyone involved, here are
some best practices when developing the on-call practice for your project.

## Assumptions

For the sake of argument, most of this article assumes you will be using
[PagerDuty](https://www.pagerduty.com) for handling the actual alerting
of the engineers on-call; if you are using another provider, most of these
recommendations can be adapted for them. You can read more about various
alerting providers in the [Alert Providers](../../infra/alerting/alert-providers.md)
guide.

## On-Call Responsibilities

If you are the engineer on-call, you have a number of responsibilities
you are expected to fulfill.

* Prior to going on-call, you should make sure that you have access to
  any resources necessary to diagnose and correct issues -- this means
  AWS or GitHub, documentation, or any other tools. Your project should
  have an on-call checklist to make it easy for you to be confident you
  have this covered.
* If you know you will be away for an extended period during an on-call
  shift, it is *your* responsibility to find someone to cover your shift.
  If you are unable to, talk to your lead and see if they can help.  If
  you will be gone for more than a day or two, it may be easiest to swap
  the entire shift with someone. PagerDuty allows you to schedule these
  with [overrides](https://community.pagerduty.com/t/creating-a-schedule-override/850).
* When you are paged, you are expected to respond to the alert within
  five minutes. This means that you have *acknowledged* the alert and are
  looking into the issue. Acknowledging the alert prevents it from
  automatically escalating (see Escalation and Notification Policies for
  more information) and communicates that you are working on the issue.
  Do not forget to do this before you start working; there's nothing
  worse than getting a page as a secondary at an odd hour only to find
  that someone else is already taking care of the problem. While this five
  minute window may seem tight, alerts should be well-tuned so that you
  are not paged for things which are not urgent (see Project Expectations).
* The response time expectation does mean that your flexibility to take
  care of things away from internet access will be curtailed while on-call,
  but we want to reduce that burden as much as possible. If you need to
  run a quick errand, or if an emergency comes up, or you will be in
  transit for an extended period, you should notify your secondary (or
  your primary, if you are the secondary) and make sure they will be able
  to cover for you while you are away.
* Despite the expectation you will be the first responder as the person
  on-call, *this does not mean you are expected to go it alone*. If you
  get an alert, and you can't figure out what is going on within 15
  minutes and you believe the impact is such that it needs to be addressed
  immediately, you should feel free to page your secondary for assistance.
  If you are still stick (or you *were* the secondary), you should feel
  free to call upon your lead or a known subject matter expert (SME).
* If you are *not* on-call, you should refrain from responding to alerts
  even if you see them in Slack or elsewhere. By doing so, you can reduce
  your own interrupts. However, if you believe you might be responsible,
  or know the on-call person is dealing with another higher-priority issue
  and want to assist, *let the on-call engineer know* and then make sure
  you take ownership of the alert in PagerDuty. Remember that they likely
  already got the alert notification and make sure they have acknowledged
  that you will be taking care of the alert before taking action, so that
  you are not working at cross-purposes.
* You should make sure that you are keeping a persistent record of alerts
  and/or incidents each day. This can be as simple as a Google Doc filled
  out at the end of the day, but it should record at least the time of the
  alert, the alert that fired, and what was done to address the alert (even
  if that is "the alert went away on its own"). This serves as a way to
  pass knowledge onto the other on-call engineers or the next shift, and
  allows us to look at the previous week or month for alerts that are
  particularly troublesome.

## On-Call Rotations

An on-call rotation consists of a pool of engineers who share a schedule
that determines who is on-call at any one time.

* For a single on-call shift, you should have a primary responder, a
  secondary responder, and a tertiary "backstop", usually a lead, as the
  final link in the chain. During the shift, the primary is expected to
  respond to all alerts; the secondary and tertiary are there if for some
  reason they are unable to respond (see Escalation Policies to see how
  this is accomplished).
* The secondary and tertiary also exist as additional resources for the
  primary to call in as first points of contact for assistance if they
  have a particularly bad or difficult incident. They can help diagnose
  or remediate issues, contact subject matter experts for assistance, or
  handle the logistics of incident response if necessary.
* In most cases, you should aim for 6-8 people in the pool for a rotation.
  This allows a schedule that maximizes the time you are not on-call,
  while still having the rotation frequent enough that knowledge does not
  become stale. In almost no case should there be fewer than 4 people nor
  more than 12 people in a rotation pool. A pool of 4 or fewer people
  means someone is likely on call at least half the time, which makes it
  extremely hard for them to recover before their next shift. A pool of
  12 or more means that knowledge can easily go stale between on-call
  shifts, and the area of coverage is likely so large that one person
  cannot have adequate knowledge to handle the incidents likely to come
  up. Instead, split the rotation up into two more specialized rotations
  (such as a backend and frontend rotation).
* Only one person should be paged for an alert at once; paging more than
  one person increases the burden of on-call and can also result in
  confusion if two people are making changes at the same time. If the
  person responding needs additional assistance, they can always call in
  more help after they start responding.
* The usual method for doing on-call rotations is to change them weekly;
  however, it is not uncommon to see a Sun-Wed/Thurs-Sat half-week
  rotation, which has the benefit of giving every on-call rotation at
  least one day on the weekend where they are not on-call. Either way,
  engineers are recommended to have PagerDuty notify them 24 hours before
  going on call so they are aware of their impending shift.

## Escalation and Notification Policies

In PagerDuty terms, an escalation policy determines how an alert will
proceed if it is not acknowledged; a notification policy is something
which is set for each engineer individually that determines how they will
be notified if they receive an alert.

* PagerDuty and similar products can be set up to send notifications to
  Slack for each alert; we recommend doing so. Using the [PagerDuty
  integration](https://www.pagerduty.com/docs/guides/slack-integration-guide/)
  will also allow engineers to acknowledge or resolve alerts from Slack
  if they so choose.
* Engineers should have notification policies set to ensure that they
  will be notified within the expect five minute response window. This
  should use multiple notification methods to make sure things don't fall
  through the cracks. Keep in mind that an acknowledgement will break the
  notification chain. An example might be:
  * Immediately after the alert, notify me by push notification and email.
  * 1 minute later, notify via SMS (in case data coverage is bad).
  * 5 minutes after the alert, notify via voice call.
* Your on-call rotation should have an escalation policy that escalates
  from the primary to secondary after no more than 10 minutes, and from
  secondary to tertiary after no more than an additional 10 minutes.
  Optimally, this should be as short as possible to ensure that there is
  a quick response; remember that an alert going unnoticed can incur a
  significant SLO impact. A 99.99% uptime requires no more than 13
  minutes of downtime a quarter for instance -- if you have a 10 minute
  escalation, an alert that falls through to the secondary may blow the
  SLO on its own if the problem is serious enough.

## Project Expectations

In addition to the expectations we have for on-call engineers, there are
also expectations we make for the project we are on-call for in order to
ensure that on-call is not an undue burden.

* The on-call rotation *should not be getting more than 2-3 alerts per
  day*, and even that is bordering on excessive, especially if these are
  off-hours. Optimally, this should be no more than 2-3 alerts *per shift*.
  If the on-call burden for that rotation is higher than that, there
  should be an understanding across engineering and product that engineering
  time needs to be devoted to reducing the on-call burden. This could mean
  relaxing SLOs or tuning alert thresholds, but it may also mean a deeper
  investigation, bug fixing, or code and/or infra improvements to prevent
  problems. The "SRE" way to do this is formal [SLOs](https://www.youtube.com/watch?v=tEylFyxbDLE)
  and [error budgets](https://www.youtube.com/watch?v=y2ILKr8kCJU), but
  they aren't always the right choice if the project is small or does
  not have the constraints that come with a 24/7 web service.
* Engineers who are primary or secondary on-call should essentially be
  considered off project work; they should focus on taking care of
  immediate needs like writing or tuning alerts, fixing stability-threatening
  bugs, addressing reported security vulnerabilities, or updating
  documentation. If they can contribute to project work as well, that
  should be a bonus, not an expectation.
* Alerts for any project should be well-documented so that an on-call
  engineer can at least begin the process of diagnosis. Questions this
  documentation should answer include:
  * What does this alert mean, literally?
  * What are common causes for this alert to fire?
  * What logs, tools, or other resources can I use to find out more about
    why this alert fired?
* It's not unusual for us to have infra teams that are significantly
  smaller than application development teams on a project. For this
  reason, it is probably a good idea for all engineers to be involved
  in any sort of infra rotation; however, you should make sure that any
  single rotation has an infra engineer in the escalation path.

## Resources

* ["Being On-Call", Andrea Spadaccini, Google SRE Book](https://landing.google.com/sre/sre-book/chapters/being-on-call/)
* ["Crafting Sustainable On-Call Rotations", Ryn Daniels, Increment April 2017](https://increment.com/on-call/crafting-sustainable-on-call-rotations/)
* [On-Call Rotations and Schedules, PagerDuty](https://www.pagerduty.com/resources/learn/call-rotations-schedules/)
