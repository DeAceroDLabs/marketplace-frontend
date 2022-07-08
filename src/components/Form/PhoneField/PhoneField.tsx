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
  const validatePhone = (phoneValue: string) => {
    validator.isMobilePhone(phoneValue, "es-MX")
      ? setError("")
      : setError(errorMessage);
  };

  const noError = error !== "";
  const emptyFieldWhenRequired =
    methods.formState.errors[name] &&
    methods.formState.errors[name].type === "required";
  const valueNotChanged = currentValue === value;

  const errorStyle = noError || (emptyFieldWhenRequired && valueNotChanged) ? "input-error" : "";

  const requiredMessage = emptyFieldWhenRequired && valueNotChanged && (
    <span className={styles["error-text"]}>Este campo es requerido</span>
  );

  noError && (methods.formState.errors[name] = error);

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
        onChange={(e) => {
          let phoneValue = e.target.value;
          const noPrefix = phoneValue.slice(0, 3) !== "+52" && phoneValue.length === 10;
          phoneValue = noPrefix ? `+52${phoneValue}` : phoneValue;
          setCurrentValue(phoneValue);
          validatePhone(phoneValue);
        }}
      />
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default PhoneField;
