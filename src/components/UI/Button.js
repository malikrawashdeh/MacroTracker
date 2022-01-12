import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
