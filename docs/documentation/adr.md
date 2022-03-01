# [Documentation](./README.md) / Architectural Decision Records

Truss uses [architectural decision records](https://adr.github.io/) (ADRs) to
document engineering decisions. These include choices about composition of the
tech stack, using one module or library over others, infrastructure, features,
etc. "Architectural" should be interpreted broadly: any decision that could
impact a project at the architectural level is a candidate for an ADR.

ADRs are useful for recording context with decisions that may become unclear over
time, or as engineers rotate on and off the project. Therefore, the best time
to write an ADR is shortly after - or before! - making the decision it documents.

We also encourage writing ADRs when a decision is made _not_ to do something,
as these decisions are often no less significant.

## Bootstrapping

We typically use the markdown ADR format, or [mADR]. When starting a new
project or repository, review the mADR documentation and commit the most recent
[template] into source control under `/docs/adr/`.

```console
mkdir --parents docs/adr
curl -L -Ss https://raw.githubusercontent.com/adr/madr/master/template/template.md > docs/adr/0000-template.md
```

## Writing a new ADR

To begin a new ADR, check out a branch and copy the template. It is helpful to
establish an indexing scheme in advance. You can add new ADRs indexed by a
simple sequence of integers, e.g. `0001-my-new-adr.md`. In busier projects, it
may be useful to use a Unix timestamp to avoid index collisions when more than
one ADR is being drafted simultaneously:

```console
cp docs/adr/0000-template.md docs/adr/"$(date %+s)"-my-adr-title.md
```

## Changing an old ADR

In general, once an ADR is added in an "accepted" state, it should not be
changed. If the decision it documents is later reversed, publish a new ADR
explaining that decision, and change the status of the old ADR to "superseded"
as outlined in the template.

## Tools

Some command line tools are available that you may find useful for managing (m)ADRs in your project:

- [adr-log](https://adr.github.io/adr-log/): Generates an architectural decision log out of mADRs.
- [log4brains](https://github.com/thomvaill/log4brains): Log ADRs right from
  your IDE and publish them automatically as a static website

## See also

- [Intro to docs](./intro-to-docs.md)

[madr]: https://adr.github.io/madr/
[template]: https://github.com/adr/madr/blob/master/template/template.md
