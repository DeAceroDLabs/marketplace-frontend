import { useEffect, useState } from "react";
import { Form } from "forms/form.types";
import Field from "components/Form/Field";
import styles from "./RenderForm.module.scss";

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

  return <div className={styles["form-container"]}>{formFields}</div>;
};

export default RenderForm;
