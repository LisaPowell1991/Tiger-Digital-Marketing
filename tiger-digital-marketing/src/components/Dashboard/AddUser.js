import React, { useState } from 'react';
import { functions } from '../../config/firebase';

const AddUser = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleAddUser = async () => {
        const addUser = functions.httpsCallable('addUser');
        try {
            const result = await addUser({ email, name });
            setMessage(result.data.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddUser}>Add User</button>
            <p>{message}</p>
        </div>
    );
};

export default AddUser;