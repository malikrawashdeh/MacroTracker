import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-form";
import styles from "./FoodForms.module.css";
import Button from "../UI/Button";
import { useHTTP } from "../../api";

const SearchFood = ({ onSaveData, onCancel }) => {
  //state to push food data to
  const [food, setFood] = useState({});
  // form validation hook
  const {
    inputValue: nameValue,
    valueIsValid: nameValid,
    hasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  // final submitted name to search api for
  const [finalName, setFinalName] = useState("");

  //api call
  const { isLoading, error, sendRequest: getFood } = useHTTP();

  useEffect(() => {
    let isAPISubscribed = true;
    // request config
    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: finalName.toLowerCase() },
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "92218ad753mshdd417b9519712bdp1032d7jsna3bc285e5004",
      },
    };

    const transformFood = (foodObj) => {
      const foodData = foodObj.hints[0].food.nutrients;
      console.log(foodData);
      const pushData = {
        food: finalName.charAt(0).toUpperCase() + finalName.slice(1),
        calories: foodData.ENERC_KCAL,
        protein: foodData.PROCNT,
        carbs: foodData.CHOCDF,
        fat: foodData.FAT,
      };
      setFood(pushData);

      setFinalName("");
    };
    if (finalName !== "" && isAPISubscribed) {
      getFood(options, transformFood);
    }
    return () => {
      isAPISubscribed = false;
    };
  }, [finalName, getFood]);

  useEffect(() => {
    if (Object.keys(food).length !== 0) {
      onSaveData(food);
      setFood({});
    }
  }, [food, onSaveData]);

  let formValid = false;
  formValid = nameValid;

  const submitHandler = async (event) => {
    event.preventDefault();
    // test to see if form valid
    if (!formValid) {
      return;
    }
    setFinalName(nameValue);

    nameReset();
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["new-food__controls"]}>
          <div className={styles["new-food__control"]}>
            <label>Food Name Search</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
            />
            {nameError && <p>Please enter valid name</p>}
            {!error && isLoading && <p>loading...</p>}
            {error && <p>Food Not Found!</p>}
          </div>
          <div className={styles["button"]}>
            <Button type="button" onClick={onCancel}>
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

export default SearchFood;
