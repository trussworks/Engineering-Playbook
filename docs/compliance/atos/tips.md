# General Tips

## General

- As soon as you have a stable server that isn’t changing its security boundary (talk to the project developers about this, but it can be very early on), you should start this process. As long as there aren’t those significant changes, the tests will run periodically on any updates you make. At the very latest, start this process at least two months before launch. Do not commit to a launch date without coordinating with your AO on this first.
- One thing that will help the process is great documentation, which can mitigate some problems from occurring during the ATO process. Documentation, and specifically your README, should reflect a high level narrative of the architecture and data flows of the application. Questions to consider include:
  - What does it do?
  - How does it move information around?
  - What does it accomplish by doing it?
- The DigitalGov team at GSA has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with.
- Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you figured out what level of traffic you need to support? This should be coordinated between the engineers on your team, your client, and the Infrastructure Team.

## System Security Plans (SSPs)

- Remember that the reviewer knows nothing about your system, and likely doesn't have software development background. The purpose of the SSP is to get the entire system and everything security-related around it into the brain of the reviewer.
- Filling out the SSP is hard, and will likely be the most time-consuming part of the ATO process.
- Sections 9, 10, and 13 are the hard/important ones to fill out. Focus on these first.
- It will be easiest to fill out your SSP while going through side-by-side with a recent SSP, ideally for a similar system.
  - Looking at another SSP will help you understand the language/detail required.
  - Reuse/adapt content from previous SSP(s) whenever possible.
- When filling out the SSP, try taking a rough first pass, and flesh it out later.
- Don't Repeat Yourself.
  - Lots of controls and sections have overlap - you will be tempted to restate the same thing multiple times. If this seems to be the case, reread the question _carefully_ to be sure. The SSP template authors choose their words carefully.
  - Rather than repeating the same thing across multiple controls/sections, give a brief summary with the core details of who's responsible and how the control is fulfilled, and then cross-reference the more detailed explanation in the other place.
- Maintain consistency.
  - Inconsistency can confuse the reviewers, forcing them to come back and say "well, which is it?" which slows down the process.
  - Be especially careful to be consistent with terminology, using the exact names from the following tables throughout your ATO materials:
    - User Roles
    - Software Components
- Refer to specific User Roles and Software Components in Title Case.
- Only include information about your \[soon-to-be\] production system. Other environments (development/staging) are out of scope.

## System/network diagrams

One of the requirements for an SSP (and the Rules of Engagement) is to include a network diagram for your system. Some tips:

- The diagram should be as detailed as possible.
- The boxes in the diagram should roughly correspond to the rows in the `Software Components` tables.
  - Include all external services, such as:
    - The Digital Analytics Program
    - New Relic
- The arrows should correspond to rows in the `Ports, Protocols, and Services` table(s), with labels of the format `<protocol> <port>(<T(CP) or U(DP)>) - <Purpose>`.
  - Example: `HTTPS 443(T) - uploading files`
- Include a visual "ATO Boundary."
  - A dotted line box is a nice way to do this.
  - The system diagram includes things outside of the ATO boundary for context. Delineating the parts of the diagram being ATOd versus the parts that exist for context (such as the cloud.gov router) is helpful for reviewers.
