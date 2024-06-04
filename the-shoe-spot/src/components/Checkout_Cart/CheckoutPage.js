// CheckoutPage.js
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';
import { stripePromise } from '../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout_Cart.css';


const CheckoutPage = ({ cart, setCart, user }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        contact: '',
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        suburb: '',
        city: '',
        province: '',
        postalCode: '',
        shippingMethod: 'courier'
    });

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const countTotalQuantity = (name) => {
        return cart.reduce((total, item) => {
            return item.name === name ? total + item.quantity : total;
        }, 0);
    };

    const handlePaymentSuccess = () => {
        setSuccessMessage('Payment successfully processed! You will be redirected to the homepage shortly...');
        setTimeout(() => {
            setSuccessMessage('');
            setCart([]);
            setFormData({
                email: '',
                contact: '',
                country: '',
                firstName: '',
                lastName: '',
                address: '',
                suburb: '',
                city: '',
                province: '',
                postalCode: '',
                shippingMethod: 'courier'
            });
            // Redirect to the homepage after 3 seconds
            setTimeout(() => {
                window.location.href = '/'; // Change the URL to your homepage
            }, 2000);
        }, 5000); // Display success message for 5 seconds
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>
            <div className="row">
                <div className="col-md-6">
                    <CheckoutForm
                        handleInputChange={handleInputChange}
                        formData={formData}
                    />
                </div>
                <div className="col-md-6">
                    <div className="card p-4">
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        <h2 className="mb-3">Order Summary</h2>
                        {cart.map((item, index) => (
                            <div className="d-flex align-items-center mb-3" key={index}>
                                <div className="me-3 item-image-container">
                                    <img
                                        src={item.photoUrl}
                                        alt={item.name}
                                        className="img-checkout"
                                    />
                                    <span className="badge bg-primary position-absolute top-0 end-0">
                                        {countTotalQuantity(item.name)}
                                    </span>
                                </div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Size: {item.size}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h3>Total: ${getTotalPrice()}</h3>
                        <Elements stripe={stripePromise}>
                            <PaymentForm
                                totalAmount={getTotalPrice()}
                                handlePaymentSuccess={handlePaymentSuccess}
                                formData={formData}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;