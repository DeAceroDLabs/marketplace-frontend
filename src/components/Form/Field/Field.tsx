import { FieldProps } from "forms/form.types";
import Dropdown from "../Dropdown";
import FileInput from "../FileInput";
import TextField from "../TextField";
import EmailField from "../EmailField";
import PhoneField from "../PhoneField";
import RFCField from "../RFCField";
import CURPField from "../CURPField";
import PasswordField from "../PasswordField";
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
  errorMessage,
  needsValidationFrom,
  dynamicOptionsProp,
  optionsContext,
  size = "full-width",
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
    errorMessage,
    needsValidationFrom,
    dynamicOptionsProp,
    optionsContext,
  };

  return (
    <div className={`${styles["field-container"]} ${styles[size]}`}>
      {
        {
          text: <TextField {...props} />,
          number: <TextField {...props} />,
          rfc: <RFCField {...props} />,
          curp: <CURPField {...props} />,
          tel: <PhoneField {...props} />,
          email: <EmailField {...props} />,
          password: <PasswordField {...props} />,
          dropdown: <Dropdown {...props} />,
          file: <FileInput {...props} />,
        }[type]
      }
    </div>
  );
};

export default Field;
