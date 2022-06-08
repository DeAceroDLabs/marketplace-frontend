import { render, screen, fireEvent,waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Footer", () => {
  it("renders Footer without problem", async() => {
    const view = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("renders contact on Footer without problem", () => {
    const view = render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Footer />
      </MemoryRouter>
    );
    const contact = screen.getByText("Contacto");
    expect(contact).toBeInTheDocument();
  });

  it("renders about on Footer without problem", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    const about = screen.getByText("Acerca de");
    expect(about).toBeInTheDocument();
  });

});