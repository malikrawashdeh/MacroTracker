import React from "react";
import "./FoodItem.css";
import Card from "../UI/Card";
const FoodItem = (props) => {
  return (
    <li className="list">
      <Card className="food-item">
        <container className="food-item__description">
          <h2>{props.foodName}</h2>
          <div>Calories: {props.calories}</div>
          <div>Protein: {props.protein}g</div>
          <div>Carbs: {props.carbs}g</div>
          <div>Fat: {props.fat}g</div>
        </container>
      </Card>
    </li>
  );
};

export default FoodItem;
