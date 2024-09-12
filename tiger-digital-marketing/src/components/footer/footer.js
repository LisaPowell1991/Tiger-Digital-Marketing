import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@theshoeshop.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="www.facebook.com" aria-label="Facebook" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="www.twitter.com" aria-label="Twitter" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="www.instagram.com" aria-label="Instagram" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Shoe Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;