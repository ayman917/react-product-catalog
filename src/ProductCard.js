import { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomModal from "./CustomModal";
const ProductCard = ({ product, onAction, actionLabel, showEditButton, onProductUpdated }) => {
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
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h4>{product.title}</h4>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <Button className="" onClick={() => onAction(product)}>{actionLabel}</Button>
        <CustomModal productId={product.id} product={product} open={open} onClose={handleClose} onProductUpdated={onProductUpdated} />
      </Box>
      
    </>
  );
};

export default ProductCard;
