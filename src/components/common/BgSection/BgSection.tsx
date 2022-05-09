import styles from "./BgSection.module.scss";

interface BgSectionProps {
  bgImage?: string;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

const BgSection: React.FC<BgSectionProps> = ({
  children,
  bgImage,
  orientation = "horizontal",
}) => {
  return (
    <div className={`${styles.container} ${styles[orientation]}`}>
      {bgImage && <img src={bgImage} className={`${styles.bgImage}`} alt="" />}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BgSection;
