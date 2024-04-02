import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { getProfileData } from "../../../API/api";
import DataContext from "../../../Store/Data-context";
import PageLayout from "../../../UI/PageLayout";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeDataHandler } from "../../../Redux/loginRedux";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const dataCtx = useContext(DataContext);
  const login = dataCtx.loginData;
  const dispatch=useDispatch()

  useEffect(() => {
    const displayHandler = async () => {
      const { profileData } = await getProfileData(login);
      console.log(profileData);
      setProfile([profileData]);
    };
    displayHandler();
  }, []);
const logoutHandler=()=>{
  dispatch(removeDataHandler())
}

console.log(profile);
const name = profile.map((li)=>li.name)
const email = profile.map((li)=>li.email)
const phone = profile.map((li)=>li.phoneNumber)
  return (
    <PageLayout>
      <div className="profile__title">
        <h1>
          <span style={{ color: "red" }}>Pro</span>
          <span>file</span>
        </h1>
      </div>
      <div className="profile__container">
        <div className="profile__details">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeQMtJ5R8Kl2jJIeMDjxCkIG8aYLhoCQEJFkZl4__H7JQfPps" alt="" />
          </div>
          <div className="profile__name">
          <h2>{name}</h2>
          </div>
          <div className="edit__button">
          <button>Edit Profile</button>
          </div>
          <div className="profile__options">
            <label htmlFor="">Email</label>
            <p>{email}</p>
          </div>
          <div className="profile__options">
            <label htmlFor="">Phone Number</label>
            <p>{phone}</p>
          </div>
          <div className="my__order">
            <Link to={"/my_order"} style={{textDecoration:"none",fontSize:"large",fontWeight:"600" , color:"black"}}>
          <p>My orders</p>
          </Link>
          </div>
          <div className="logout">
            
          <p onClick={logoutHandler}>Logout</p><LogoutIcon style={{marginTop:"20px",marginLeft:"10px", color:"red"}}/>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
