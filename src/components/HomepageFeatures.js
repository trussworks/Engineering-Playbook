import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Uses Markdown for documentation',
    description: (
      <>
        The Truss Engineering Playbook uses Markdown for documentation which is
        already widely used for other kinds of project documentation.
      </>
    ),
    callout: (
      <>
        <a href="https://github.com/trussworks/Engineering-Playbook/blob/main/CONTRIBUTING.md"> 
            Read about how to contribute to this documentation.
        </a>
      </>
    ),
  },
  {
    title: 'Focused on developer experience',
    description: (
      <>
        The Truss Engineering Playbook lets contributors focus on documentation.
        Docusaurus builds and manages the documentation while giving readers
        the ability to search and integrate other data sources besides
        Markdown.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    description: (
      <>
        Extend or customize the layout and integrations by using React. 
        Docusaurus can be extended while reusing the same header and footer.
      </>
    ),
    callout: (
      <>
        <a href="https://6130eb5cde15830007fdf57b--docusaurus-2.netlify.app/community/resources#community-plugins">
          Here's a list of Community Plugins that work with Docusaurus
        </a>
      </>
    ),
  },
];

function Feature({title, description, callout}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{callout}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
