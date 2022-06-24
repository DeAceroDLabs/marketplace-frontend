import styles from "./Tooltip.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "components/common/Button";
import { useState } from "react";
import { Popup } from "semantic-ui-react";

interface TooltipProps {
  children?: React.ReactNode;
  title?: string;
  button?: boolean;
  buttonChildren?: React.ReactNode;
  buttonAction?: () => void;
  offset: [number, (number | undefined)?] | undefined;
  position:
    | "top left"
    | "top right"
    | "bottom right"
    | "bottom left"
    | "right center"
    | "left center"
    | "top center"
    | "bottom center"
    | undefined;
  triggerTooltip: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  button,
  offset,
  position,
  triggerTooltip,
  buttonChildren,
  buttonAction = void 0,
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Popup
      trigger={triggerTooltip}
      on="click"
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      className={styles["tooltip-style"]}
      offset={offset}
      position={position}
    >
      {title && <b>{title}</b>}
      <div className={styles.close}>
        <Button color="transparent-black" action={() => handleClose()}>
          <CloseIcon />
        </Button>
      </div>
      {children}
      {button && (
        <div className={styles["tooltip-button"]}>
          <Button
            color="primary"
            action={() => {
              buttonAction?.();
              handleClose();
            }}
          >
            {buttonChildren}
          </Button>
        </div>
      )}
    </Popup>
  );
};

export default Tooltip;
