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
    <Card size="large">
    </Card>
  );

  return <View header={homeHeader} body={homeBody} />;
};

export default Home;
