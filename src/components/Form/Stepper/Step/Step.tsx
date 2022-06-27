import styles from "./Step.module.scss";

interface StepProps {
  step: string;
  isSelected: boolean;
}

const Step: React.FC<StepProps> = ({ step, isSelected }) => {
  return (
    <div className={styles.step}>
      <div className={styles["step-checkbox"]}>
        {isSelected && <div className={styles.selected} />}
      </div>
      <div className={styles["step-title"]}>{step}</div>
    </div>
  );
};
export default Step;
