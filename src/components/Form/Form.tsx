import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Form as FormType } from "forms/form.types";
import Button from "components/common/Button";
import RenderForm from "components/RenderForm";
import styles from "./Form.module.scss";
import Section from "components/common/Section";

interface FormProps {
  inputForm: FormType;
  submitTitle: string;
  onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<FormProps> = ({ inputForm, onSubmit, submitTitle }) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles["form-container"]}
        >
          <Section title={inputForm.formTitle} titleSize="large">
            {inputForm.formDescription && (
              <p className={styles["form-description"]}>
                {inputForm.formDescription}
              </p>
            )}
            <RenderForm inputForm={inputForm} />
          </Section>
          <Button color="primary" action={() => onSubmit}>
            {submitTitle}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};
export default Form;
