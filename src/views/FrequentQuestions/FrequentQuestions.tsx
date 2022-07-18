import React, { useContext, useEffect } from "react";
import styles from "./FrequentQuestions.module.scss";
import Section from "components/common/Section";
import ToogleCategories from "components/common/ToogleCategories";

const FrequentQuestions: React.FunctionComponent = () => {
  return (
    <Section title="Preguntas frecuentes">
      <ToogleCategories
        categoryName="Categoría"
        question="Pregunta 1"
        content="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. 
        Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit?
         de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  "
        defaultVisibility={true}
      />

      <ToogleCategories
        categoryName="Categoría"
        question="Pregunta 2"
        content="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. 
        Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit?
         de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  "
      />
      <ToogleCategories
        categoryName="Categoría"
        question="Pregunta 3"
        content="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. 
        Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit?
         de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  "
      />
      <div className={styles["last-question"]}>
      <ToogleCategories
        categoryName="Categoría"
        question="Pregunta 4"
        content="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. 
        Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit?
         de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  "
      />
      </div>
    </Section>
  );
};

export default FrequentQuestions;
