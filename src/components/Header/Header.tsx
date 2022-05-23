import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "components/common/SearchBar";

const Header: React.FC = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const pathIsHome = activePath === "/";
  const backgroundColor = pathIsHome ? "clean" : "color";
  const searchBarComponent = pathIsHome ? "doNotShowSearchBar" : "showSearchBar";
  return(
    <div className={`${styles.header} ${styles[backgroundColor]}`}>
      <div className={styles[searchBarComponent]}>
        <SearchBar />
      </div>
    </div>
  );
  
};

export default Header;
