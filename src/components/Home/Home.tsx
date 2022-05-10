import BgSection from "components/common/BgSection";
import Card from "components/common/Card";
import View from "components/common/View";
import React from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
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

  const homeBody = (
    <div>
      <Card size="small" title="Malla Graduada Triple Nudo Venadera -XTREME" imgSrc="/small-card-image.png"></Card>
      <Card size="medium" title="Malla Ciclónica Galvanizada" imgSrc="/medium-card-image.png"></Card>
      <Card size="large" title="Grapa Cartonera" imgSrc="/large-card-image.png" secondaryInfo="$1080-$1200"></Card>
    </div>
  );

  return <View header={homeHeader} body={homeBody} />;
};

export default Home;
