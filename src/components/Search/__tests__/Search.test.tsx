import Search from "../Search";
import axios from "axios";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Search", () => {
  it("renders Search without problem", async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });
    const view = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(view).toMatchSnapshot();
    });
  });
});
