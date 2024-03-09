// In src/components/ProjectsShowcase/index.tsx

import React from 'react';
import styles from './styles.module.css'; // Ensure you have this CSS module

const ProjectsShowcase = (): JSX.Element => {
  return (
    <section className={styles.projectsShowcase}>
      <div className="container">
        <h2>Real-World Projects & Step-by-Step Guides</h2>
        <p>Advance your skills through hands-on projects. From beginner to advanced, each project comes with detailed breakdowns to enhance your learning journey.</p>
        <a href="/projects" className="button">Explore Projects</a> {/* Adjust the link to your actual projects page */}
      </div>
    </section>
  );
};

export default ProjectsShowcase;