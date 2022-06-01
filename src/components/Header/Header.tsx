import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactoryIcon from "@mui/icons-material/Factory";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;
  const pathIsHome = activePath === "/home" || "/";
  const backgroundColor = pathIsHome ? "clean" : "color";
  return (
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      <div id="logo" className={styles["logo-container"]}>
        <Button
          color="logo"
          action={() => {
            navigate(`/`);
          }}
        >
          <FactoryIcon />
        </Button>
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
      <Button color="primary"
          action={() => {
            navigate(`/cart`);
          }}>
      <ShoppingCartIcon sx={{ fontSize: 33 }} />
      </Button>
      </div>
    </div>
  );
};

export default Header;
