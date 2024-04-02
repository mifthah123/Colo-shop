import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";
const OrderSuccess = () => {
  return (
    <div className="body">
      <div className="main__body_container">
        <div className="order__success">
          <CheckCircleIcon style={{ fontSize: "200px", color: "red" }} />
          <h1>Thank you for Shopping</h1>
          <div className="succes__buttons">
            <Link to={"/my_order"}>
              <div className="order__button">
                <button style={{ backgroundColor: "white" }}>View order</button>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="shopping__button">
                <button style={{ backgroundColor: "red", color: "white" }}>
                  Continue Shopping
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
