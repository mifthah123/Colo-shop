import "./Cart.css";
import PageLayout from "../../../../UI/PageLayout";
import CartLayout from "../../../../UI/CartLayout";
import CartSubmit from "./CartSubmit";
import { useEffect, useRef, useState } from "react";
import { getCartData } from "../../../../API/api";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartClassname, setCartClassname] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [editState, setEditState] = useState(true);
  const [goButton, setGoButton] = useState(false);
  const [ItemCartData, setItemCartData] = useState([]);
  const [totalSubmitAmount, setTotalSubmitAmount] = useState();
  const [removeState, setRemoveState] = useState(false);
  const divref = useRef(null);
  const login = useSelector((item) => item.loginuser.loginData);
  const loginId = login[0] && login[0]._id;
  const idDta = { loginId };

  useEffect(() => {
    const showCart = async () => {
      const { cartData, totalAmount } = await getCartData(idDta);
      if (cartData.length === 0) {
        setCartClassname(false);
        setGoButton(false);
      } else {
        setCartClassname(true);
        setGoButton(true);
      }
      window.scroll(0, 0);
      setItemCartData(cartData);
      setTotalSubmitAmount(totalAmount);
    };
    showCart();

    setRemoveState(true);
    setCartState(true);
    setEditState(false);
  }, []);

  const onAddHandler = async (items) => {
    setTotalSubmitAmount(totalSubmitAmount + items.price);
  };

  const onRemoveHandler = (items) => {
    setTotalSubmitAmount(
      items.quantity > 1 ? totalSubmitAmount - items.price : totalSubmitAmount
    );
  };


  return (
    <PageLayout>
      <div className="cart__container_box" ref={divref}>
        <div className="cart__title">
          <h1>
            <span style={{ color: "black" }}>CA</span>
            <span>RT</span>
          </h1>
        </div>
        <div className="cart">
          <div className="parent">
            {!cartClassname && (
              <div className="noitems">
                <h1 style={{ fontSize: "100px", color: "lightgray" }}>
                  No Items
                </h1>
              </div>
            )}
            {cartClassname && (
              <div className="cart-box">
                {ItemCartData.map((li) => (
                  <CartLayout
                    id={li._id}
                    name={li.productName}
                    image={li.productImage}
                    quantity={li.productQuantity}
                    price={li.productPrice}
                    addHandler={onAddHandler}
                    removeHandler={onRemoveHandler}
                    cartHidden={cartState}
                    editHidden={editState}
                    removeHidden={removeState}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="cart__submit">
            <CartSubmit totalAmount={totalSubmitAmount} goButton={goButton} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cart;
