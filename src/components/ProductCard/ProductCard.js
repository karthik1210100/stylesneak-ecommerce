import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock && onAddToCart) {
      onAddToCart(product, product.colors[0], product.sizes[0], 1);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.images[0]} alt={product.name} />
          {product.discount > 0 && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
          {!product.inStock && (
            <div className="out-of-stock">Out of Stock</div>
          )}
          <div className="product-actions">
            <button className="quick-view">Quick View</button>
            <button className="add-to-wishlist">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </Link>
      
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <button 
          className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`} 
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;