import { CartProvider } from './CartContext';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CartProvider>
          {children}
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
};

export default Provider;