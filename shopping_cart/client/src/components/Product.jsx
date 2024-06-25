import React, { useState } from "react";
import ProductItem from "./ProductItem";
import EditProductForm from "./EditProductForm";

const Product = ({ product, onDeleteProduct, onEditProduct, onAddToCart }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const deleteProduct = () => {
    onDeleteProduct(product._id);
  };

  const addToCart = () => {
    onAddToCart(product._id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <ProductItem product={product} />
        <div className="actions product-actions">
          <button
            onClick={addToCart}
            className="add-to-cart"
            disabled={product.quantity === 0}
          >
            Add to Cart
          </button>
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
        </div>
        <button onClick={deleteProduct} className="delete-button">
          <span>X</span>
        </button>
      </div>

      {isEditing ? (
        <EditProductForm
          product={product}
          onCancelEdit={handleCancelEdit}
          onEditProduct={onEditProduct}
        />
      ) : null}
    </li>
  );
};

export default Product;
