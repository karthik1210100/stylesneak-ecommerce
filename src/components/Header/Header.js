import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ cartItemCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <i className="fas fa-shoe-prints"></i>
            <span>StyleSneak</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="action-icons">
            <Link to="/account" className="icon-link">
              <i className="fas fa-user"></i>
            </Link>
            <Link to="/wishlist" className="icon-link">
              <i className="fas fa-heart"></i>
            </Link>
            <div className="cart-icon icon-link" onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;