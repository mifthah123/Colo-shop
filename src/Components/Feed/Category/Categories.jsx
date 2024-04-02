import React from "react";
import "./Categories.css";

const Categories = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="category-option"
    >
      <p className="category-text">{props.title}</p>
    </div>
  );
};

export default Categories;
