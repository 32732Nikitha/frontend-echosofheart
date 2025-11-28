import React from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./components/HomePage";
import ExploreArt from "./components/ExploreArt";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import VirtualSpace from "./components/VirtualSpace";
import AuctionCard from "./components/AuctionCard";
import ArtManagement from "./components/ArtManagement"; // 🆕 Import Admin component

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
            {/* 🆕 ADMIN ROUTE */}
            <Route path="/admin/art-management" element={<ArtManagement />} /> 
        </Routes>
    );
};

export default App;