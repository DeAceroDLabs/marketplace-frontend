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
    setActiveForm(inputForms[currentIndex]);
    // eslint-disable-next-line
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const moveBack = () => {
    setCurrentIndex(currentIndex - 1);
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
    <div className={styles["submit-container"]}>
      <Button color="primary" action={() => onSubmit}>
        {"Finalizar"}
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
          {forms}
          {SubmitButton}
        </form>
        {ContinueButton}
      </div>
    </FormProvider>
  );
};

export default MultipleForms;
