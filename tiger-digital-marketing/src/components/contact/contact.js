import React, { useState } from 'react';
import "./contact.css";
import "../../App.css";
import HeroSection from "../Home/Hero";
import heroImageContact from '../../assets/images/contact-banner.webp';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    country: '',
    email: '',
    enquiry: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple form validation
  const validate = () => {
    let inputErrors = {};
    if (!formData.fullName) inputErrors.fullName = 'Full name is required';
    if (!formData.contactNumber) inputErrors.contactNumber = 'Contact number is required';
    if (!formData.country) inputErrors.country = 'Country is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      inputErrors.email = 'Valid email is required';
    }
    if (!formData.enquiry) inputErrors.enquiry = 'Enquiry is required';

    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // You can handle form submission here
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');

      // Clear the form after submission
      setFormData({
        fullName: '',
        contactNumber: '',
        country: '',
        email: '',
        enquiry: ''
      });
    }
  };

  return (
    <>
      <div><HeroSection backgroundImage={heroImageContact} /></div>
      <div className="contact-form-container">
        <h2 className="form-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name <span>*</span></label>
            <input
              type="text"
              name="fullName"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small className="invalid-feedback">{errors.fullName}</small>}
          </div>

          <div className="form-group">
            <label>Contact Number <span>*</span></label>
            <input
              type="text"
              name="contactNumber"
              className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
              placeholder="0713822021"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <small className="invalid-feedback">{errors.contactNumber}</small>}
          </div>

          <div className="form-group">
            <label>Country <span>*</span></label>
            <input
              type="text"
              name="country"
              className={`form-control ${errors.country ? 'is-invalid' : ''}`}
              placeholder="America"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && <small className="invalid-feedback">{errors.country}</small>}
          </div>

          <div className="form-group">
            <label>Email <span>*</span></label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="ValuedClient@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="invalid-feedback">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Enquiry <span>*</span></label>
            <textarea
              name="enquiry"
              className={`form-control ${errors.enquiry ? 'is-invalid' : ''}`}
              placeholder="What can we help you with?"
              value={formData.enquiry}
              onChange={handleChange}
            ></textarea>
            {errors.enquiry && <small className="invalid-feedback">{errors.enquiry}</small>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
