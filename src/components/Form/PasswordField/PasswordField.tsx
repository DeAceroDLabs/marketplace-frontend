import { OptionsField } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./PasswordField.module.scss";
import validator from "validator";
import { generalSignupForm } from "forms/Signup/Signup.general";

const PasswordField: React.FC<OptionsField> = ({
  name,
  value,
  placeholder,
  label,
  required,
  type,
  disabled,
  errorMessage = "",
  needsValidateFrom,
  providesValidateFrom,
}) => {
  const [error, setError] = useState("");
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    generalSignupForm.fields.filter(
      (field) => field.name === providesValidateFrom
    )[0].value = password;
  };

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
    const passwordValue = generalSignupForm.fields.filter(
      (field) => field.name === needsValidateFrom
    )[0].value;
    let confirmPasswordValue = generalSignupForm.fields.filter(
      (field) => field.name === "password-confirm"
    )[0].value;
    confirmPasswordValue = confirmPassword;
    confirmPasswordValue === passwordValue
      ? setError("")
      : setError(errorMessage);
  };

  const errorStyle = error === "" ? "" : "input-error";

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        className={`${styles.input} ${styles["input-rfc"]} ${styles[errorStyle]}`}
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
          providesValidateFrom && updatePassword(e);
          validatePassword(e);
          needsValidateFrom && confirmPassword(e);
        }}
      />
      {methods.formState.errors[name] &&
        methods.formState.errors[name].type === "required" && (
          <span className={styles["error-text"]}>Este campo es requerido</span>
        )}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default PasswordField;
