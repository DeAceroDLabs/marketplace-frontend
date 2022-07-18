import styles from "./ToogleCategories.module.scss";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "components/common/Button";

interface ToogleCategoriesProps {
  categoryName: string;
  question: string;
  content: string;
  defaultVisibility?: boolean;
}

const ToogleCategories: React.FC<ToogleCategoriesProps> = ({
  categoryName,
  question,
  content,
  defaultVisibility = false,
}) => {
  const [visible, setVisible] = useState(defaultVisibility);
  const handleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      <div className={styles["category-arrow-container"]}>
        <div>{categoryName}</div>
        <Button color="transparent-black" action={() => handleVisibility()}>
          {visible && <ArrowDropUpIcon />}
          {!visible && <ArrowDropDownIcon />}
        </Button>
      </div>
      <hr className={styles.line} />
      {visible && (
        <div className={styles["question-content-container"]}>
          <div className={styles.question}>{question}</div>
          <div className={styles.content}>{content}</div>
        </div>
      )}
    </div>
  );
};

export default ToogleCategories;
