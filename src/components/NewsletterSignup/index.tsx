// In src/components/NewsletterSignup/index.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NewsletterSignup(): JSX.Element {
  return (
    <section className={styles.newsletterSignup}>
      <div className="container">
        <h2>Stay Updated</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}