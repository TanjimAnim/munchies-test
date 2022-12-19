import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FoodCartType } from "../../types";

const initialState: FoodCartType[] = [];

export const foodcartSlice = createSlice({
  name: "foodcart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = foodcartSlice.actions;

export default foodcartSlice.reducer;
