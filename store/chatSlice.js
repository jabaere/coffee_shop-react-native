import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [
  {
    user: "user562",
    operator: "Wu Liuqi",
    message: "erererere",
    type: "user",
  },
  {
    user: "user562",
    operator: "Wu Liuqi",
    message: "dasdasdasdasdasdasda",
    type: "operator",
  },
];

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    initialState,
    //in case of typescript -
    //adding the type of payload action(data) we need to pass to this reducer (function).
    addToChat: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      state.push(newItem);
    },
    deleteItem: (state, action) => {
      const itemToDelete = action.payload;
      return state.filter((item) => item.id !== itemToDelete);
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addToChat } = chatSlice.actions;

export default chatSlice.reducer;
