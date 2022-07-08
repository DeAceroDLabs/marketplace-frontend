import { OptionsField } from "forms/form.types";
import { useState } from "react";
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
    const isDeAceroEmail = email.split("@")[1] === validateDomain;;
    isDeAceroEmail ? setError("") : setError(errorMessage);
  };

  const errorStyle = ((error !== "") || (methods.formState.errors[name] && methods.formState.errors[name].type === "required" && currentValue === value) )? "input-error" : "";
  const requiredMessage = (methods.formState.errors[name] && methods.formState.errors[name].type === "required") && currentValue === value ? <span className={styles["error-text"]}>Este campo es requerido</span> : null;

  error !== "" && (methods.formState.errors[name] = error);
  
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
