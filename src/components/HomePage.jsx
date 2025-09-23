import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  const [profilePic, setProfilePic] = useState(() => {
    return localStorage.getItem("profilePic") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  });
  const fileInputRef = useRef(null);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfilePic(base64String);
        localStorage.setItem("profilePic", base64String); 
      };
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="home-page">
      <div className="profile-container">
        <Link to="/dashboard" className="user-icon">
          <img 
            src={profilePic} 
            alt="User Icon" 
            onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"; }}
          />
        </Link>

        <span className="edit-icon" onClick={handleEditClick}>
          <FaPencilAlt />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </span>
      </div>

      <section className="hero">
        <h1>Welcome to Echoes of HeART</h1>
        <p>Explore unique collections from talented artists worldwide.</p>
        <div className="cta-buttons">
          <Link to="/explore">
            <button className="explore-btn">Explore Art</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/auctioncard">
            <button className="auction-btn">Join an Auction</button>
          </Link>
        </div>
      </section>

      

      <section className="testimonials">
        <h2>What Art Lovers Say</h2>
        <div className="testimonial-item">
          <p>"This gallery is a treasure trove of artistic brilliance!"</p>
          <span>- Art Enthusiast</span>
        </div>
        <div className="testimonial-item">
          <p>"I found the perfect piece for my collection. Highly recommended!"</p>
          <span>- Collector</span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;