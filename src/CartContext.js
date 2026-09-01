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

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  const increaseQuantity = (product) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => item.id === product.id ?
      {
        ...item, quantity: item.quantity + 1
      } : item
    )
    })
  }
  const decreaseQuantity = (product) => {
    if(product.quantity === 1) {
      setCartItems((prevItems) => 
        prevItems.filter((item) => item.id !== product.id)
      );
    } else {
      setCartItems((prevItems) => {
        return prevItems.map((item) => item.id === product.id ? {
          ...item, quantity: item.quantity - 1
        } : item )
      })
    }
  }
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
