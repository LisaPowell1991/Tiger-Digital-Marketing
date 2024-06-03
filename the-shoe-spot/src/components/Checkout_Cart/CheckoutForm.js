import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { functions, httpsCallable } from '../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout_Cart.css';

const CheckoutForm = ({ totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [error, setError] = useState(null);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPaymentProcessing(true);

        const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent');

        const { data, error: functionError } = await createPaymentIntent({
            amount: totalAmount * 100 // amount in cents
        });

        if (functionError) {
            setError(functionError.message);
            setPaymentProcessing(false);
            return;
        }

        const { clientSecret } = data;

        const cardElement = elements.getElement(CardElement);

        const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    email: formData.email,
                    phone: formData.contact,
                    address: {
                        line1: formData.address,
                    },
                },
            },
        });

        if (stripeError) {
            setError(stripeError.message);
            setPaymentProcessing(false);
            return;
        }

        setPaymentProcessing(false);
        alert('Payment Successful');
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h3>Contact</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contact" className="form-label">Phone Number</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="form-control"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <h3>Delivery</h3>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                    id="address"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="suburb" className="form-label">Suburb</label>
                <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    className="form-control"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="province" className="form-label">Province</label>
                <input
                    type="text"
                    id="province"
                    name="province"
                    className="form-control"
                    value={formData.province}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="form-control"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <h3>Shipping Method</h3>
            <div className="mb-3 form-check">
                <input
                    type="radio"
                    id="courier"
                    name="shippingMethod"
                    value="courier"
                    className="form-check-input"
                    checked={formData.shippingMethod === 'courier'}
                    onChange={handleInputChange}
                />
                <label htmlFor="courier" className="form-check-label">Courier Delivery</label>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="radio"
                    id="pickup"
                    name="shippingMethod"
                    value="pickup"
                    className="form-check-input"
                    checked={formData.shippingMethod === 'pickup'}
                    onChange={handleInputChange}
                />
                <label htmlFor="pickup" className="form-check-label">Pickup at Warehouse</label>
            </div>

            <h3>Payment</h3>
            <div className="mb-3">
                <CardElement />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" disabled={!stripe || paymentProcessing}>
                {paymentProcessing ? 'Processing…' : 'Pay Now'}
            </button>
            {error && <div className="text-danger mt-3">{error}</div>}
        </form>
    );
};

export default CheckoutForm;