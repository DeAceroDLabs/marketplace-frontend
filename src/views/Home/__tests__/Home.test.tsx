import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockFetch from "setupTests";
import Home from "../Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const loadInitialState = async () => {
    const view = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("mock category 1")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("category 1 product 1")).toBeInTheDocument();
    });
    return view;
  };

  it("renders Home with no issue", () => {
    expect(loadInitialState()).toMatchSnapshot();
  });

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

  it("renders see more", async () => {
    await loadInitialState();
    await waitFor(() => {
      expect(screen.getByText("Ver más")).toBeInTheDocument();
    });
  });

  it("click to see more", async () => {
    await loadInitialState();
    const seemoreButton = screen.getAllByRole("button")[5];
    fireEvent.click(seemoreButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });
});
