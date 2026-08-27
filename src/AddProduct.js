import { useState } from "react";
import ProductForm from "./ProductForm";

const AddProduct = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  }
  const addProduct = async (product) => {
    setMessage("");
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
    <>
      <ProductForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      {message && <p>{message}</p>}
    </>

  );
};
export default AddProduct;