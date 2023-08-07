import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [
  {
    name: `user${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}`,
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
    addEmailToProfile: (state, action) => {
      const newItem = action.payload;
      const updatedState = state.map((item) => ({
        ...item,
        email: newItem.email,
      }));
      return updatedState;
    },
    updateProperty: (state, action) => {
      const { id, property, value } = action.payload;

      const updatedState = state.map((item) =>
        item.id === id ? { ...item, [property]: value } : item
      );
      return updatedState;
    },
    deleteItem: (state, action) => {
      const itemToDelete = action.payload;
      return state.filter((item) => item.id !== itemToDelete);
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addEmailToProfile, updateProperty } = profileSlice.actions;

export default profileSlice.reducer;
