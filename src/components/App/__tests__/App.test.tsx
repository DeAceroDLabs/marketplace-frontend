import renderer from "react-test-renderer";
import App from "../App";

it("renders App with no issue", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
