import React from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState, useEffect } from "react";
import { Product } from "config/api.types";
import { searchProducts } from "config/api";
import { useLocation, useParams } from "react-router-dom";

const Search: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { query } = useParams() || "";
  const [products, setProducts] = useState<Product[]>([]);

  console.log(query);

  useEffect(() => {
    setProducts([])
    setLoading(true);
    searchProducts(query).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, [query]);

  if (products.length > 0) {
    return (
      <View>
        {loading && (
          <div className={styles.title}>
            <div className={styles.query}>Cargando productos...</div>
          </div>
        )}
        {!loading && (
          <div className={styles.title}>
            <div className={styles.query}>“{query}”</div>
            <div className={styles.results}>"{products.length} resultados"</div>
          </div>
        )}
      </View>
    );
  }

  return (
    <div>
      {loading && (
        <div className={styles.title}>
          <div className={styles.query}>Cargando productos...</div>
        </div>
      )}
      {!loading && <ProductsNotFound />}
    </div>
  );
};

export default Search;
