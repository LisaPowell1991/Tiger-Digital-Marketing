import React from 'react';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('User logged out successfully!');
        } catch (error) {
            alert(error.message);
        }
    };

    return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;