import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span className={styles.icon}>🍴</span>
          <h1 className={styles.title}>FoodHub</h1>
        </div>
        <p className={styles.subtitle}>Discover Delicious Recipes</p>
      </div>
    </header>
  );
}
