import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Form } from "forms/form.types";
import Section from "components/common/Section";
import RenderForm from "components/RenderForm";
import styles from "./MultipleForm.module.scss";

interface MultipleFormsInterface {
  inputForms: Form[];
  submitTitle: string;
  onSubmit: (data: FieldValues) => void;
}

const MultipleForms: React.FC<MultipleFormsInterface> = ({
  inputForms,
  onSubmit,
  submitTitle,
}) => {
  const form = useForm();

  const forms = inputForms.map((form) => {
    return (
      <Section title={form.formTitle} key={form.formTitle}>
        {form.formDescription && (
          <p className={styles["form-description"]}>{form.formDescription}</p>
        )}
        <RenderForm inputForm={form} />
      </Section>
    );
  });
  return <FormProvider {...form}>{forms}</FormProvider>;
};

export default MultipleForms;
