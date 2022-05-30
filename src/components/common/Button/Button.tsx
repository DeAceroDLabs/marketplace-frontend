import styles from "./Button.module.scss";

interface ButtonProps {
  link: string;
  text?: string;
  children?: React.ReactNode;
  secondaryText?: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, children, link, secondaryText,variant }) => {
  return (
    <a href={link} className={styles[variant]}>
      {children}
      <div className={styles.text}>
        {text}&nbsp;
        {secondaryText && <b>{secondaryText}</b>}
      </div>
    </a>
  );
};

export default Button;
