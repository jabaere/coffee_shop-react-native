import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript

const initialState = [];
const areItemsEqual = (item1, item2) => {
  // Compare all properties except for the quantity
  return (
    item1.name === item2.name &&
    item1.price === item2.price &&
    item1.shot === item2.shot &&
    item1.type === item2.type &&
    item1.size === item2.size &&
    item1.ice === item2.ice
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => areItemsEqual(item, newItem));
      //check if item exists
      if (existingItem) {
        // Item already exists, increase the quantity, change item id and update price
        existingItem.quantity += newItem.quantity;
        // existingItem.id += newItem.id;
        existingItem.price += newItem.price;
      } else {
        // Item does not exist, add it to the state
        state.push(newItem);
      }
    },
    deleteItem: (state, action) => {
      const itemToDelete = action.payload;
      return state.filter((item) => item.id !== itemToDelete);
    },
    clearCard: (state, action) => {
      const emptyState = [];
      return emptyState;
    },
  },
});

//keep adding the reducers' names to make them available globally
export const { addToCart, deleteItem, clearCard } = cartSlice.actions;

export default cartSlice.reducer;
