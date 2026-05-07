import React, { useEffect, useState } from "react";
import styles from "./searchBox.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Search({ foodData, setFoodData, setIsLoading }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchFood() {
        try {
          setIsLoading(true);
          setError("");

          if (!query) {
            setFoodData([]);
            setIsLoading(false);
            return;
          }

          const response = await fetch(`${API_URL}/findFood?query=${query}`);

          if (!response.ok) throw new Error("Failed to fetch recipes");

          const data = await response.json();
          console.log("Fetched from api: ", data.message);
          console.log("Fetched from api: ", data.results);
          setFoodData(data.results || []);
        } catch (error) {
          console.error("Error while fetching:", error);
          setError("Failed to load recipes. Please try again.");
          setFoodData([]);
        } finally {
          setIsLoading(false);
        }
      }

      fetchFood();
    }, 1000); // Debounce search

    return () => clearTimeout(timer);
  }, [query, setFoodData, setIsLoading]);

  const handleClear = () => {
    setQuery("");
    setError("");
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.inputGroup}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.input}
            type="text"
            value={query}
            placeholder="Search for your favorite recipe..."
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for recipes"
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={handleClear}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {error && (
        <div className={styles.errorMessage}>
          <span className={styles.errorIcon}>⚠️</span>
          {error}
        </div>
      )}
    </div>
  );
}
