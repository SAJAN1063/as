import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="order-confirmation">
      <div className="container">
        <div className="confirmation-content">
          <h1>Thank You for Your Order!</h1>
          <div className="confirmation-details">
            <p>Your order has been successfully placed.</p>
            <p>Order Number: <strong>#{orderNumber}</strong></p>
            <p>We'll send you a confirmation email shortly.</p>
          </div>
          
          <div className="confirmation-actions">
            <Link to="/products" className="button continue-shopping">
              Continue Shopping
            </Link>
            <Link to="/" className="button home-button">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;