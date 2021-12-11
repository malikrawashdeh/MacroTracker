import React, { Fragment, useState } from "react";
import "./FoodItem.css";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #a892ee;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 5px;
  h2 {
    font-size: 25px;
    margin-left: 1.5rem;
    color: white;
  }
  span {
    margin-right: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  background: #3f3f3f;
  border-radius: 12px;
  width: 100%;
  height: 120%;
  margin-bottom: 5px;

  p {
    margin: 1rem 1rem;
    color: white;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  } ;
`;

const FoodItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prevClick) => !prevClick);
  };
  const handleDelete = () => {
    console.log("btn has been clicked to delete");
    props.deleteItem(props.foodName);
  };
  return (
    <li className="list">
      <IconContext.Provider value={{ color: "#40005d", size: "25px" }}>
        <Card className="flex">
          <Wrap onClick={toggle}>
            <h2>{props.foodName}</h2>
            <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
          </Wrap>
          {clicked ? (
            <Dropdown>
              <p>Calories: {props.calories}</p>
              <p>Protein: {props.protein}g</p>
              <p>Carbs: {props.carbs}g</p>
              <p>Fat: {props.fat}g</p>
              <Button onClick={handleDelete}>Delete Item</Button>
            </Dropdown>
          ) : null}
        </Card>
      </IconContext.Provider>
    </li>
  );
};

export default FoodItem;

/*
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
*/
