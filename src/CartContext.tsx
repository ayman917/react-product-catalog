import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
 
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });
 
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems]);

  const addToCart = (product: Product) => {
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

  const increaseQuantity = (product: CartItem) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => item.id === product.id ?
      {
        ...item, quantity: item.quantity + 1
      } : item
    )
    })
  }
  const decreaseQuantity = (product: CartItem) => {
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
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
