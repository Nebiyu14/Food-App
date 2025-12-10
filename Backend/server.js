import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

//parameters
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const url = process.env.SPOON_URL;
const API_KEY = process.env.API_KEY;
const recipe_url = process.env.RECIPE_URL;

app.get("/recipe/offline", async (req, res) => {
  const filePath = path.join(__dirname, "recipe.json");
  try {
    const jsonResponse = await fs.readFile(filePath, "utf-8");
    const data = await JSON.parse(jsonResponse);
    res.json(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/findFood", async (req, res) => {
  //   const query = req.query.query || "pizza";
  const query = req.query.query || "pasta";
  try {
    const response = await fetch(`${url}?apiKey=${API_KEY}&query=${query}`);
    const data = await response.json();
    res.json(data);
    // res.send("Fetched datas: ", data);
    // cannot send two responses to the browser=> A route must send only ONE response.
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Offline JSON pasta data for testing
app.get("/offlineData", async (req, res) => {
  const filePath = path.join(__dirname, "pastaData.json");
  try {
    const jsonResponse = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonResponse);
    res.json(data);
  } catch (error) {
    console.error("Error handling pastadata request: ", error);
    res.status(500).send("Server Error");
  }
});

app.get("/recipes/:id", async (req, res) => {
  const foodId = req.params.id || 654959;
  console.log(foodId);
  try {
    const response = await fetch(
      `${recipe_url}/${foodId}/information?apiKey=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error while fetching recipe");
  }
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
