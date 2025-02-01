import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our products? We're here to help!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@asprofessionals.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(+91) 7985611032</p>
              </div>
              
              <div className="contact-item">
                <h3>Address</h3>
                <p>Lane No.4, Nirala Nagar<br />Mehmoorganj, Varanasi 221010</p>
              </div>
              
              <div className="contact-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;