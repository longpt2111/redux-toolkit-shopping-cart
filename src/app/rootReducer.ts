import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import selectedProductReducer from "../slices/selectedProductSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
});

export default rootReducer;
