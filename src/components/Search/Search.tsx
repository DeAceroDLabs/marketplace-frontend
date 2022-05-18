import React from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Search.module.scss";
import ProductsNotFound from "./ProductsNotFound";
import { useState } from "react";

const Search: React.FunctionComponent = () => {
  const [items] = useState([]);

  {
    if (items.length) {
      return (
        <View>
          <Section title="Search page">
            <div className={styles.body}> Search bar </div>
          </Section>
        </View>
      );
    }
  }

  return <ProductsNotFound />;
};

export default Search;
