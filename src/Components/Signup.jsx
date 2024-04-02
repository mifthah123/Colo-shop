import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { signupData } from "../API/api";

const Signup = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  const handleSignupData = async () => {
    console.log("firsst check", userName, email, phoneNumber, password);
    signupData({ userName, email, phoneNumber, password, address });
  };

  return (
    <div className="signup">
      <div className="signup__box">
        <div className="signup__title">
          <h1>Register Here</h1>
        </div>
        <div className="signup__inputs">
          <div className="input__options">
            <input
              type="text"
              placeholder="Your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input__options">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__options">
            <input
              type="number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input__options">
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input__options">
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className="signup__button">
              <button onClick={handleSignupData}>Register</button>
            </div>
          </Link>
        </div>
        <div className="login__link">
          Already have an accont?<Link to={"/"}> Login</Link>
        </div>
      </div>
      <div className="signup__background">
        <span style={{ color: "red", fontWeight: 600 }}>Colo</span>
        <span style={{ fontWeight: "600" }}>Shop</span>
      </div>
    </div>
  );
};

export default Signup;
