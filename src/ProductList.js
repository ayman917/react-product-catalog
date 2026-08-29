import React, { useState } from "react";
import { useContext } from "react";
import ProductCard from './ProductCard';
import './scss/productList.scss';
import { CartContext } from "./CartContext";
import { TextField, Stack } from "@mui/material";

const ProductList = ({ products, loading, error, onProductUpdated }) => {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState("");

  let displayProducts = products;
  const sortby = [
  { id: 1, name: "Low to High", value: "low-to-high" },
  { id: 2, name: "High to Low", value: "high-to-low" }
  ];
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");

  if (displayProducts.length > 0) {
    displayProducts = displayProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (sortBy === "low-to-high") {
    displayProducts = [...displayProducts].sort((a, b) => a.price - b.price);
  }
  if (sortBy === "high-to-low") {
    displayProducts = [...displayProducts].sort((a, b) => b.price - a.price);
  }

  const handleAddToCart = (product) => {
    const result = addToCart(product);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.success);
    }
  };  

  return (
      <div>
        <h1>Product List</h1>
        <Stack 
        direction={"row"}
        sx={{justifyContent: "space-between",alignItems: "center"}}
        >
          <TextField
            label="Search"
            variant="outlined"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          > </TextField>
          <div className="select-wrapper">
            <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Sort by Price</option>
              {sortby.map((sort) => (
                <option key={sort.id} value={sort.value}>
                  {sort.name}
                </option>
              ))}
            </select>
          </div>
        </Stack>
        <div className="product-list">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAction={handleAddToCart}
                actionLabel="Add to Cart"
                showEditButton={true}
                onProductUpdated={onProductUpdated}
              />
            ))
          )}
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
