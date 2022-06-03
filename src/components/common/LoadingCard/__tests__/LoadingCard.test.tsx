import renderer from "react-test-renderer";
import LoadingCard from "../LoadingCard";

it("renders LoadingCards with no issue", () => {
  const component = renderer.create(<LoadingCard cards={6} variant="small" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
