import Search from "../Search";
import axios from "axios";
import { screen, render, waitFor } from "@testing-library/react";
import Router, { MemoryRouter } from "react-router-dom";
import { productsResponse } from "setupTests";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Search", () => {
  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ query: "1234" });
  });

  it("renders when loading and then results", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [productsResponse],
    });
    render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Search />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/Cargando/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/resultados/)).toBeInTheDocument();
    });
  });

  it("renders when loading and then not found products", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });
    render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Search />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/Cargando/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/No encontramos/)).toBeInTheDocument();
    });
  });
});
