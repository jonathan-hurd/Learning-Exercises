import { useState } from "react";
import ProductForm from "./ProductForm";

const AddProduct = ({ onNewProduct }) => {
  let [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="add-form">
        <p>
          {showForm ? null : (
            <button
              onClick={() => setShowForm(true)}
              className="add-product-button"
            >
              Add a Product
            </button>
          )}
        </p>
      </div>
      {showForm ? (
        <ProductForm onNewProduct={onNewProduct} setShowForm={setShowForm} />
      ) : null}
    </>
  );
};

export default AddProduct;
