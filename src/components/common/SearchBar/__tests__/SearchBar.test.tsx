import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "../SearchBar";

describe("Search Bar", () => {
  const view = render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  it("renders SearchBar with no issue", () => {
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input", async () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("¿Qué estás buscando?");
    fireEvent.change(input, {
      target: { value: "Mocking search" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("Mocking search");
    });
  });

  it("handles search request", async () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(
        screen.queryByText(
          /Somos tu aliado de confianza para hacer crecer tu negocio/i
        )
      ).toBeFalsy();
    });
  });

  it("handles search request by pressing enter", async () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("¿Qué estás buscando?");
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    await waitFor(() => {
      expect(
        screen.queryByText(
          /Somos tu aliado de confianza para hacer crecer tu negocio/i
        )
      ).toBeFalsy();
    });
  });
});
