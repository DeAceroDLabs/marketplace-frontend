import { useNavigate } from "react-router-dom";
import Button from "components/common/Button";
import styles from "./Suscribing.module.scss";

const Suscribing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.subscribing}>
      <div className={styles.text}>
        Sé el primero en enterarte de ofertas y novedades. Compártenos tu correo
        y te mantendremos al tanto de todo.
      </div>
      <div className={styles.email}>
        <input placeholder="Escribe tu correo electónico" type="text" />
        <div className={styles["button-container"]}>
          <Button color="white" action={() => navigate("/")}>
            Suscribete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suscribing;
