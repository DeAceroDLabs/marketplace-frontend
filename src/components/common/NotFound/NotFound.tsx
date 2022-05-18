import styles from "./NotFound.module.scss";

interface NotFoundProps {
  title:  string;
  imgSrc: string;
  children: React.ReactNode;
  
}

const NotFound: React.FC<NotFoundProps> = ({
  title,
  imgSrc,
  children,
}) => {
  return (
    <div >
      <div className={styles.container}>
        <img className={styles.image} src={imgSrc} alt="Not found img" />
        <div className={styles.containerInfo}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
