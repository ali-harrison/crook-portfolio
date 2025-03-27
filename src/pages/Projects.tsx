import React from 'react';
import '../styles/global.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="Section">
      <h2>My Projects</h2>
      <p>
        We take pride in our diverse portfolio of projects across various industries. Here are some highlights:
      </p>
      <div className="project-list">
        <div className="project-item">
          <h3>Project Crook</h3>
          <p>
            A groundbreaking initiative in renewable energy that aims to reduce carbon emissions worldwide.
          </p>
        </div>
        <div className="project-item">
          <h3>Project SOBA</h3>
          <p>
            An innovative mobile app designed to enhance productivity and streamline daily tasks for users globally.
          </p>
        </div>
        <div className="project-item">
          <h3>Project Alpha</h3>
          <p>
            A state-of-the-art e-commerce platform that supports local businesses and provides a seamless shopping experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;