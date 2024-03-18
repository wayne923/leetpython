// src/components/CalloutSections/index.tsx

import clsx from 'clsx';
import React from 'react'; // Ensure React is in scope
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    media: string; // Path to the image or SVG
    link: string; // URL to navigate to on click
    isSvg?: boolean; // Optional flag to indicate an SVG component
    description: JSX.Element;
  };
  
const FeatureList: FeatureItem[] = [
  {
    title: 'Our Founder',
    media: require('@site/static/img/founder_image.jpeg').default,
    link: 'https://www.youtube.com/watch?v=Nl0tf5ag47k&ab_channel=LilyChen', // Your desired path for the founder image
    description: (
      <>
        Learning is a lifelong journey, and translating technical skills to career opportunity is daunting and oftentime seems impossible. Early in my career I was able to use my learning to land a job at Amazon and then at Meta. “Luck is what happens when preparation meets opportunity.” - Seneca
      </>
    ),
  },
  {
    title: 'Sister Sites: Principles of AI',
    media: require('@site/static/img/poai_logo.svg').default,
    link: 'https://www.youtube.com/watch?v=cYvNX3zxQ6c&ab_channel=PrinciplesofAI', // Your desired path for the SVG logo
    isSvg: true, // Explicitly indicate this is an SVG component
    description: (
      <>
        AI is becoming an integral part of how we operate as we interact with products that are embedded with these capabilities. The most amazing part is that even everyday consumers can leverage these tools and empower us to be even more creative and assist in many domains.
      </>
    ),
  },
];

function Feature({title, media, link, isSvg, description}: FeatureItem) {
    return (
      <div className={clsx('col col--6')}>
        <div className="text--center">
          {isSvg ? (
          <Link to={link}>
            {React.createElement(media, {className: clsx(styles.featureSvg, styles.roundedEdges), role: 'img'})}
          </Link>
        ) : (
            // Render as img tag for JPEGs and other image formats
            <Link to={link}>
              <img src={media} className={clsx(styles.featureSvg, styles.roundedEdges)} alt={title} />
          </Link>
          )}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
}
  
export default function CalloutSections(): JSX.Element {
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
