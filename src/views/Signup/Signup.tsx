import { useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
import { MultiFormProvider } from "config/multiFormContext";
import { generalSignupForm } from "forms/Signup/Signup.general";
import { locationSignupForm } from "forms/Signup/Signup.location";
import { taxSignupForm } from "forms/Signup/Signup.tax";
import { Form } from "forms/form.types";
import BgSection from "components/common/BgSection";
import Section from "components/common/Section";
import View from "components/common/View";
import MultipleForm from "components/Form/MultipleForms";
import Stepper from "components/Form/Stepper";
import styles from "./Signup.module.scss";

const Signup = () => {
  const forms = [generalSignupForm, locationSignupForm, taxSignupForm];
  const [activeForm, setActiveForm] = useState(forms[0] as Form);
  const signupForms = useMemo(
    () => ({ forms, activeForm, setActiveForm }),
    // eslint-disable-next-line
    [activeForm]
  );

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <MultiFormProvider value={signupForms}>
      <View>
        <div className={styles.container}>
          <Section>
            <div className={styles["form-container"]}>
              <MultipleForm inputForms={forms} onSubmit={onSubmit} />
            </div>
          </Section>
          <BgSection color="primary" orientation="vertical" position="right">
            <Stepper
              title="Es muy fácil y rápido"
              steps={forms.map((form) => form.formTitle)}
            />
          </BgSection>
        </div>
      </View>
    </MultiFormProvider>
  );
};

export default Signup;
