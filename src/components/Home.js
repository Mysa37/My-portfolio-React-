import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="home-heading">Hi, <br />I'm <span className="highlight-name">Akash</span></h1>
        <h2 className="typing-text">Data Science Enthusiast</h2>
        <p>
          Data Engineer at Data Center | Aspiring Data Scientist
        </p>
        <a className="resume-button" href="/akash_resume (1).pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
      <div className="home-image">
        <img src={profilePic} alt="Dileep" />
      </div>
    </section>
  );
}

export default Home;