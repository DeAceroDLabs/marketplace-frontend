import BgSection from "components/common/BgSection";
import Card from "components/common/Card";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import { fetchCategories, fetchProducts } from "config/api";
import { Category, Product } from "config/api.types";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getCategoriesNames = (categories: Category[]) => {
      return categories.map((category: Category) => {
        return category.NomCategoria;
      });
    };
    fetchCategories().then((data) => {
      const categories = data;
      const categoriesNames = getCategoriesNames(categories);
      setCategories(categoriesNames);
    });
  }, []);

  useEffect(() => {
    fetchProducts(1).then((data) => {
      const products = data;
      setProducts(products);
    });
  }, []);

  const homeHeader = (
    <BgSection bgImage="/background.png">
      <div className={styles["header-content"]}>
        <div className={styles["header-title"]}>
          Somos tu aliado de confianza para hacer crecer tu negocio
        </div>
      </div>
      <div className={styles.red}></div>
    </BgSection>
  );

  const productsCards = products.map((product) => {
    return (
      <Card title={product.NomProducto} imgSrc={product.CategoriaUrlImagen} />
    );
  });

  return (
    <View header={homeHeader}>
      <Section title="Catálogo de Productos">
        <Tabs tabsTitles={categories} variant="secondary" />
        {productsCards}
      </Section>
    </View>
  );
};

export default Home;
