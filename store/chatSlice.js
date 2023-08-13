import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [
  {
    user: "user562",
    operator: "Wu Liuqi",
    message: "erererere",
    type: "user",
    timestamp: "9/12/2023, 6:28:06 PM",
    id: "1",
  },
  {
    user: "user562",
    operator: "Wu Liuqi",
    message: "dasdasdasdasdasdasda",
    type: "operator",
    timestamp: "9/12/2023, 6:38:06 PM",
    id: "2",
  },
];

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addToChat: (state, action) => {
      const newItem = action.payload;

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
