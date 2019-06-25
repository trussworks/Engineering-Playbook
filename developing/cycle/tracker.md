# [Development Cycle](./README.md) / Pivotal Tracker

## Overview

We use Pivotal Tracker to track tasks and estimate how much time each task will take.

- 🔒[How to organize a Pivotal project](https://docs.google.com/document/d/1abmxQdYol6Zi3kR3U__JNJl3uPdKF9WPYWfu75AkZ50/edit#heading=h.yyb7wuihugn8)
- [Pivotal workflow](https://www.pivotaltracker.com/help/articles/workflow_overview/)

*Remember, agile processes should be treated [more like guidelines than actual
rules](https://www.youtube.com/watch?v=jl0hMfqNQ-g).*

## Stories

### State definitions

- Started (waiting to be finished) -- The story is *actively* being worked on.

- Finished (waiting to be delivered) -- The work is believed to be done. It may
  or may not have passed code review yet.

- Delivered (waiting on acceptance) -- For code, this means it's landed in
  master and passed the build, or has gone all the way to production, whichever
  makes sense for the story. For other work, use common sense.

### Creating

- Add enough information so anyone on the team can pick it up.

- Include acceptance criteria (AC) to make it clear what "done" means and to
  help the person accepting the work know what to validate.

- Leave the story unestimated.

- Add it to the top of the inbox (at the top of icebox).

### Finishing / Delivering

- Add comments, PRs, etc. to the story that will help someone else accept the work.

### Accepting

- Throughout the week, everyone should take time to accept other people's work.

- Look at the acceptance criteria, validate they've been met, and click the
  green button.

## Weekly planning

Weekly sprints begin with a planning session. It goes like this:

1. Go through in progress stories

   - Determine if the story is blocked.

   - If a story will be blocked for an unknown amount of time, or if it's
     unlikely it'll be unblocked this week, move it into the "blocked" section
     of the icebox.

2. Go through "blocked" section of the icebox

   - If a story is no longer blocked, move it into backlog.

   - If a story has been blocked for more than a few weeks, delete it or move it
     to the bottom of the icebox. Own up to the fact that it's not getting done.

   - If a "really important" story has been blocked for more than a few weeks,
     prioritize unblocking it: create a new chore to do the work that it will
     take to unblock it and move it to the top of the backlog.

3. Go through the inbox

   - Read each story and make sure everyone understands what it means. If there
     is missing context, acceptance criteria, etc. then add that in.

   - If the story is work that needs to be done soon, ro-sham-bo for points,
     discuss any differences, and move into the backlog.

   - If the story can wait, move it into the icebox for later. Having good tags
     (debt, security, etc.) can help uncover them later.
