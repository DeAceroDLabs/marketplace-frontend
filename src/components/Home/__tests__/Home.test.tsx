import renderer from "react-test-renderer";
import Home from "../Home";

it("renders Home with no issue", () => {
  const component = renderer.create(<Home />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
