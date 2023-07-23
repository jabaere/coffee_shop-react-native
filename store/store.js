import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";

export default configureStore({
  reducer: {
    // the "user" key will be used to identify the slice we are dealing with
    //in case of multiple slices, we can create different keys for different reducers(of those relevant slices)
    orders: orderReducer,
  },
});
