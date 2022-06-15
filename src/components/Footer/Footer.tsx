import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";
import Popup from "components/common/Popup";
import Section from "components/common/Section";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const [isActive, setActive] = useState(false);
  const togglePopup = () => {
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
            <Button color="transparent-black" action={() => togglePopup()}>
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
            <Popup title="Soporte" color="white" size="small" action={() => togglePopup()}>
              <div className={styles["popup-text"]}>
                <p>Envianos tus dudas a: </p>          
                  <Link className={styles["copy-email"]}
                    to='#'
                    onClick={(e) => {
                    window.location.href = "ejemplo@correo.com";
                    e.preventDefault();
                    }}
                  >
                  {"ejemplo@correo.com"}
                  </Link>
              </div>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;