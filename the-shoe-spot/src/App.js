import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AboutUs from './components/About';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <Logout />
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          <Signup />
          <h1>Login</h1>
          <Login />
        </div>
      )}

      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
