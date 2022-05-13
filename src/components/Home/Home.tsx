import BgSection from "components/common/BgSection";
import Card from "components/common/Card";
import GridContainer from "components/common/GridContainer";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import { fetchCategories, fetchProducts } from "config/api";
import { Category, Product } from "config/api.types";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const [categoriesNames, setCategoriesNames] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState(categoriesNames[0]);

  useEffect(() => {
    const getCategoriesNames = (categories: Category[]) => {
      return categories.map((category: Category) => {
        return category.NomCategoria;
      });
    };
    fetchCategories().then((data) => {
      const categories = data;
      setCategories(categories);
      const categoriesNames = getCategoriesNames(categories);
      setCategoriesNames(categoriesNames);
    });
  }, []);

  useEffect(() => {
    const getCategoryId = (categoryTitle: string) => {
      return categories.find(
        (category) => category.NomCategoria === categoryTitle
      )?.IdCategoria;
    };
    const categoryId = getCategoryId(activeCategory) || 0;
    fetchProducts(categoryId).then((data) => {
      const products = data;
      setProducts(products);
    });
  }, [activeCategory, categories]);

  const setCategoryActive = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

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
      <Card
        key={product.ClaProducto}
        title={product.NomProducto}
        imgSrc={product.CategoriaUrlImagen}
      />
    );
  });

  return (
    <View header={homeHeader}>
      <Section title="Catálogo de Productos">
        <Tabs
          tabsTitles={categoriesNames}
          variant="secondary"
          onSelectTab={setCategoryActive}
        />
        <GridContainer>{productsCards}</GridContainer>
      </Section>
    </View>
  );
};

export default Home;
