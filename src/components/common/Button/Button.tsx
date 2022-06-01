import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  color: "logo" | "primary" | "secondary";
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, action }) => {
  return (
    <button className={styles[color]} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
