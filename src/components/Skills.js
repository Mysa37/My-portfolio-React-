import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="section" id="skills">
      <h2 className="section-heading">🚀 Skills & Tools</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3 className="skill-title">Programming Languages</h3>
          <p>C, Python, SQL, R, Bash</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Machine Learning</h3>
          <p>Regression, Classification, Clustering, Model Evaluation</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Data visualization</h3>
          <p>Power BI, Tableau, Seaborn, Excel Dashboards</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Tools</h3>
          <p>Git, Jupyter Notebook, VS Code, Google Cloud</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Statistical Analysis</h3>
          <p>Hypothesis Testing, A/B Testing, Probability, Regression Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;