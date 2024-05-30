import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('your_stripe_public_key');

const CheckoutPage = ({ cart }) => {
    return (
        <div>
            <h1>Checkout Page</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>Size: {item.size}</p>
                </div>
            ))}
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} />
            </Elements>
        </div>
    );
};

export default CheckoutPage;