import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const navigateToSearch = (query: string) => {
    navigate(`search/${query}`);
  };

  const onPressEnter = (e: any) => {
    if (e.key === "Enter") {
      navigateToSearch(query);
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
          value={query}
        />
        <button onClick={() => navigateToSearch(query)}>
          <SearchIcon sx={{ fontSize: 30 }}/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
