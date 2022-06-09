import { useEffect, useState } from "react";
import { Form } from "forms/form.types";
import Field from "components/Form/Field";

interface RenderFormProps {
  inputForm: Form;
}

const RenderForm: React.FC<RenderFormProps> = ({ inputForm }) => {
  const [elements, setElements] = useState({} as Form);
  const { fields } = elements ?? {};

  useEffect(() => {
    setElements(inputForm);
  }, [inputForm]);

  const formFields = fields
    ? fields.map((field) => <Field {...field} key={field.name}></Field>)
    : null;

  return <>{formFields}</>;
};

export default RenderForm;
