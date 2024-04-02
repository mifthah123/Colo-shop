import { createContext } from "react";

const DataContext = createContext({
  userData: [],
  totalAmount: 0,
  quantity: 0,
  loginData:[],
  submitAmount:[],
  totalAmountHandler:()=>{},
  addDataHandler: () => {},
  submitAmountHandler:()=>{}
});

export default DataContext
