// In src/components/CommunityHighlight/index.tsx

import React from 'react';
import styles from './styles.module.css'; // Ensure you have this CSS module

const CommunityHighlight = (): JSX.Element => {
  return (
    <section className={styles.communityHighlight}>
      <div className="container">
        <h2>Join Our Vibrant Community</h2>
        <p>With over 20,000 enthusiasts on Instagram, dive into daily quizzes, Pythonic code discussions, and master Python alongside peers who share your passion.</p>
        <a href="https://www.instagram.com/yourcommunityhandle" target="_blank" rel="noopener noreferrer" className="button">Follow Us on Instagram</a> {/* Adjust the link to your actual Instagram page */}
      </div>
    </section>
  );
};

export default CommunityHighlight;