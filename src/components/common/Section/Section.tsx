import styles from "./Section.module.scss";

interface SectionProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  variant: "margin-title" | "no-margin-title";
}

const Section: React.FC<SectionProps> = ({ title, children, variant }) => {
  return (
    <div className={styles.section}>
      <div className={styles[variant]}> {title} </div>
      <div className={styles.body}> {children} </div>
    </div>
  );
};

export default Section;
