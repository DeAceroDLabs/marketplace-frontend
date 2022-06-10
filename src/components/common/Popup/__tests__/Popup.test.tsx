import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Popup from "../Popup";

describe("Search Bar", () => {
  const view = render(
    <BrowserRouter>
      <Popup title="title" action={() => console.log("action")}></Popup>
    </BrowserRouter>
  );

  it("renders Popup with no issue", () => {
    expect(view).toMatchSnapshot();
  });
});
