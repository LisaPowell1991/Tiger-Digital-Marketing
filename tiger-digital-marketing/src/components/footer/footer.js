import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@tigerdigitalmarketing.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/tigerdigitalm/" aria-label="Facebook" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="www.twitter.com" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/tigerdigitalmarketing4?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" aria-label="Instagram" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/@tiger.digital.marketing?_t=8knrbxzL9QD&_r=1" aria-label="Tiktok" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tiger Digital Marketing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;