import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCardLayout.css"
import DataContext from "../Store/Data-context";
import { getCartData } from "../API/api";

const ItemCardLayout = (props) => {
    const [state, setState] = useState(false);
    const dataCTx = useContext(DataContext);
    const loginId = dataCTx.loginData;
  
    useEffect(() => {
      const showCart = async () => {
        const res = await getCartData({ loginId });
        const cartData = res.cartData;
        const productName = cartData.map((li) => li.productName);
        const existingCartItem = productName.find((item) => item === props.name);
        existingCartItem ? setState(true) : setState(false);
      };
      showCart();
    });
    const data = {
      quantity: 1,
      name: props.name,
      image: props.image,
      price: props.price,
    };
    const addtoCartHandler = () => {
    dataCTx.addDataHandler(data)
    setState(true)
    };
  return (
    <div className="items" key={props.id}>
      <img src={props.image} alt="" />
      <p style={{fontSize:"18px"}} >{props.name}</p>
      <p style={{fontWeight:"600"}}>${props.price}</p>
      <p style={{color:"gray",fontWeight:"600"}}>Color:{props.color}</p>

      {!state && (
        <button onClick={addtoCartHandler}>Add to Cart</button>
      )}

      {state && (
        <Link className="go__cart__button " to={"/cart"}>
          {" "}
          <button>Go to Cart</button>
        </Link>
      )}
    </div>
  );
};

export default ItemCardLayout;
