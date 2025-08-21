import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get login status from localStorage
    const stored = localStorage.getItem('isLoggedIn');
    return stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  // Call setIsLoggedIn(true) on successful login

  const value = { isLoggedIn, setIsLoggedIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
