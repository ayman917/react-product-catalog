import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ProductCard from './ProductCard';
import './scss/productList.scss';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className="product-list">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                onAction={() => removeFromCart(product.id)}
                actionLabel="Remove from Cart"
                showEditButton={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
