//Old NewsletterSignup

// // src/components/NewsletterSignup/index.tsx

// import React from 'react';
// import styles from './styles.module.css';

// export default function NewsletterSignup(): JSX.Element {
//   return (
//     <section className={styles.newsletterSignup}>
//       <h2>Stay updated with LeetPython and exlcusive contents</h2>
//       <form>
//         <input type="email" placeholder="Your Email Address" className={styles.inputField} />
//         <button type="submit" className={styles.subscribeButton}><b>Subscribe</b></button>
//       </form>
//     </section>
//   );
// }


//New NewsletterSignup that embeds the Beehiiv iframe for subscription.

// src/components/NewsletterSignup/index.tsx

import React from 'react';
import styles from './styles.module.css';

export default function NewsletterSignup(): JSX.Element {
  const handleIframeClick = () => {
    window.gtag('event', 'click', {
      'event_category': 'Newsletter Signups',
      'event_label': 'Iframe Clicked'
    });
  };

  return (
    <section className={styles.newsletterSignup}>
      <h2>Stay updated with LeetPython and exclusive contents</h2>
      {/* Embed the Beehiiv iframe for subscription */}
      <iframe
        src="https://embeds.beehiiv.com/a5bd3d3c-5bc4-406b-a7ea-372f92f8ad94?slim=true"
        data-test-id="beehiiv-embed"
        height="100"
        style={{
          margin: 0,
          borderRadius: '0px',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          // border: 'none'
        }}
        onClick={handleIframeClick} // Attach the click handler
      ></iframe>
    </section>
  );
}