import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";
import { UserProvider } from "config/userContext";

const mockedUsedNavigate = jest.fn();
const mockUSer = {
  username: "user",
  setUser: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Footer", () => {
  it("renders Footer without problem", async () => {
    const view = render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </UserProvider>
    );
    expect(view).toMatchSnapshot();
  });

  it("renders contact on Footer without problem", async () => {
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </UserProvider>
    );
    await waitFor (() => {
      const contact = screen.getByText(/Contacto/);
      expect(contact).toBeInTheDocument();
    });
  });

  it("renders about on Footer without problem", async () => {
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </UserProvider>
    );
    await waitFor (() => {
      const about = screen.getByText("Acerca de");
      expect(about).toBeInTheDocument();
    });
  });
});
