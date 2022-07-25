import { OptionsField } from "forms/form.types";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./PasswordField.module.scss";
import validator from "validator";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "components/common/Button";

const PasswordField: React.FC<OptionsField> = ({
  name,
  value,
  placeholder,
  label,
  required,
  type,
  disabled,
  errorMessage = "",
  needsValidationFrom = "",
}) => {
  const [error, setError] = useState("");
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);
  const [visible, setVisible] = useState(false);

  const validatePassword = (password: string) => {
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError("");
      return true;
    }
    setError(errorMessage);
    return false;
  };

  useEffect(() => {
    methods.clearErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const confirmPassword = (confirmPassword: string) => {
    const passwordValue = methods.getValues()[needsValidationFrom];
    let confirmPasswordValue = methods.getValues()[name];
    confirmPasswordValue = confirmPassword;
    if (confirmPasswordValue === passwordValue) {
      setError("");
      return true;
    }
    setError(errorMessage);
    return false;
  };

  const activeError = error !== "";
  const emptyFieldWhenRequired =
    methods.formState.errors[name] &&
    methods.formState.errors[name].type === "required";
  const valueNotChanged = currentValue === value;

  const errorStyle =
    activeError || (emptyFieldWhenRequired && valueNotChanged)
      ? "input-error"
      : "";

  const requiredMessage = emptyFieldWhenRequired && valueNotChanged && (
    <span className={styles["error-text"]}>Este campo es requerido</span>
  );

  activeError &&
    (methods.formState.errors[name] = { type: "validation", message: error });

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, {
          value,
          required,
          validate: (value) => {
            let isValid = validatePassword(value);
            if (needsValidationFrom) {
              isValid = confirmPassword(value);
            }
            return isValid;
          },
        })}
        className={`${styles.input} ${styles[errorStyle]}`}
        type={!visible ? type : "text"}
        placeholder={placeholder}
        disabled={disabled}
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
          validatePassword(value);
          needsValidationFrom && confirmPassword(value);
        }}
      />
      <div className={styles.visibility}>
        <Button
          color="transparent-grey"
          action={(e) => {
            setVisible(!visible);
            e.preventDefault();
          }}
        >
          <VisibilityIcon />
        </Button>
      </div>
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default PasswordField;
