/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import AddProduct from "./AddProduct";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("clicking add a product opens form", async () => {
  render(<AddProduct />);
  // form shouldn't be displayed until button clicked
  let inputForm = screen.queryByText(/Product Name:/i);
  expect(inputForm).not.toBeInTheDocument();

  // click the button
  const button = screen.getByRole("button", { name: /add a product/i });
  expect(button).toBeInTheDocument();
  const user = userEvent.setup();
  await user.click(button);

  // form should now be displayed
  inputForm = screen.queryByText(/Product Name:/i);
  expect(inputForm).toBeInTheDocument();
});

test("clicking cancel closes form", async () => {
  render(<AddProduct />);
  // click the button
  const button = screen.getByRole("button", { name: /add a product/i });
  expect(button).toBeInTheDocument();
  const user = userEvent.setup();
  await user.click(button);

  // form should now be displayed
  let inputForm = screen.queryByText(/Product Name:/i);
  expect(inputForm).toBeInTheDocument();

  // click the cancel button
  const cancelButton = screen.getByRole("button", { name: /cancel/i });
  await user.click(cancelButton);

  // form should now be gone
  inputForm = screen.queryByText(/Product Name:/i);
  expect(inputForm).not.toBeInTheDocument();
});

test("user can populate the form", async () => {
  render(<AddProduct />);
  const user = userEvent.setup();
  // click the button
  const button = screen.getByRole("button", { name: /add a product/i });
  await user.click(button);

  // fill out the form
  const productName = screen.getByLabelText(/product name:/i);
  const price = screen.getByLabelText(/price:/i);
  const quantity = screen.getByLabelText(/quantity:/i);

  await user.type(productName, "test product");
  await user.type(price, "10");
  await user.type(quantity, "5");

  // verify the form is populated
  expect(productName).toHaveValue("test product");
  expect(price).toHaveValue(10);
  expect(quantity).toHaveValue(5);
});
