import React, { useState } from "react";
import AddFood from "./components/NewFood/AddFood";
import Food from "./components/Food/Food";
import Modal from "./components/UI/Modal";
import Chart from "./components/Chart/Chart";
import MacroChart from "./components/Food/Macrochart";
const Foods = [
  {
    id: Math.random().toString(),
    food: "Chicken",
    date: "March",
    calories: 200,
    protein: 200,
    carbs: 200,
    fat: 200,
  },
];

function App() {
  const [foodItems, setFood] = useState(Foods);
  const [validInput, setValid] = useState(true);
  // const [validInput, setValid] = useState();
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

  const setValidity = (value) => {
    setValid(value);
  };
  let showModal = null;
  const errorHandler = () => {
    setValid(true);
  };
  if (!validInput) {
    showModal = (
      <Modal
        title={"Error: Invalid Input"}
        message={"Please make sure to fill in all fields"}
        onConfirm={errorHandler}
      />
    );
  }

  return (
    <div>
      {showModal}
      <AddFood onAddFood={addFoodHandler} validity={setValidity} />
      <MacroChart foods={foodItems} />
      <Food food={foodItems} deleteItem={deleteFood}></Food>
    </div>
  );
}

export default App;
