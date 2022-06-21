import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";
import Tooltip from "components/common/Tooltip";
import Section from "components/common/Section";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
  const toggleTooltip = () => {
    setOpen(!isOpen);
  };

  const tooltip = useRef<any>();
  const closeTooltip = (e: any) => {
    if (tooltip.current && isOpen && !tooltip.current.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", closeTooltip);

  if (!username) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <div className={styles["info-white-container"]}>
        <div className={styles["info-text"]}>
          <Section title="Acerca de" variant="no-margin-title">
            <div className={styles.buttons}>
              <Button
                color="transparent-black"
                action={() => navigate("/conocenos")}
              >
                Conócenos
              </Button>
              <Button
                color="transparent-black"
                action={() => navigate("/ayuda")}
              >
                Ayuda
              </Button>
            </div>
          </Section>
          <Section title="Contacto" variant="no-margin-title">
            <div className={styles.buttons}>
              <Button color="transparent-black" action={() => toggleTooltip()}>
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
          </Section>
        </div>
      </div>
      {isOpen && (
        <div className={styles.tooltip} ref={tooltip}>
          <Tooltip title="Soporte" action={() => toggleTooltip()}>
            <div className={styles["tooltip-text"]}>
              <p>Envianos tus dudas a: </p>
              <Link
                className={styles["copy-email"]}
                to="#"
                onClick={(e) => {
                  window.location.href = "ejemplo@correo.com";
                  e.preventDefault();
                }}
              >
                {"ejemplo@correo.com"}
              </Link>
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default Footer;
