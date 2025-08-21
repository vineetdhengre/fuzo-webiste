import { useAuth } from './AuthContext';
import React, { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const { isLoggedIn } = useAuth();

  const [cartItems, setCartItems] = useState(() => {
    if (!isLoggedIn) {
      localStorage.removeItem('cartItems');
      return [];
    }
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      setCartItems([]);
      localStorage.removeItem('cartItems');
    }
  }, [cartItems, isLoggedIn]);

  const addToCart = (product) => {
    setCartItems(items => [...items, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
