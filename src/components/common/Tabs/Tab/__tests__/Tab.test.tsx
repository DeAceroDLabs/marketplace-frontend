import renderer from "react-test-renderer";
import Tab, { TabProps } from "../Tab";
import { TabItem } from "../../../common.types";

const mockTab: TabItem = {
  id: 1,
  title: "tab 1",
};

const TabMockProps: TabProps = {
  tab: mockTab,
  active: "active",
  variant: "primary",
  onSelect: () => jest.fn(),
};

it("renders Tab with no issue", () => {
  const component = renderer.create(<Tab {...TabMockProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
