import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  size?: "small" | "medium" | "large";
  loading?: "loading-true" | "loading-false";
  secondaryInfo?: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({
  title,
  size = "small",
  loading = "loading-false",
  imgSrc,
  secondaryInfo,
}) => {
  return (
    <div>
      <div className={`${styles.card} ${styles[size]} ${styles[loading]}`}>
        {(loading === "loading-false") && (
          <img className={styles.cardImage} src={imgSrc} alt="card" />
        )}
        {loading === "loading-true" && <div className={styles.cardImage} />}
        <div className={styles.cardInfo}>
          <div className={styles.cardName}> {title}</div>
          <div className={styles.secondaryInfo}> {secondaryInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;