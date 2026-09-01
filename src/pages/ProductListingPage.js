import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductList from '../ProductList';
import AddProduct from '../AddProduct';
function ProductListingPage() {
  const [value, setValue] = React.useState('1');
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

useEffect(() => {
  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://dummyjson.com/products");
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  fetchProducts();
}, []);

  const onProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }
  const onProductUpdated = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="product-list-page">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Products" value="1" />
              <Tab label="Add New Product" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProductList  products={products} loading={loading} error={error} onProductUpdated={onProductUpdated} />
          </TabPanel>
          <TabPanel value="2">
            <AddProduct onProductAdded={onProductAdded} />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
    
  );
}
export default ProductListingPage;