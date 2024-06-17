import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem(state, action) {
      state.cart.push(action.payload); // Pushes the new item to the cart array
    },
    // Action to delete an item from the cart based on pizzaId
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload); // Filters out the item with the matching pizzaId
    },
    // Action to increase the quantity of an item in the cart
    increaseItemQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload); // Finds the item with the matching pizzaId
      item.quantity++; // Increments the quantity of the found item
    },
    // Action to decrease the quantity of an item in the cart
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload); // Finds the item with the matching pizzaId
      item.quantity--; // Decrements the quantity of the found item
    },
    // Action to clear all items from the cart
    clearCart(state) {
      state.cart = []; // Resets the cart array to an empty array
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
