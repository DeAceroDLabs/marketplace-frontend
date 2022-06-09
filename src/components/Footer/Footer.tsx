import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  if (!username) {
    return null;
  }

  return (
    <div className={styles.footer}>
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
            <Button color="transparent-black" action={() => toggleClass()}>
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
          <div
            className={
              isActive ? `${styles["popup"]} ${styles.show}` : styles["popup"]
            }
            id="myPopup"
          >
            <b>Soporte</b>
            <div className={styles.close}>
              <Button color="transparent-black" action={() => toggleClass()}>
                <CloseIcon />
              </Button>
            </div>
            <div className={styles["popup-text"]}>
              <p>Envianos tus dudas a: </p>

              <Button
                color="transparent"
                action={() => window.alert("Correo copiado")}
              >
                <CopyToClipboard text={"ejemplo@correo.com"}>
                  <div className={styles["copy-email"]}>
                    <p>ejemplo@correo.com</p>
                  </div>
                </CopyToClipboard>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
