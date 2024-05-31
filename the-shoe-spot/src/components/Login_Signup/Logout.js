import React from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import '../../index.css';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Add a toast notification here instead of alert
        } catch (error) {
            alert(error.message);
        }
    };

    return <button className="custom-button-secondary" onClick={handleLogout}>Log Out</button>;
};

export default Logout;