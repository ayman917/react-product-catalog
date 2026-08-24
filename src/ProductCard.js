import { Box, Button } from '@mui/material';
const ProductCard = ({ product, onAction, actionLabel, showDelete, deleteProduct }) => {

  return (
    <Box className="product-card">
      <h4>{product.title}</h4>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <Button className="" onClick={() => onAction(product)}>{actionLabel}</Button>
    </Box>
  );
};

export default ProductCard;
