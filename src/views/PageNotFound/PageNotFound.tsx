import React from "react";
import NotFound from "components/common/NotFound";
import styles from "./PageNotFound.module.scss";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <NotFound title="Página no encontrada" imgSrc="/page-not-found.jpg">
      <div className={styles["info-container"]}>
        <div>
          No hemos podido encontrar la página que buscas pero puedes seguir
          navegando en marketplace.
        </div>
        <Button color="primary-large" action={() => navigate("/")}>
          Ir a home
        </Button>
      </div>
    </NotFound>
  );
};

export default PageNotFound;
