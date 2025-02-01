import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the cart context hook
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the cart context instead of local state

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    // Use the addToCart function from context
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      features: product.features
    });

    navigate('/cart');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <div className="features">
          {product.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        <button
          className={`add-to-cart ${!product.inStock ? 'disabled' : ''}`}
          disabled={!product.inStock}
          onClick={handleAddToCart}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;