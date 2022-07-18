import { OptionsField } from "forms/form.types";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./EmailField.module.scss";
import validator from "validator";

const EmailField: React.FC<OptionsField> = ({
  name,
  value,
  placeholder,
  label,
  required,
  type,
  disabled,
  validateDomain,
  errorMessage = "",
}) => {
  const [error, setError] = useState("");
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);

  const validateEmail = (email: string) => {
    if (validator.isEmail(email)) {
      setError("");
      return true;
    }
    setError(errorMessage);
    return false;
  };

  const validateDomainEmail = (email: string) => {
    const isDomainEmail = email.split("@")[1] === validateDomain;
    if (isDomainEmail) {
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

  useEffect(() => {
    methods.clearErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

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
            let isValid = validateEmail(value);
            if (validateDomain) {
              isValid = validateDomainEmail(value);
            }
            return isValid;
          },
        })}
        className={`${styles.input} ${styles[errorStyle]}`}
        defaultValue={currentValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
          validateEmail(value);
          validateDomain && validateDomainEmail(value);
        }}
      />
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default EmailField;
