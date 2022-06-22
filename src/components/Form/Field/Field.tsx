import { FieldProps } from "forms/form.types";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import styles from "./Field.module.scss";

const Field: React.FC<FieldProps> = ({
  name,
  label,
  value,
  type,
  required,
  placeholder,
  disabled,
  options,
}) => {
  const props = {
    name,
    label,
    value,
    type,
    required,
    placeholder,
    disabled,
    options,
  };

  return (
    <div className={styles["field-container"]}>
      {
        {
          text: <TextField {...props} />,
          number: <TextField {...props} />,
          tel: <TextField {...props} />,
          email: <TextField {...props} />,
          password: <TextField {...props} />,
          dropdown: <Dropdown {...props} />,
        }[type]
      }
    </div>
  );
};

export default Field;
