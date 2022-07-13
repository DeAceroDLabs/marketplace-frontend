import React, { useContext, useEffect, useState } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Form } from "forms/form.types";
import Section from "components/common/Section";
import RenderForm from "components/RenderForm";
import Button from "components/common/Button";
import styles from "./MultipleForm.module.scss";
import MultiFormContext from "config/multiFormContext";

interface MultipleFormsInterface {
  inputForms: Form[];
  onSubmit: (data: FieldValues) => void;
  form: UseFormReturn<FieldValues, any>;
}

const MultipleForms: React.FC<MultipleFormsInterface> = ({
  inputForms,
  onSubmit,
  form,
}) => {
  const [currentForm, setcurrentForm] = useState(null as React.ReactNode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setActiveForm } = useContext(MultiFormContext);
  const [noFormErrors, setNoFormErrors] = useState(true);

  const forms = inputForms.map((form) => {
    return (
      <div
        key={form.formTitle}
        className={inputForms[currentIndex] !== form ? `${styles.hidden}` : ""}
      >
        <Section title={form.formTitle}>
          {form.formDescription && (
            <p className={styles["form-description"]}>{form.formDescription}</p>
          )}
          <RenderForm inputForm={form} />
        </Section>
      </div>
    );
  });

  useEffect(() => {
    setcurrentForm(forms[currentIndex]);
    setActiveForm(inputForms[currentIndex]);
    // eslint-disable-next-line
  }, [currentIndex]);

  useEffect(() => {
    const noError = Object.keys(form.formState.errors).length === 0;
    setNoFormErrors(noError);
  }, [form.formState.errors]);

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
    setcurrentForm(forms[currentIndex]);
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
    setcurrentForm(forms[currentIndex]);
  };

  const doNotLetAdvance = () => {
    setcurrentForm(forms[currentIndex]);
    setActiveForm(inputForms[currentIndex]);
  };

  const firstErrorFieldName = Object.keys(form.formState.errors)[0];

  const notFoundErrors =
    noFormErrors &&
    (Object.keys(form.formState.errors).length === 0 ||
      form.formState.errors[firstErrorFieldName] !== "...");

  const onSubmitOneFormNext = (data: FieldValues) => {
    notFoundErrors && moveNext();
  };

  const lastForm = currentIndex === forms.length - 1;

  const firstForm = currentIndex === 0;

  const sendLastForm = notFoundErrors ? onSubmit : doNotLetAdvance;

  const typeOfSubmit = lastForm ? sendLastForm : onSubmitOneFormNext;

  const BackButton = (
    <div
      className={`${styles["button-container-left"]} ${styles["back-button"]}`}
    >
      <Button
        color="primary"
        action={notFoundErrors ? moveBack : doNotLetAdvance}
      >
        <ArrowBackIosNewIcon fontSize="small" className={styles["back-icon"]} />
      </Button>
    </div>
  );

  const ContinueButton = (
    <div className={styles["button-container-right"]}>
      <Button color="primary" action={() => onSubmit}>
        {"siguiente"}
      </Button>
    </div>
  );

  const SubmitButton = (
    <div className={styles["button-container-right"]}>
      <Button color="primary" action={() => onSubmit}>
        {"Finalizar"}
      </Button>
    </div>
  );

  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        <form
          onSubmit={form.handleSubmit(typeOfSubmit)}
          className={styles["form-container"]}
        >
          {currentForm}
          <div className={styles["buttons-container"]}>
            {!firstForm && BackButton}
            {lastForm && SubmitButton}
            {!lastForm && ContinueButton}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default MultipleForms;
