/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ProductItem from "./ProductItem";

test("displays product details", () => {
  render(
    <ProductItem product={{ title: "Product 1", price: 100, quantity: 10 }} />,
  );
  const heading = screen.getByRole("heading", { level: 3, name: "Product 1" });
  expect(heading).toBeInTheDocument();
  const price = screen.getByText("100");
  expect(price).toBeInTheDocument();
  const quantity = screen.getByText("10 left in stock");
  expect(quantity).toBeInTheDocument();
});
