import React from "react";
import "./Button.css";
const Button = (props) => {
  return <div className="button" >{props.children}</div>;
};

export default Button;
