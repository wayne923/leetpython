// In src/components/FounderSection/index.tsx

import React from 'react';
import styles from './styles.module.css'; // Ensure you have this CSS module

const FounderSection = (): JSX.Element => {
  return (
    <section className={styles.founderSection}>
      <div className="container">
        <h2>Meet Our Founder</h2>
        <p>Driven by a passion for coding education, [Founder's Name] has been at the forefront of creating engaging, effective learning experiences. Discover her vision for the future of coding on her YouTube channel.</p>
        <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="button">Watch Now</a> {/* Adjust the link to your actual YouTube channel */}
      </div>
    </section>
  );
};

export default FounderSection;