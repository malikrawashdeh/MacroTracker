import { useState } from "react";

const useInput = (validity) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validity(inputValue);
  const hasError = !valueIsValid && isTouched;
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
