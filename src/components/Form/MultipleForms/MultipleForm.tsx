import React, { useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Form } from "forms/form.types";
import Section from "components/common/Section";
import RenderForm from "components/RenderForm";
import Button from "components/common/Button";
import styles from "./MultipleForm.module.scss";

interface MultipleFormsInterface {
  inputForms: Form[];
  onSubmit: (data: FieldValues) => void;
}

const MultipleForms: React.FC<MultipleFormsInterface> = ({
  inputForms,
  onSubmit,
}) => {
  const [currentForm, setcurrentForm] = useState(null as React.ReactNode);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    setcurrentForm(forms[currentIndex]);
    // eslint-disable-next-line
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
    setcurrentForm(forms[currentIndex]);
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
    setcurrentForm(forms[currentIndex]);
  };

  const BackButton = currentIndex > 0 && (
    <div className={`${styles["button-container"]} ${styles["back-button"]}`}>
      <Button color="primary" action={moveBack}>
        <ArrowBackIosNewIcon fontSize="small" className={styles["back-icon"]} />
      </Button>
    </div>
  );

  const ContinueButton = currentIndex < forms.length - 1 && (
    <div className={styles["button-container"]}>
      <Button color="primary" action={moveNext}>
        {"siguiente"}
      </Button>
    </div>
  );

  const SubmitButton = currentIndex === forms.length - 1 && (
    <div className={styles["button-container"]}>
      <Button color="primary" action={() => onSubmit}>
        {"siguiente"}
      </Button>
    </div>
  );

  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        {BackButton}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles["form-container"]}
        >
          {currentForm}
          {SubmitButton}
        </form>
        {ContinueButton}
      </div>
    </FormProvider>
  );
};

export default MultipleForms;
