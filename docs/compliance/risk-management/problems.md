---
sidebar_position: 9
---

# Problems of the Assessment and Authorization

Many agencies have created strong processes for creating an ATO document, which describes a system and its controls at a single point in time. This is useful as a compliance check, but point-in-time documentation is insufficient to modern information security needs.

## Out-of-date controls

An ATO can be a very large document that takes a long time to write, often longer than it takes new threats to evolve or new capabilities that might require new controls. The point-in-time ATO cannot describe new controls and new risks.

## Lagging security reviews

ATOs define a point at which they must be reviewed or renewed, even if controls have not changed. This requires review of the whole management framework. But traditional implementation of information security did not require review more frequently. Developers might work on security improvements, but they are not included in the documents that inform compliance.

## Lagging product improvements

One way to prevent out-of-date controls is to slow down the adoption of enhancements. But slowing adoption can create other problems. Issues that could have been discovered and addressed earlier are instead discovered late in development. Because so many other decisions or assumptions have already been made, they are more expensive to address and the organization has fewer choices to solve them.

Slowing work can also leave systems lagging behind the skills of good developers. This has knock-on effects, reducing the pool of developers who want to join government, and reducing opportunities for government developers to build on their own skills.

## Reduced contributions to compliance from developers

The people who develop systems think about the security of a system in terms of how the system works and what modules serve as security controls. Compliance reviews work from the opposite direction: starting from the controls and identifying which modules implement them. Information security teams can ask which module implements each control repeatedly until they satisfy a list of controls.

If information security teams could ask instead what security controls a particular module implements, a development team could provide the full range at once. This allows developers to think more proactively about how each module they develop functions as a security feature.
