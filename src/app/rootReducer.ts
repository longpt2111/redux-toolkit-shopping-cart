import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import selectedProductReducer from "../slices/selectedProductSlice";
import quantityReducer from "../slices/quantitySlice";

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  quantity: quantityReducer,
});

export default rootReducer;
