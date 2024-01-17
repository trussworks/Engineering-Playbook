# 0006 - Preference for x as web development framework(s)

**Status:** Draft

**Date Accepted:** x/x/xxxx

## Context

Our partners look to us for our expertise and our opinions on a variety of topics, including the tools we use to build software together. As we continue to seek new business it is beneficial for us to have an organizational opinion on what web development framework to use (when we have a choice in the matter).

In making a choice we're seeking to match up the tradeoffs that the tools provide with projected partnership needs. The technical ecosystems we operate in tend to change often, so this is a decision we should seek to re-evaluate at least annually. Some topics to consider in the decision include (but not limited to):

- Accessibility for junior engineers.
- Support for rapid prototyping.
- Ability to use in 'enterprise' environments.
- Batteries included vs. things we have to roll ourselves.
  - e.g authentication and authorization tooling, data model management, caching, etc

The decision outcome does not need to be a single framework. Ideally we'll choose 2-3 that we would ask folks to choose from in most scenarios.

## Why is this applicable to the Practice as a whole?

A large portion of our work is focused on developing web apps in partnership with public and private organizations. Each time something new starts we need to make decisions about how we'd like to approach it. This is meant to help give guidance in order to lower the burden of that choice.

Having a 'practice opinion' on these tools will also help support folks' professional development, as well as our hiring and on-boarding processes. As we hire and get folks up to speed, this decision may be able to help us tailor what we do toward 'what we're trying to be good at.' Similarly we could lean on this as we seek to provide resources for folks developing their professional development plans.

## Framework Evaluation

### Back-End Frameworks

#### Django (Python)

- **Pros**: Mature, “batteries included,” excellent for rapid development, robust ORM, strong security features.
- **Cons**: Monolithic, less flexible for non-standard requirements, limitations around async support, high learning curve compared to smaller frameworks, dynamic typing is prone to more errors.
- **Accessibility**: Uses Python which is considered easy to learn and suitable for juniors, strong community support, robust documentation.

#### Spring Boot (Java)

- **Pros**: Mature, enterprise-grade, scalable, good for microservices, static typing.
- **Cons**: Steeper learning curve, more configuration required, less suitable for rapid prototyping.
- **Accessibility**: Uses Java which is commonly taught in college programs, although notably more verbose than Python and Javascript.

#### Node + Express.js (Typescript)

- **Pros**: Mature, high flexibility, large ecosystem, strong community support, suitable for real-time applications.
- **Cons**: Requires more boilerplate, less guidance on structure.
- **Accessibility**: If we're abiding by prior ADRs it would mean using Typescript, which may have some learning curve for folks coming in without that background.

### Front-End Frameworks

#### React.js

- **Pros**: Industry standard, high flexibility, strong community, large ecosystem, easily build cross-platform apps with React Native.
- **Cons**: JSX learning curve, more choices for state management, constant updates require developers to relearn newer concepts to keep up.
- **Accessibility**: Good for juniors with Javascript basics.

#### Angular

- **Pros**: Lots of tools provided out of the box, strong community, long-term maintainability since it’s backed by Google.
- **Cons**: No strong support for cross-platform apps.
- **Accessibility**: Requires skill in Typescript, which may have some learning curve for folks coming in without that background.

#### Vue.js

- **Pros**: Focuses on helping beginner developers create dynamic web apps without prior tedious learning.
- **Cons**: Smaller community, no strong support for cross-platform apps, doesn’t render in older versions of web browsers.
- **Accessibility**: Known for easy learning curve.

### Cloud Infrastructure Providers

#### Amazon Web Services (AWS)

- **Pros**: Market leader in cloud services, suitable for small and enterprise scale, extensive documentation, large community and support, has the largest number of data centers.
- **Cons**: High learning curve, naming conventions tend to be confusing, user interface is not good.
- **Accessibility**: Amazon provides excellent online training resources for all levels.

#### Google Cloud Platform (GCP)

- **Pros**: Excels in big data processing and ML, leading in Kubernetes and open-source integrations, focuses on high-performance networking and low-latency connections.
- **Cons**: Fewer resources and community support compared to AWS.
- **Accessibility**: Slightly more accessible due to focus on open-source and user-friendly interfaces.

#### Microsoft Azure

- **Pros**: Robust offerings in AI and ML due to Microsoft’s partnership with OpenAI, integrates with Microsoft ecosystem.
- **Cons**: High learning curve, not as good customer service.
- **Accessibility**: High learning curve.
