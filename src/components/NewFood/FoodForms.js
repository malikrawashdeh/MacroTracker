import React from "react";
import styles from "./FoodForms.module.css";
import Button from "../UI/Button";
import useInput from "../../hooks/use-form";

const FoodForms = (props) => {
  // use custom hook to manage validity and get valid values for entered food
  // FOOD NAME
  const {
    inputValue: nameValue,
    valueIsValid: nameValid,
    hasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  // CALORIES
  const {
    inputValue: calValue,
    valueIsValid: calValid,
    hasError: calError,
    inputChangeHandler: calChangeHandler,
    inputBlurHandler: calBlurHandler,
    reset: calReset,
  } = useInput((num) => num.trim() !== "" && !isNaN(num));

  // PROTEIN
  const {
    inputValue: proteinValue,
    valueIsValid: proteinValid,
    hasError: proteinError,
    inputChangeHandler: proteinChangeHandler,
    inputBlurHandler: proteinBlurHandler,
    reset: proteinReset,
  } = useInput((num) => num.trim() !== "" && !isNaN(num));

  // Carbs
  const {
    inputValue: carbValue,
    valueIsValid: carbValid,
    hasError: carbError,
    inputChangeHandler: carbChangeHandler,
    inputBlurHandler: carbBlurHandler,
    reset: carbReset,
  } = useInput((num) => num.trim() !== "" && !isNaN(num));

  // Fat
  const {
    inputValue: fatValue,
    valueIsValid: fatValid,
    hasError: fatError,
    inputChangeHandler: fatChangeHandler,
    inputBlurHandler: fatBlurHandler,
    reset: fatReset,
  } = useInput((num) => num.trim() !== "" && !isNaN(num));

  // overall form validation
  let formValid = false;
  formValid = nameValid && calValid && proteinValid && carbValid && fatValid;

  // function to save data to object when user submits
  const submitHandler = (event) => {
    event.preventDefault();

    // test to see if form valid
    if (!formValid) {
      return;
    }

    // write data
    const foodData = {
      food: nameValue,
      // date: new Date(enteredDate),
      calories: +calValue,
      protein: +proteinValue,
      carbs: +carbValue,
      fat: +fatValue,
    };

    props.onSaveData(foodData);
    nameReset();
    // setEnteredDate("");
    calReset();
    proteinReset();
    carbReset();
    fatReset();
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["new-food__controls"]}>
          <div
            className={`${styles["new-food__control"]} ${
              nameError && styles.invalid
            }`}
          >
            <label>Food</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
            />
            {nameError && <p>Please enter valid name</p>}
          </div>

          {/* <div className={styles["new-food__control"]}>
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div> */}

          <div
            className={`${styles["new-food__control"]} ${
              calError && styles.invalid
            }`}
          >
            <label>Calories</label>
            <input
              type="text"
              min="0.00"
              step="1.0"
              onChange={calChangeHandler}
              onBlur={calBlurHandler}
              value={calValue}
            />
            {calError && <p>Please enter valid calorie value</p>}
          </div>

          <div
            className={`${styles["new-food__control"]} ${
              proteinError && styles.invalid
            }`}
          >
            <label>Protein(g)</label>
            <input
              type="text"
              min="0.00"
              step="1.0"
              onChange={proteinChangeHandler}
              onBlur={proteinBlurHandler}
              value={proteinValue}
            />
            {proteinError && <p>Please enter valid protein value</p>}
          </div>

          <div
            className={`${styles["new-food__control"]} ${
              carbError && styles.invalid
            }`}
          >
            <label>Carbs(g)</label>
            <input
              type="text"
              min="0.00"
              step="1.0"
              onChange={carbChangeHandler}
              onBlur={carbBlurHandler}
              value={carbValue}
            />
            {carbError && <p>Please enter valid carb value</p>}
          </div>

          <div
            className={`${styles["new-food__control"]} ${
              fatError && styles.invalid
            }`}
          >
            <label>Fat(g)</label>
            <input
              type="text"
              min="0.00"
              step="1.0"
              onChange={fatChangeHandler}
              onBlur={fatBlurHandler}
              value={fatValue}
            />
            {fatError && <p>Please enter valid fat value</p>}
          </div>

          <div className={styles["button"]}>
            <Button type="button" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button disabled={!formValid} type="submit">
              Add Food
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FoodForms;
