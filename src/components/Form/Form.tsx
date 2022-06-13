import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Form as FormType } from "forms/form.types";
import Button from "components/common/Button";
import RenderForm from "components/RenderForm";
import styles from "./Form.module.scss";

interface FormProps {
  inputForm: FormType;
  submitTitle: string;
  onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<FormProps> = ({ inputForm, onSubmit, submitTitle }) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles["form-container"]}
        >
          <RenderForm inputForm={inputForm} />
          <Button color="primary" action={() => onSubmit}>
            {submitTitle}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};
export default Form;
