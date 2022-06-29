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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState<TabItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState({} as TabItem);
  const [loadingCards, setLoadingCards] = useState(false);
  let productsCards;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then((data) => {
      const categories = data.map(
        (category) =>
          ({
            id: category.categoryId,
            title: category.categoryName,
          } as TabItem)
      );
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    setLoadingCards(true);
    activeCategory?.id &&
      fetchProducts(activeCategory.id).then((data) => {
        const products = data;
        setProducts(products);
        setLoadingCards(false);
      });
  }, [activeCategory, categories]);

  const setCategoryActive = (category: TabItem) => {
    setActiveCategory(category);
  };

  if (loadingCards) {
    productsCards = <LoadingCard cards={6} variant="small" />;
  } else {
    productsCards = products.slice(0, 6).map((product) => {
      return (
        <Card
          key={product.productId}
          title={product.productName}
          imgSrc={product.categoryImageUrl}
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

  const backArrow = categories.length ? (
    <div
      className={`${styles["button-container"]} ${styles["arrow-button"]} ${styles.back}`}
    >
      <Button color="primary" action={() => void 0} active={false}>
        <ArrowBackIosNewIcon fontSize="small" className={styles["icon"]} />
      </Button>
    </div>
  ) : null;

  const fowardArrow = categories.length ? (
    <div
      className={`${styles["button-container"]} ${styles["arrow-button"]} ${styles.next}`}
    >
      <Button color="primary" action={() => void 0} active={false}>
        <ArrowForwardIosIcon fontSize="small" className={styles["icon"]} />
      </Button>
    </div>
  ) : null;

  return (
    <View header={homeHeader}>
      <Section title="Catálogo de Productos">
        <div className={styles["arrow-categories-container"]}>
          {backArrow}
          <Tabs
            options={categories}
            variant="secondary"
            onSelectTab={setCategoryActive}
          />
          {fowardArrow}
        </div>
        <div className={styles["products-container"]}>
          <GridContainer>{productsCards}</GridContainer>
        </div>
        {products.length > 6 && (
          <div className={styles["see-more-container"]}>
            <Button
              color="transparent"
              action={() => {
                navigate(`/search/${activeCategory.title}`);
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
