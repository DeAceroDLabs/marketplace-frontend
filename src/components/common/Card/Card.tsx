import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  secondaryInfo?: string;
  imgSrc?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  size = "small",
  loading = false,
  imgSrc,
  secondaryInfo,
}) => {
  const loadingClass = loading ? "loading" : "";
  return (
    <div>
      <div role="group" className={`${styles.card} ${styles[size]} ${styles[loadingClass]}`}>
        {!loading ? (
          <img className={styles.cardImage} src={imgSrc} alt="card" />
        ) : (
          <div className={styles.cardImage} />
        )}
        <div className={styles.cardInfo}>
          <div className={styles.cardName}> {title}</div>
          <div className={styles.secondaryInfo}> {secondaryInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
