import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();
    const terms = e.target.terms.checked;

    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else if (!terms) {
      setError("You must agree to the Terms of Service!");
    } else {
      setError("");
      try {
        const response = await axios.post("http://localhost:8081/signup", {
          fullName,
          email,
          password,
        });
        alert(response.data); 
      } catch (err) {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <div className="left-panel">
          <div className="overlay"></div>
          <div className="text-content">
            <h2>Where imagination meets the canvas</h2>
          </div>
        </div>

        <div className="right-panel">
          <h2>Registration Form</h2>
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name:</label>
              <input type="text" name="fullName" placeholder="ex: Lindsey Wilson" />
            </div>

            <div className="input-group">
              <label>Your Email:</label>
              <input type="email" name="email" placeholder="Example@email.com" />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input type="password" name="password" />
            </div>

            <div className="input-group">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">
                By signing up, you agree to the{" "}
                <a href="#">Play Term of Service</a>
              </label>
            </div>

            <button type="submit" className="register-btn">
              Sign up
            </button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;