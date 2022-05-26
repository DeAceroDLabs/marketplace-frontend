import React from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState, useEffect } from "react";
import { Product } from "config/api.types";
import { searchProducts } from "config/api";
import { useLocation } from "react-router-dom";

const Search: React.FunctionComponent = () => {
  const location = useLocation();
  const [spinner, setSpinner] = useState(false);
  const query = location.pathname.split("/").pop() || "";
  const [products, setProducts] = useState<Product[]>([]);

  console.log(query);

  useEffect(() => {
    setSpinner(true);
    searchProducts(query).then((response) => {
      setSpinner(false);
      setProducts(response.data);
    });
  }, [query]);

  if (products.length > 0) {
    return (
      <View>
        {spinner && <div className={styles.title}> <div className={styles.query}>Loading products ..</div> </div>}
        {!spinner && (
          <div className={styles.title}>
            <div className={styles.query}>“{query}”</div>{" "}
            <div className={styles.results}>
              {" "}
              "{products.length} resultados"
            </div>
          </div>
        )}
      </View>
    );
  }

  return (
    <div>
      {spinner && (
        <div className={styles.title}>
          <div className={styles.query}>Loading products ..</div>
        </div>
      )}
      {!spinner && <ProductsNotFound />}
    </div>
  );
};

export default Search;
