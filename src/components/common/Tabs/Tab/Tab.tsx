import { TabItem } from "components/common/common.types";
import styles from "./Tab.module.scss";

export interface TabProps {
  tab: TabItem;
  variant: "primary" | "secondary";
  active: "active" | "";
  onSelect: (tabId: TabItem) => void;
}

const Tab: React.FC<TabProps> = ({ tab, variant, active, onSelect }) => {
  const setActive = () => onSelect(tab);
  return (
    <button
      className={`${styles.tab} ${styles[variant]} ${styles[active]}`}
      onClick={() => setActive()}
    >
      {tab.title}
    </button>
  );
};

export default Tab;
