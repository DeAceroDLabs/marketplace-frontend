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
  validateDomain
}) => {
  const [error, setError] = useState("");
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    validator.isEmail(email) ? setError("") : setError("Favor de ingresar un correo valido");
  };
  const validateDeAceroEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isDeAceroEmail = email.split("@")[1] === "deacero.com";
    isDeAceroEmail ? setError("") : setError("Favor de ingresar un correo de DEACERO");
  };
  
  const errorStyle = error === "" ? "" : "input-error";

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
          validateDomain && validateDeAceroEmail(e);
        }}
      />
      {methods.formState.errors[name] && methods.formState.errors[name].type === "required" && (
          <span className={styles["error-text"]}>Este campo es requerido</span>
        )}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default EmailField;
