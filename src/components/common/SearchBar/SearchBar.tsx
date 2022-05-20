import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const navigateToSearchPage = () => navigate(`search/${query}`);

  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      navigateToSearchPage();
    }
  }
  
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={_handleKeyDown}
        />
        <button onClick={navigateToSearchPage}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
