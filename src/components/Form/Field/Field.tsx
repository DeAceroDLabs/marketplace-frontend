import { FieldProps } from "forms/form.types";
import Dropdown from "../Dropdown";
import FileInput from "../FileInput";
import TextField from "../TextField";
import EmailField from "../EmailField";
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
  validateDomain,
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
    validateDomain,
  };

  return (
    <div className={styles["field-container"]}>
      {
        {
          text: <TextField {...props} />,
          number: <TextField {...props} />,
          tel: <TextField {...props} />,
          email: <EmailField {...props} />,
          password: <TextField {...props} />,
          dropdown: <Dropdown {...props} />,
          file: <FileInput {...props} />,
        }[type]
      }
    </div>
  );
};

export default Field;
