import React from "react";
import Card from "../UI/Card";
import FoodList from "./FoodList";
import "./Food.css";
const Food = (props) => {
  return (
    <div>
      <Card className="food">
        <FoodList items={props.food} className="block" />
      </Card>
    </div>
  );
};
export default Food;
