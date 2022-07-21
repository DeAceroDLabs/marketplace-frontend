import styles from "./BgSection.module.scss";

interface BgSectionProps {
  bgImage?: string;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  position?: "left" | "right" | "top" | "middle";
}

const BgSection: React.FC<BgSectionProps> = ({
  children,
  bgImage,
  position = "left",
  color = "transparent",
  orientation = "horizontal",
}) => {
  return (
    <div className={`${styles[orientation]}`}>
      {bgImage && <img src={bgImage} className={`${styles.bgImage}`} alt="" />}
      <div className={`${styles.content} ${styles[color]} ${styles[position]}`}>
        {children}
      </div>
    </div>
  );
};

export default BgSection;
