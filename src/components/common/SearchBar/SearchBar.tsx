import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../Button";

const SearchBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const navigateToSearch = (query: string) => {
    navigate(`../search/${query}`);
  };

  const onPressEnter = (e: any) => {
    (e.key === "Enter") && navigateToSearch(query);

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
        <Button action={() => navigateToSearch(query)}>
          <SearchIcon sx={{ fontSize: 30 }} className={styles.search} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
