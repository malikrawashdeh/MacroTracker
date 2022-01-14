import React, { useState } from "react";

import classes from "./App.module.css";
import AddFood from "./components/NewFood/AddFood";
import Food from "./components/Food/Food";

import MacroChart from "./components/Food/Macrochart";
import Help from "./components/UI/Help";

const Foods = [
  {
    id: Math.random().toString(),
    food: "Chicken",
    // date: "March",
    calories: +200,
    protein: +20,
    carbs: +20,
    fat: +20,
  },
];

function App() {
  const [foodItems, setFood] = useState(Foods);
  const [showHelp, setHelp] = useState(true);

  const helpHandler = () => {
    setHelp(true);
  };

  const addFoodHandler = (food) => {
    // use function format since relies on previes state
    setFood((prevFoods) => {
      return [food, ...prevFoods];
    });
  };

  const deleteFood = (key) => {
    setFood((prevFoods) => {
      return prevFoods.filter((value) => value.food !== key);
    });
  };

  return (
    <div>
      {showHelp && <Help close={() => setHelp(false)} />}
      <div className={classes.header}>
        <h1>Food Logger Web App</h1>
        <button onClick={helpHandler}>?</button>
      </div>
      <AddFood onAddFood={addFoodHandler} />
      <MacroChart foods={foodItems} />
      <Food food={foodItems} deleteItem={deleteFood}></Food>
    </div>
  );
}

export default App;
