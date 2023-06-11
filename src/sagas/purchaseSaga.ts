import { Effect, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import {
  purchaseProductsSuccess,
  purchaseProductsFailure,
} from "../slices/cartProductsSlice";
import { CHECKOUT_API } from "../api/apiConfig";
import { Product } from "../slices/productsSlice";

interface Action {
  type: string;
  payload: Product[];
}

function* workPurchaseProducts({
  payload,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
Action): Generator<Effect, void, any> {
  try {
    const requestBody = {
      paySuccess: true,
      productsInOrder: payload.map(({ productId, quantity }) => ({
        productId,
        quantity,
      })),
    };

    const response = yield call(fetch, CHECKOUT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = yield response.json();

    if (response.ok && data.success) {
      toast("Thank you for purchased!!", {
        duration: 3000,
        position: "top-center",
        icon: "👏",
        className:
          "flex items-center px-4 py-2 bg-[#10B981] text-white rounded-lg shadow-md",
      });
      yield put(purchaseProductsSuccess());
    } else {
      toast.error("Purchase failed. Please try again.", {
        duration: 3000,
        position: "top-center",
        className: "border-solid border-2 border-rose-500",
      });
      yield put(purchaseProductsFailure("Purchase failed. Please try again."));
    }
  } catch (error) {
    toast.error("An error occurred. Please try again.", {
      duration: 3000,
      position: "top-center",
      className: "border-solid border-2 border-rose-500",
    });
    yield put(purchaseProductsFailure("An error occurred. Please try again."));
  }
}

function* purchaseProductsSaga() {
  yield takeLatest("cartProducts/purchaseProducts", workPurchaseProducts);
}

export default purchaseProductsSaga;
