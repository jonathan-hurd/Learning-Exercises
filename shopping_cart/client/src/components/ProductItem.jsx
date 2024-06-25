const ProductItem = ({ product }) => {
  return (
    <>
      <h3>{product.title}</h3>
      <p className="price">{product.price}</p>
      <p className="quantity">{product.quantity} left in stock </p>
    </>
  );
};

export default ProductItem;
