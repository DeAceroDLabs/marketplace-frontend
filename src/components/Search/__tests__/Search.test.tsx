import Search from "../Search";
import axios from "axios";
import { screen, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { productsResponse } from "setupTests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Search", () => {
  it("renders loading", async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(screen.getByText("Cargando productos...")).toBeInTheDocument();
  });

  it("renders when found products", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [productsResponse],
    });
    render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Search />
      </MemoryRouter>
    );
    await (() => {
      expect(screen.getByText(/resultados/)).toBeInTheDocument();
    });
  });

  it("renders when Not found products", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });
    render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Search />
      </MemoryRouter>
    );
    await (() => {
      expect(screen.getByText(/No encontramos/)).toBeInTheDocument();
    });
  });

  it("renders when found products", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [productsResponse],
    });
    render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Search />
      </MemoryRouter>
    );
    await (() => {
      expect(screen.getByText(/No encontramos/)).toBeInTheDocument();
    });
    await (() => {
      expect(screen.getByText(/resultados/)).toBeInTheDocument();
    });
  });
});
