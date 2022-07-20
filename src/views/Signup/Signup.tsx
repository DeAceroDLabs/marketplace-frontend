import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
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
import SignupController from "./SignupController";
import { Neighborhood } from "config/api.types";
import { DynamicDataProvider } from "config/dynamicDataContext";
import { createAuth0User } from "config/user.api";

const Signup = () => {
  const forms = [generalSignupForm, locationSignupForm, taxSignupForm];
  const navigate = useNavigate();
  const formState = useForm();
  const [activeForm, setActiveForm] = useState(forms[0] as Form);
  const [openPopup, setopenPopup] = useState(false);
  const [dynamicData, setDynamicData] = useState([] as Neighborhood[]);

  const onSubmit = (data: FieldValues) => {
    const user = { email: data["email"], password: data["password"] };
    createAuth0User(user)
      .then(() => setopenPopup(true))
      .catch((error) => console.log(error));
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

  const signupForms = useMemo(
    () => ({
      forms,
      activeForm,
      setActiveForm,
    }),
    // eslint-disable-next-line
    [activeForm]
  );

  const formDynamicData = useMemo(
    () => ({
      dynamicData,
      setDynamicData,
    }),
    // eslint-disable-next-line
    [dynamicData]
  );

  return (
    <DynamicDataProvider value={formDynamicData}>
      <MultiFormProvider value={signupForms}>
        <View>
          <div className={styles.container}>
            <Section>
              <div className={styles["form-container"]}>
                <FormProvider {...formState}>
                  <SignupController />
                  <MultipleForm inputForms={forms} onSubmit={onSubmit} />
                </FormProvider>
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
    </DynamicDataProvider>
  );
};

export default Signup;
