import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import profileReducer from "./profileSlice";
import chatReducer from "./chatSlice";
import orderReducer from "./orderSlice";
import redeemSlice from "./redeemSlice";
export default configureStore({
  reducer: {
    // the "user" key will be used to identify the slice we are dealing with
    //in case of multiple slices, we can create different keys for different reducers(of those relevant slices)
    cart: cartReducer,
    profile: profileReducer,
    chat: chatReducer,
    orderList: orderReducer,
    redeemList: redeemSlice,
  },
});
