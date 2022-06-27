import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductsNotFound from "../ProductsNotFound";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "config/userContext";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header", () => {
  const mockUSer = {
    username: "mock_user",
    setUser: jest.fn(),
  };
  const renderView = () =>
  render(
    <UserProvider value={mockUSer}>
      <MemoryRouter>
      <ProductsNotFound />
      </MemoryRouter>
    </UserProvider>
  );
  it("renders ProductsNotFound with no issue", () => {
    renderView();
    const view = renderer.create(<ProductsNotFound />);
    expect(view).toMatchSnapshot();
  });

  it("categories button useNavigate", async () => {
    renderView();
    const categoriesButton = screen.getAllByRole("button")[0];
    fireEvent.click(categoriesButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });
});
