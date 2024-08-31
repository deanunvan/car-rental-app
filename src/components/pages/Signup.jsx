// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signin.css';  // Reusing the same CSS

export const Signup = () => {
  const [firstName, setFirstName] = useState('');  // State for first name
  const [lastName, setLastName] = useState('');    // State for last name
  const [email, setEmail] = useState('');          // State for email
  const [password, setPassword] = useState('');    // State for password
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      // Firebase function to create a new user
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Account created successfully! You can now sign in.');
      setErrorMessage('');
      // Navigate to the sign-in page after successful registration
      setTimeout(() => navigate('/signin'), 2000); // Delay to show success message
    } catch (error) {
      // Handle errors from Firebase
      setErrorMessage('Failed to create an account. Please try again.');
      console.error('Error creating account:', error.message);
    }
  };

  return (
    <div>
      <div className="login-container">
        <form id="signupForm" onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          <div className="input-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button className="buttonn" type="submit">Sign Up</button>
          {errorMessage && <div id="error-message">{errorMessage}</div>}
          {successMessage && <div id="success-message">{successMessage}</div>}
        </form>

        <p className="account">
          Already have an account? <Link to="/signin" className="acc-span">Sign in here</Link>
        </p>
      </div>

      <footer>
        <p>@2022 #VANLIFE</p>
      </footer>
    </div>
  );
};
