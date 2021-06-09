import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button Running!");

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
// This is not going to work because the only prop this component
// gets is a function that is a new object everytime the
// component is re-evaluated.
export default React.memo(Button);
