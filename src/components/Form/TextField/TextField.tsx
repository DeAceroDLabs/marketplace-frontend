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
}) => {
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        className={styles.input}
        defaultValue={currentValue}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
        }}
      />
    </div>
  );
};

export default TextField;
