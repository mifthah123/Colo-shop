import React, { useEffect, useState } from "react";
import { getItemData } from "../../../API/api";
import PageLayout from "../../../UI/PageLayout";
import ItemCardLayout from "../../../UI/ItemCardLayout";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./TitleStyle.css";

const MenData = (props) => {
  return (
    <div>
    
      <ItemCardLayout
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        category={props.category}
        color={props.color}
      />
    </div>
  );
};

const Mens = () => {
  const [productItemData, setProductItemData] = useState([]);

  useEffect(() => {
    const showHandler = async () => {
      const res = await getItemData();
      setProductItemData(res.data);
    };
    showHandler();
  }, []);
  const men = productItemData.filter((li) => li.productCategory === "Mens");
   
  const filter=()=>{

  }

  const menItem = men.map((li) => (
    <MenData
      id={li._id}
      name={li.productName}
      price={li.productPrice}
      image={li.productImage}
      color={li.productColor}
      category={li.productCategory}
    />
  ));
  console.log(menItem);

  return (
    <PageLayout>
      <div className="Item__page_title">
        <h1 style={{ color: "red" }}>Mens</h1>
      </div>
      <div className="item-container">
      <div className="filter__icon" style={{}} >
          <FilterAltIcon style={{color:"gray"}} />
        </div>
        <div>

        </div>
        
        {menItem}
        
      </div>
    </PageLayout>
  );
};

export default Mens;
