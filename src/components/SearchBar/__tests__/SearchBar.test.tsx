import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";

it("renders SearchBar with no issue", () => {
  const component = renderer.create(<SearchBar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
