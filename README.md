# Engineering Playbook

## Purpose

Within Truss we have much experience of and opinions regarding engineering tools, processes, and practices. The problems and choices that we encounter in our day-to-day practice are rarely new. Having a straightforward way of applying the things we collectively know to the problems we face would be a source of great efficiency for us.

This collection of documents is intended to be simple and searchable, each one containing the essence of Truss opinions on a particular topic. Whilst any Trussel is free to edit these documents, there is some expectation that these are to be curated by the broad engineering community at Truss. To that end, proposed changes should be submitted via a PR and  SMEs will be identified to act as curators for particular areas of knowledge.

### Public repo

One question we might ask is whether or not this repo should be public? My inclination is to say yes and use it as a way of demonstrating to customers and potential hires what to expect from working with or for Truss.

## Contents

* [Developer Tools & Practice](./developing/README.md) - Opinions and resources relating to the tools we use to do our work
* [Documentation](./documentation/README.md) - How to write effective documentation your users will read.
* [Web Development](./web/README.md) - Languages, frameworks and tools used to develop web applications
* [InfraSec](./infrasec/README.md) - Infrastructure and security are foundational disciplines for building and maintaining stable systems.
* [Leadership](./leadership/README.md) - Guidance and resources around being an Engineering Lead or Manager at Truss.
* [Templates](./templates/README.md) - "Ooh, ooh... I have a thing to add." Here's how to add to this Playbook

## Initial Setup

### Install Dependencies(Mac OS)

    brew update
    brew install pre-commit
    pre-commit install
