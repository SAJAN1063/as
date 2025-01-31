import React from 'react';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
        <div className="testimonial-info">
          <h3>{testimonial.name}</h3>
          <div className="rating">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
          </div>
        </div>
      </div>
      <p className="testimonial-comment">{testimonial.comment}</p>
      <span className="testimonial-date">{new Date(testimonial.date).toLocaleDateString()}</span>
    </div>
  );
};

export default TestimonialCard;