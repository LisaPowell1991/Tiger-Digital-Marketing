const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Example function to add a new user to Firestore
exports.addUser = functions.https.onCall(async (data, context) => {
    const { email, name } = data;

    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            displayName: name,
        });

        await admin.firestore().collection('users').doc(userRecord.uid).set({
            email: email,
            name: name,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return {
            message: `User ${name} added successfully`,
        };
    } catch (error) {
        return {
            error: error.message,
        };
    }
});