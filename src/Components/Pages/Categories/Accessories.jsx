import React, { useEffect, useState } from "react";
import PageLayout from "../../../UI/PageLayout";
import {  getItemData } from "../../../API/api";
import ItemCardLayout from "../../../UI/ItemCardLayout";
import "./TitleStyle.css";

const AccessoryData = (props) => {
  return (
    <div>
      <ItemCardLayout
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        category={props.category}
        color={props.color}
      />
    </div>
  );
};

const Accessories = () => {
  const [productItemData, setProductItemData] = useState([]);

  useEffect(() => {
    const showHandler = async () => {
      const res = await getItemData();
      setProductItemData(res.data);
    };
    showHandler();
  }, []);

  const accessories = productItemData.filter(
    (li) => li.productCategory === "accessories"
  );
  const accessoryItem = accessories.map((li) => (
    <AccessoryData
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
    />
  ));

  return (
    <PageLayout>
      <div className="Item__page_title">
        <h1 style={{ color: "red" }}>Accessories</h1>
        <div className="item-container">{accessoryItem}</div>
      </div>
    </PageLayout>
  );
};

export default Accessories;
