// src/pages/index.tsx

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CalloutSections from '@site/src/components/CalloutSections';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import styles from './index.module.css';
import FeatureSection from '../components/FeatureSection';
import CommunityHighlight from '../components/CommunityHighlight';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.textContent}>
            <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.myCustomButton)}
                to="/docs/intro"
              >
                Get Started 1 min at a Time
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="/img/landingpage.webp" alt="Our mascot, an orange blob, coding on a laptop" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
 return (
   <Layout title="Home" description="Discover Python with LeetPython">
     <HomepageHeader />
     <main>
       <FeatureSection />
       <CommunityHighlight />
       <CalloutSections />
       <NewsletterSignup />
     </main>
   </Layout>
 );
}