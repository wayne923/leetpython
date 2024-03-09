// In src/components/Testimonials/index.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const testimonials = [
  {
    name: "Jane Doe",
    text: "Thanks to LeetPython, I've been able to transition to a Python developer role with confidence.",
    // Optionally, add image: require('@site/static/img/jane_doe.jpg'),
  },
  // Add more testimonials...
];

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>User Success Stories</h2>
        <div className="row">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col col--4">
              <div className="text--center">
                {/* If using images: <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} /> */}
                <p>"{testimonial.text}"</p>
                <p><b>{testimonial.name}</b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
