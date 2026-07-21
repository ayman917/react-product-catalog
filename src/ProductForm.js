import React, { useContext, useRef } from "react";
import { CartContext } from "./CartContext";

const ProductForm = () => {
  const { addProduct } = useContext(CartContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: parseFloat(priceRef.current.value),
    };

    addProduct(newProduct);

    // Clear the form fields
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Title" ref={titleRef} required />
      <br />
      <textarea placeholder="Description" ref={descriptionRef} required />
      <br />
      <input type="number" placeholder="Price" ref={priceRef} required />
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};
export default ProductForm;