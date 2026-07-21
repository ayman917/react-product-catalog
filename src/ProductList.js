import React, { useState } from "react";
import { useContext } from "react";
import ProductCard from './ProductCard';
import './scss/productList.scss';
import { CartContext } from "./CartContext";
import { Button, Select, Stack } from "@mui/material";

const ProductList = () => {
  const { products, addToCart, deleteProduct} = useContext(CartContext);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    const result = addToCart(product);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.success);
    }
  };

  const sortby = [
  { id: 1, name: "Price" },
  { id: 2, name: "Color" },
  { id: 3, name: "Size" },
  ];

  return (
      <div>
        <Stack 
        direction={"row"}
        sx={{justifyContent: "space-between"}}>
          <h1>Product List</h1>
          <select>
            <option value="">Sort by</option>
            {sortby.map((sort) => (
              <option key={sort.id} value={sort.name}>
                {sort.name}
              </option>
            ))}
          </select>
        </Stack>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAction={handleAddToCart}
              actionLabel="Add to Cart"
              showDelete={true}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
        {message && (
          <p style={{ color: message.includes("success") ? "green" : "red" }}>
            {message}
          </p>
        )}
      </div>
  );
};

export default ProductList;
