import { Box, Button, } from '@mui/material';
import { styled } from "@mui/material/styles";


const DeleteButton = styled(Button)({
  color: "red",
});
const ProductCard = ({ product, onAction, actionLabel, showDelete, deleteProduct }) => {

  return (
    <Box className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button onClick={() => onAction(product)}>{actionLabel}</Button>
      {/* Only show if showDelete = true */}
      {showDelete && (
        <DeleteButton className='delete-prod-btn'
          onClick={() => deleteProduct(product.id)}
        >
          Delete Product
        </DeleteButton>
      )}
    </Box>
  );
};

export default ProductCard;
