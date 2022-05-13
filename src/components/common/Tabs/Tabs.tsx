import { useEffect, useState } from "react";
import Tab from "./Tab/Tab";
import { TabItem } from "../common.types";
import styles from "./Tabs.module.scss";

interface TabsProps {
  variant?: "primary" | "secondary";
  options: TabItem[];
  onSelectTab: (tab: TabItem) => void;
}

const Tabs: React.FC<TabsProps> = ({
  variant = "primary",
  options,
  onSelectTab,
}) => {
  const [activeTab, setactiveTab] = useState(options[0]);

  useEffect(() => {
    setActive(options[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const setActive = (tab: TabItem) => {
    setactiveTab(tab);
    onSelectTab(tab);
  };

  const tabs = options.map((tab) => {
    return (
      <Tab
        key={tab.id}
        variant={variant}
        tab={tab}
        active={activeTab === tab ? "active" : ""}
        onSelect={setActive}
      />
    );
  });
  return <div className={styles.tabs}>{tabs}</div>;
};

export default Tabs;
