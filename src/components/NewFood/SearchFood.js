import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-form";
import styles from "./FoodForms.module.css";
import Button from "../UI/Button";
import { getData } from "../../api";
const SearchFood = (props) => {
  // form validation hook
  const {
    inputValue: nameValue,
    valueIsValid: nameValid,
    hasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  // food object to forward

  const [finalName, setFinalName] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (finalName !== "") {
        const {
          cals: calories,
          protein,
          carbs,
          fat,
        } = await getData(finalName);

        const pushData = {
          food: finalName.charAt(0).toUpperCase() + finalName.slice(1),
          calories,
          protein,
          carbs,
          fat,
        };
        console.log(pushData);
        props.onSaveData(pushData);
        setFinalName("");
      }
    }
    fetchData();
  }, [finalName]);

  // function to clean up data

  let formValid = false;
  formValid = nameValid;

  const submitHandler = async (event) => {
    event.preventDefault();
    // test to see if form valid
    if (!formValid) {
      return;
    }
    setFinalName(nameValue);
    // const { cals: calories, protein, carbs, fat } = await getData(nameValue);

    // const pushData = {
    //   food: nameValue,
    //   calories,
    //   protein,
    //   carbs,
    //   fat,
    // };
    // console.log(pushData);
    // setFoodItem(pushData);
    // props.onSaveData(pushData);

    nameReset();
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Food Name Search</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
            />
            {nameError && <p>Please enter valid name</p>}
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

export default SearchFood;
