/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

test("cart is empty", () => {
  render(<Cart cart={[]} />);
  const cart = screen.getByText("Your cart is empty");
  expect(cart).toBeInTheDocument();
});

test("cart is not empty", () => {
  render(
    <Cart cart={[{ id: 1, title: "Product 1", price: 100, quantity: 1 }]} />,
  );
  const cart = screen.getByRole("table");
  expect(cart).toBeInTheDocument();
});
