import React from "react";
import NotFound from "components/common/NotFound";
import styles from "./ProductsNotFound.module.scss";

const Search: React.FunctionComponent = () => {
  return (
    <NotFound
      title="No encontramos un producto que coincida con tu búsqueda"
      imgSrc="/not-found.jpg"
    >
      <div>
        Navega por las{" "}
        <a className={styles.a} href="/">
          categorías
        </a>{" "}
        para encontrar un producto similar
      </div>
    </NotFound>
  );
};

export default Search;
