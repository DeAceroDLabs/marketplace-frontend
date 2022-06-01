import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockFetch from "setupTests";
import Login from "../Login";

describe("Login", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("loads login without exploding", () => {
    const view = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
