import React, { useEffect, useState } from "react";
import styles from "./searchBox.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      try {
        if (!query) {
          setFoodData([]);
          return;
        }
        // const response = await fetch("http://localhost:5000/offlineData");
        // const response = await fetch(
        //   `http://localhost:5000/findFood?query=${query}`
        // );

        const response = await fetch(`${API_URL}/findFood?query=${query}`);

        const data = await response.json();

        console.log("Fetched", data.results);
        setFoodData(data.results);
      } catch (error) {
        console.log("Errror while fetching, ", error);
      }
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        placeholder="Search Food Item"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
