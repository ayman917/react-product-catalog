import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProduct = localStorage.getItem('products');
    return storedProduct ? JSON.parse(storedProduct) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('products', JSON.stringify(products));

  }, [cartItems, products]);

   // Add a new product to the product list
   const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts((prevProducts) => [
    ...prevProducts,newProduct]
  );
  };

  // Add a product to the cart
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      return { error: "Product is already in the cart" };
    }
    setCartItems((prevItems) => [...prevItems, product]);
    return { success: "Product added to the cart successfully!" };
  };

    // DELETE PRODUCT (NEW)
  const deleteProduct = (productId) => {
    setProducts((prevItems) => prevItems.filter((item) => item.id !== productId));
    // ALSO remove this product from cart if it exists
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{products, addProduct, deleteProduct, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
