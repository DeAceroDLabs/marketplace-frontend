import renderer from "react-test-renderer";
import MailTo from "../MailTo";

const MailToMockProps = {
  title: "Mock Title",
  imgSrc: "./mock/image/route",
};
it("renders MailTo with no issue", () => {
  const component = renderer.create(<MailTo email="contact@example.com" subject= "Hello" body="hello"/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
