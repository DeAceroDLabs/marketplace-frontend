import renderer from "react-test-renderer";
import Search from "../Search";

it("renders Search with no issue", () => {
  const component = renderer.create(<Search />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
