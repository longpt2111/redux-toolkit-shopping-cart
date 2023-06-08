import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../interfaces/products.interface";
import { RootState } from "../app/store";

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsFetch: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Actions
export const { getProductsFetch, getProductsSuccess, getProductsFailure } =
  productsSlice.actions;

// Selectors
export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

// Reducer
export default productsSlice.reducer;
