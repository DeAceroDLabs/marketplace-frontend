import React, { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "config/api";
import { Product } from "config/api.types";
import BgSection from "components/common/BgSection";
import Card from "components/common/Card";
import GridContainer from "components/common/GridContainer";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import styles from "./Home.module.scss";
import { TabItem } from "components/common/common.types";
import SearchBar from "components/common/SearchBar";

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState<TabItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState({} as TabItem);

  useEffect(() => {
    fetchCategories().then((data) => {
      const categories = data.map(
        (category) =>
          ({
            id: category.IdCategoria,
            title: category.NomCategoria,
          } as TabItem)
      );
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    activeCategory?.id &&
      fetchProducts(activeCategory.id).then((data) => {
        const products = data;
        setProducts(products);
      });
  }, [activeCategory, categories]);

  const setCategoryActive = (category: TabItem) => {
    setActiveCategory(category);
  };

  const productsCards = products.map((product) => {
    return (
      <Card
        key={product.ClaProducto}
        title={product.NomProducto}
        imgSrc={product.CategoriaUrlImagen}
      />
    );
  });

  const homeHeader = (
    <BgSection bgImage="/background.png">
      <div className={styles["header-content"]}>
        <div className={styles["header-title"]}>
          Somos tu aliado de confianza para hacer crecer tu negocio
        </div>
        <SearchBar />
      </div>
      <div className={styles.red}></div>
    </BgSection>
  );

  return (
    <View header={homeHeader}>
      <Section title="Catálogo de Productos">
        <Tabs
          options={categories}
          variant="secondary"
          onSelectTab={setCategoryActive}
        />
        <GridContainer>{productsCards}</GridContainer>
      </Section>
    </View>
  );
};

export default Home;
