import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.scss';

const CartPage = ({ cartItems, removeFromCart, updateQuantity, cartTotal }) => {
  const handleQuantityChange = (index, change) => {
    const newQuantity = cartItems[index].quantity + change;
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-variant">Color: {item.color} | Size: {item.size}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                  
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button 
                    className="remove-item-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-item">
              <span>Shipping</span>
              <span>{cartTotal > 50 ? 'Free' : '$9.99'}</span>
            </div>
            
            <div className="summary-item">
              <span>Tax</span>
              <span>${(cartTotal * 0.08).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>${(cartTotal + (cartTotal > 50 ? 0 : 9.99) + (cartTotal * 0.08)).toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            
            <Link to="/products" className="continue-shopping-link">
              Continue Shopping
            </Link>
            
            <div className="shipping-notice">
              <i className="fas fa-truck"></i>
              <p>Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
        
        <div className="recently-viewed">
          <h2>Recently Viewed</h2>
          <div className="recent-items">
            <div className="recent-item">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Product" />
              <div className="recent-info">
                <h4>Running Shoes</h4>
                <p>$129.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;