import React from "react";
import Section from "components/common/Section";
import View from "components/common/View";
import styles from "./Search.module.scss";

const Search: React.FunctionComponent = () => {

  return (
    <View >
      <Section title="Search page">
        <div className={styles.body}> Search bar </div>
      </Section>
    </View>
  );
};

export default Search;
