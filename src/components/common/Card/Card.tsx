import styles from "./Card.module.scss";

interface CardProps {
  title:  string;
  size?: "small" | "medium" | "large";
  secondaryInfo?: string
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({
  title,
  size = "small",
  imgSrc,
  secondaryInfo,
}) => {
  return (
    <div>
      <div className={`${styles.card} ${styles[size]}`}>
        <img className={styles.cardImage} src={imgSrc} alt="card" />
        <div className={styles.cardInfo}>
          <div className={styles.cardName}> {title}</div>
          <div className={styles.secondaryInfo}> {secondaryInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
