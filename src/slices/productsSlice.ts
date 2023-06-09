import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { toast } from "react-hot-toast";

export interface Product {
  quantity?: number;
  productId?: string;
  productName?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
}

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

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
      toast.error("Get products failed!!!", {
        duration: 3000,
        position: "bottom-left",
        className: "border-solid border-2 border-rose-500",
      });
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
