import React, { useState } from "react";
import FoodForms from "./FoodForms";
import "./AddFood.css";

const AddFood = (props) => {
  const [isEditing, setIsediting] = useState(false);
  const saveFoodHandler = (enteredFoodData) => {
    const foodData = { ...enteredFoodData, id: Math.random().toString() };
    props.onAddFood(foodData);
    setIsediting(false);
  };
  const stopEditing = () => {
    setIsediting(false);
  };
  const startEditing = () => {
    setIsediting(true);
  };
  const setValidInputs = (value) => {
    console.log("Value passed to addFood is " + value);
    props.validity(value);
  };

  return (
    <div className="add-food">
      {!isEditing && <button onClick={startEditing}>Add New Food</button>}
      {isEditing && (
        <FoodForms
          onSaveData={saveFoodHandler}
          onCancel={stopEditing}
          valid={setValidInputs}
        />
      )}
    </div>
  );
};
export default AddFood;
