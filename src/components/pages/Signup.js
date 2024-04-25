import React, { useState, useEffect } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [user_email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    useEffect(() => {
        setIsSubmitEnabled(username.trim() && user_email.trim() && password.trim());
    }, [username, user_email, password]);

    const handleSignUp = async (event) => {
        event.preventDefault();

        if (isSubmitEnabled) {
            try {
                const response = await fetch('api/user/signup', {
                    method: 'POST',
                    body: JSON.stringify({ 
                        username, 
                        user_email, 
                        password 
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
                <input className="usernameInput" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="emailInput" type="email" placeholder="Email" value={user_email} onChange={(e) => setEmail(e.target.value)} />
                <input className="passwordInput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" disabled={!isSubmitEnabled}>Sign Up</button>
            </form>
            <div className="formBottom">
                <p>Already have an account? <a href="/login">Log in here</a>.</p>
            </div>
        </div>
    );
}

export default SignUp;
