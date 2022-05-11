import { useState } from "react";
import Tab from "./Tab/Tab";

interface TabsMenuProps {
  variant?: "primary" | "secondary";
  tabsTitles: string[];
  setActive(tab: string): void;
}

const TabsMenu: React.FC<TabsMenuProps> = ({
  variant = "primary",
  tabsTitles,
}) => {
  const [activeTab, setactiveTab] = useState(tabsTitles[0]);

  const setActive = (tabTitle: string) => {
    setactiveTab(tabTitle);
  };

  const tabs = tabsTitles.map((title: string) => {
    return (
      <Tab
        key={title}
        variant={variant}
        title={title}
        active={activeTab === title ? "active" : ""}
        onSelect={setActive}
      />
    );
  });
  return <div className="tabs">{tabs}</div>;
};

export default TabsMenu;
