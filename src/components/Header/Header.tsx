import { useLocation } from "react-router-dom";
import SearchBar from "components/common/SearchBar";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const pathIsHome = activePath === "/";
  const backgroundColor = pathIsHome ? "clean" : "color";
  return (
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      {!pathIsHome && <SearchBar />}
    </div>
  );
};

export default Header;
