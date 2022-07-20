import styles from "./ExpandableContent.module.scss";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "components/common/Button";

interface ExpandableContentProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  title,
  children,
  isOpen = false,
}) => {
  const [visible, setVisible] = useState(isOpen);
  const handleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      <div className={styles["title-arrow-container"]}>
        <div>{title}</div>
        <Button color="transparent-black" action={() => handleVisibility()}>
          {visible && <ArrowDropUpIcon />}
          {!visible && <ArrowDropDownIcon />}
        </Button>
      </div>
      <hr className={styles.line} />
      {visible && children}
    </div>
  );
};

export default ExpandableContent;
