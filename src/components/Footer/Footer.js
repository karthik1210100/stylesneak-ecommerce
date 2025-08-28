import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StyleSneak</h3>
            <p>Premium footwear for every occasion. Step into style with our curated collection of sneakers.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 123 Sneaker Street, Shoe City</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@stylesneak.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 StyleSneak. All rights reserved.</p>
          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
            <i className="fab fa-google-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;