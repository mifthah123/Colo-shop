import React from "react";
import Categories from "./Categories";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="column">
        <Link to={"mens"} style={{ textDecoration: "none", color: "black" }}>
          <Categories
            image="https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnMlMjBmYXNoaW9ufGVufDB8MXwwfHx8MA%3D%3D"
            title="Mens"
          />
        </Link>
      </div>
      <div className="column">
        <Link to={"womens"} style={{ textDecoration: "none", color: "black" }}>
          <Categories
            image="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBmYXNoaW9ufGVufDB8MXwwfHx8MA%3D%3D"
            title="Women"
          />
        </Link>
      </div>
      <div className="column">
        <Link
          to={"accessories"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Categories
            image="https://plus.unsplash.com/premium_photo-1693222144355-82ccb4cfc774?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Accessories"
          />
        </Link>
      </div>
      <div className="column">
        <Link
          to={"footwear"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Categories
            image="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
            title="Footwears"
          />
        </Link>
      </div>
      <div className="column">
        <Link
          to={"electronics"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Categories
            image="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzODU4NzAwfHxlbnwwfHx8fHw%3D"
            title="Electronics"
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
