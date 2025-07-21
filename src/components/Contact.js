import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      link: "mailto:akashmysa51@gmail.com",
      display: "akashmysa51@gmail.com",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Mysa37",
      display: "github.com/Mysa37",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/akashmysa51/",
      display: "linkedin.com/in/akashmysa51",
    },
  ];

  return (
    <div className="contact-section section" id="contact">
      <h2 className="section-heading">📫 Contact Me</h2>
      <div className="contact-container">
        {contacts.map((item, index) => (
          <div className="contact-card" key={index}>
            <span className="contact-icon">{item.icon}</span>
            <div className="contact-info">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.display}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
