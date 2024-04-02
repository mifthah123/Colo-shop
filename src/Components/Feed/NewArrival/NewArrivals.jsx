import React, { useContext, useEffect, useState } from "react";
import "./NewArrivals.css";
import { DATA, getItemData } from "../../../API/api";
import DataContext from "../../../Store/Data-context";
import ItemCardLayout from "../../../UI/ItemCardLayout";

const NewArrivals = () => {
  const [allState, setAllState] = useState(false);
  const [menState, setMenState] = useState(false);
  const [womenState, setWomenState] = useState(false);
  const [accessoryState, setAccessoryState] = useState(false);
  const [electronicsState, setElectronicsState] = useState(false);
  const [footwearState, setFootwearState] = useState(false);
  const [productItemData, setProductItemData] = useState([]);
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    const showHandler = async () => {
      const res = await getItemData();
      console.log(res.data);
      setProductItemData(res.data);
    };
    showHandler();
  }, []);

  const addHandler = (data) => {
    dataCtx.addDataHandler({ ...data, quantity: 1 });
  };

  const allitems = productItemData.map((li) => (
    <ItemCardLayout
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
      addHandler={addHandler}
    />
  ));

  const menItems = productItemData.filter(
    (li) => li.productCategory === "Mens"
  );
  const menItem = menItems.map((li) => (
    <ItemCardLayout
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
      addHandler={addHandler}
    />
  ));

  const womenItems = productItemData.filter(
    (li) => li.productCategory === "women"
  );
  const womenItem = womenItems.map((li) => (
    <ItemCardLayout
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
      addHandler={addHandler}
    />
  ));

  const accessories = productItemData.filter(
    (li) => li.productCategory === "accessories"
  );
  const accessory = accessories.map((li) => (
    <ItemCardLayout
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
      addHandler={addHandler}
    />
  ));

  const footwears = productItemData.filter(
    (li) => li.productCategory === "footwears"
  );
  const footwear = footwears.map((li) => (
    <ItemCardLayout
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
      addHandler={addHandler}
    />
  ));

  const menHandler = () => {
    setAllState(true);
    setMenState(true);
    setAccessoryState(false);
    setFootwearState(false);
    setElectronicsState(false);
    setWomenState(false);
  };

  const footwearHandler = () => {
    setAllState(true);
    setMenState(false);
    setAccessoryState(false);
    setFootwearState(true);
    setElectronicsState(false);
    setWomenState(false);
  };
  const allHandler = () => {
    setAllState(false);
    setMenState(false);
    setAccessoryState(false);
    setFootwearState(false);
    setElectronicsState(false);
    setWomenState(false);
  };

  const accesoryHandler = () => {
    setAllState(true);
    setMenState(false);
    setAccessoryState(true);
    setFootwearState(false);
    setElectronicsState(false);
    setWomenState(false);
  };
  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <div className="new-arrival-buttons">
        <button onClick={allHandler}>ALL</button>
        <button onClick={menHandler}>MEN</button>
        <button>WOMEN</button>
        <button onClick={accesoryHandler}>ACCESSORIES</button>
        <button onClick={footwearHandler}>FOOTWEARS</button>
        <button>ELECTRONICS</button>
      </div>
      <div className="item-container">
        {!allState && allitems}
        {menState && menItem}
        {womenState && womenItem}
        {footwearState && footwear}
        {accessoryState && accessory}
        {electronicsState}
      </div>
    </div>
  );
};

export default NewArrivals;
