import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";
import Popup from "components/common/Popup";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Section from "components/common/Section";

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
          <Section title="Acerca de" variant="no-margin-title">
            <Button color="transparent-black" action={() => navigate("/conocenos")}>
              Conócenos
            </Button>
            <Button color="transparent-black" action={() => navigate("/ayuda")}>
              Ayuda
            </Button>
          </Section>
          <Section title="Contacto" variant="no-margin-title">
            <Button color="transparent-black" action={() => toggleClass()}>
              Contactar soporte
            </Button>
            <Button color="transparent-black" action={() => navigate("/preguntas")}>
              Preguntas frecuentes
            </Button>
            <Button color="transparent-black" action={() => navigate("/politicas")}>
              Politicas y condiciones
            </Button>
          </Section>
          {isActive && (
            <Popup title="Soporte" action={() => toggleClass()}>
              <div className={styles["popup-text"]}>
                <p>Envianos tus dudas a: </p>
                <Button color="transparent" action={() => window.alert("Correo copiado")}>
                  <CopyToClipboard text={"ejemplo@correo.com"}>
                    <div className={styles["copy-email"]}>
                      <p>ejemplo@correo.com</p>
                    </div>
                  </CopyToClipboard>
                </Button>
              </div>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
