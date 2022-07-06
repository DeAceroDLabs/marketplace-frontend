import { render } from "@testing-library/react";
import StateIcon from "../StateIcon";

describe("StateIcon", () => {
  it("loads without exploding", () => {
    const view = render(<StateIcon state="success" />);
    expect(view).toMatchSnapshot();
  });
});
