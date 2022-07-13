import { OptionsField } from "forms/form.types";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./RFCField.module.scss";
import validateRfc from "validate-rfc/src/index";

const RFCField: React.FC<OptionsField> = ({
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
  const validateRFC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rfc = e.target.value;
    validateRfc(rfc).isValid ? setError("") : setError(errorMessage);
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

  activeError && (methods.formState.errors[name] = {type: 'validation', message: error});

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        className={`${styles.input} ${styles["input-rfc"]} ${styles[errorStyle]}`}
        defaultValue={currentValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
          validateRFC(e);
        }}
      />
      {requiredMessage}
      {error !== "" && <div className={styles["error-text"]}> {error}</div>}
    </div>
  );
};

export default RFCField;
