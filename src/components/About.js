import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <div className="circle-animation"></div>
      </div>

      <div className="about-right">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
          A passionate and adaptable Developer with a strong foundation in computer science and a deep interest in building systems. I specialize in developing clean, efficient, and scalable applications using React, Flask, SQL, and modern web technologies. I’m driven by curiosity, collaboration, and continuous learning and I thrive in fast-paced environments where I can bridge the gap between innovation and practical implementation. Let’s build something meaningful together.
        </p>
      </div>
    </section>
  );
};

export default About;