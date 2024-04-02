import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const PageLayout = (props) => {
  return (
    <div className="pagelayout">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageLayout;
