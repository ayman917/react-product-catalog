import { CartProvider } from './CartContext';
import { BrowserRouter as Router } from "react-router-dom";

const Provider = ({ children }) => {
  return (
      <Router>
              <CartProvider>
                  {children}
              </CartProvider>
      </Router>
  );
};

export default Provider;