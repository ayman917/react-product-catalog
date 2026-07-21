import Provider from "./Provider";
import {Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Provider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="productListPage" element={<ProductListingPage />} />
            <Route path="cartPage" element={<CartPage />} />
          </Route>
        </Routes>
    </Provider>
    
  );
}
export default App;
