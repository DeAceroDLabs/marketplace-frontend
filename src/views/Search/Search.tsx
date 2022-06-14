import React from "react";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState, useEffect } from "react";
import { Product } from "config/api.types";
import { searchProducts } from "config/api";
import { useParams } from "react-router-dom";
import Card from "components/common/Card";
import LoadingCard from "components/common/LoadingCard";
import GridContainer from "components/common/GridContainer";
import Section from "components/common/Section";

const Search: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  let productsCards;

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    query &&
      searchProducts(query).then((response) => {
        setProducts(response.data);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    productsCards = <LoadingCard cards={12} variant="medium" />;
    return (
      <View>
        <Section>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.query}>Cargando productos...</div>
            </div>
            <GridContainer>{productsCards}</GridContainer>
          </div>
        </Section>
      </View>
    );
  }

  if (products.length > 0) {
    productsCards = products.map((product) => {
      return (
        <Card
          key={product.ClaProducto}
          title={product.NomProducto}
          imgSrc={product.CategoriaUrlImagen}
          size="medium"
          loading={false}
        />
      );
    });

    return (
      <View>
        <Section>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.query}>“{query}”</div>
              <div className={styles["results-number"]}>
                {products.length} resultados
              </div>
            </div>
            <GridContainer>{productsCards}</GridContainer>
          </div>
        </Section>
      </View>
    );
  }

  return <ProductsNotFound />;
};

export default Search;
