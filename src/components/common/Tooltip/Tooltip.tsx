import styles from "./Tooltip.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "components/common/Button";
import { useState } from "react";
import { Popup } from "semantic-ui-react";
import { AnyTxtRecord } from "dns";

interface TooltipProps {
  children?: React.ReactNode;
  title?: string;
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
  isOpen: any;
  handleOpen: () => void;
  handleClose: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  offset,
  position,
  triggerTooltip,
  isOpen, 
  handleOpen, 
  handleClose,
}) => {
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
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.close}>
        <Button color="transparent-black" action={() => handleClose()}>
          <CloseIcon />
        </Button>
      </div>
      {children}
    </Popup>
  );
};

export default Tooltip;
