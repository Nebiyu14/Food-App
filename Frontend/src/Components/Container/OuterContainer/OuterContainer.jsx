import React from "react";
import styles from "./outerContainer.module.css";

function OuterContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default OuterContainer;
