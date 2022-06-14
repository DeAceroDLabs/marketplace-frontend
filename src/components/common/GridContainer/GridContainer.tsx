import styles from "./GridContainer.module.scss";

interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default GridContainer;
