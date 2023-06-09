import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "./productsSlice";

export interface SelectedProductState {
  selectedProduct: Product | null;
  quantity: number;
}

const initialState: SelectedProductState = {
  selectedProduct: null,
  quantity: 1,
};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    increaseProductsQuantity: (state) => {
      state.quantity += 1;
      if (state.quantity > 99) state.quantity = 99;
    },
    decreaseProductsQuantity: (state) => {
      state.quantity -= 1;
      if (state.quantity < 1) state.quantity = 1;
    },
    resetProductsQuantity: (state) => {
      state.quantity = 1;
    },
  },
});

export const {
  setSelectedProduct,
  increaseProductsQuantity,
  decreaseProductsQuantity,
  resetProductsQuantity,
} = selectedProductSlice.actions;

export const selectSelectedProduct = (state: RootState) =>
  state.selectedProduct.selectedProduct;
export const selectQuantity = (state: RootState) =>
  state.selectedProduct.quantity;

export default selectedProductSlice.reducer;
