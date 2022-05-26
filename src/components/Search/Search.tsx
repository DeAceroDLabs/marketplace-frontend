import React from "react";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState, useEffect } from "react";
import { Product } from "config/api.types";
import { searchProducts } from "config/api";
import { useParams } from "react-router-dom";

const Search: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { query } = useParams() || "";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    searchProducts(query).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, [query]);

  if (loading) {
    return <div className={styles.query}>Cargando productos...</div>;
  }

  if (products.length > 0) {
    return (
      <View>
        <div className={styles.title}>
          <div className={styles.query}>“{query}”</div>
          <div className={styles.results}>"{products.length} resultados"</div>
        </div>
      </View>
    );
  }

  return <ProductsNotFound />;
};

export default Search;
