import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "primary-large" | "transparent" | "transparent-black" | "white";
  action: (data?: any) => void;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "transparent",
  action,
  active = true,
}) => {
  const buttonClass = active ? "activeClass" : "";

  return (
    <button className={`${styles.button} ${styles[color]} ${styles[buttonClass]}`} onClick={action}>
      {children}
    </button>
  );
};

export default Button;