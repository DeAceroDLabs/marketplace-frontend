import React from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Product } from "config/api.types";

const Search: React.FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  {
    if (products.length) {
      return (
        <View>
          <SearchBar />
          <Section title="Search page">
            <div className={styles.body}> Search bar </div>
          </Section>
        </View>
      );
    }
  }

  return (
    <div>
      <SearchBar />
      <ProductsNotFound />
    </div>
  );
};

export default Search;
