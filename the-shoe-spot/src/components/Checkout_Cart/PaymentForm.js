import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { functions, httpsCallable } from '../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout_Cart.css';

const PaymentForm = ({ totalAmount, handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPaymentProcessing(true);

        try {
            const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent');
            const { data, error: functionError } = await createPaymentIntent({
                amount: Math.round(totalAmount * 100) // amount in cents, rounded to nearest integer
            });

            if (functionError) {
                setError(functionError.message);
                setPaymentProcessing(false);
                return;
            }

            const { clientSecret } = data;
            if (!clientSecret) {
                throw new Error('Missing client secret in payment intent response.');
            }

            const cardElement = elements.getElement(CardElement);

            const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        // You can pass additional billing details here
                    },
                },
            });

            if (stripeError) {
                setError(stripeError.message);
                setPaymentProcessing(false);
                return;
            }

            handlePaymentSuccess();
        } catch (error) {
            setError(error.message);
        } finally {
            setPaymentProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
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

export default PaymentForm;