import { OptionsField } from "forms/form.types";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./TextField.module.scss";

const TextField: React.FC<OptionsField> = ({
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
  const [status, setStatus] = useState("");

  useEffect(() => {
    methods.clearErrors(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const validateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    text !== ""
      ? setStatus("writing")
      : setStatus("not writing");
  };


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
          methods.formState.errors[name]  && validateText(e);
        }}
      />
      {requiredMessage}
    </div>
  );
};

export default TextField;
