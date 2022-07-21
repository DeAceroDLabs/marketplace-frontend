import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { MultiFormProvider } from "config/multiFormContext";
import { DynamicDataProvider } from "config/dynamicDataContext";
import { getBase64 } from "config/utils";
import { createUser } from "config/user.api";
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
import SignupController from "./SignupController";
import styles from "./Signup.module.scss";

const Signup = () => {
  const forms = [generalSignupForm, locationSignupForm, taxSignupForm];
  const navigate = useNavigate();
  const formState = useForm();
  const [activeForm, setActiveForm] = useState(forms[0] as Form);
  const [openPopup, setopenPopup] = useState(false);
  const [dynamicData, setDynamicData] = useState({} as any);

  const onSubmit = async (data: FieldValues) => {
    const taxDoc = data["taxDocument"][0] as File;
    let taxDocAsB64 = "";
    await getBase64(taxDoc).then((data) => {
      taxDocAsB64 = (data as string).split(",")[1];
    });

    const userData = {
      name: data["name"],
      lastName: data["lastName"],
      rfc: data["taxRfc"],
      curp: data["taxCurp"],
      phone: data["phone"],
      fiscalDoc: taxDocAsB64,
      email: data["email"],
      additionalEmail: data["taxEmail"],
      password: data["password"],
    };

    const userLocation = {
      country: 1,
      zipCode: parseInt(data["zipCode"]),
      state: parseInt(dynamicData["cityId"]),
      city: parseInt(dynamicData["cityId"]),
      neighborhood: parseInt(data["neighborhood"]),
      street: data["street"],
      externalNumber: parseInt(data["externalNumber"]),
      lat: 0,
      lon: 0,
    };

    const user = { user: userData, location: userLocation };
    createUser(user)
      .then(() => {
        setopenPopup(true);
      })
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
