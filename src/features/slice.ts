import { createSlice } from "@reduxjs/toolkit";
import { isTemplateSpan } from "typescript";
import { FoodCartType } from "../../types";

export type CartState = {
  items: FoodCartType[];
};

const initialState: CartState = {
  items: [],
};

export const foodcartSlice = createSlice({
  name: "foodcart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity_available === 0) {
          return state;
        }
        state.items[itemIndex].quantity += 1;
        state.items[itemIndex].quantity_available -= 1;
        state.items[itemIndex].total_price =
          (state.items[itemIndex].price + state.items[itemIndex].vat) *
          state.items[itemIndex].quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          quantity_available: action.payload.quantity_available - 1,
          total_price: action.payload.price + action.payload.vat,
        });
      }
    },
    // reloadCart: (state, action) => {
    //   console.log("state", state, action);
    //   return {
    //     ...state,
    //     ...JSON.parse(localStorage.getItem("persist:cart")),
    //   };
    // },
    initialCartValue: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        items: [],
      };
    },
    removeCart: (state, action) => {
      console.log(action);
      return {
        ...state,
        items: state.items.filter((elem) => elem.id !== action.payload),
      };
    },
  },
});

export const { addToCart, initialCartValue, clearCart, removeCart } =
  foodcartSlice.actions;

export default foodcartSlice.reducer;
