import React from "react";
import "./contact.css";
import "../../App.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          Phone: <i>+1 234 567 890 </i>
        </p>
        <p>
          Email: <i>support@ecommerce.com</i>
        </p>
        <p>
          Address:
          <i> 123 E-commerce St, Business City, Country</i>
        </p>
        <p>
          Support Hours: <i>Mon - Fri, 9 AM - 5 PM</i>
        </p>
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
