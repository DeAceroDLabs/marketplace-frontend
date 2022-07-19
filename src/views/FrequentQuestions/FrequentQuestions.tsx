import React from "react";
import styles from "./FrequentQuestions.module.scss";
import Section from "components/common/Section";
import ToogleCategories from "components/common/ToogleCategories";

const FrequentQuestions: React.FunctionComponent = () => {
  return (
    <Section title="Preguntas frecuentes">
      <ToogleCategories title="Categoría" isOpen={true}>
        <div className={styles["question-content-container"]}>
          <div className={styles.question}>Pregunta 1</div>
          <div className={styles.content}>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in li
            grammatica, li pronunciation e li plu commun vocabules. Omnicos
            directe al desirabilit? de un nov lingua franca: on refusa continuar
            payar custosi traductores. It solmen va esser necessi far uniform
            grammatica, pronunciation e plu sommun paroles.{" "}
          </div>
        </div>
      </ToogleCategories>

      <ToogleCategories title="Categoría">
        <div className={styles["question-content-container"]}>
          <div className={styles.question}>Pregunta 2</div>
          <div className={styles.content}>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in li
            grammatica, li pronunciation e li plu commun vocabules. Omnicos
            directe al desirabilit? de un nov lingua franca: on refusa continuar
            payar custosi traductores. It solmen va esser necessi far uniform
            grammatica, pronunciation e plu sommun paroles.{" "}
          </div>
        </div>
      </ToogleCategories>
      <ToogleCategories title="Categoría">
        <div className={styles["question-content-container"]}>
          <div className={styles.question}>Pregunta 3</div>
          <div className={styles.content}>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc., li tot
            Europa usa li sam vocabularium. Li lingues differe solmen in li
            grammatica, li pronunciation e li plu commun vocabules. Omnicos
            directe al desirabilit? de un nov lingua franca: on refusa continuar
            payar custosi traductores. It solmen va esser necessi far uniform
            grammatica, pronunciation e plu sommun paroles.{" "}
          </div>
        </div>
      </ToogleCategories>
      <div className={styles["last-question"]}>
        <ToogleCategories title="Categoría">
          <div className={styles["question-content-container"]}>
            <div className={styles.question}>Pregunta 4</div>
            <div className={styles.content}>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc., li tot
              Europa usa li sam vocabularium. Li lingues differe solmen in li
              grammatica, li pronunciation e li plu commun vocabules. Omnicos
              directe al desirabilit? de un nov lingua franca: on refusa
              continuar payar custosi traductores. It solmen va esser necessi
              far uniform grammatica, pronunciation e plu sommun paroles.{" "}
            </div>
          </div>
        </ToogleCategories>
      </div>
    </Section>
  );
};

export default FrequentQuestions;
