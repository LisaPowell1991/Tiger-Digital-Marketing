import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/About/About";
import Headers from "./components/header/header";
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import ProductPage from './components/ProductPage';
import HomePage from './components/Home/Home';
import ProductDetail from './components/ProductDetail';
import { auth } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [shoes, setShoes] = useState([]);

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
        const shoeCollection = collection(db, 'shoes');
        const shoeSnapshot = await getDocs(shoeCollection);
        const shoesData = shoeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
    } catch (error) {
      console.error('Error logging out:', error);
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
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ProductPage shoes={shoes} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductPage shoes={shoes} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail shoes={shoes} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
