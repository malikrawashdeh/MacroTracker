import React from "react";
import Card from "../UI/Card";
import FoodList from "./FoodList";
import "./Food.css";
const Food = (props) => {
  const findKey = (key) => {
    props.deleteItem(key);
  };
  return (
    <div>
      <Card className="food">
        <FoodList items={props.food} findKey={findKey} className="block" />
      </Card>
    </div>
  );
};
export default Food;
