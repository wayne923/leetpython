// In src/components/FeatureSection/index.tsx

import React from 'react';
import FeatureBlock from '@site/src/components/FeatureBlock';
import styles from './styles.module.css';
import { FaBook, FaChalkboardTeacher, FaQuestionCircle, FaList } from 'react-icons/fa';

const FeaturesSection = (): JSX.Element => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2>Transform Your Python Journey</h2>
        <p>With resources tailored to every level, we make mastering Python an adventure of discovery.</p>
      </div>
      <div className={styles.featureBlocks}>
        <FeatureBlock
          icon={<FaBook />}
          title="Easy Guides"
          description="Dive deep into Python with structured guides"
          url="/docs/intro"
        />
        <FeatureBlock
          icon={<FaChalkboardTeacher />}
          title="Python Tutorials"
          description="In-depth articles and step-by-step videos"
          url="https://www.youtube.com/watch?v=u2JNc9Zjqb4"
        />
        <FeatureBlock
          icon={<FaQuestionCircle />}
          title="Quick Quizzes"
          description="Test your knowledge with bite-sized quizzes"
          url="https://www.instagram.com/leetpython"
        />
        <FeatureBlock
          icon={<FaList />}
          title="Browse Topics"
          description="Focus on a specific areas or skills"
          url="docs/category/the-1hr-guide-to-python"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
