import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";
import { RootState } from "../app/store";

export interface CartProductsState {
  cartProducts: Product[];
  loading: boolean;
  error: string | null;
  purchaseSuccess: boolean;
}

const initialState: CartProductsState = {
  cartProducts: [],
  loading: false,
  error: null,
  purchaseSuccess: false,
};

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        ({ productId }) => productId !== action.payload.id
      );
    },
    increaseCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map(
        ({ quantity, productId, ...rest }) => {
          if (action.payload.id === productId)
            return {
              quantity: (quantity as number) + action.payload.quantity,
              productId,
              ...rest,
            };
          return { quantity, productId, ...rest };
        }
      );
    },
    decreaseCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map(
        ({ quantity, productId, ...rest }) => {
          if (action.payload.id === productId)
            return {
              quantity: (quantity as number) - action.payload.quantity,
              productId,
              ...rest,
            };
          return { quantity, productId, ...rest };
        }
      );
    },
    purchaseProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    purchaseProductsSuccess: (state) => {
      state.cartProducts = [];
      state.loading = false;
      state.error = null;
      state.purchaseSuccess = true;
    },
    purchaseProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.purchaseSuccess = false;
    },
    resetPurchaseSuccess: (state) => {
      state.purchaseSuccess = false;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseCartProduct,
  decreaseCartProduct,
  purchaseProducts,
  purchaseProductsSuccess,
  purchaseProductsFailure,
  resetPurchaseSuccess,
} = cartProductsSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartProducts.cartProducts;
export const selectPurchaseLoading = (state: RootState) =>
  state.cartProducts.loading;
export const selectPurchaseError = (state: RootState) =>
  state.cartProducts.error;
export const selectPurchaseSuccess = (state: RootState) =>
  state.cartProducts.purchaseSuccess;

export default cartProductsSlice.reducer;
