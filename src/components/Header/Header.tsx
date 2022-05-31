import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          <div id="user-icon" className={styles["person-icon"]}>
            <PersonIcon sx={{ fontSize: 38 }} />
          </div>
          <div>
            Hola,&nbsp;
            <b>Ingresa</b>
          </div>
        </Button>
      </div>
      <div className={styles["shopping-cart-icon"]}>
        <ShoppingCartIcon sx={{ fontSize: 33 }} />
      </div>
    </div>
  );
};

export default Header;
