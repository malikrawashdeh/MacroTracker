import React, { Fragment, useState } from "react";
import "./FoodItem.css";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import Card from "./Card";

const FoodItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // if clicked is at index then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <li className="list">
      <IconContext.Provider value={{ color: "purple", size: "25px" }}>
        <Card>
          <Fragment onClick={() => toggle(index)} key={index}>
            <h1>{props.foodname}</h1>
            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
          </Fragment>
          {clicked === index ? (
            <Dropdown>
              <p>{props.calories}</p>
              <p>{props.protein}g</p>
              <p>{props.carbs}g</p>
              <p>{props.fat}g</p>
            </Dropdown>
          ) : null}
        </Card>
      </IconContext.Provider>
    </li>
  );
};

export default Accordian;
