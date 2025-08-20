// import React, { useState, useEffect, createContext, useContext } from 'react';

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   // Try to get initial cart count from localStorage
//   const [cartCount, setCartCount] = useState(() => {
//     const stored = localStorage.getItem('cartCount');
//     return stored ? Number(stored) : 0;
//   });

//   // Save to localStorage whenever cartCount changes
//   useEffect(() => {
//     localStorage.setItem('cartCount', cartCount);
//   }, [cartCount]);

//   const addToCart = () => setCartCount(count => count + 1);

//   const value = { cartCount, addToCart };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }



// CartContext.js
import React, { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Initialize cartItems from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart (avoid duplication, or handle quantity if preferred)
  const addToCart = (product) => {
    setCartItems(items => [...items, product]);
  };

  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

