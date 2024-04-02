import axios from "axios";

const Base_URL = "http://localhost:3001/";
var token =JSON.parse(JSON.parse(localStorage.getItem("persist:AColoshopuser")).loginuser)
    .loginData[0] &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:AColoshopuser")).loginuser)
    .loginData[0].accessToken;
    export const publicRequest = axios.create({baseURL:Base_URL})
    export const userRequest = axios.create({
        baseURL:Base_URL,
        headers:{token:token}
    })
