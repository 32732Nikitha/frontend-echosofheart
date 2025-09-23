import React from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./components/HomePage";
import ExploreArt from "./components/ExploreArt";
import SignUpPage from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import VirtualSpace from "./components/VirtualSpace";
import AuctionCard from "./components/AuctionCard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExploreArt />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/VirtualSpace" element={<VirtualSpace />} />
      <Route path="/auctioncard" element={<AuctionCard />} />  
    </Routes>
  );
};

export default App;