import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./StateIcon.module.scss";

interface StateIconProps {
  state: "success" | "error";
}

const StateIcon: React.FC<StateIconProps> = ({ state }) => {
  const icons = {
    error: <ErrorOutlineIcon />,
    success: <CheckCircleOutlineIcon />,
  };

  return (
    <div className={`${styles["outer-circle"]} ${styles[state]}`}>
      <div className={`${styles["inner-circle"]} ${styles[`${state}-active`]}`}>
        {icons[state]}
      </div>
    </div>
  );
};

export default StateIcon;
