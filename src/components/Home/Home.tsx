import View from "components/View";
import React from "react";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const homeHeader = (
    <h2 className={styles.header}>This is a header for Home</h2>
  );

  const homeBody = <h2 className={styles.body}>This is a body for Home</h2>;

  const homeFooter = (
    <h2 className={styles.footer}>This is a footer for Home</h2>
  );

  return <View header={homeHeader} body={homeBody} footer={homeFooter} />;
};

export default Home;
