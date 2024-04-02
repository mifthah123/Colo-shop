import React, { useEffect, useState } from "react";
import DataContext from "./Data-context";
import { cartdata, getProfileData } from "../API/api";
import { useSelector } from "react-redux";

const DataProvider = (props) => {
  const [profileData, setProfileData] = useState();
  const loginDetails = useSelector((item) => item.loginuser.loginData);
  const id = loginDetails[0] && loginDetails[0]._id;

  useEffect(() => {
    const profileHandler = async () => {
      const { profileData } = await getProfileData(id);
      setProfileData(profileData);
    };
    id && profileHandler();
  }, []);

  const addDataHandler = async (item) => {
    console.log("come on bro", item);
    const id = loginDetails[0] && loginDetails[0]._id;
    const itemData = {
      productName: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    };
    return await cartdata({ ...itemData, id, ...profileData });
  };

  const dataContext = {
    loginData: id,
    addDataHandler: addDataHandler,
  };
  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
