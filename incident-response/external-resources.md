# [Incident Response](./README.md) / External Resources

This is a collection of external resources that may be useful for learning
more about elements of incident response. Please feel free to submit PRs
to add new resources if you find something particularly interesting.

## Incident Response Procedures

### Articles

* [PagerDuty Incident Response Guide](https://response.pagerduty.com/)
  This is the full (slightly sanitized) version of PagerDuty's internal
  incident response documentation, and it is very comprehensive. It is
  an excellent resource for seeing how to apply our general principles
  to a specific service.

### Talks and Videos

* [nrrd 911 ic me: The Incident Commander Role](https://www.usenix.org/node/195653)
  This is a talk by Alice Goldfuss from SRECon 2015 where she talked
  about the incident response process at New Relic; this includes a
  discussion of severity levels and how they used a chatbot to
  automate elements of the process.

### Books

* [Incident Management for Operations](http://shop.oreilly.com/product/0636920036159.do)
  This is a book that talks about how to apply the ICS system to
  IT operations; it is a good introduction to the topic and
  describes how this actually looks in practice.

## Incident Retrospectives (aka Postmortems)

### Articles

* [Each Necessary, But Only Jointly Sufficient](https://www.kitchensoap.com/2012/02/10/each-necessary-but-only-jointly-sufficient/)
  This 2012 blog post from John Allspaw provides a short description of
  why the idea of a "root cause" is a fundamentally flawed idea, and why
  *learning* must be the driving force behind incident analysis, not fixing.
* [Etsy Debriefing Facilitation Guide](https://github.com/etsy/DebriefingFacilitationGuide)
  This is the incident retrospective guide used by Etsy and open-sourced
  in 2016; it's an excellent resource for conducting your own debriefings
  and the basis for a lot of similar guides throughout the industry.
* [The Infinite Hows](https://www.oreilly.com/radar/the-infinite-hows/)
  This article by John Allspaw talks about the issues with the
  commonly used "Five Whys" system of incident analysis, and does an
  excellent job providing an overview of an alternative approach.

### Talks and Videos

* [Incidents As We Imagine Them Versus How They Actually Are](https://www.youtube.com/watch?v=8DtzmV1jiyQ)
  This is a talk by John Allspaw at PagerDuty Summit 2018 which is an
  excellent summary of the thorny issues around doing incident response
  and how what actually happened often gets oversimplified in a desire
  to make incidents fit in standardized boxes. If you watch nothing else
  about incident analysis, watch this.
* [Who Destroyed Three Mile Island?](https://www.youtube.com/watch?v=1xQeXOz0Ncs)
  This talk by Nickolas Means at LeadDev Austin 2018 talks about the 1979
  Three Mile Island disaster and is an excellent walkthrough of the
  difference between first stories and second stories, and the dangers of
  hindsight and outcome bias.

### Books

* [The Field Guide to Understanding Human Error](https://www.amazon.com/Field-Guide-Understanding-Human-Error-ebook-dp-B00BL0OZ0E/dp/B00BL0OZ0E/)
  This one of the best texts for incident analysis, written by Sidney
  Dekker, a leader in the field. While not specifically about software
  services, the guidance in this book is applicable to almost any
  technical system.
