import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";

const Header: React.FC = () => {
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
      <div className={styles["icon-container"]}>
        <Button
          link="/login"
          variant="primary"
          text="Hola,"
          secondaryText="Ingresa"
        >
          <i id="user-icon" className="fa fa-user"></i>
        </Button>
      </div>
      <span id="shopping-cart" className="material-symbols-outlined">
        shopping_cart
      </span>
    </div>
  );
};

export default Header;
