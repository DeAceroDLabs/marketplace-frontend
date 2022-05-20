import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FunctionComponent = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          name="search"
          id="site-search"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
