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

describe("Header", () => {
  const mockUSer = {
    username: "mock_user",
    setUser: jest.fn(),
  };
  const setup = (route: string[]) => {
    return render(
      <UserProvider value={mockUSer}>
        <MemoryRouter initialEntries={route}>
          <Header />
        </MemoryRouter>
      </UserProvider>
    );
  };

  it("renders Header without problem", () => {
    const view = setup(["/"]);
    expect(view).toMatchSnapshot();
  });

  it("renders Header with color being on a different page", () => {
    const view = setup(["/search/mock"]);
    expect(view).toMatchSnapshot();
  });

  it("does not display search bar on home screen", () => {
    setup(["/"]);
    const searchBar = screen.queryByPlaceholderText("¿Qué estás buscando?");
    expect(searchBar).not.toBeInTheDocument();
  });

  it("home button useNavigate", async () => {
    setup(["/"]);
    const homeButton = screen.getAllByRole("button")[0];
    fireEvent.click(homeButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  it("login button useNavigate", async () => {
    setup(["/"]);
    const loginButton = screen.getAllByRole("button")[1];
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  it("cart button opens tooltip and close it with close icon", async () => {
    setup(["/"]);
    const cartButton = screen.getAllByRole("button")[2];
    fireEvent.click(cartButton);
    const tooltip = screen.queryByText('¡No tienes artículos en tu carrito!');
    await waitFor(() => {
      expect(tooltip).toBeInTheDocument()
    });
    const closeButton = screen.getAllByRole("button")[3];

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('¡No tienes artículos en tu carrito!')).not.toBeInTheDocument();
    });
  });

  it("cart button opens tooltip and close it with addproductsbutton", async () => {
    setup(["/"]);
    const cartButton = screen.getAllByRole("button")[2];
    fireEvent.click(cartButton);
    const tooltip = screen.queryByText('¡No tienes artículos en tu carrito!');
    await waitFor(() => {
      expect(tooltip).toBeInTheDocument()
    });
    const addProductsButton = screen.getAllByRole("button")[4];

    fireEvent.click(addProductsButton);

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
      expect(screen.queryByText('¡No tienes artículos en tu carrito!')).not.toBeInTheDocument();
    });
  });

  it("click on home and close tooltip ", async () => {
    setup(["/"]);
    const homeButton = screen.getAllByRole("button")[0];

    fireEvent.click(homeButton);

    await waitFor(() => {
      expect(screen.queryByText('¡No tienes artículos en tu carrito!')).not.toBeInTheDocument();
    });
  });

});
