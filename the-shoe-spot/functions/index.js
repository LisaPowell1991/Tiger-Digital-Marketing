const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret);

admin.initializeApp();

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
    const amount = data.amount;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });

        return {
            clientSecret: paymentIntent.client_secret,
        };
    } catch (error) {
        return {
            error: error.message,
        };
    }
});
