//import styles from "Popup.module.scss";

import { Dialog, DialogContent } from "@mui/material";
import styles from "./Popup.module.scss";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, content }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogContent>
        <div className={styles.container}>{content}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
