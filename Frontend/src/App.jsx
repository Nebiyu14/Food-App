import { useState } from "react";

import "./App.css";
import Search from "./Components/SearchBox/Search";
import FoodLists from "./Components/FoodLists/FoodLists";
import Header from "./Components/Header/Header";
import OuterContainer from "./Components/Container/OuterContainer/OuterContainer";
import InnerContainer from "./Components/Container/innerContainer/InnerContainer";
import FoodDetails from "./Components/FoodDetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("654959");
  return (
    <>
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <OuterContainer>
        <InnerContainer>
          <FoodLists setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
