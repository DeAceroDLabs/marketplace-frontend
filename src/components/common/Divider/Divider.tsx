import styles from "./Divider.module.scss";

interface DividerProps {
    color: "black" | "grey";
  }
  
  const Divider: React.FC<DividerProps> = ({
    color,
  }) => {

  return (
    <hr className={styles[color]} />
  );
};

export default Divider;
