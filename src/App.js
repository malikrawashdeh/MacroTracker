import React, { useState } from "react";
import AddFood from "./components/NewFood/AddFood";
import Food from "./components/Food/Food";
import Modal from "./components/UI/Modal";
const Foods = [];

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
      <Food food={foodItems}></Food>
    </div>
  );
}

export default App;
