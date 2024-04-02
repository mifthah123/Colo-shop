import React from "react";
import "./Feed.css";
import NewArrivals from "./NewArrival/NewArrivals";
import Offerbanner from "./Offerbanner/Offerbanner";
import Category from "./Category/Category";

const Feed = () => {
  return (
    <div className="feed">
      <Offerbanner />
      <Category />
      <NewArrivals />
    </div>
  );
};

export default Feed;
