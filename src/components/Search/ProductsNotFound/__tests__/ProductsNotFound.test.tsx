import renderer from "react-test-renderer";
import ProductsNotFound from "../ProductsNotFound";

it("renders ProductsNotFound with no issue", () => {
  const component = renderer.create(<ProductsNotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});