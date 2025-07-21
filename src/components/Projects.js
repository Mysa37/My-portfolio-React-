import React from "react";
import "./Projects.css"; // Make sure this CSS file is imported

const Projects = () => {
  const projectList = [
    {
      title: "Intelligent NLP System",
      details:
        "Built an NLP system integrating DialogFlow and Sentiment Analysis, achieving 94.75% F1-score with sub-second responses. Developed a secure Flask web app with user authentication and an admin dashboard handling 10K+ user interaction."
    },
    {
      title: "Real-Time Human Detection",
      details:
        "Designed and deployed an object detection and tracking system using optical flow and background subtraction, improving motion tracking accuracy by 30%. Achieved 95% accuracy in real-time human detection leveraging shape, texture, and motion-based classification."
    },
    {
      title: "Privacy-Preserving mechanism using Blockchain",
      details:
        "Executed a secure authentication system using SSH with public-private key encryption, ensuring encrypted communication and preventing unauthorized access. Created an advanced cloud security architecture employing Fully Homomorphic Encryption (FHE) and SHA algorithms."
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-heading">🛠 Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-details">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;