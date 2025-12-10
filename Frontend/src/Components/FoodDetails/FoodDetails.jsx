import React, { useEffect, useState } from "react";
import style from "./foodDetail.module.css";
function FoodDetails({ foodId }) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function fetchRecipe() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(`http://localhost:5000/recipes/${foodId}`);
        // const response = await fetch("http://localhost:5000/recipe/offline");
        if (!response.ok) throw new Error("Could not fetch recipe");
        const recipe = await response.json();
        console.log(recipe);
        if (isMounted) setRecipe(recipe);
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setError(error.message);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    fetchRecipe();
    return () => {
      isMounted = false;
    };
  }, [foodId]);

  // conditional rendering
  if (isLoading) return <div>Loading Recipe...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={style.recipeContainer}>
      <h1 className={style.mainTitle}>RECIPES</h1>
      <div>
        <h2 className={style.title}>{recipe.title}</h2>
      </div>
      <div className={style.imagee}>
        <img src={recipe.image} alt="Food Image" />
      </div>
      <div className={style.shorts}>
        <strong>⌚{recipe.readyInMinutes} mins </strong>
        <strong>👨‍👩‍👧‍👦 {recipe.servings} </strong>
        <strong>
          🌿{recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}{" "}
        </strong>
      </div>
      <div>
        <h2>Extended Ingredients</h2>
        <div className={style.ingredients}>
          <ol>
            {recipe.extendedIngredients?.map((item) => {
              return (
                <li key={item.id}>
                  <strong>{item.name}</strong> - {item.amount} {item.unit}
                </li>
              );
            })}
          </ol>
        </div>
        <div className={style.instruction}>
          <h2>Intructions: </h2>
          <ol className={style.ingredients}>
            {recipe.analyzedInstructions[0].steps.map((step) => {
              return <li key={step.number}>{step.step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
