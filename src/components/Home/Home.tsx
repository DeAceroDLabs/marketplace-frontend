import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories, fetchProducts } from "config/api";
import { Product } from "config/api.types";
import BgSection from "components/common/BgSection";
import Card from "components/common/Card";
import LoadingCard from "components/common/LoadingCard";
import GridContainer from "components/common/GridContainer";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import styles from "./Home.module.scss";
import { TabItem } from "components/common/common.types";
import SearchBar from "components/common/SearchBar";
import Button from "components/common/Button";

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState<TabItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState({} as TabItem);
  const [loading, setLoading] = useState(false);
  let productsCards;
  const navigate = useNavigate();

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
    setLoading(true);
    activeCategory?.id &&
      fetchProducts(activeCategory.id).then((data) => {
        const products = data;
        setProducts(products);
        setLoading(false);
      });
  }, [activeCategory, categories]);

  const setCategoryActive = (category: TabItem) => {
    setActiveCategory(category);
  };

  if (loading) {
    productsCards = <LoadingCard cards={6} variant="small" />;
  } else {
    productsCards = products.slice(0, 6).map((product) => {
      return (
        <Card
          key={product.ClaProducto}
          title={product.NomProducto}
          imgSrc={product.CategoriaUrlImagen}
          size="small"
          loading={false}
        />
      );
    });
  }

  const homeHeader = (
    <BgSection bgImage="/background.png">
      <div className={styles["header-content"]}>
        <div className={styles["header-title"]}>
          Somos tu aliado de confianza para hacer crecer tu negocio
        </div>
        <SearchBar />
      </div>
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

        {products.length > 6 && (
          <div className={styles["see-more-container"]}>
            <Button
              color="transparent"
              action={() => {
                navigate(
                  `/search/${
                    activeCategory.title.slice(-1) === "s"
                      ? activeCategory.title.slice(0, -1)
                      : activeCategory.title
                  }`
                );
              }}
            >
              <div className={styles["see-more"]}>Ver más</div>
            </Button>
          </div>
        )}
      </Section>
    </View>
  );
};

export default Home;