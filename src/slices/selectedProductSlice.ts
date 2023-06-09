import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "./productsSlice";

export interface SelectedProductState {
  product: Product | null;
}

const initialState: SelectedProductState = {
  product: null,
};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.product = action.payload;
    },
  },
});

export const { setSelectedProduct } = selectedProductSlice.actions;

export const selectSelectedProduct = (state: RootState) =>
  state.selectedProduct.product;

export default selectedProductSlice.reducer;
