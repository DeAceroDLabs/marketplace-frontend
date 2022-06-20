import { generalSignupForm } from "forms/Signup/Signup.general";
import { locationSignupForm } from "forms/Signup/Signup.location";
import { taxSignupForm } from "forms/Signup/Signup.tax";
import BgSection from "components/common/BgSection";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Signup.module.scss";
import MultipleForm from "components/Form/MultipleForms/MultipleForm";

const Signup = () => {
  const onSubmit = () => {};

  return (
    <View>
      <div className={styles["signup-container"]}>
        <Section>
          <div className={styles["form-container"]}>
            <MultipleForm
              inputForms={[
                generalSignupForm,
                locationSignupForm,
                taxSignupForm,
              ]}
              onSubmit={onSubmit}
              submitTitle={"Ingresar"}
            />
          </div>
        </Section>
        <BgSection color="primary" orientation="vertical" position="right" />
      </div>
    </View>
  );
};

export default Signup;
