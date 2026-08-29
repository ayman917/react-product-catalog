import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems]);

  // Add a product to the cart
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      return { error: "Product is already in the cart" };
    }
    setCartItems((prevItems) => [...prevItems, product]);
    return { success: "Product added to the cart successfully!" };
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
