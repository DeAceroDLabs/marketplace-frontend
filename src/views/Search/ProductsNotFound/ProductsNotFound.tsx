import React from "react";
import NotFound from "components/common/NotFound";
import styles from "./ProductsNotFound.module.scss";

const Search: React.FunctionComponent = () => {
  return (
    <NotFound
      title="No encontramos un producto que coincida con tu búsqueda"
      imgSrc="/product-not-found.jpg"
    >
      <div>
        Navega por las&nbsp;
        <a className={styles.a} href="/">
          categorías
        </a>
        &nbsp;para encontrar un producto similar
      </div>
    </NotFound>
  );
};

export default Search;
