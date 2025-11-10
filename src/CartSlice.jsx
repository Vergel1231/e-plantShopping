import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Initialize an empty array to store cart items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details
      const existingItem = state.items.find(item => item.name === name); // Check if item exists

      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add it as a new item with quantity = 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      // Filter out the item whose name matches the payload
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // ✅ Update quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract details from action
      const itemToUpdate = state.items.find(item => item.name === name); // Find the matching item

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity
      }
    },
  },
});

// ✅ Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ✅ Export reducer as default for store.js
export default cartSlice.reducer;
