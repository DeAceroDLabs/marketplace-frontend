import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;
  const pathIsHome = activePath === "/";
  const backgroundColor = pathIsHome ? "clean" : "color";
  return (
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      <div className={styles["logo-container"]}>
        <a href="/">
          <div id="logo" className={styles.logo}>
            Logo
          </div>
        </a>
      </div>
      {!pathIsHome && <SearchBar />}
      <div className={styles["login-container"]}>
        <Button
          color="primary"
          action={() => {
            navigate(`/login`);
          }}
        >
          <i id="user-icon" className="fa fa-user"></i>
          Hola,
          <b>
            <a href="/login">Ingresa</a>
          </b>
        </Button>
      </div>
      <span id="shopping-cart" className="material-symbols-outlined">
        shopping_cart
      </span>
    </div>
  );
};

export default Header;
