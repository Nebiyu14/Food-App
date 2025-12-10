# Food-App

A full-stack web application built with React (Vite) frontend and Node.js + Express backend. FOODAPP allows users to search for food items, view food list, and fetch detailed recipe information from the Spoonacular API.

# 🍽️ Food Recipe App (Full-Stack)

A modern full-stack application that allows users to search for food, view detailed recipes, and access cooking instructions. This project demonstrates a complete integration between a **Vite + React frontend** and a **Node.js/Express backend**, featuring dynamic API consumption and offline fallback capabilities.

🔗 **View Live:** [Click Here](https://food-app-frontend-4eh8.onrender.com)

## 🚀 Key Features

- **Full-Stack Architecture:** separation of concerns between client and server.
- **Dynamic Search:** Fetches real-time food data using the **Spoonacular API**.
- **Detailed Recipe Views:** Click on any item to view ingredients and instructions (`/recipes/:id`).
- **Offline Support:** Includes JSON data modes (`/recipe/offline`) for development without API limits.
- **Modern Tech Stack:** Uses **Vite** and **ES Modules** (`import/export`) across the entire stack.

---

## 🛠️ Tech Stack

### **Frontend**

- **React 19** - UI Library
- **Vite** - Build tool & Development Server
- **CSS Modules/Standard CSS** - Styling
- **Fetch API** - Data consumption

### **Backend**

- **Node.js** - Runtime environment
- **Express.js** - Web Framework
- **Dotenv** - Environment Variable Management
- **CORS** - Cross-Origin Resource Sharing security

---

## Installation & Setup

- This project uses a monorepo structure. You will need to install dependencies for both the backend and frontend.

### Clone the repository

```
git clone https://github.com/Nebiyu14/Food-App.git
```

## Backend Setup

- Navigate to the backend folder, install dependencies, and start the server.

* cd Backend
* npm install
* npm start

### ⚙️ Environment Variables

To run this project locally, you must create a `.env` file in the `Backend` folder.

```env
PORT=5000
SPOON_URL=https://api.spoonacular.com/recipes/complexSearch
RECIPE_URL=https://api.spoonacular.com/recipes
API_KEY=enter_your_spoonacular_api_key_here
```

- The server will run on: http://localhost:5000

## Frontend Setup

- Open a new terminal, navigate to the frontend folder, and launch the Vite server.
- cd ../Foodapp
- npm install
- npm run dev

* The app will run on: http://localhost:5173

👨‍💻 Author
[Nebiyu](https://github.com/Nebiyu14)
