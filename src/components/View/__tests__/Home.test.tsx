import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../View";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
