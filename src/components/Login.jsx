import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Get login function from context

    const handleLogin = async () => {
        setMessage('');
        try {
            // Use the Spring Boot server port (8089 from your application.properties)
            const response = await axios.post('http://localhost:8089/login', { 
                email,
                password,
            });

            // Expected response fields: token, role, message
            const { token, role, message } = response.data;

            if (token && role) {
                // Use AuthContext to store token and role globally
                login(token, role); 
                setMessage("Login successful! Redirecting...");
                
                setTimeout(() => {
                    navigate('/'); // Redirect to homepage
                }, 1000);
            } else {
                 setMessage(message || 'Invalid credentials.');
            }

        } catch (error) {
            // Handle error response from backend
            setMessage(error.response?.data?.message || 'Invalid email or password.'); 
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
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <button className="login-btn" onClick={handleLogin}>Login</button>
                {message && (
                    <p
                        className="login-message"
                        style={{
                            color: message.toLowerCase().includes('success') ? "green" : "red",
                            marginTop: "15px"
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