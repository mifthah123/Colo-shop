import Button from "../../../../UI/Button";
import "./CartSubmit.css";
import { Link } from "react-router-dom";
const CartSubmit = ({ totalAmount, goButton }) => {
  return (
    <div className="cart-submit__container">
      <div className="cart__submit_title">
        <h3>
          <span style={{color:"black"}}>Price </span>
          <span>details</span>
        </h3>
      </div>
      <div className="amount_details">
        <div className="amount__options">
          <label htmlFor="">Subtotal</label>
          <p>${totalAmount}</p>
        </div>
        <div className="amount__options">
          <label htmlFor="">Shipping</label>
          <p>$0</p>
        </div>
        <div className="amount__options">
          <label htmlFor="">Discount</label>
          <p>$0</p>
        </div>
      </div>
      <div className="total_amount__container">
        <div className="total__amount">
          <label htmlFor="">Total amount </label>
          <p>{`$ ${totalAmount}`}</p>
        </div>
        {!goButton && (
          <Link style={{ textDecoration: "none" }} to={"/"}>
            {" "}
            <Button>Add Items</Button>
          </Link>
        )}
        {goButton && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/checkout"}
          >
            <Button>Buy now</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartSubmit;
