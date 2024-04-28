import React, { useState, useEffect } from 'react';
import '../../App.css';

function Login() {


    const handleLogin = async (event) => {
        event.preventDefault();
        const user_email = document.getElementById('user_email').value;
        const password = document.getElementById('password').value;

        {
            // Handle login logic here
            try {
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({ user_email, password }),
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
                <input className="user_emailInput" id="user_email" type="text" placeholder="User Email" />
                <input className="passwordInput" id="password" type="password" placeholder="Password" />

                <button type="submit">Login</button>
            </form>
            <div className="formBottom">
                <p>Don't have an account? <a href="/signup">Sign up here</a> instead.</p>
            </div>
        </div>
    );
}

export default Login;