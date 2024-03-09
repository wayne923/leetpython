import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FeatureSection from '@site/src/components/FeatureSection'; // Import the new FeatureSection
import Testimonials from '@site/src/components/Testimonials';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import QuickStartGuide from '@site/src/components/QuickStartGuide';
import CommunityHighlight from '@site/src/components/CommunityHighlight';
import ProjectsShowcase from '@site/src/components/ProjectsShowcase';
import FounderSection from '@site/src/components/FounderSection';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">Unlock Your Python Potential: From Beginner to Pro</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">Learn Python</Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">Explore Projects</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Position the FeatureSection where it fits best in your flow */}
        <FeatureSection />
        <QuickStartGuide />
        <CommunityHighlight />
        <ProjectsShowcase />
        <FounderSection />
        <HomepageFeatures />
        <Testimonials />
        <NewsletterSignup />
      </main>
    </Layout>
  );
}