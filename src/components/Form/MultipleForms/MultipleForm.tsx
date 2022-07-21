import React, { useContext, useEffect, useState } from "react";
import { FieldValues, FormProvider, useFormContext } from "react-hook-form";
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
  const form = useFormContext();
  const [currentForm, setcurrentForm] = useState(null as React.ReactNode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setActiveForm } = useContext(MultiFormContext);

  const forms = inputForms.map((form) => {
    return (
      <div
        key={form.formTitle}
        className={inputForms[currentIndex] !== form ? `${styles.hidden}` : ""}
      >
        <Section title={form.formTitle} titleSize="large">
          {form.formDescription && (
            <p className={styles["form-description"]}>{form.formDescription}</p>
          )}
          <RenderForm inputForm={form} />
        </Section>
      </div>
    );
  });

  const lastForm = currentIndex === forms.length - 1;
  const firstForm = currentIndex === 0;
  const sendLastForm = onSubmit;
  const typeOfSubmit = lastForm ? sendLastForm : () => {};

  useEffect(() => {
    setcurrentForm(forms[currentIndex]);
    setActiveForm(inputForms[currentIndex]);
    // eslint-disable-next-line
  }, [currentIndex]);

  const moveNext = async () => {
    let tempCurrentIndex = currentIndex;
    const isValid = await form.trigger();
    if (isValid) {
      setCurrentIndex(tempCurrentIndex + 1);
      setcurrentForm(forms[tempCurrentIndex]);
    }
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
    setcurrentForm(forms[currentIndex]);
  };

  const BackButton = (
    <div
      className={`${styles["button-container-left"]} ${styles["back-button"]}`}
    >
      <Button color="primary" action={moveBack}>
        <ArrowBackIosNewIcon fontSize="small" className={styles["back-icon"]} />
      </Button>
    </div>
  );

  const ContinueButton = (
    <div className={styles["button-container-right"]}>
      <Button color="primary" action={moveNext}>
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
