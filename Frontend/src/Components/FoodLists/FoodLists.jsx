import React from "react";
import FoodItem from "../FoodItemComp/FoodItem";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import styles from "./foodlist.module.css";

export default function FoodLists({ foodData, setFoodId, isLoading }) {
  // Show 6 skeletons while loading
  const skeletonCount = 6;

  return (
    <div className={styles.foodListsContainer}>
      <div className={styles.foodGrid}>
        {foodData && foodData.length > 0 ? (
          foodData.map((food) => (
            <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No recipes found? Try searching for something delicious!</p>
          </div>
        )}
      </div>
    </div>
  );
}
