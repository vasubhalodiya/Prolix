import React, { useState } from 'react';
import axios from 'axios';

function PostDataForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // form submit hone se page reload na ho

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                name: name,
                email: email
            });

            console.log('Server response:', response.data);
            localStorage.setItem('userData', JSON.stringify(response.data)); // data ko local storage me store karna
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />

            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default PostDataForm;
