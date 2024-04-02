import { createSlice } from "@reduxjs/toolkit";

const loginDetails = createSlice({
  name: "loginuser",
  initialState: {
    loginData: [],
  },
  reducers: {
    loginDataHandler: (state, action) => {
      state.loginData.push(action.payload);
    },
    removeDataHandler: (state) => {
      state.loginData = [];
    },
  
  },
});

export const { loginDataHandler, removeDataHandler } = loginDetails.actions;
export default loginDetails.reducer;
