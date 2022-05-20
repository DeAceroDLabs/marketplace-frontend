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
});
