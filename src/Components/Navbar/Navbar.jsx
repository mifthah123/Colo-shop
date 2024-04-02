import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCartData } from "../../API/api";
import DataContext from "../../Store/Data-context";

const CoName = styled.h2`
background-color="red"
`;

const Navbar = () => {
  const [inputHandler, setInputHandler] = useState(false);
  const [inputIcon, setInputIcon] = useState(true);
  const [quantity, setQuantity] = useState();
  const datCtx = useContext(DataContext);
  const login = datCtx.loginData;
  const inputShowHandler = () => {
    setInputHandler(true);
    setInputIcon(false);
  };

  useEffect(() => {
    const showHandler = async () => {
      const { totalQuantity } = await getCartData({ loginId: login });
      setQuantity(totalQuantity);
    };
    showHandler();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <CoName>
          <span style={{ color: "red" }}>COLO</span>
          <span>SHOP</span>
        </CoName>
      </div>
      <div className="navbar-middle">
        <div className="navbar-option">
          <Link className="navbar-link" to={"/"}>
            <p>Home</p>
          </Link>
        </div>
        <div className="navbar-option">
          <Link className="navbar-link" to={"/shop"}>
            <p>Shop</p>
          </Link>
        </div>
        <div className="navbar-option">
          <Link className="navbar-link" to={"/promotions"}>
            <p>Promotions</p>
          </Link>
        </div>

        <div className="navbar-option">
          <Link className="navbar-link" to={"/blog"}>
            <p>Blog</p>
          </Link>
        </div>
        <div className="navbar-option">
          <Link className="navbar-link" to={"/contact"}>
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        {inputIcon && (
          <div className="right-options" onClick={inputShowHandler}>
            <SearchIcon />
          </div>
        )}
        {inputHandler && (
          <div className="header-input">
            <SearchIcon />
            <input type="text" />
          </div>
        )}

        <div className="right-options">
          <div className="dropdown">
            <Link style={{ color: "black" }} to={"/profile"}>
              <Person2Icon />
            </Link>
          </div>
        </div>
        <div className="right-options">
          <div className="cart__icon">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/cart"}
            >
              <ShoppingCartIcon />
            </Link>
            <div className="cart__quantity">{quantity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
