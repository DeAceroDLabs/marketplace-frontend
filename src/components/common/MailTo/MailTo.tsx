import styles from "./MailTo.module.scss";

interface MailToProps {
  children?: React.ReactNode;
  email: string;
}

const MailTo: React.FC<MailToProps> = ({ children, email }) => {
  return (
    <a className={styles.mail} href={`mailto:${email}`}>
      {children}
    </a>
  );
};

export default MailTo;
