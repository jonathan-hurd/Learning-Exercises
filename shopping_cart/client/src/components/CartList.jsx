const CartList = ({ cart }) => {
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.productId}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total:
            {` ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartList;
