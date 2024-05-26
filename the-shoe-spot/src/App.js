import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/About";
import Headers from "./components/header/header";
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import ProductPage from './components/ProductPage';
import ProductDetail from './components/ProductDetail';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
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

  return (
    <Router>
      <div className="App">
        {user ? (
          <div>
            <h1>Welcome, {user.email}</h1>
            <Logout />
          </div>
        ) : (
          <div className="d-flex justify-content-end mt-3">
            <Button variant="primary" onClick={handleShowLogin} className="me-2">
              Login
            </Button>
            <Button
              variant="secondary"
              onClick={handleShowSignup}
              className="me-2"
            >
              Signup
            </Button>
          </div>
        )}

        <Login show={showLogin} handleClose={handleCloseLogin} />
        <Signup show={showSignup} handleClose={handleCloseSignup} />
        <Headers />

        <Routes>
          <Route path="/" element={<ProductPage shoes={shoes} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductPage shoes={shoes} />} />
          <Route path="/product/:id" element={<ProductDetail shoes={shoes} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;