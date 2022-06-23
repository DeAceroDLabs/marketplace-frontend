import { OptionsField } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Dropdown.module.scss";

const Dropdown: React.FC<OptionsField> = ({
  name,
  label,
  value,
  required,
  disabled,
  options,
}) => {
  const methods = useFormContext();
  const defaultValue = options && options.length ? options[0].value : value;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const renderOptions =
    options?.length &&
    options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <select
        {...methods.register(name, { value, required })}
        className={styles.input}
        defaultValue={currentValue}
        disabled={disabled}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
        }}
      >
        {renderOptions}
      </select>
    </div>
  );
};

export default Dropdown;
