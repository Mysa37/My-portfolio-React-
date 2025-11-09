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
        <h3>Data Scientist</h3>
        <p>
          I am a passionate and detail-oriented Data Science graduate (M.S. in Data Science) with a strong foundation in machine learning, statistical modeling, and data visualization. I specialize in transforming complex datasets into actionable insights that drive informed decisions. I enjoy solving real-world problems through data, and I’m eager to contribute my analytical and technical expertise to help organizations harness the full potential of their data.
        </p>
      </div>
    </section>
  );
};

export default About;