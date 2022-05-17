import renderer from "react-test-renderer";
import GridContainer from "../GridContainer";

it("renders GridContainer with no issue", () => {
  const component = renderer.create(
    <GridContainer>
      <></>
    </GridContainer>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
