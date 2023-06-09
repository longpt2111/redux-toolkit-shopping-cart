import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface QuantityState {
  quantity: number;
}

const initialState: QuantityState = {
  quantity: 1,
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increaseQuantity: (state) => {
      state.quantity += 1;
      if (state.quantity > 99) state.quantity = 99;
    },
    decreaseQuantity: (state) => {
      state.quantity -= 1;
      if (state.quantity < 1) state.quantity = 1;
    },
    resetQuantity: (state) => {
      state.quantity = 1;
    },
  },
});

export const { increaseQuantity, decreaseQuantity, resetQuantity } =
  quantitySlice.actions;

export const selectQuantity = (state: RootState) => state.quantity.quantity;

export default quantitySlice.reducer;
