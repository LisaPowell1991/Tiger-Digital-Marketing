import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { stripePromise } from '../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout_Cart.css';

const CheckoutPage = ({ cart, setCart, user }) => { // Make sure to include setCart in the props
    const [successMessage, setSuccessMessage] = useState('');

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Function to count the total quantity of a specific item
    const countTotalQuantity = (name) => {
        return cart.reduce((total, item) => {
            return item.name === name ? total + item.quantity : total;
        }, 0);
    };

    // Handle successful payment
    const handlePaymentSuccess = () => {
        setSuccessMessage('Successfully paid');

        // Clear cart after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
            // Clear the cart
            setCart([]);
        }, 3000);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>
            <div className="row">
                <div className="col-md-6">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm totalAmount={getTotalPrice()} handlePaymentSuccess={handlePaymentSuccess} />
                    </Elements>
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
                                    {/* Display total quantity of the item */}
                                    <span className="badge bg-primary position-absolute top-0 end-0">
                                        {countTotalQuantity(item.name)}
                                    </span>
                                </div>
                                <div>
                                    <h4>{item.name}</h4>
                                    {/* Display size of the item */}
                                    <p>Size: {item.size}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h3>Total: ${getTotalPrice()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;