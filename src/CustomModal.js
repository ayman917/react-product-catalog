import { useState } from 'react';
import ProductForm from './ProductForm';
import { Modal, Box } from '@mui/material';
const CustomModal = ({ product, open, onClose }) => {
  const [formData, setFormData] = useState(product);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F6FBF8",
    border: "none",
    boxShadow: 24,
    outline: "none",
    p: 4,
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