import React, { useState, useEffect } from "react";
import FoodForms from "./FoodForms";
import "./AddFood.css";
import Button from "../UI/Button";
import SearchFood from "./SearchFood";

const AddFood = (props) => {
  const [foodItems, setFood] = useState([]);
  const [isCustomEditing, setIsCustomEditing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // http update to firebase
  const url =
    "https://react-http2-1d82d-default-rtdb.firebaseio.com/foodList.json";
  useEffect(async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodItems),
      });
      console.log(response);
      const data = await response.json();
      const generatedId = data.name;
    } catch (err) {
      console.log(err);
    }
  }, [foodItems, url]);

  // component nav logic
  let isEditing = isCustomEditing || isSearching;

  const saveFoodHandler = (enteredFoodData) => {
    const foodData = { ...enteredFoodData, id: Math.random().toString() };
    setFood((prevFood) => [foodData, ...prevFood]);
    props.onAddFood(foodData);
    setIsCustomEditing(false);
  };

  const saveSearch = (enteredFoodData) => {
    const foodData = { ...enteredFoodData, id: Math.random().toString() };
    props.onAddFood(foodData);
    setIsSearching(false);
  };

  const stopEditing = () => {
    setIsCustomEditing(false);
  };
  const stopSearching = () => {
    setIsSearching(false);
  };

  // handler to set custom editing to true to load custom food adder
  const startCustomEditing = () => {
    setIsCustomEditing(true);
  };

  // handler to set searching to true to load custom food adder
  const startSearchEditing = () => {
    setIsSearching(true);
  };

  return (
    <div className="add-food">
      {!isEditing && (
        <React.Fragment>
          <Button onClick={startSearchEditing}>Search Food</Button>
          <Button onClick={startCustomEditing}>Add Custom Food</Button>
        </React.Fragment>
      )}
      {isCustomEditing && (
        <FoodForms onSaveData={saveFoodHandler} onCancel={stopEditing} />
      )}
      {isSearching && (
        <SearchFood onSaveData={saveSearch} onCancel={stopSearching} />
      )}
    </div>
  );
};
export default AddFood;
