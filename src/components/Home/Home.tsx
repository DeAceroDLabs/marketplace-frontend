import BgSection from "components/common/BgSection";
import Section from "components/common/Section";
import Tabs from "components/common/Tabs";
import View from "components/common/View";
import React, { useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const [categories] = useState<string[]>([
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
    "category 6",
    "category 7",
    "category 8",
  ]);

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
