import React from "react";
import styles from "./View.module.scss";

interface ViewProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const View: React.FC<ViewProps> = ({ header, body, footer }) => (
  <>
    <div className={styles.header}>
      <div>{header}</div>
    </div>
    <div className={styles.body}>
      <div>{body}</div>
    </div>
    <div className={styles.footer}>
      <div>{footer}</div>
    </div>
  </>
);

export default View;
