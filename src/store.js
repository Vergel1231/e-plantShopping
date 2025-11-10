// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;  // ✅ make it a default export
