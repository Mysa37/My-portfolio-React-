import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
  <h2 className="education-heading">🎓 Education</h2>
  <div className="education-card-container">
    <div className="education-card">
      <h3 className="education-institution">Grand Canyon University</h3>
      <p className="education-degree">Masters in Data Science</p>
      <p className="education-dates">August 2023 – March 2025</p>
      <p className="education-coursework">
        Relevant Coursework: Regression Analysis, Predictive Modeling, Data Mining, ML and NN
      </p>
    </div>

    <div className="education-card">
      <h3 className="education-institution">GRIET Hyderabad</h3>
      <p className="education-degree">Bachelors in Information Technology</p>
      <p className="education-dates">August 2019 – August 2023</p>
      <p className="education-coursework">
        Relevant Coursework: Data Structures, Java, SQL, OOPS, Operating Systems, Computer Networks, Compiler Design
      </p>
    </div>
  </div>
</section>

  );
};

export default Education;