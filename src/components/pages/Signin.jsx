import React, { useState } from 'react';
import "./Signin.css";
import { Link } from 'react-router-dom';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting

    // Check if username or password is empty
    if (username === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
    } else {
      setErrorMessage(''); // Clear any previous error message
      // Perform the sign-in logic here (e.g., API call)

      // Navigate to the next page
      window.location.href = '/Sorry';
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
          Don't have an account? <span className="acc-span">Create one now</span>
        </p>
      </div>

      <footer>
        <p>@2022 #VANLIFE</p>
      </footer>
    </div>
  );
};
