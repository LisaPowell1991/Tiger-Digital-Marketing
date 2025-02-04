import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const functions = getFunctions(app, 'us-central1'); // Specify your region if different

// Ensure Stripe is loaded only if window is defined (i.e., not in SSR context)
const stripePromise = typeof window !== 'undefined' ? loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY) : null;

// Function to fetch shoes from Firestore
export const getShoes = async () => {
    const shoesCol = collection(db, 'shoes');
    const shoeSnapshot = await getDocs(shoesCol);
    const shoeList = shoeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return shoeList;
};

// Function to fetch FAQs from Firestore
export const getFaqs = async (collectionName) => {
    const faqsCol = collection(db, collectionName);  // Use the dynamic collection name
    const faqSnapshot = await getDocs(faqsCol);
    const faqList = faqSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return faqList;
};

export { auth, googleProvider, db, functions, httpsCallable, stripePromise };