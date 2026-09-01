import { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomModal from "./CustomModal";
const ProductCard = ({ product, onAction, actionLabel, showEditButton, onProductUpdated, showQuantity, incQuantity, decQuantity }) => {
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
        <p><span className='item-style'>Category:</span><span>{product.category}</span></p>
        <p><span className='item-style'>Price:</span><span>${product.price}</span></p>
        {showQuantity && (
          <p>
            <span className='item-style'>Quantity:</span>
            <button className='quantity-btn' onClick={() =>incQuantity(product)} >+</button>
            {product.quantity}
            <button className='quantity-btn' onClick={() =>decQuantity(product)}>-</button>
          </p>
        )}
        <Button className="" onClick={() => onAction(product)}>{actionLabel}</Button>
        <CustomModal productId={product.id} product={product} open={open} onClose={handleClose} onProductUpdated={onProductUpdated} />
      </Box>
      
    </>
  );
};

export default ProductCard;
