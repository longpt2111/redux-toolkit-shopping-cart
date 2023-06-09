import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import selectedProductReducer from "../slices/selectedProductSlice";
import cartProductsReducer from "../slices/cartProductsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cartProducts: cartProductsReducer,
});

export default rootReducer;
