import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";

const Header: React.FC = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const pathIsHome = activePath === "/";
  const backgroundColor = pathIsHome ? "clean" : "color";
  return (
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      <div className={styles["logo-container"]}>
        <a href="/"><div id="logo" className={styles.logo}>
          Logo
        </div></a>
      </div>
      {!pathIsHome && <SearchBar />}
      <div className={styles["icon-container"]}>
        <a href="/login">
          <i id="user-icon" className="fa fa-user"></i>
        </a>
        <div className={styles.login}>
          Hola,&nbsp;
          <b>
            <a href="/login">Ingresa</a>
          </b>
        </div>
        <span id="shopping-cart" className="material-symbols-outlined">
          shopping_cart
        </span>
      </div>
    </div>
  );
};

export default Header;
