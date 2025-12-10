import React from "react";
import FoodItem from "../FoodItemComp/FoodItem";
import style from "./foodlist.module.css"

export default function FoodLists({ foodData, setFoodId }) {
  return (
    <div>
      <div className={style.foodCard}>
        {foodData.map((food) => (
          <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
