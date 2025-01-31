import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <div className="container">
        <h1>Customer Testimonials</h1>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;