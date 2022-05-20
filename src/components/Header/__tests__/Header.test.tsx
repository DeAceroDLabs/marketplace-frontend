import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  it("renders Header without problem", () => {
    const view = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("renders Header with color being on a different page", () => {
    const view = render(
      <MemoryRouter initialEntries={["/search/mock"]}>
        <Header />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
