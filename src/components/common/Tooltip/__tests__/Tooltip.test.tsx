import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tooltip from "../Tooltip";

describe("Search Bar", () => {
  const view = render(
    <BrowserRouter>
      <Tooltip title="title" action={() => console.log("action")}></Tooltip>
    </BrowserRouter>
  );

  it("renders Tooltip with no issue", () => {
    expect(view).toMatchSnapshot();
  });
});
