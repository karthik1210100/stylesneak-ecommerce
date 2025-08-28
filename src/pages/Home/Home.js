import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, categories } from '../../data/products';
import './Home.scss';

const Home = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.featured ? -1 : 1;
  });

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Step Into Style</h1>
            <p>Discover the perfect pair of shoes for every occasion</p>
            <Link to="/products" className="cta-button">Shop Now</Link>
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="categories-section">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-list">
            {categories.map(category => (
              <div 
                key={category.id} 
                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)} >
                <div className="category-icon">
                  <i className={`fas fa-${getCategoryIcon(category.id)}`}></i>
                </div>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Collection</h2>
            <div className="sort-options">
              <span>Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          
          <div className="products-grid">
            {sortedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-truck"></i>
              <h3>Free Shipping</h3>
              <p>On all orders over $50</p>
            </div>
            <div className="feature">
              <i className="fas fa-undo"></i>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure Payment</h3>
              <p>Safe and encrypted checkout</p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates on new arrivals, special offers, and exclusive discounts</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const getCategoryIcon = (categoryId) => {
  const icons = {
    'all': 'shoe-prints',
    'running': 'running',
    'casual': 'street-view',
    'hiking': 'mountain',
    'basketball': 'basketball-ball',
    'walking': 'walking',
    'formal': 'user-tie'
  };
  return icons[categoryId] || 'shoe-prints';
};

export default Home;