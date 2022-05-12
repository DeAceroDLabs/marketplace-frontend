import BgSection from "components/common/BgSection";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import { fetchCategories } from "config/api";
import { Category } from "config/api.types";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState<string[]>([]);

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

  return (
    <View header={homeHeader}>
      <Section title="Catálogo de Productos">
        <Tabs tabsTitles={categories} variant="secondary" />
      </Section>
    </View>
  );
};

export default Home;
