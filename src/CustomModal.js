import { useState } from 'react';
import ProductForm from './ProductForm';
import { Modal, Box } from '@mui/material';
const CustomModal = ({ productId, product, open, onClose, onProductUpdated }) => {
  const [formData, setFormData] = useState(product);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productId, formData);
    console.log("productId:", productId);
    console.log("formData:", formData);
  };
  const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      onProductUpdated(data);
      console.log("Product updated:", data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#F6FBF8",
    border: "none",
    boxShadow: 24,
    outline: "none",
    p: 4,
    width: {
      xs: "70%",
      sm: "70%",
      md: "400px",
    },
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductForm isModal={true} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </Box>
      </Modal>
    </>
  )
}
export default CustomModal;