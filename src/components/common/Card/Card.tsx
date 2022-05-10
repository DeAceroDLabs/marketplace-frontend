import styles from "./Card.module.scss";

interface CardProps {
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  size = "small",
}) => {

  let smallImage = '/card-image.png';
  let mediumImage = '/medium-card-image.png';
  let largeImage = '/large-card-image.png';

  if (size == "small"){
    return (

      <div>
        <div className={styles.small}>
          <img className={styles.productImage} src={smallImage} alt="card" />
          <div className={styles.productInfo}> Malla Graduada Triple Nudo Venadera -XTREME</div>
        </div>
      </div>
    );
  }
  else if (size == "medium"){
    return(
      <div>
      <div className={styles.large}>
        <img className={styles.productImage} src={mediumImage} alt="card" />
        <div className={styles.productInfo}> Malla Ciclónica Galvanizada</div>
      </div>
    </div>
    );
  }
  return (
    <div>
      <div className={styles.large}>
        <img className={styles.productImage} src={largeImage} alt="card" />
        <div className={styles.productInfo}>
        <div className={styles.name}> Grapa Cartonera</div>
          <div className={styles.price}> $1080-$1200</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
