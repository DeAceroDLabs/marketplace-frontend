import renderer from "react-test-renderer";
import NotFound from "../NotFound";

const NotFoundPropsMock = {
  title: "Mock Title",
  imgSrc: "path/to/mock/image",
};

it("renders NotFound with no issue", () => {
  const component = renderer.create(
    <NotFound {...NotFoundPropsMock}>
      <></>
    </NotFound>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
