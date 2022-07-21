import React from "react";
import { useEffect } from "react";
import styles from "./AboutUs.module.scss";
import BgSection from "components/common/BgSection";
import Section from "components/common/Section";

const AboutUs: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageContainer = (
    <BgSection bgImage="/background.png" position="middle">
      <div className={styles["image-content"]}>
        <div className={styles["image-text"]}>
          <div>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in li
            grammatica, li pronunciation e li plu commun vocabules. Omnicos
            directe al desirabilit? de un nov lingua franca: on refusa continuar
            payar custosi traductores. It solmen va esser necessi far uniform
            grammatica, pronunciation e plu sommun paroles.
          </div>
          <br />
          <div>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in.
          </div>
        </div>
      </div>
    </BgSection>
  );

  return (
    <div className={styles["about-us-container"]}>
      <Section title="Conócenos" titleSize="large" widthSize="medium"></Section>
      <div>{imageContainer}</div>
      <Section title="Quiénes somos" titleSize="large" widthSize="medium">
        <div className={styles["about-us-content"]}>
          <div>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in li
            grammatica, li pronunciation e li plu commun vocabules. Omnicos
            directe al desirabilit? de un nov lingua franca: on refusa continuar
            payar custosi traductores. It solmen va esser necessi far uniform
            grammatica, pronunciation e plu sommun paroles.
          </div>
          <br />
          <div>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
