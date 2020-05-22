# [Short Title of Incident]

Date(s) of Incident: [YYYY-MM-DD date or date range of incident]

## Summary

> This should be a 1-2 paragraph executive summary of the incident that
> conveys the systems involved, impact scope, and severity. The goal of
> this summary is help someone determine *if* they want or need to read
> the rest of the report; do not make it too long in an effort to convey
> everything about the incident in one place.

## Description

> This is the most important section of your retrospective. This is where
> you will finally assemble a narrative of the incident. **Do not write
> this section until the retrospective has been conducted.**
>
> This narrative does not need to presented in a chronological fashion;
> you could organize it by the systems or teams involved, by tested
> hypotheses, or any other way that makes sense. However you organize it,
> you should make sure that a reader can follow the progression of the
> incident and understand what happened.
>
> When writing this narrative, be sure to highlight:
>
> * when the incident started, stopped, or changed its nature and/or
>   severity
> * when and how people made realizations about the nature of the incident
> * when and how people made hypotheses (right or wrong) about the nature
>   of the incident
> * anything that surprised people during the incident
> * any point where people had contradictory perceptions about the
>   incident

## Timeline

> This should be a minute-by-minute account highlighting critical events
> over the course of the incident; as much as possible, these should be
> linked to a primary record of some type, such as a Slack message, system
> log, or PagerDuty alert. If that is not possible, snipping out a log
> line or providing some other message for context is important.
>
> The timeline should start with the date of the events and the timezone
> for the timeline, and then each event should be tagged with a timestamp.
>
> For example:
>
> 2020-05-22
>
> All times CDT (GMT -0500).
>
> * **08:17** - spacecats-fe begins logging messages about being unable to
>   contact spacecats-api
> * **08:21** - cblkwell receives alert that spacecats-fe failed ping test
>
> This timeline should be curated; you don't need every individual message
> or event cataloged here. However, **do not edit out so much that context
> is lost**. Do not remove things that weren't relevant to the incident
> *if they seemed relevant at the time.* We want to make sure people who
> read this timeline see how things looked to the responders at the time.
> This means including actions that didn't ultimately turn out to be
> productive, spurious alerts that caused concern but ended up being
> unrelated, or anything else that may have affected the incident response
> even if unrelated to the incident (was someone unable to respond because
> their internet service went down?).
