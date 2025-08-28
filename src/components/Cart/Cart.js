import React from 'react';
import './Cart.scss';

const Cart = ({ isOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal }) => {
  const handleQuantityChange = (index, change) => {
    const newQuantity = cartItems[index].quantity + change;
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h2>
          <button className="close-cart" onClick={toggleCart}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart"></i>
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={toggleCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-variants">
                    Color: {item.color}, Size: {item.size}
                  </div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                  <button 
                    className="cart-item-remove" 
                    onClick={() => removeFromCart(index)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="continue-shopping" onClick={toggleCart}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;