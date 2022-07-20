import React from "react";
import styles from "./FrequentQuestions.module.scss";
import data from "./data";
import Section from "components/common/Section";
import ExpandableContent from "components/common/ExpandableContent";

const FrequentQuestions: React.FunctionComponent = () => {
  return (
    <div className={styles["question-container"]}>
      <Section title="Preguntas frecuentes">
        {data.map((data, key) => {
          return (
            <ExpandableContent title={data.title} isOpen={data.isOpen}>
              <div key={key} className={styles["question-content-container"]}>
                <div className={styles.question}>{data.question}</div>
                <div className={styles.content}>{data.content}</div>
              </div>
            </ExpandableContent>
          );
        })}
      </Section>
    </div>
  );
};

export default FrequentQuestions;
