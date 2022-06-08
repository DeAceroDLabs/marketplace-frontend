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

});