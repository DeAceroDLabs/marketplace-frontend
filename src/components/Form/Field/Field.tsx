import { Field as FieldProps } from "forms/form.types";
import TextField from "../TextField";

const Field: React.FC<FieldProps> = ({
  name,
  label,
  value,
  type,
  required,
  placeholder,
}) => {
  const props = {
    name,
    label,
    value,
    type,
    required,
    placeholder,
  };

  switch (type) {
    case "text" || "password":
      return <TextField {...props} />;
    default:
      return null;
  }
};

export default Field;
