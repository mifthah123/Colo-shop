import React, { useState } from "react";
import {
  removeCart,
  removeOrderData,
  updateQuantity,
} from "../API/api";
import "./CartLayout.css";
import { Link } from "react-router-dom";

const CartLayout = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [price] = useState(props.price);
  const [reload, setReload] = useState(false);

  const addOnHandler = async () => {
    const quantityState = quantity + 1;
    const data = { id: props.id, quantity: quantityState, price: props.price };
    const res = await updateQuantity(data);
    const cartQuantity = res.data.productQuantity;
    setQuantity(cartQuantity);
    props.addHandler({ ...data, quantity });
  };

  const removeOnHandler = async () => {
    const quantityState = quantity > 1 ? quantity - 1 : 1;
    const data = { id: props.id, quantity: quantityState, price: props.price };
    const res = await updateQuantity(data);
    const cartQuantity = res.data.productQuantity;
    setQuantity(cartQuantity);
    props.removeHandler({ quantity: quantity, price: price });
  };

  const removeCartHandler = async () => {
    await removeCart(props.id);
    setReload(!reload);
  };

  const removeOrderHandler = async () => {
    const itemName = props.name
    const id = props.itemId
    removeOrderData({itemName,id});
  };
  return (
    <div className="cart-item-container">
      <div className="cart-data">
        <div className="cart-image">
          <img src={props.image} alt="" />
        </div>
        <div className="cart-letter">
          <h3>{props.name}</h3>
          <p>{`$ ${props.price}`}</p>
        </div>
      </div>
      <div className="cart-button">
        {props.cartHidden && <button onClick={addOnHandler}>+</button>}
        <div className="cart__count">
          <p>{quantity}</p>
        </div>
        {props.cartHidden && <button onClick={removeOnHandler}>-</button>}
        {props.editHidden && (
          <div className="edit__button">
            <Link
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "30px",
                fontSize: "16px",
              }}
              to={"/cart"}
            >
              EDIT
            </Link>
          </div>
        )}
        {props.removeHidden && (
          <div className="remove__button">
            <button onClick={removeCartHandler}>REMOVE</button>
          </div>
        )}
        {props.deliver && (
          <p style={{ color: "rgb(51,181,124)", fontWeight: "600" }}>
            Deliver in february 29
          </p>
        )}
        {props.cancel && (
          <div className="cancel__button">
            <button onClick={removeOrderHandler}>Cancel Order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartLayout;
