import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tooltip from "../Tooltip";

describe("Search Bar", () => {
  const view = render(
    <BrowserRouter>
      <Tooltip offset={[-15, 14]}
        position="bottom left"
        triggerTooltip={<div></div>}
        isOpen={true}
        handleClose={() => void(0)}
        handleOpen={() => void(0)}></Tooltip>
    </BrowserRouter>
  );

  it("renders Tooltip with no issue", () => {
    expect(view).toMatchSnapshot();
  });
});
