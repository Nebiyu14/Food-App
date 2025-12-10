import React from "react";
import style from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.foodCard}>
      <div className={style.imageContainer}>
        <img className={style.foodImage} src={food.image} alt="" />
      </div>
      <div className={style.titleContainer}>
        <p className={style.foodTitle}>{food.title}</p>
      </div>
      <div className={style.btnContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={style.recipeBtn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
