import styles from "./Section.module.scss";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <div className={styles.title}> {title} </div>
      <div className={styles.body}> {children} </div>
    </>
  );
};

export default Section;
