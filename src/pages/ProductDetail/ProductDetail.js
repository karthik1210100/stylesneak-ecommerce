import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import './ProductDetail.scss';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    navigate('/checkout');
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <span onClick={() => navigate('/')}>Home</span>
          <i className="fas fa-chevron-right"></i>
          <span onClick={() => navigate('/products')}>Products</span>
          <i className="fas fa-chevron-right"></i>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-container">
          <div className="product-gallery">
            <div className="main-image">
              <img src={selectedImage} alt={product.name} />
              {product.discount > 0 && (
                <span className="sale-badge">-{product.discount}%</span>
              )}
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className={selectedImage === image ? 'active' : ''}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <span className="product-brand">{product.brand}</span>
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i}
                    className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">${product.originalPrice}</span>
              )}
              {product.discount > 0 && (
                <span className="discount">Save {product.discount}%</span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <label>Color</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <div
                      key={color}
                      className={`color-option ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Size</label>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <div
                      key={size}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Quantity</label>
                <div className="quantity-selector">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <i className="fas fa-shopping-cart"></i>
                Add to Cart
              </button>
              <button 
                className="buy-now-btn"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                <i className="fas fa-bolt"></i>
                Buy Now
              </button>
            </div>

            <div className="product-features">
              {product.features.map((feature, index) => (
                <div key={index} className="feature">
                  <i className="fas fa-check"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="shipping-info">
              <div className="info-item">
                <i className="fas fa-truck"></i>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="info-item">
                <i className="fas fa-undo"></i>
                <span>30-day easy returns</span>
              </div>
              <div className="info-item">
                <i className="fas fa-shield-alt"></i>
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tab-headers">
            <button 
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews})
            </button>
            <button 
              className={activeTab === 'shipping' ? 'active' : ''}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping & Returns
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p>{product.description}</p>
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <div className="average-rating">
                  <div className="rating-number">{product.rating}</div>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      ></i>
                    ))}
                  </div>
                  <div className="rating-text">Based on {product.reviews} reviews</div>
                </div>
                <div className="reviews-list">
                  <div className="review">
                    <div className="review-header">
                      <div className="reviewer">John Doe</div>
                      <div className="review-date">October 15, 2023</div>
                    </div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star filled"></i>
                      ))}
                    </div>
                    <div className="review-text">
                      Amazing shoes! Very comfortable and great quality. Would definitely recommend.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="shipping-content">
                <h3>Shipping Information</h3>
                <p>We offer free standard shipping on all orders over $50. Orders are processed within 1-2 business days and delivered within 3-5 business days.</p>
                
                <h3>Returns Policy</h3>
                <p>We offer a 30-day return policy for all unworn items in their original packaging. Return shipping is free for U.S. customers.</p>
              </div>
            )}
          </div>
        </div>

        <div className="related-products">
          <h2>You Might Also Like</h2>
          <div className="related-grid">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="related-product">
                  <img src={relatedProduct.images[0]} alt={relatedProduct.name} />
                  <div className="related-info">
                    <h4>{relatedProduct.name}</h4>
                    <div className="related-price">${relatedProduct.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;