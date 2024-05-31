import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from "./components/About/About";
import Headers from "./components/header/header";
import Signup from './components/Login_Signup/Signup';
import Login from './components/Login_Signup/Login';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import HomePage from './components/Home/Home';
import ProductPage from './components/Product/ProductPage';
import ProductDetail from './components/Product/ProductDetail';
import CheckoutForm from './components/Checkout_Cart/CheckoutForm';
import CheckoutPage from './components/Checkout_Cart/Cart';
import { auth, getShoes, stripePromise } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Elements } from '@stripe/react-stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    toast.success('Item added to cart!');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoesData = await getShoes();
        setShoes(shoesData);
      } catch (error) {
        console.error('Error fetching shoes:', error);
      }
    };

    fetchShoes();
  }, []);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('User logged out successfully!');
    } catch (error) {
      toast.error('Error logging out: ' + error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Headers
          user={user}
          handleShowLogin={handleShowLogin}
          handleShowSignup={handleShowSignup}
          handleLogout={handleLogout}
        />

        <Login show={showLogin} handleClose={handleCloseLogin} />
        <Signup show={showSignup} handleClose={handleCloseSignup} />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage shoes={shoes} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductPage shoes={shoes} />} />
          <Route path="/product/:id" element={<ProductDetail shoes={shoes} addToCart={addToCart} />} />
          <Route path="/cart" element={<CheckoutPage cart={cart} />} />
          <Route path="/checkout" element={<Elements stripe={stripePromise}><CheckoutForm cart={cart} /></Elements>} />
        </Routes>

        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
