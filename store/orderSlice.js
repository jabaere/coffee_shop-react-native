import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [];

export const orderSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    addToOrderList: (state, action) => {
      const newItem = action.payload;
      newItem.map((item) => state.unshift(item));
      // state.push(newItem);
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addToOrderList } = orderSlice.actions;

export default orderSlice.reducer;
