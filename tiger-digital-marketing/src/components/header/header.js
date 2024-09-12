import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/TDM-logo.jpg';
import './header.css';
import '../../App.css';

const NavLinkItem = ({ to, onClick, children }) => {
  const getClassName = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <li>
      <NavLink to={to} className={getClassName} onClick={onClick}>
        {children}
      </NavLink>
    </li>
  );
};

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpenState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <NavLinkItem to="/" onClick={toggleMenuOpenState}>Home</NavLinkItem>
          <NavLinkItem to="/about" onClick={toggleMenuOpenState}>About Us</NavLinkItem>
          <NavLinkItem to="/contact" onClick={toggleMenuOpenState}>Contact Us</NavLinkItem>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="custom-button" onClick={() => window.location.href = '/contact'}>
          Request Quote
        </button>
      </div>
      <button className="hamburger" onClick={toggleMenuOpenState}>
        {isMenuOpen ? '×' : '☰'}
      </button>
    </header>
  );
}

export default Headers;