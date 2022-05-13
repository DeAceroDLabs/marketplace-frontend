import { useState } from "react";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.scss";

interface TabsProps {
  variant?: "primary" | "secondary";
  tabsTitles: string[];
  onSelectTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  variant = "primary",
  tabsTitles,
  onSelectTab,
}) => {
  const [activeTab, setactiveTab] = useState(tabsTitles[0]);

  const setActive = (tabTitle: string) => {
    setactiveTab(tabTitle);
    onSelectTab(tabTitle);
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
  return <div className={styles.tabs}>{tabs}</div>;
};

export default Tabs;
