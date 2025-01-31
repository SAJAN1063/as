import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/product';
import '../styles/Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to AS+ Professionals</h1>
          <p>Discover premium beauty and skincare products for your daily routine</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link to="/products" className="view-all">View All Products</Link>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Why Choose AS+ Professionals?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Premium Quality</h3>
              <p>All products are carefully formulated with the finest ingredients</p>
            </div>
            <div className="benefit-card">
              <h3>Cruelty Free</h3>
              <p>We never test on animals and support ethical beauty practices</p>
            </div>
            <div className="benefit-card">
              <h3>Expert Care</h3>
              <p>Professional guidance for your skincare journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;