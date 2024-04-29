// src/components/CommunityHighlight/index.tsx

import React from 'react';
import styles from './styles.module.css';

const CommunityHighlight = (): JSX.Element => {
  const instagramLogoUrl = '/img/instagram_logo.svg';
  const communityGifUrl = '/img/communityhighlight.gif'; // Ensure the path matches your project structure

  const handleJoinCommunityClick = () => {
    window.gtag('event', 'click', {
      event_category: 'Community Engagement',
      event_label: 'Join the Community Button'
    });
  };
  
  return (
    <section className={styles.communityHighlight}>
      <div className={styles.flexContainer}>
        <div className={styles.textContent}>
          {/* <h2 className={styles.minorTitle}>Python Community</h2> */}
          <p className={styles.majorDescription}>Engage, learn, and grow.</p>
          <p className={styles.description}>Become part of a network of over 20,000 Python enthusiasts and dive into daily challenges, vibrant discussions, and collaborative projects.</p>
          <a href="https://www.instagram.com/leetpython" target="_blank" rel="noopener noreferrer" className={styles.followUsButton} onClick={handleJoinCommunityClick}>
            <img src={instagramLogoUrl} alt="Follow us on Instagram" className={styles.instagramLogo} />
            <b>Join the Community</b>
          </a>
        </div>
        <div className={styles.gifContainer}>
          <img src={communityGifUrl} alt="Community interactions and highlights" className={styles.communityGif} />
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlight;