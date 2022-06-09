import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import { screen } from "@testing-library/react";
import { UserProvider } from "config/userContext";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
const mockUSer = {
  username: "user",
  setUser: jest.fn(),
};

describe("Header", () => {
  const renderView = () =>
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserProvider>
    );

  it("renders Header without problem", () => {
    expect(renderView()).toMatchSnapshot();
  });

  it("renders Header with color being on a different page", () => {
    const view = render(
      <UserProvider value={mockUSer}>
        <MemoryRouter initialEntries={["/search/mock"]}>
          <Header />
        </MemoryRouter>
      </UserProvider>
    );
    expect(view).toMatchSnapshot();
  });

  it("does not display search bar on home screen", () => {
    renderView();
    const searchBar = screen.queryByPlaceholderText("¿Qué estás buscando?");
    expect(searchBar).not.toBeInTheDocument();
  });

  it("home button useNavigate", async () => {
    renderView();
    const homeButton = screen.getAllByRole("button")[0];
    fireEvent.click(homeButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  it("login button useNavigate", async () => {
    renderView();
    const loginButton = screen.getAllByRole("button")[1];
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
