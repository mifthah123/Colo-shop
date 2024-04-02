import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { verifydata } from "../API/api";
import { useDispatch } from "react-redux";
import { loginDataHandler } from "../Redux/loginRedux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginHandler = async () => {
    console.log("first check", email, password);

    const res = await verifydata({ email, password });
    console.log(res.data);
    dispatch(loginDataHandler(res.data));
  };
  return (
    <div className="login">
      <div className="login__box">
        <div className="login__title">
          <h1>Login Here</h1>
        </div>
        <div className="login__inputs">
          <div className="input__options">
            <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__options">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__button">
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
        <div className="signup__link">
          Dont have any account?<Link to={"/register"}> Sign up</Link>
        </div>
      </div>
      <div className="login__background">
        <span style={{ color: "red", fontWeight: 600 }}>Colo</span>
        <span style={{ fontWeight: "600" }}>Shop</span>
      </div>
    </div>
  );
};

export default Login;
