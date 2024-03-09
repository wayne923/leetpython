// In src/components/FeatureBlock/index.tsx

import React from 'react';
import styles from './styles.module.css';

type FeatureBlockProps = {
  icon: JSX.Element; // This expects an icon component, e.g., from react-icons
  title: string;
  description: string;
};

const FeatureBlock = ({ icon, title, description }: FeatureBlockProps): JSX.Element => {
  return (
    <div className={styles.featureBlock}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureBlock;
