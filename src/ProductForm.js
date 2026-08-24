import React, { useContext, useRef } from "react";
import { TextField, Button } from "@mui/material";

const ProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = React.useState({
    title: "",
    category: "",
    price: "",
  });
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  }
  
  const addProduct = async (product) => {
    setMessage(""); // Clear previous messages
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Product added:", data);
      setMessage("Product added successfully!");
      onProductAdded(data);
      setFormData({ title: "", category: "", price: "" });
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Failed to add product. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Add New Product</h2>
      <TextField
        label="Title"
        variant="outlined"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <br />
      <TextField
        style={{ marginTop: "10px" }}
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <br />
      <TextField
        style={{ marginTop: "10px" }}
        label="Price"
        variant="outlined"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <br />
      <Button type="submit" style={{ marginTop: "10px" }}>
        Add Product
      </Button>
      {message && <p>{message}</p>}
    </form>

  );
};
export default ProductForm;