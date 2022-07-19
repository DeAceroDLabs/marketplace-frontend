import { OptionsField } from "forms/form.types";
import { useEffect, useState } from "react";
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
    if (validator.isMobilePhone(phoneValue, "es-MX")) {
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
          validate: (value) => validatePhone(value),
        })}
        className={`${styles.input} ${styles[errorStyle]}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          let phoneValue = e.target.value;
          const noPrefix =
            phoneValue.slice(0, 3) !== "+52" && phoneValue.length === 10;
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
