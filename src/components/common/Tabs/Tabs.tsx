import { useState } from "react";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.scss";

interface TabsProps {
  variant?: "primary" | "secondary";
  tabsTitles: string[];
}

const Tabs: React.FC<TabsProps> = ({ variant = "primary", tabsTitles }) => {
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
  return <div className={styles.tabs}>{tabs}</div>;
};

export default Tabs;
