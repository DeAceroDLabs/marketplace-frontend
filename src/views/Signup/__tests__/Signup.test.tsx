import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../Signup";

describe("Signup", () => {
  it("loads login without exploding", () => {
    const view = render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
