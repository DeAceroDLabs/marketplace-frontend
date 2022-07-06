import { OptionsField } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./PhoneField.module.scss";
import validator from "validator";

const PhoneField: React.FC<OptionsField> = ({
  name,
  value,
  placeholder,
  label,
  required,
  type,
  disabled,
  errorMessage = "",
}) => {
  const [error, setError] = useState("");
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);
  const validatePhone = (phoneValue: string ) => {
    validator.isMobilePhone(phoneValue, 'es-MX') ? setError("") : setError(errorMessage);
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
          let phoneValue = e.target.value;
          phoneValue = (phoneValue.slice(0, 3) !== '+52' && phoneValue.length === 10 ) ? `+52${phoneValue}` : phoneValue;   
          setCurrentValue(phoneValue);
          validatePhone(phoneValue);
        }}
      />
      {methods.formState.errors[name] && methods.formState.errors[name].type === "required" && (
          <span className={styles["error-text"]}>Este campo es requerido</span>
        )}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default PhoneField;