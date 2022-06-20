import { Field as FieldProps } from "forms/form.types";
import TextField from "../TextField";
import styles from "./Field.module.scss";

const Field: React.FC<FieldProps> = ({
  name,
  label,
  value,
  type,
  required,
  placeholder,
}) => {
  const props = {
    name,
    label,
    value,
    type,
    required,
    placeholder,
  };

  return (
    <div className={styles["field-container"]}>
      {
        {
          text: <TextField {...props} />,
          tel: <TextField {...props} />,
          email: <TextField {...props} />,
          password: <TextField {...props} />,
        }[type]
      }
    </div>
  );
};

export default Field;
