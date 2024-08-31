// Signin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signin.css';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from submitting

    // Check if username or password is empty
    if (username === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
    } else {
      try {
        await signInWithEmailAndPassword(auth, username, password);
        navigate('/'); // Navigate to the next page on successful login
      } catch (error) {
        setErrorMessage('Please check your email and password or you may not have an account. CREATE ONE');
      }
    }
  };

  return (
    <div>
      <div className="login-container">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Sign in to your account</h2>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="buttonn" type="submit">Sign in</button>
          <div id="error-message">{errorMessage}</div>
        </form>

        <p className="account">
          Don't have an account? <Link to="/signup" className="acc-span">Create one now</Link>
        </p>
      </div>

      <footer>
        <p>@2022 #VANLIFE</p>
      </footer>
    </div>
  );
};
