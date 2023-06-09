import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";
import { RootState } from "../app/store";

export interface CartProductsState {
  cartProducts: Product[];
}

const initialState: CartProductsState = {
  cartProducts: [],
};

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProductsToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeProductsFromCart: (state, action) => {
      state.cartProducts = action.payload;
    },
    increaseCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map(
        ({ quantity, productId, ...rest }) => {
          if (action.payload === productId)
            return { quantity: ++(quantity as number), productId, ...rest };
          return { quantity, productId, ...rest };
        }
      );
    },
    decreaseCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map(
        ({ quantity, productId, ...rest }) => {
          if (action.payload === productId)
            return { quantity: --(quantity as number), productId, ...rest };
          return { quantity, productId, ...rest };
        }
      );
    },
  },
});

export const {
  addProductsToCart,
  removeProductsFromCart,
  increaseCartProduct,
  decreaseCartProduct,
} = cartProductsSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartProducts.cartProducts;

export default cartProductsSlice.reducer;
