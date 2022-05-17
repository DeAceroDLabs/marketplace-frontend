import renderer from "react-test-renderer";
import View from "../View";

it("renders View with no issue", () => {
  const component = renderer.create(<View />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
