// In src/components/FeatureBlock/index.tsx

import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link from Docusaurus

type FeatureBlockProps = {
  icon: JSX.Element; // This expects an icon component, e.g., from react-icons
  title: string;
  description: string;
  url: string; // Add a url prop for linking
  onClick: () => void;
};

const FeatureBlock = ({ icon, title, description, url, onClick }: FeatureBlockProps): JSX.Element => {
  return (
    <Link to={url} className={styles.featureBlockLink} onClick={onClick}> {/* Apply onClick to the Link */}
      <div className={styles.featureBlock}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default FeatureBlock;
