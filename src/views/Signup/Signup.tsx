import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Popup from "components/common/Popup";
import StateIcon from "components/common/StateIcon";
import Button from "components/common/Button";
import styles from "./Signup.module.scss";

const Signup = () => {
  const forms = [generalSignupForm, locationSignupForm, taxSignupForm];
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState(forms[0] as Form);
  const [openPopup, setopenPopup] = useState(false);
  const signupForms = useMemo(
    () => ({ forms, activeForm, setActiveForm }),
    // eslint-disable-next-line
    [activeForm]
  );

  const onSubmit = (data: FieldValues) => {
    setopenPopup(true);
  };

  const popupContent = (
    <div className={styles.popup}>
      <StateIcon state="success" />
      <div className={styles["popup-text"]}>
        <strong>Felicidades</strong>
        <p>
          Has completado tu registro. En breve recibirás un correo de nuestra
          parte para que confirmes tu cuenta
        </p>
      </div>
      <Button color="primary" action={() => navigate("../login")}>
        Ir a Login
      </Button>
    </div>
  );

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
      <Popup open={openPopup} onClose={() => {}} content={popupContent} />
    </MultiFormProvider>
  );
};

export default Signup;
