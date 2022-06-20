import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Form } from "forms/form.types";
import Section from "components/common/Section";
import RenderForm from "components/RenderForm";
import styles from "./MultipleForm.module.scss";
import React, { useEffect, useState } from "react";
import Button from "components/common/Button";

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
  const [currentForm, setcurrentForm] = useState(null as React.ReactNode);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    setcurrentForm(forms[currentIndex]);
    // eslint-disable-next-line
  }, [currentIndex]);

  const moveNext = () => {
    console.log(currentIndex);
    setCurrentIndex(currentIndex + 1);
    setcurrentForm(forms[currentIndex]);
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
    setcurrentForm(forms[currentIndex]);
  };

  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        {currentIndex > 0 && (
          <Button color="primary" action={moveBack}>
            {"<"}
          </Button>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles["form-container"]}
        >
          {currentForm}
          {currentIndex === forms.length - 1 && (
            <Button color="primary" action={() => onSubmit}>
              {"siguiente"}
            </Button>
          )}
        </form>
        {currentIndex < forms.length - 1 && (
          <Button color="primary" action={moveNext}>
            {"siguiente"}
          </Button>
        )}
      </div>
    </FormProvider>
  );
};

export default MultipleForms;
