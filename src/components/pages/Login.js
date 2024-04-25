import React, { useState, useEffect } from 'react';
import '../../App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [username, password]);
    

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (isSubmitEnabled) {
            // Handle login logic here
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    alert('Successfully logged in, returning to homepage.');
                    document.location.replace('/');
                } else {
                    alert('Nope, still broken!');
                    console.log(response.statusText)
                }
            } catch (error) {
                console.error('Error logging in:', error.message);
                alert('An error occurred while logging in.');
            }
        }
    };

    return (
        <div className='loginPage'>
            <h1 className='loginTitle'>Login</h1>
            <form className="loginForm" onSubmit={handleLogin}>
                <input className="usernameInput" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="passwordInput" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" disabled={!isSubmitEnabled}>Login</button>
            </form>
            <div className="formBottom">
                <p>Don't have an account? <a href="/signup">Sign up here</a> instead.</p>
            </div>
        </div>
    );
}

export default Login;