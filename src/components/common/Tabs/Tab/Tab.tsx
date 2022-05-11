import styles from "./Tab.module.scss";

interface TabProps {
  title: string;
  variant: "primary" | "secondary";
  active: "active" | "";
  onSelect: (tabTitle: string) => void;
}

const Tab: React.FC<TabProps> = ({ title, variant, active, onSelect }) => {
  const setActive = () => onSelect(title);
  return (
    <button
      key={title}
      className={`${styles.tab} ${styles[variant]} ${styles[active]}`}
      onClick={() => setActive()}
    >
      {title}
    </button>
  );
};

export default Tab;
