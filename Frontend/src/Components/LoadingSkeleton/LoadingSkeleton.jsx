import React from "react";
import styles from "./loadingSkeleton.module.css";

export default function LoadingSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonTitle} />
      <div className={styles.skeletonButton} />
    </div>
  );
}
