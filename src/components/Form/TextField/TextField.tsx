import { Field } from "forms/form.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const TextField: React.FC<Field> = ({
  name,
  value,
  placeholder,
  label,
  required,
}) => {
  const methods = useFormContext();
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <>
      <label>{label}</label>
      <input
        {...methods.register(name, { value, required })}
        defaultValue={currentValue}
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value;
          setCurrentValue(value);
        }}
      />
    </>
  );
};

export default TextField;
