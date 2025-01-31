import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About AS+ Professionals</h1>
        
        <section className="about-content">
          <div className="about-image">
            <img src="/assets/images/about-us.jpg" alt="AS+ Professionals Team" />
          </div>
          
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded in 2020, AS+ Professionals has been dedicated to providing premium beauty and skincare solutions that enhance natural beauty and promote healthy skin.</p>
            
            <h2>Our Mission</h2>
            <p>We strive to create innovative, effective, and safe beauty products that help our customers feel confident and beautiful in their own skin.</p>
            
            <h2>Our Values</h2>
            <ul>
              <li>Quality and Innovation</li>
              <li>Customer Satisfaction</li>
              <li>Sustainability</li>
              <li>Ethical Practices</li>
            </ul>
          </div>
        </section>
        
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {/* Add team member cards here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
