import { useState } from "react";

const ProductForm = ({ setShowForm, onNewProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleNewProduct = (e) => {
    e.preventDefault();
    onNewProduct({ title: name, price: price, quantity: quantity }, clearForm);
  };

  const clearForm = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={handleNewProduct} className="input-group">
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
        <button type="submit">Add Product</button>
        <button onClick={() => setShowForm(false)} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
