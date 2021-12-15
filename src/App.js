import React, { useState } from "react";
import AddFood from "./components/NewFood/AddFood";
import Food from "./components/Food/Food";
import Modal from "./components/UI/Modal";
import styled from "styled-components";
import MacroChart from "./components/Food/Macrochart";
import Card from "./components/UI/Card";
import Help from "./components/UI/Help";

const Header = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  background-color: #a892ee;
  width: 50rem;
  max-width: 95%;
  padding: 1rem;
  margin: 1rem auto;
  color: white;

  h1 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #4f005f;
  }
  button:hover,
  button:active {
    color: white;
  }
  @media (min-width: 580px) {
    flex-direction: row;
    text-align: right;
  } ;
`;

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
  const [validInput, setValid] = useState(true);
  // const [validInput, setValid] = useState();

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

  const setValidity = (value) => {
    setValid(value);
  };
  let showModal = null;
  const errorHandler = () => {
    setValid(true);
  };
  if (!validInput) {
    showModal = (
      <Modal title={"Error: Invalid Input"} onConfirm={errorHandler}>
        <p>Please make sure to fill in all fields</p>
      </Modal>
    );
  }

  return (
    <div>
      {showHelp && <Help close={() => setHelp(false)} />}
      <Header>
        <h1>Food Logger Web App</h1>
        <button onClick={helpHandler}>?</button>
      </Header>

      {showModal}
      <AddFood onAddFood={addFoodHandler} validity={setValidity} />
      <MacroChart foods={foodItems} />
      <Food food={foodItems} deleteItem={deleteFood}></Food>
    </div>
  );
}

export default App;
