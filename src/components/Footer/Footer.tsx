import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "config/userContext";
import Button from "components/common/Button";
import styles from "./Footer.module.scss";
import Tooltip from "components/common/Tooltip";
import MailTo from "components/common/MailTo";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!username) {
    return null;
  }
  const tooltipContent = (
    <div>
      <div className={styles.title}>Soporte</div>
      <div className={styles["tooltip-text"]}>
        <p>Envianos tus dudas a: </p>
        <MailTo email="ejemplo@correo.com">
        {"ejemplo@correo.com"}
        </MailTo>
      </div>
    </div>
  );

  const contactSupport = (
    <div>
      <Button color="transparent-black" action={() => void 0}>
        Contactar soporte
      </Button>
    </div>
  );

  return (
    <div className={styles.footer}>
      <div className={styles["info-white-container"]}>
        <div className={styles["info-text"]}>
          <div className={styles["info-text-container"]}>
            <div className={styles.title}>Acerca de</div>
            <div className={styles.buttons}>
              <Button
                color="transparent-black"
                action={() => navigate("/conocenos")}
              >
                Conócenos
              </Button>
              <Button
                color="transparent-black"
                action={() => navigate("/help")}
              >
                Ayuda
              </Button>
            </div>
          </div>
          <div className={styles["info-text-container"]}>
            <div className={styles.title}>Contacto</div>
            <div className={styles.buttons}>
              <Tooltip
                offset={[4, 30]}
                position="right center"
                triggerTooltip={contactSupport}
                isOpen={isOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
              >
                {tooltipContent}
              </Tooltip>
              <Button
                color="transparent-black"
                action={() => navigate("/ayuda")}
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
    </div>
  );
};

export default Footer;
