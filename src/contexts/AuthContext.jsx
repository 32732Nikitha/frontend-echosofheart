import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage to persist login across page refreshes
    const [userToken, setUserToken] = useState(localStorage.getItem('authToken'));
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));

    useEffect(() => {
        setIsLoggedIn(!!userToken);
    }, [userToken]);

    const login = (token, role) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userRole', role);
        setUserToken(token);
        setUserRole(role);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        setUserToken(null);
        setUserRole(null);
        // Optional: Force page reload or redirect after logout
        window.location.href = '/'; 
    };

    // Helper flag for easy role check
    const isAdmin = userRole === 'ROLE_ADMIN';

    const value = {
        userToken,
        userRole,
        isLoggedIn,
        isAdmin,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};