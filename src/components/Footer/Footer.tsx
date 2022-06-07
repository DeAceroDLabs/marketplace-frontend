import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);

  if (!username) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.subscribing}>
        <div className={styles.text}>
          Sé el primero en enterarte de ofertas y novedades. Compártenos tu
          correo y te mantendremos al tanto de todo.
        </div>
        <div className={styles.email}>
          <input placeholder="Escribe tu correo electónico" type="text" />
          <button>Suscribete</button>
        </div>
      </div>
      <div className={styles["info-white-container"]}>
        <div className={styles["info-text"]}>
          <div className={styles["acerca-de"]}>
            <b>Acerca de</b>
            <Button
              color="transparent-black"
              action={() => navigate("/conocenos")}
            >
              Conócenos
            </Button>
            <Button color="transparent-black" action={() => navigate("/ayuda")}>
              Ayuda
            </Button>
          </div>
          <div className={styles.contacto}>
            <b>Contacto</b>
            <Button
              color="transparent-black"
              action={() => navigate("/soporte")}
            >
              Contactar soporte
            </Button>
            <Button
              color="transparent-black"
              action={() => navigate("/preguntas")}
            >
              Preguntas frecuentes
            </Button>
            <Button
              color="transparent-black"
              action={() => navigate("/politicas")}
            >
              Politicas y condiciones
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
