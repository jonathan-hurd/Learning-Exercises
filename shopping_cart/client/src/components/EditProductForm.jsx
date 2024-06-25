import { useState } from "react";

const EditProductForm = ({ product, onCancelEdit, onEditProduct }) => {
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleEditProduct = (e) => {
    e.preventDefault();
    onEditProduct(
      product._id,
      { title: name, price: price, quantity: quantity },
      clearForm,
    );
  };

  const clearForm = () => {
    onCancelEdit();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleEditProduct} className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="product-name"
          name="product-name"
          required
        ></input>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            required
          ></input>
        </div>
        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button onClick={clearForm} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
