import { createSlice } from "@reduxjs/toolkit";
import { FoodCartType } from "../../types";

type CartState = {
  cart: FoodCartType[];
};

const initialState: CartState = {
  cart: [],
};

export const foodcartSlice = createSlice({
  name: "foodcart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        state.cart[itemIndex].quantity_available -= 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          quantity_available: action.payload.quantity_available - 1,
        });
      }
    },
  },
});

export const { addToCart } = foodcartSlice.actions;

export default foodcartSlice.reducer;
