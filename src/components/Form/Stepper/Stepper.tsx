import { useContext } from "react";
import MultiFormContext from "config/multiFormContext";
import Step from "./Step/Step";
import styles from "./Stepper.module.scss";

interface StepperProps {
  steps: string[];
}

const Steps: React.FC<StepperProps> = ({ steps }) => {
  const { activeForm } = useContext(MultiFormContext);
  return (
    <div className={styles.stepper}>
      <div className={styles["stepper-selector"]}>
        <div className={styles.line} />
        {steps.map((step) => (
          <Step
            key={step}
            step={step}
            isSelected={activeForm.formTitle === step}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
