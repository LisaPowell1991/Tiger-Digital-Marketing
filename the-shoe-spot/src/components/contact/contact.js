import React from "react";
import "./contact.css";
import "../../App.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
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

    </div>
  );
};

export default ContactPage;
