import React, { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";

const API_URL = import.meta.env.VITE_API_URL;

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
        const response = await fetch(`${API_URL}/recipes/${foodId}`);

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

  if (isLoading) {
    return (
      <div className={styles.recipeContainer}>
        <div className={styles.loadingState}>
          <div className={styles.spinner} />
          <p>Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.recipeContainer}>
        <div className={styles.errorState}>
          <p>Error: {error}</p>
          <small>Please try selecting another recipe</small>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className={styles.recipeContainer}>
        <div className={styles.emptyState}>
          <p>Select a recipe to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.recipeContainer}>
      <article className={styles.recipeContent}>
        <header className={styles.recipeHeader}>
          <h1 className={styles.mainTitle}>{recipe.title}</h1>
        </header>

        <div className={styles.recipeImage}>
          <img src={recipe.image} alt={recipe.title} />
        </div>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱️</span>
            <div>
              <span className={styles.metaLabel}>Prep Time</span>
              <span className={styles.metaValue}>
                {recipe.readyInMinutes} mins
              </span>
            </div>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>👥</span>
            <div>
              <span className={styles.metaLabel}>Servings</span>
              <span className={styles.metaValue}>{recipe.servings}</span>
            </div>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>🌱</span>
            <div>
              <span className={styles.metaLabel}>Type</span>
              <span className={styles.metaValue}>
                {recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
              </span>
            </div>
          </div>
        </div>

        {recipe.extendedIngredients &&
          recipe.extendedIngredients.length > 0 && (
            <section className={styles.ingredientsSection}>
              <h2 className={styles.sectionTitle}>Ingredients</h2>
              <ul className={styles.ingredientsList}>
                {recipe.extendedIngredients.map((item) => (
                  <li key={item.id} className={styles.ingredientItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.ingredientName}>{item.name}</span>
                    <span className={styles.ingredientAmount}>
                      {item.amount} {item.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        {recipe.analyzedInstructions &&
          recipe.analyzedInstructions.length > 0 && (
            <section className={styles.instructionsSection}>
              <h2 className={styles.sectionTitle}>Instructions</h2>
              <ol className={styles.instructionsList}>
                {recipe.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number} className={styles.instructionItem}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.stepText}>{step.step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
      </article>
    </div>
  );
}

export default FoodDetails;
