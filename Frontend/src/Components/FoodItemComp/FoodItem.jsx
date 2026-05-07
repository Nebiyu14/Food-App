import React from "react";
import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  const handleViewRecipe = () => {
    console.log("Viewing recipe for:", food.id);
    setFoodId(food.id);
  };

  return (
    <div className={styles.foodCard}>
      <div className={styles.imageContainer}>
        <img
          className={styles.foodImage}
          src={food.image}
          alt={food.title}
          loading="lazy"
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.foodTitle}>{food.title}</h3>
        <button
          onClick={handleViewRecipe}
          className={styles.recipeBtn}
          aria-label={`View recipe for ${food.title}`}
        >
          <span>View Recipe</span>
          <span className={styles.icon}>→</span>
        </button>
      </div>
    </div>
  );
}
