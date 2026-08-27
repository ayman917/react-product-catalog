import { TextField, Button } from '@mui/material';
const ProductForm = ({ isModal, formData, setFormData, handleSubmit }) => {
  
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>{isModal ? "Edit Product" : "Add New Product"}</h2>
      <TextField
        label="Title"
        variant="outlined"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <br />
      <TextField
        style={{ marginTop: "10px" }}
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <br />
      <TextField
        style={{ marginTop: "10px" }}
        label="Price"
        variant="outlined"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <br />
      <Button type="submit" style={{ marginTop: "10px" }}>
        {isModal ? "Update Product" : "Add Product"}
      </Button>
    </form>
  )
}
export default ProductForm;