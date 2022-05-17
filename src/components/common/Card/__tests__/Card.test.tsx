import renderer from "react-test-renderer";
import Card from "../Card";

const CardMockProps = {
  title: "Mock Title",
  imgSrc: "./mock/image/route",
};
it("renders Card with no issue", () => {
  const component = renderer.create(<Card {...CardMockProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
