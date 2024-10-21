import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import "../../App.css";

const PopupForm = ({ showPopup, handleClose, formData, handleChange, handleSubmit, errors }) => {

    const handleSubmitWithToast = (e) => {
        handleSubmit(e);

        if (Object.keys(errors).length === 0) {
            toast.success('Popup form submitted successfully!');
        }
    };

    if (!showPopup) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-button" onClick={handleClose}>×</span>
                <h2 className="form-title">Request a Quote</h2>
                <form className="contact-form" onSubmit={handleSubmitWithToast}>
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
                            placeholder="Country"
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
                            placeholder="client@example.com"
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
        </div>
    );
};

export default PopupForm;
