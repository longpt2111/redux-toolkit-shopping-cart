import { call, put, takeEvery, Effect } from "redux-saga/effects";
import { PRODUCTS_API } from "../api/apiConfig";
import {
  getProductsFailure,
  getProductsSuccess,
} from "../slices/productsSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* workGetProductsFetch(): Generator<Effect, void, any> {
  try {
    const response = yield call(() => fetch(PRODUCTS_API));
    const products = yield response.json();
    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getProductsFailure(e));
  }
}

function* productsSaga() {
  yield takeEvery("products/getProductsFetch", workGetProductsFetch);
}

export default productsSaga;
