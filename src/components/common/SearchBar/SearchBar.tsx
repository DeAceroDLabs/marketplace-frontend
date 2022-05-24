import { searchProducts } from "config/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const navigateToSearch = (query: string) => {
    navigate(`search/${query}`);
  };

  const fetchSearch = () => {
    searchProducts(query).then((response) => console.log(response));
    navigateToSearch(query);
  };

  const onPressEnter = (e: any) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onPressEnter}
        />
        <button onClick={fetchSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
