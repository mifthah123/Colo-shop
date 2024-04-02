import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import PageLayout from "../../../UI/PageLayout";
import { getOrderData } from "../../../API/api";
import DataContext from "../../../Store/Data-context";
import CartLayout from "../../../UI/CartLayout";

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [deliverState, setDeliverState] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [itemId, setItemId] = useState();
  const dataCtx = useContext(DataContext);
  const login = dataCtx.loginData;
  console.log(login);

  useEffect(() => {
    const orderHandler = async () => {
      const { orderData, id } = await getOrderData(login);
      console.log(orderData);
      setOrderData(orderData);
      setItemId(id);
    };
    setDeliverState(true);
    setCancel(true);
    orderHandler();
  }, []);
  console.log(orderData);
  return (
    <PageLayout>
      <div className="order__title">
        <h1>
          <span style={{ color: "red" }}>My</span>
          <span>Orders</span>
        </h1>
      </div>
      <div className="order__container">
        {orderData.map((li) => (
          <CartLayout
            itemId={itemId}
            id={li._id}
            name={li.productName}
            image={li.productImage}
            quantity={li.productQuantity}
            price={li.productPrice}
            deliver={deliverState}
            cancel={cancel}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default MyOrder;
