import renderer from "react-test-renderer";
import FrequentQuestions from "../FrequentQuestions";


it("renders FrequentQuestions with no issue", () => {
  const component = renderer.create(
    <FrequentQuestions/>

  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
