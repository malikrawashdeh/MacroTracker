import React, { useState } from "react";
import styles from "./FoodForms.module.css";
import Button from "../UI/Button";
const FoodForms = (props) => {
  // set state for user input
  const [enteredFood, setEnteredFood] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCalories, setEnteredCalories] = useState("");
  const [enteredProtein, setEnteredProtein] = useState("");
  const [enteredCarbs, setEnteredCarbs] = useState("");
  const [enteredFat, setEnteredFat] = useState("");
  const [isValid, setIsValid] = useState(true);
  // handler functions to add entered data to state variables
  const foodChangeHandler = (event) => {
    setEnteredFood(event.target.value);
    event.target.value.trim().length > 0 && setIsValid(true);
  };
  const dateChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredDate(event.target.value);
  };
  const caloriesChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredCalories(event.target.value);
  };
  const proteinChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredProtein(event.target.value);
  };
  const carbsChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredCarbs(event.target.value);
  };
  const fatChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredFat(event.target.value);
  };
  // function to save data to object when user submits
  const submitHandler = (event) => {
    event.preventDefault();
    const foodData = {
      food: enteredFood,
      // date: new Date(enteredDate),
      calories: +enteredCalories,
      protein: +enteredProtein,
      carbs: +enteredCarbs,
      fat: +enteredFat,
    };
    if (
      enteredFood.trim().length === 0 ||
      /*enteredDate.trim().length === 0 ||*/
      enteredCalories.trim().length === 0 ||
      enteredProtein.trim().length === 0 ||
      enteredCarbs.trim().length === 0 ||
      enteredFat.trim().length === 0
    ) {
      setIsValid(false);
      props.valid(false);
      return;
    }
    props.onSaveData(foodData);
    setEnteredFood("");
    // setEnteredDate("");
    setEnteredCalories("");
    setEnteredProtein("");
    setEnteredCarbs("");
    setEnteredFat("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles["new-food__controls"]} ${
            !isValid && styles.invalid
          }`}
        >
          <div className={styles["new-food__control"]}>
            <label>Food</label>
            <input
              type="text"
              onChange={foodChangeHandler}
              value={enteredFood}
            />
          </div>

          {/* <div className={styles["new-food__control"]}>
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div> */}

          <div className={styles["new-food__control"]}>
            <label>Calories</label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              onChange={caloriesChangeHandler}
              value={enteredCalories}
            />
          </div>

          <div className={styles["new-food__control"]}>
            <label>Protein(g)</label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              onChange={proteinChangeHandler}
              value={enteredProtein}
            />
          </div>

          <div className={styles["new-food__control"]}>
            <label>Carbs(g)</label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              onChange={carbsChangeHandler}
              value={enteredCarbs}
            />
          </div>

          <div className={styles["new-food__control"]}>
            <label>Fat(g)</label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              onChange={fatChangeHandler}
              value={enteredFat}
            />
          </div>

          <div className={styles["button"]}>
            <Button type="button" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button type="submit">Add Food</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoodForms;
