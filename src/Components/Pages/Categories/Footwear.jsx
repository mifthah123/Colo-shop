import React, { useEffect, useState } from "react";
import PageLayout from "../../../UI/PageLayout";
import ItemCardLayout from "../../../UI/ItemCardLayout";
import {  getItemData } from "../../../API/api";

const FootwearData = (props) => {
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

const Footwear = () => {
  const [productItemData, setProductItemData] = useState([]);

  useEffect(() => {
    const showHandler = async () => {
      const res = await getItemData();
      setProductItemData(res.data);
    };
    showHandler();
  }, []);

  const footwear = productItemData.filter(
    (li) => li.productCategory === "footwears"
  );
  const footwearItems = footwear.map((li) => (
    <FootwearData
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
        <h1 style={{ color: "red" }}>Footwears</h1>
      </div>
      <div className="item-container">{footwearItems}</div>
    </PageLayout>
  );
};

export default Footwear;
