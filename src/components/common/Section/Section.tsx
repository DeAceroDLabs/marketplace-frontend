import styles from "./Section.module.scss";

interface SectionProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  variant?: "margin-title" | "no-margin-title";
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  variant = "margin-title",
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles[variant]}`}>{title} </div>
      <div className={styles.body}> {children} </div>
    </div>
  );
};

export default Section;
