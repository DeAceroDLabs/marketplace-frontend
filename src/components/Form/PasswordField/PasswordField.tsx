import { OptionsField } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./PasswordField.module.scss";
import validator from "validator";

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


  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
      ? setError("")
      : setError(errorMessage);
  };

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    const passwordValue = methods.getValues()[needsValidationFrom];
    let confirmPasswordValue = methods.getValues()[name];
    confirmPasswordValue = confirmPassword;
    confirmPasswordValue === passwordValue
      ? setError("")
      : setError(errorMessage);
  };

  const errorStyle = ((error !== "") || (methods.formState.errors[name] && methods.formState.errors[name].type === "required" && currentValue === value) )? "input-error" : "";
  const requiredMessage = (methods.formState.errors[name] && methods.formState.errors[name].type === "required") && currentValue === value ? <span className={styles["error-text"]}>Este campo es requerido</span> : null;

  if(error !== ""){
    methods.formState.errors[name] = error;
  }
  
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        className={`${styles.input} ${styles[errorStyle]}`}
        value={currentValue}
        type={type}
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
          validatePassword(e);
          needsValidationFrom && confirmPassword(e);
        }}
      />
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default PasswordField;
