/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getProducts, addToProducts } from "../services/products";
import { getCart } from "../services/cart";

jest.mock("../services/products");
jest.mock("../services/cart");

const mockProducts = [
  {
    _id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
];

const newMockProduct = {
  _id: 2,
  title: "Keyboard",
  quantity: 3,
  price: 50,
};

const mockCart = [
  {
    _id: "51d754d72092473333a809e1",
    productId: "55",
    title: "Mac Mini",
    price: 850,
    quantity: 6,
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
];

test("fetch and render products and cart items", async () => {
  getProducts.mockResolvedValue(mockProducts);
  getCart.mockResolvedValue(mockCart);
  await act(async () => {
    render(<App />);
  });

  const products = await screen.findByRole("heading", {
    level: 3,
    name: "Amazon Kindle E-reader",
  });
  const cart = await screen.findByText("Mac Mini");

  expect(products).toBeInTheDocument();
  expect(cart).toBeInTheDocument();
});

test("adding a product", async () => {
  addToProducts.mockResolvedValue(newMockProduct);
  await act(async () => {
    render(<App />);
  });
  const user = userEvent.setup();

  const button = screen.getByRole("button", { name: /add a product/i });
  await user.click(button);

  // confirm new product is not displayed
  let newProduct = screen.queryByRole("heading", {
    level: 3,
    name: "Keyboard",
  });

  expect(newProduct).not.toBeInTheDocument();

  // fill out the add product form
  const productName = screen.getByLabelText(/product name:/i);
  const price = screen.getByLabelText(/price:/i);
  const quantity = screen.getByLabelText(/quantity:/i);

  await user.type(productName, "Keyboard");
  await user.type(price, "3");
  await user.type(quantity, "50");

  // submit the form
  const submitButton = screen.getByRole("button", { name: /add product/i });
  await user.click(submitButton);

  // verify the new product is displayed
  newProduct = await screen.findByRole("heading", {
    level: 3,
    name: "Keyboard",
  });

  expect(newProduct).toBeInTheDocument();
});

// test("adding a product to cart", async () => {
//   await act(async () => {
//     render(<App />);
//   });
//   const user = userEvent.setup();

//   // confirm product is not in cart
//   const cartItem = screen.queryByText("Amazon Kindle E-reader");
//   expect(cartItem).not.toBeInTheDocument();

//   // const button = screen.getByRole("button", { name: /add to cart/i });
//   // await user.click(button);

//   // confirm product is in cart
// });
