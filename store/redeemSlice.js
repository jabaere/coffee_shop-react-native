import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [
  {
    name: "Americano",
    image: require("../assets/img/americano.png"),
    priceInPTS: 1340,
    expirationDate: "09/12/2023",
    id: 1,
  },
  {
    name: "Mocha",
    image: require("../assets/img/mocha.png"),
    priceInPTS: 1340,
    expirationDate: "09/10/2023",
    id: 2,
  },
  {
    name: "Cappuccino",
    image: require("../assets/img/capuchino.png"),
    priceInPTS: 1340,
    expirationDate: "25/09/2023",
    id: 3,
  },
];

export const redeemSlice = createSlice({
  name: "redeemList",
  initialState,
  reducers: {
    // addToOrderList: (state, action) => {
    //   const newItem = action.payload;
    //   newItem.map((item) => state.unshift(item));
    //   // state.push(newItem);
    // },
  },
});

export const {} = redeemSlice.actions;

export default redeemSlice.reducer;
