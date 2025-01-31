import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AS+ Professionals</h3>
            <p>Premium beauty and skincare products for your daily routine.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@asprofessionals.com</p>
            <p>Phone: (+91) 7985611032</p>
            <p>Address: Lane No.4, Nirala Nagar, Mehmoorganj, Varanasi</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AS+ Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;