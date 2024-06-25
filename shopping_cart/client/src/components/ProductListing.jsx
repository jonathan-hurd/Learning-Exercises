import Product from "./Product";

const ProductListing = ({
  data,
  onDeleteProduct,
  onEditProduct,
  onAddToCart,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {data.map((product) => {
          return (
            <Product
              key={product._id}
              onDeleteProduct={onDeleteProduct}
              onEditProduct={onEditProduct}
              onAddToCart={onAddToCart}
              product={product}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
