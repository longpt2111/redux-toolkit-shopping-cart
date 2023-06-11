import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";
import { RootState } from "../app/store";

export interface CartProductsState {
  cartProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: CartProductsState = {
  cartProducts: [],
  loading: false,
  error: null,
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
    },
    purchaseProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
} = cartProductsSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartProducts.cartProducts;
export const selectPurchaseLoading = (state: RootState) =>
  state.cartProducts.loading;
export const selectPurchaseError = (state: RootState) =>
  state.cartProducts.error;

export default cartProductsSlice.reducer;
