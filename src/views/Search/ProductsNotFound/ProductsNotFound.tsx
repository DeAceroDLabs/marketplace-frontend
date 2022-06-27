import React from "react";
import NotFound from "components/common/NotFound";
import styles from "./ProductsNotFound.module.scss";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

const Search: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <NotFound
      title="No encontramos un producto que coincida con tu búsqueda"
      imgSrc="/product-not-found.jpg"
    >
      <div>
        Navega por las
        <div className={styles.categories}>
        <Button color="white"  action={() => navigate("/")}>
          categorías
        </Button>
        </div>
        para encontrar un producto similar
      </div>
    </NotFound>
  );
};

export default Search;
