import React, { useState } from "react";
import "./CartPayment.css";
import { useEffect } from "react";
import {
  getCartData,
  postOrderData,
  removeCartData,
} from "../../../../API/api";
import { useContext } from "react";
import DataContext from "../../../../Store/Data-context";
import Modal from "../../../../UI/Modal";
import Button from "../../../../UI/Button";
import { Link } from "react-router-dom";

const CartPayment = (props) => {
  const [totalAmount, setTotalAmount] = useState();
  const [upiState, setUpiState] = useState(false);
  const datCtx = useContext(DataContext);
  const login = datCtx.loginData;

  useEffect(() => {
    const displayHandler = async () => {
      const { totalAmount } = await getCartData({ loginId: login });
      setTotalAmount(totalAmount);
    };
    displayHandler();
  }, []);

  const orderHandler = async () => {
    props.hideHandler();

    const { cartData } = await getCartData({ loginId: login });
    console.log(cartData);
    removeCartData(login);
    const res = await postOrderData({ cartData, orderId: login });
    console.log(res.data);
    // const orderId = res.data._id;
    return;
  };

  const showOptionHandler = () => {
    setUpiState(true);
  };

  const hideOptionHandler = () => {
    setUpiState(false);
  };
  return (
    <Modal paymentHandler={props.hideHandler} backdropClr={props.backdropClr}>
      <div className="payment__container">
        <div className="payment__heading">
          <h1>
            <span style={{ color: "black" }}>Pay</span>
            <span>ment</span>
          </h1>
        </div>
        <div className="payment__amount">
          <div className="payment__options">
            <label htmlFor="">sub total</label>
            <p>${totalAmount}</p>
          </div>
          <div className="payment__options">
            <label htmlFor="">Taxes</label>
            <p>$0</p>
          </div>
          <div className="payment__options__total">
            <label htmlFor="">Total Payment Amount</label> <p>${totalAmount}</p>
          </div>
        </div>
        <div className="payment__type_container">
        <div className="payment__type_heading">
          <h2>Payment Methods</h2>
          </div>
          <div className="payment__types">
            <input
              onClick={showOptionHandler}
              type="radio"
              name="payment"
              id="payment1"
            />
            <p>upi</p>
          </div>
          <div className="upi__method">
            {upiState && (
              <div className="upi">
                <p>Select Options</p>
                <div className="upi__options">
                  <input type="radio" name="upi" id="upi1" />
                  <p>Phone Pay </p>
                </div>
                <div className="upi__options">
                  <input type="radio" name="upi" id="upi2" />
                  <p>Google Pay</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="payment__types">
          <input
            onClick={hideOptionHandler}
            type="radio"
            name="payment"
            id="payment2"
          />
          <p>Credit Card/Debit Card/ATM Card</p>
        </div>
        <div className="payment__types">
          <input type="radio" name="payment" id="payment3" />
          <p>Net Banking</p>
        </div>
        <div className="payment__types">
          <input type="radio" name="payment" id="payment4" />
          <p>EMI</p>
        </div>
        <div className="payment__types">
          <input type="radio" name="payment" id="payment5" />
          <p>Cash on Delivery</p>
        </div>
      </div>
      <div
        style={{ color: "white" }}
        className="place_order__button"
        onClick={orderHandler}
      >
        <Link
          to={"/order-success"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button>place order</Button>
        </Link>
      </div>
    </Modal>
  );
};

export default CartPayment;
