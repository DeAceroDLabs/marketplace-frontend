import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import UserContext from "config/userContext";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useContext(UserContext);
  const activePath = location.pathname;
  const pathIsHome = activePath === "/home" || "/";
  const backgroundColor = pathIsHome ? "clean" : "color";

  if (!username) {
    return null;
  }

  return (
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      <div className={styles["logo-container"]}>
        <Button action={() => navigate("/")}>
          <HomeIcon />
        </Button>
      </div>
      {!pathIsHome && <SearchBar />}
      <div className={styles["login-container"]}>
        <Button action={() => navigate("login")}>
          <div id="user-icon" className={styles["person-icon"]}>
            <PersonIcon sx={{ fontSize: 38 }} />
          </div>
          <div>
            Hola,&nbsp;
            <b>{username}</b>
          </div>
        </Button>
      </div>
      <div className={styles["shopping-cart-icon"]}>
        <Button action={() => {}}>
          <ShoppingCartIcon sx={{ fontSize: 33 }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
