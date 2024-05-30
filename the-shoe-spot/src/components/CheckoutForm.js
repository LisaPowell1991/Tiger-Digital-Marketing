import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { functions, httpsCallable } from '../config/firebase';

const stripePromise = loadStripe('pk_test_51PKyfsEGq6ZIMwVezIPnQLRtIubWO6MuRXv3urZPKkI1T6kGkNEiyuntkJ0yFb3rcWF74iZDf8zyQqJzoD8eyYnD00qrOAaf05');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPaymentProcessing(true);

        const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent'); // Correct usage

        const { data, error: functionError } = await createPaymentIntent({
            amount: 1000 // amount in cents
        });

        if (functionError) {
            setError(functionError.message);
            setPaymentProcessing(false);
            return;
        }

        const { clientSecret } = data;

        const cardElement = elements.getElement(CardElement);

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
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
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || paymentProcessing}>
                {paymentProcessing ? 'Processing…' : 'Pay'}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};

const App = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default App;