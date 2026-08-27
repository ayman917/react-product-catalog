import { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomModal from "./CustomModal";
const ProductCard = ({ product, onAction, actionLabel, showEditButton }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className="product-card">
        {showEditButton && (
          <span className='edit-product' onClick={handleOpen}>
            Edit
          </span>
        )}
        <h4>{product.title}</h4>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <Button className="" onClick={() => onAction(product)}>{actionLabel}</Button>
        <CustomModal product={product} open={open} onClose={handleClose} />
      </Box>
      
    </>
  );
};

export default ProductCard;
