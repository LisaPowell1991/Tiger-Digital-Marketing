import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from "./components/About/About";
import Headers from "./components/header/header";
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import HomePage from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      setUser(null); // Set user to null for now, modify as needed
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <div id="root">
        <Headers user={user} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />

        {/* WhatsApp Widget */}
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
          <WhatsAppWidget phoneNumber="0769140640" />
        </div>

        {/* Global Toast Container */}
        <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </div>
    </Router>
  );
}

export default App;
