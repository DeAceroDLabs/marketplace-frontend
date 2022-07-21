import styles from "./Section.module.scss";

interface SectionProps {
  title?: string | React.ReactNode;
  titleSize?: "small" | "medium" | "large";
  children?: React.ReactNode;
  variant?: "margin-title" | "no-margin-title";
  widthSize?: "medium" | "large";
}

const Section: React.FC<SectionProps> = ({
  title,
  titleSize ="medium",
  children,
  variant = "margin-title",
  widthSize = "large"
}) => {
  return (
    <div className={`${styles[`${widthSize}-container-width`]} ${styles.container}`}>
      <div className={`${styles[`${titleSize}-title`]} ${styles[variant]}`}>{title} </div>
      <div className={styles.children}> {children} </div>
    </div>
  );
};

export default Section;
