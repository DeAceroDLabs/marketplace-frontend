import styles from "./Tooltip.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "components/common/Button";

interface TooltipProps {
  children?: React.ReactNode;
  title?: string;
  location: "up" | "down";
  action: () => void;
  refLocation: any;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  location,
  action,
  refLocation,
}) => {
  return (
    <div
      className={`${styles["tooltip-style"]} ${styles[location]}`}
      ref={refLocation}
    >
      {title && <b>{title}</b>}
      <div className={styles.close}>
        <Button color="transparent-black" action={action}>
          <CloseIcon />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
