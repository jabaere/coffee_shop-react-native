import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [];

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    initialState,
    //in case of typescript -
    //adding the type of payload action(data) we need to pass to this reducer (function).
    addOrder: (state, action) => {
      console.log(action.payload);
      // const data = {
      //   email: action.payload.email,
      //   password: action.payload.password,
      // };
      //pushing the login data to the state object in this slice
      state.push(action.payload);
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
