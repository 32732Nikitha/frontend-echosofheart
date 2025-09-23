import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/login', {
        email,
        password,
      });
      setMessage(response.data); 
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred while logging in');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
         {message && (
          <p
            className="login-message"
            style={{
              color:
                /success/i.test(message)
                  ? "green"
                  : /invalid|error/i.test(message)
                  ? "red"
                  : "black",
            }}
          >
            {message}
          </p>
        )}
        <p className="register-text">
          Navigate back to Home Page! <Link to="/">HomePage</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;