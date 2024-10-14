import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from "./components/About/About";
import Headers from "./components/header/header";
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import HomePage from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate user authentication check
    const fetchUser = () => {
      // Fetch user logic
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
      </div>
    </Router>
  );
}

export default App;