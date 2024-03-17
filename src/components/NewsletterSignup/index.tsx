// src/components/NewsletterSignup/index.tsx

import React from 'react';
import styles from './styles.module.css';

export default function NewsletterSignup(): JSX.Element {
  return (
    <section className={styles.newsletterSignup}>
      <h2>Stay updated with LeetPython and exlcusive contents</h2>
      <form>
        <input type="email" placeholder="Your Email Address" className={styles.inputField} />
        <button type="submit" className={styles.subscribeButton}><b>Subscribe</b></button>
      </form>
    </section>
  );
}
