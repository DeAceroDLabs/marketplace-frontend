import renderer from "react-test-renderer";
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
  it("renders ProductsNotFound with no issue", () => {
    <UserProvider value={mockUSer}>
      <MemoryRouter>
        <ProductsNotFound />
      </MemoryRouter>
    </UserProvider>;
    const view = renderer.create(<ProductsNotFound />);
    expect(view).toMatchSnapshot();
  });
});
