import { useContext } from "react";
import MultiFormContext from "config/multiFormContext";
import Step from "./Step/Step";
import styles from "./Stepper.module.scss";

interface StepperProps {
  title: string;
  steps: string[];
}

const Steps: React.FC<StepperProps> = ({ steps, title }) => {
  const { activeForm } = useContext(MultiFormContext);
  return (
    <div className={styles["stepper-wrapper"]}>
      <div className={styles.stepper}>
        <div className={styles.title}>{title}</div>
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
    </div>
  );
};

export default Steps;
