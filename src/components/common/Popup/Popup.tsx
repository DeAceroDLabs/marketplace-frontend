import styles from "./Popup.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "components/common/Button";

interface PopupProps {
  children?: React.ReactNode;
  color: "white";
  title?: string;
  size: "small" | "medium" | "large";
  action: () => void;
}

const Popup: React.FC<PopupProps> = ({
  children,
  color = "white",
  title,
  size,
  action,
}) => {
  return (
    <div className={`${styles[color]} ${styles[size]}`}>
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

export default Popup;