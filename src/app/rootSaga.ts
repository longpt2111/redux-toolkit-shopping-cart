import { all } from "redux-saga/effects";
import productsSaga from "../sagas/productsSaga";
import purchaseProductsSaga from "../sagas/purchaseSaga";

export default function* rootSaga() {
  yield all([productsSaga(), purchaseProductsSaga()]);
}
