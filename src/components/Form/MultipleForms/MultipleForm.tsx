import React, { useContext, useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
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
}

const MultipleForms: React.FC<MultipleFormsInterface> = ({
  inputForms,
  onSubmit,
}) => {
  const [currentForm, setcurrentForm] = useState(null as React.ReactNode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setActiveForm } = useContext(MultiFormContext);
  const form = useForm();

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

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
    setcurrentForm(forms[currentIndex]);
  };

  const onSubmitOneForm = (data: FieldValues) => {
    moveNext();
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
    setcurrentForm(forms[currentIndex]);
  };

  const BackButton = currentIndex > 0 && (
    <div className={`${styles["button-container-left"]} ${styles["back-button"]}`}>
      <Button color="primary" action={moveBack}>
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

  const lastForm = currentIndex === forms.length - 1;
  const SubmitButton = (
    <div className={styles["button-container-right"]}>
      <Button color="primary" action={() => onSubmit}>
        {"Finalizar"}
      </Button>
    </div>
  );

  const typeOfSubmit = lastForm ? onSubmit : onSubmitOneForm;

  return (
      <FormProvider {...form}>
        <div className={styles.container}>
          <form
            onSubmit={form.handleSubmit(typeOfSubmit)}
            className={styles["form-container"]}
          >
            {currentForm}
            <div className={styles["buttons-container"]}>
            {BackButton}
            {lastForm && SubmitButton}
            {!lastForm && ContinueButton}
            </div>
          </form>
        </div>
      </FormProvider>
  );
};

export default MultipleForms;