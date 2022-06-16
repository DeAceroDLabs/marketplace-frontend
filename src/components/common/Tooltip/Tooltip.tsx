import styles from "./Tooltip.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "components/common/Button";

interface TooltipProps {
  children?: React.ReactNode;
  title?: string;
  action: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  action,
}) => {
  return (
    <div className={styles["tooltip-style"]}>
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