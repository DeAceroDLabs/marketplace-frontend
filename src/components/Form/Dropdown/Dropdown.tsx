import { Option, OptionsField } from "forms/form.types";
import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Dropdown.module.scss";

const Dropdown: React.FC<OptionsField> = ({
  name,
  label,
  value,
  required,
  disabled,
  options,
  dynamicOptionsProp,
  optionsContext,
}) => {
  const methods = useFormContext();
  const dynamicOptionsContext = useContext(
    optionsContext || ({} as any)
  ) as any;

  const availableOptions = dynamicOptionsProp
    ? dynamicOptionsContext[dynamicOptionsProp]
    : options;

  const defaultValue =
    availableOptions && availableOptions.length
      ? availableOptions[0].value
      : value;

  const [currentValue, setCurrentValue] = useState(defaultValue);

  const renderOptions =
    availableOptions?.length &&
    availableOptions.map((option: Option) => {
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
