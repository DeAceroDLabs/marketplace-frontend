import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "../SearchBar";

describe("Search Bar", () => {
  it("renders SearchBar with no issue", () => {
    const view = render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
