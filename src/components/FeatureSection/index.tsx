// In src/pages/index.tsx or wherever you are defining your page layout

import React from 'react';
import FeatureBlock from '@site/src/components/FeatureBlock';
import styles from './styles.module.css';

// import styles from './featuresSection.module.css'; // Create this CSS module

// Icons can be from any icon library like react-icons
import { FaBook, FaChalkboardTeacher, FaQuestionCircle, FaList } from 'react-icons/fa';

const FeaturesSection = (): JSX.Element => {
  return (
    <section className={styles.featuresSection}>
      <FeatureBlock
        icon={<FaBook />}
        title="Learning Paths"
        description="Guided study plans for accelerated learning"
      />
      <FeatureBlock
        icon={<FaChalkboardTeacher />}
        title="Python Tutorials"
        description="In-depth articles and step-by-step video courses"
      />
      <FeatureBlock
        icon={<FaQuestionCircle />}
        title="Quizzes"
        description="Evaluate your Python knowledge with quick tests"
      />
      <FeatureBlock
        icon={<FaList />}
        title="Browse Topics"
        description="Focus on a specific area or skill level"
      />
    </section>
  );
};

export default FeaturesSection;