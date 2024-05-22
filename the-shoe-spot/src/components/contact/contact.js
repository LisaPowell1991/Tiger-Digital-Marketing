import React from "react";
import "./contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Phone: +1 234 567 890</p>
        <p>Email: support@ecommerce.com</p>
        <p>Address: 123 E-commerce St, Business City, Country</p>
        <p>Support Hours: Mon - Fri, 9 AM - 5 PM</p>
      </div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="social-media">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.instagram.com">Instagram</a>
      </div>
    </div>
  );
};

export default ContactPage;
