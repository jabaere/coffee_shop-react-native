import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [
  {
    name: "",
    id: "name",
    placeholder: "Full name",
  },
  {
    number: "",
    id: "number",
    placeholder: "Phone number",
  },
  {
    email: "",
    id: "email",
    placeholder: "Email",
  },
  {
    adress: "",
    id: "adress",
    placeholder: "Address",
  },
];
const areItemsEqual = (item1, item2) => {
  // Compare all properties except for the quantity
  return item1.email === item2.email;
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    initialState,
    //in case of typescript -
    //adding the type of payload action(data) we need to pass to this reducer (function).
    addEmailToProfile: (state, action) => {
      const newItem = action.payload;
      const updatedState = state.map((item) => ({
        ...item,
        email: newItem.email,
      }));
      return updatedState;
    },
    deleteItem: (state, action) => {
      const itemToDelete = action.payload;
      return state.filter((item) => item.id !== itemToDelete);
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addEmailToProfile } = profileSlice.actions;

export default profileSlice.reducer;
