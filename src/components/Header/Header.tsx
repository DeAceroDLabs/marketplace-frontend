import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import UserContext from "config/userContext";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";
import styles from "./Header.module.scss";
import Tooltip from "components/common/Tooltip";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useContext(UserContext);
  const activePath = location.pathname;
  const pathIsHome = activePath === "/";
  const backgroundColor = pathIsHome ? "clean" : "color";

  const [isOpen, setOpen] = useState(false);
  const toggleTooltip = () => {
    setOpen(!isOpen);
  };

  const tooltip = useRef<any>();
  const cartButton = useRef<any>();
  const closeTooltip = (e: any) => {
    if (isOpen && !tooltip.current.contains(e.target) && !cartButton.current.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", closeTooltip);

  const tooltipContent = (
    <div className={styles["tooltip-children"]}>
    <div className={styles["tooltip-text"]}>
      <p>¡No tienes artículos en tu carrito! </p>
    </div>
    <img
      className={styles["tooltip-img"]}
      src="/empty-cart.jpg"
      alt="empty-cart"
    />
    <div className={styles["tooltip-button"]}>
      <Button
        color="primary"
        action={() => {
          navigate("cart");
          toggleTooltip();
        }}
      >
        <div>Agrega productos al carrito</div>
      </Button>
    </div>
  </div>
  );


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
      <div className={styles["shopping-cart-icon"]}  ref={cartButton}>
        <Button action={() => toggleTooltip()}>
          <ShoppingCartIcon sx={{ fontSize: 33 }} />
        </Button>
      </div>
      {isOpen && (
        <div className={styles.tooltip} ref={tooltip}>
          <Tooltip title="Mi carrito" action={() => toggleTooltip()}>
            {tooltipContent}
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default Header;
