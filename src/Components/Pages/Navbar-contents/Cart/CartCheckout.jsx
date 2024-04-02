import React, { useContext, useEffect, useState } from "react";
import "./CartCheckout.css";
import DataContext from "../../../../Store/Data-context";
import {
  getCartData,
  getProfileData,
  updateAddress,
} from "../../../../API/api";
import PageLayout from "../../../../UI/PageLayout";
import CartLayout from "../../../../UI/CartLayout";
import Button from "../../../../UI/Button";
import CartPayment from "./CartPayment";

const CartCheckout = () => {
  const [orderAmount, setOrderAmount] = useState();
  const [className, setClassName] = useState(true);
  const [cartState, setCartState] = useState(true);
  const [editState, setEditState] = useState(false);
  const [ItemCartData, setItemCartData] = useState([]);
  const [hasShown, setHasShown] = useState(false);
  const [backdropClr, setBackDropClr] = useState(false);
  const [profile, setProfile] = useState([]);
  const [addressState, setAddressState] = useState(false);
  const [address, setAddress] = useState();
  const [addressData, setAddressData] = useState();
  const [phone, setPhone] = useState();
  const [phoneDta, setPhoneDta] = useState();
  const dataCtx = useContext(DataContext);
  const id = dataCtx.loginData;

  const showPaymentHandler = () => {
    setBackDropClr(true);
    setHasShown(true);
  };

  const hidePaymentHandler = () => {
    setHasShown(false);
  };
  useEffect(() => {
    const orderAmountHandler = async () => {
      const { cartData, totalAmount } = await getCartData({
        loginId: id,
      });
      setOrderAmount(totalAmount);
      setItemCartData(cartData);
      setCartState(false);
      setEditState(true);
      cartData.length > 0 ? setClassName(false) : setClassName(true);
    };
    orderAmountHandler();
    const profileHandler = async () => {
      const { profileData } = await getProfileData(id);
      setProfile(profileData);
      setAddressData(profileData.address);
      setPhoneDta(profileData.phoneNumber);
    };
    profileHandler();
  }, []);

  console.log(profile);
  const name = profile.name;
  const phoneNumber = profile.phoneNumber;
  console.log(name, phoneNumber);

  const addressShowHandler = () => {
    addressState ? setAddressState(false) : setAddressState(true);
  };

  const updateAddressHandler = async () => {
    const res = await updateAddress({ id, address, phone });
    console.log(res.data.address);
    setAddressData(res.data.address);
    setPhoneDta(res.data.phoneNumber);
    setAddressState(false);
  };

  return (
    <PageLayout>
      <div className="orderlist__title">
        <h1>
          <span style={{ color: "black" }}>Checkout</span>
          <span>List</span>
        </h1>
      </div>
      <div className="main__container">
        <div className="item__container">
          {!className &&
            ItemCartData.map((li) => (
              <CartLayout
                id={li._id}
                name={li.productName}
                image={li.productImage}
                quantity={li.productQuantity}
                price={li.productPrice}
                cartHidden={cartState}
                editHidden={editState}
              />
            ))}
        </div>

        <div className="order__box">
          <div className="order__item_container">
            {className && <h1>No Items</h1>}
          </div>
          <div className="order__summary_container">
            <div className="placing__details">
              <h3>
                <span style={{ color: "black" }}>Shipping</span>
                <span> Address</span>
              </h3>
              <div className="shipping__details">
                <h4>{name}</h4>

                <p> {addressData} </p>
                <p>{phoneDta}</p>
              </div>
              <div className="change__button">
                <button onClick={addressShowHandler}>change</button>
                {addressState && (
                  <div className="new__address_container">
                    <p>Type New Address</p>
                    <textarea
                      placeholder="New address"
                      name=""
                      id=""
                      cols="40"
                      rows="4"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      placeholder="phone number"
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={updateAddressHandler}>update</button>
                  </div>
                )}
              </div>
            </div>
            <div className="amount__details">
              <div className="amount_details">
                <div className="amount__options"></div>
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
                  <label htmlFor="">Total Amount</label>
                  <p>${orderAmount} </p>
                </div>
                <div style={{ color: "white" }} onClick={showPaymentHandler}>
                  <Button>Payment</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment"></div>
      {hasShown && (
        <CartPayment
          hideHandler={hidePaymentHandler}
          backdropClr={backdropClr}
        />
      )}
    </PageLayout>
  );
};

export default CartCheckout;
