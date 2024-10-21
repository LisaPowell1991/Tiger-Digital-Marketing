import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/TDM-logo.png';
import './header.css';
import '../../App.css';
import PopupForm from '../contact/PopupForm';

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to manage the popup

  // Contact form data
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    country: '',
    email: '',
    enquiry: ''
  });

  const [errors, setErrors] = useState({});

  const toggleMenuOpenState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      setShowPopup(false); // Close the popup upon successful submission
    }
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
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
          <li>
            <NavLink to="/" onClick={toggleMenuOpenState}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenuOpenState}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenuOpenState}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="custom-button" onClick={handlePopupOpen}>
          Request Quote
        </button>
      </div>
      <button className="hamburger" onClick={toggleMenuOpenState}>
        {isMenuOpen ? '×' : '☰'}
      </button>

      {/* Render the PopupForm component */}
      <PopupForm
        showPopup={showPopup}
        handleClose={handlePopupClose}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </header>
  );
};

export default Headers;
