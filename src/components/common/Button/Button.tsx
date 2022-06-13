import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "primary-large" | "transparent" | "transparent-black" | "white";
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "transparent",
  action,
}) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
