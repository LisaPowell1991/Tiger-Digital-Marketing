import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from "./components/About/About";
import Headers from "./components/header/header";
import Signup from './components/Login_Signup/Signup';
import Login from './components/Login_Signup/Login';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import HomePage from './components/Home/Home';
import { auth, getShoes } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { searchPhotos } from './unsplashService';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

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
        const shoesData = await getShoes();
        const photos = await searchPhotos('shoes');

        const updatedShoes = shoesData.map((shoe, index) => ({
          ...shoe,
          photoUrl: photos[index] ? photos[index].urls.small : 'https://via.placeholder.com/300x200'
        }));

        setShoes(updatedShoes);
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
      <div id="root">
        <Headers
          user={user}
          handleShowLogin={handleShowLogin}
          handleShowSignup={handleShowSignup}
          handleLogout={handleLogout}
        />

        <Login show={showLogin} handleClose={handleCloseLogin} />
        <Signup show={showSignup} handleClose={handleCloseSignup} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage shoes={shoes} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

        <WhatsAppWidget className="custom-whatsapp-widget" phoneNumber="0769140640" />

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </Router>
  );
}

export default App;