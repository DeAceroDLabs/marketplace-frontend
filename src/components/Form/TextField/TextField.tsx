import { Field } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./TextField.module.scss";

const TextField: React.FC<Field> = ({
  name,
  value,
  placeholder,
  label,
  required,
  type,
  disabled,
}) => {
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);

  const emptyFieldWhenRequired =
    methods.formState.errors[name] &&
    methods.formState.errors[name].type === "required";
  const valueNotChanged = currentValue === value;

  const errorStyle = emptyFieldWhenRequired && valueNotChanged ? "input-error" : "";

  const requiredMessage = emptyFieldWhenRequired && valueNotChanged && (
    <span className={styles["error-text"]}>Este campo es requerido</span>
  );

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
        }}
      />
      {requiredMessage}
    </div>
  );
};

export default TextField;
