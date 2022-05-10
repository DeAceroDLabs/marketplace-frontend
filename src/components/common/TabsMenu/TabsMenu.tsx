interface TabsProps {
  tabsTitles: string[];
  setActive(tab: string): void;
}

const TabsMenu: React.FC<TabsProps> = ({ tabsTitles, setActive }) => {
  const tabs = tabsTitles.map((title: string) => {
    return (
      <button key={title} className="tab" onClick={() => setActive(title)}>
        {title}
      </button>
    );
  });
  return <div className="tabs">{tabs}</div>;
};

export default TabsMenu;
