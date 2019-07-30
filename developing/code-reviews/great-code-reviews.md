# Great Code Reviews Bring Happiness to my Heart

So you’ve put together the perfect changeset. You use your favorite tool to share your changes and ask politely for a code review.

How do you make that code review great?

## Making code review process work for your team

I’ve been on teams large and small that have tried to integrate code review into their process. Some of those teams succeeded, and others failed. There were several themes that arose that were indicators for success or failure. Here are the practices I found that tend to make code reviews a success.

1. **Do it asynchronously.** If you or the reviewer are at all busy, and you probably are, do it asynchronously. Let the reviewer know there’s an item awaiting their attention, then give them a day to get to it. If they don’t get to it in a day, bug them again.

2. **Use a visual code review management tool.** Use a code review tool which keeps track of comments on changes, and allows in-line discussion. In addition to GitHub’s code review tool, Google's [Gerrit](https://www.gerritcodereview.com/) was pretty good last time I checked. I believe there are some reasonable open source ones as well such as [Phabricator](https://phacility.com/phabricator/) or as a paid option there is [JetBrains Upsource](https://www.jetbrains.com/upsource).

3. **Make code review a gatekeeper** step in your source management process. Make code review a gatekeeper step in your source control management process. If it’s something that must pass before code can be merged, then it will happen. GitHub’s pull request feature does a great job of supporting an integrated code review step. A dashboard shows what pull requests are outstanding, and a merge button minimizes friction once the changes have passed review. If you try to add code review as an adjunct step to an existing process - e.g. sending an email asking for a code review, with no central dashboard where outstanding review requests can be seen - it can be very difficult to consistently employ code review, since its existence will be somewhat invisible. YMMV.

4. **Integrate your tool into a team communication medium.** Have the code review tool notify you when relevant changes have been made or commented upon. Email, chat, carrier pigeon, or tweet - whatever medium will catch your attention in a timely manner, and not break your flow.

## Performing the review

Once you’ve done the above, there are several additional things each person can do to make code reviews more effective on an individual basis.
When asking for a code review, try to find a trusted critic. The code review step in a revision control workflow process is like this magical land where you can go with code and make it pretty before the ball, so that when it walks through that door it will shine like Cinderella on her big night out. You want the code reviewer to give you everything they’ve got. You may decide that some suggested changes are not actually necessary. However on the first code review pass, you want all the criticisms you can get. The more detailed the better, within limits.

The code reviewer should be looking at many aspects of the code at once. The overall structure, the structure of individual methods or classes, the syntax, the nomenclature, the comments, the documentation, the testability, and the adherence to style guides used for your project. (If you don’t have a style guide, the existing style is your guide. If there isn’t an existing style, you should scrap what you’ve got and start over. ...just kidding. In this last case, you should probably pick the style you think is best, and adhere to that.) Checklists can help to make sure you don’t miss anything here.

The commenters in a code review should start by trying to understand the motivation of the person writing the code. If that is not clear to you, then a good comment might be one inquiring as to the purpose of the code. Once you understand the coder’s motivation, use this perspective as a jumping off point to provide observations and suggestions that might make the code better. When critiquing someone else, starting from a perspective of understanding will help you to make a more informative and effective critique.

Be clear, succinct, and courteous. This is the best way to make sure your critiques/comments are heard and understood. Give reasons to back up your suggestions. Cite style guides where they exist. Leave room for the other person to explain where you might be missing something.

After the first round of comments, the person who requested the code review should review the comments and make changes or give feedback. Where in doubt, defer to the opinion of the reviewer. You can always change it later!

Complete the code review soon after it was requested. Under 15 minutes is fantastic, under a day is great. Under a week can be fine depending on how the changes affect the project. Any longer than a week, and the changes begin to get stale. Not just in the codebase, but also in your head. The fresher you can be when reviewing the changes, the faster all the steps of the code review process will be. If the code begins to get old and stale, escalate the review of those changes in priority, or question whether they are important enough to matter in the first place.

As a general comment on style, everything goes faster if pull requests are of a reasonable size. If the reviewer can grok your changes in under 5 minutes, you're golden. Sometimes a larger commit is necessary, and that's fine.

However commits that take longer than 10-15 minutes to review should be questioned, or framed in a way that helps the reviewer understand why the commit must be so large. Larger commits slow project velocity, due to this code review friction, and are to be avoided if possible.

IBM did some nifty research in this area to [see how code review size affects code quality](http://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/). Notably, review of one’s own code prior to submission was shown to positively affect code quality as well.

Where there are conflicts, bring in more reviewers and resolve outstanding questions. Don’t become attached to your code. Defer to the majority. And remember it can always change again later. ;)

And enjoy! Code review is one of the best opportunities to learn that you have on a daily basis. Take what you learn in code reviews and use that to improve your coding habits daily.

Happy coding!
