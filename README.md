# Food Zone - Full Stack Recipe Application

A full-stack web application for searching, browsing, and viewing detailed food recipes. Built with **React (Vite)** on the frontend and **Node.js + Express** on the backend, with real-time data from the Spoonacular API.


---

## Live Demo

- **Frontend:** [View Live Frontend](https://food-zone-five-lake.vercel.app) 
- **Backend API:** [View Live on Render](https://food-zone-backend-esku.onrender.com) 

---

## Features

- **Full-Stack Architecture**
  - Clean separation between client (React) and server (Node/Express)
- **Dynamic Food Search**
  - Search for food items in real-time using the Spoonacular API
- **Recipe List & Details**
  - Browse a list of recipes and click to view detailed ingredients and instructions
- **Responsive UI**
  - Mobile-friendly, modern design with CSS Modules
- **Error Handling**
  - User-friendly messages for empty results or API errors

---

## Tech Stack

- **Frontend:**
  - React 19 (with Hooks)
  - Vite 
  - CSS Modules for component-scoped styling
  - Fetch API for HTTP requests

- **Backend:**
  - Node.js (ES Modules)
  - Express.js (REST API)
  - dotenv (environment variables)
  - cors (CORS security)

---

## Project Structure

- `Frontend/`
  - React app source code (`src/Components`, `App.jsx`, etc.)
  - Vite config, static assets, and CSS
- `Backend/`
  - Express server (`server.js`)
  - Local data files (`pastaData.json`, `recipe.json`)
  - Environment config (`.env`)

---

## Installation & Setup

> This project uses a monorepo structure. Install dependencies for both backend and frontend.

### 1. Clone the Repository

```bash
git clone https://github.com/Nebiyu14/Food-App.git
cd FoodApp
```

### 2. Backend Setup

- Navigate to the backend folder:
  - `cd Backend`
- Install dependencies:
  - `npm install`
- Create a `.env` file in `Backend/` with:
  - `PORT=5000`
  - `SPOON_URL=https://api.spoonacular.com/recipes/complexSearch`
  - `RECIPE_URL=https://api.spoonacular.com/recipes`
  - `API_KEY=your_spoonacular_api_key_here`
- Start the backend server:
  - `npm start`
- The server runs at: [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup

- Open a new terminal and navigate to the frontend folder:
  - `cd ../Frontend`
- Install dependencies:
  - `npm install`
- Start the Vite dev server:
  - `npm run dev`
- The app runs at: [http://localhost:5173](http://localhost:5173)

---

## Usage

1. Start both backend and frontend servers as described above.
2. Open the frontend URL in your browser.
3. Use the search bar to find recipes by keyword (e.g., "pasta").
4. Click on a recipe to view details, ingredients, and instructions.
5. If the API limit is reached, the app might not show any results.

---

## API Endpoints

- `GET /findFood?query=foodname` - Search for food recipes
- `GET /recipes/:id` - Get detailed recipe info by ID
- `GET /recipe/offline` - Get offline recipe data (for development)
- `GET /offlineData` - Get offline pasta data (for development)

---


## FAQ

- **Where do I get a Spoonacular API key?**
  - Sign up at [Spoonacular](https://spoonacular.com/food-api) and generate a free API key.
- **How do I run the app offline?**
  - The backend provides `/recipe/offline` and `/offlineData` endpoints for local JSON data.


---

Author
[Nebiyu](https://github.com/Nebiyu14)
