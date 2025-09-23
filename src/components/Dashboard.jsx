import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your personalized art collection!</p>
      </header>

      {/* Main Cart Section */}
      <div className="cart-section">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-wrapper">
            <div className="cart-grid">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-image" />
                  <h3>{item.title}</h3>
                  <p>Artist: {item.artist}</p>
                  <p>Price: ${item.price.toLocaleString()}</p>
                  <button onClick={() => handleRemove(item.id)}>
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;