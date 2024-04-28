// import React, { useState, useEffect } from 'react';

function SignUp() {
    // const [username, setUsername] = useState('');
    // const [user_email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    // useEffect(() => {
    //     setIsSubmitEnabled(username.trim() && user_email.trim() && password.trim());
    // }, [username, user_email, password]);
    

    const handleSignUp = async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const user_email = document.querySelector('#user_email').value;
        const password = document.querySelector('#password').value;

        

        if (username && user_email && password) {
            try {
                const response = await fetch('/api/user/signup', {
                    method: 'POST',
                    body: JSON.stringify({ 
                        username: username, 
                        user_email: user_email, 
                        password: password 
                    }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    alert('Successfully signed up, returning to homepage.');
                    document.location.replace('/');
                } else {
                    alert('Failed to sign up.');
                }
            } catch (error) {
                console.error('Error signing up:', error.message);
                alert('An error occurred while signing up.');
            }
        }
    };

    return (
        <div className='signupPage'>
            <h1 className='signupTitle'>Sign Up</h1>
            <form className="signupForm" onSubmit={handleSignUp}>
                <input className="usernameInput" type="text" placeholder="Username" id="username" />
                <input className="emailInput" type="email" placeholder="Email" id="user_email" />
                <input className="passwordInput" type="password" placeholder="Password" id="password" />

                <button type="submit" >Sign Up</button>
            </form>
            <div className="formBottom">
                <p>Already have an account? <a href="/login">Log in here</a>.</p>
            </div>
        </div>
    );
}

export default SignUp;
