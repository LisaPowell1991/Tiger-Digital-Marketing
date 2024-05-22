import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading shoe store providing the best quality footwear at
            affordable prices.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@theshoeshop.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
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
