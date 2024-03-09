// src/components/QuickStartGuide/index.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; // Ensure you have this CSS module

const QuickStartGuide = () => (
  <div className={styles.quickStartGuide}>
    <div className="container">
      <h2>Master Python in Just 1 Hour</h2>
      <p>Discover the essentials of Python with our comprehensive 1-hour guide. Designed for efficiency and effectiveness, jumpstart your coding journey today.</p>
      <Link to="/docs/one-hour-guide" className="button button--primary">Start Learning</Link> // Adjust the link to your actual guide location
    </div>
  </div>
);

export default QuickStartGuide;