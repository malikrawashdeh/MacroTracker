import React from "react";
import FoodItem from "./FoodItem";
import "./FoodList.css";
const FoodList = (props) => {
  return (
    <ul className="food-list">
      {!props.items.length ? (
        <h1 className="block">No Food Entered</h1>
      ) : (
        props.items.map((foodList) => (
          <FoodItem
            key={foodList.id}
            foodName={foodList.food}
            protein={foodList.protein}
            carbs={foodList.carbs}
            fat={foodList.fat}
            calories={foodList.calories}
          />
        ))
      )}
    </ul>
  );
};

export default FoodList;
