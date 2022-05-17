import renderer from "react-test-renderer";
import Section from "../Section";

it("renders Section with no issue", () => {
  const component = renderer.create(
    <Section>
      <></>
    </Section>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
