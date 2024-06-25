/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Header from "./Header";

test("check for header", () => {
  render(<Header cart={[]} />);
  const heading = screen.getByRole("heading", { level: 1, name: "The Shop!" });
  expect(heading).toBeInTheDocument();
});
