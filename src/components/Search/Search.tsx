import React from "react";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState, useEffect } from "react";
import { Product } from "config/api.types";
import { searchProducts } from "config/api";
import { useParams } from "react-router-dom";
import Card from "components/common/Card";
import GridContainer from "components/common/GridContainer";

const Search: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    query &&
      searchProducts(query).then((response) => {
        setProducts(response.data);
        setLoading(false);
      });
  }, [query]);

  const productsCards = products.map((product) => {
    return (
      <Card
        key={product.ClaProducto}
        title={product.NomProducto}
        imgSrc={product.CategoriaUrlImagen}
        size="medium"
      />
    );
  });

  if (loading) {
    return (
      <div className={styles.info}>
        <div className={styles.query}>Cargando productos...</div>
      </div>
    );
  }

  if (products.length > 0) {
    return (
      <View>
        <div className={styles.info}>
          <div className={styles.query}>“{query}”</div>
          <div className={styles["results-number"]}>
            {products.length} resultados
          </div>
        </div>
        <GridContainer>{productsCards}</GridContainer>
      </View>
    );
  }

  return <ProductsNotFound />;
};

export default Search;
