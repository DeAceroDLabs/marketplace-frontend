import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { debug } from "console";
import mockFetch from "setupTests";
import Home from "../Home";

describe("Home", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const loadInitialState = async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("mock category 1")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("category 1 product 1")).toBeInTheDocument();
    });
  };

  it("loads categories into screen", async () => {
    loadInitialState();
  });

  it("loads products from selected category", async () => {
    await loadInitialState();
    fireEvent.click(screen.getByText("mock category 2"));
    await waitFor(() => {
      expect(screen.getByText("category 2 product 1")).toBeInTheDocument();
    });
  });
});
