import RenderForm from "components/RenderForm";
import { Form as FormType } from "forms/form.types";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

interface FormProps {
  inputForm: FormType;
  submitTitle: string;
  onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<FormProps> = ({ inputForm, onSubmit, submitTitle }) => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <RenderForm inputForm={inputForm} />
        <button type="submit">{submitTitle}</button>
      </form>
    </FormProvider>
  );
};
export default Form;
