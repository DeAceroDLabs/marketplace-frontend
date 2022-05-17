import renderer from "react-test-renderer";
import BgSection from "../BgSection";

it("renders BgSection with no issue", () => {
  const component = renderer.create(<BgSection />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
