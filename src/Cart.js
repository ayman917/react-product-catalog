import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ProductCard from './ProductCard';
import { Stack } from '@mui/material';
import './scss/productList.scss';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useContext(CartContext);
  const total = getCartTotal();

  return (
    <div className='cart'>
      <Stack
        direction={"row"}
        sx={{justifyContent: "space-between",alignItems: "center", padding: { xs: "0 20px", md: "0",}
      }}
      >
        <h1>Cart</h1>
        <p className='cart-total'><strong>Total:</strong>${total.toFixed(2)}</p>
      </Stack>
      <div className="product-list">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                incQuantity={() => increaseQuantity(product)}
                decQuantity={() => decreaseQuantity(product)}
                onAction={() => removeFromCart(product.id)}
                actionLabel="Remove from Cart"
                showEditButton={false}
                showQuantity={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
