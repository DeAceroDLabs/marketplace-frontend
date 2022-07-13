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
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    validator.isEmail(email) ? setError("") : setError(errorMessage);
  };
  const validateDomainEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isDomainEmail = email.split("@")[1] === validateDomain;
    isDomainEmail ? setError("") : setError(errorMessage);
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

  activeError && (methods.formState.errors[name] = {type: 'validation', message: error});

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        className={`${styles.input} ${styles[errorStyle]}`}
        defaultValue={currentValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
          validateEmail(e);
          validateDomain && validateDomainEmail(e);
        }}
      />
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default EmailField;
