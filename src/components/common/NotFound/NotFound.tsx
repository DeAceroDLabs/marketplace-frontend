import styles from "./NotFound.module.scss";

interface NotFoundProps {
  title:  string;
  buttonInfo?: string;
  imgSrc: string;
  info: string;
  
}

const NotFound: React.FC<NotFoundProps> = ({
  title,
  buttonInfo,
  imgSrc,
  info,
}) => {
  return (
    <div >
      <div className={styles.container}>
        <img className={styles.image} src={imgSrc} alt="Not found img" />
        <div className={styles.containerInfo}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>{info}</div>
          {/* Button won´t be showed if buttonInfo prop is not passed */}
          {buttonInfo && <button className={styles.buttonInfo}>{buttonInfo}</button>}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
