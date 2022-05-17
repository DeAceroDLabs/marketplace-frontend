import { TabItem } from "components/common/common.types";
import renderer from "react-test-renderer";
import Tabs from "../Tabs";

const mockTabs: TabItem[] = [
  {
    id: 1,
    title: "tab 1",
  },
  {
    id: 2,
    title: "tab 2",
  },
];

const TabsMockProps = {
  options: mockTabs,
  onSelectTab: () => jest.fn(),
};
it("renders Tabs with no issue", () => {
  const component = renderer.create(<Tabs {...TabsMockProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
