import React, { useEffect } from "react";
import ProductItemInCart from "../../components/ProductItemInCart";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  purchaseProducts,
  resetPurchaseSuccess,
  selectCartProducts,
  selectPurchaseSuccess,
} from "../../slices/cartProductsSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(selectCartProducts);
  const isPurchaseSuccess = useAppSelector(selectPurchaseSuccess);
  const subTotal =
    cartProducts.length > 0
      ? cartProducts
          .map(
            ({ price, quantity }) => (price as number) * (quantity as number)
          )
          .reduce((total, value) => (total as number) + (value as number))
      : 0;
  const shippingCost = 10;
  const total = subTotal + shippingCost;

  const handlePurchase = () => {
    if (confirm("Do you want to purchase?")) {
      dispatch({ ...purchaseProducts(), payload: cartProducts });
    }
  };

  useEffect(() => {
    if (isPurchaseSuccess) {
      navigate("/products");
      dispatch(resetPurchaseSuccess());
    }
  });

  return (
    <div className="rounded-lg mx-auto overflow-hidden bg-transparent container xl:px-48 mt-12">
      <div className="grid lg:grid-cols-12 pt-5 gap-4 h-full auto-rows-min">
        <div className="lg:col-span-12">
          <div className="p-3 bg-white shadow-lg w-full rounded-lg">
            <div className="w-full text-center font-semibold">
              My Shopping Cart
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 overflow-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="grid gap-4 w-full h-full rounded-lg overflow-auto">
                {cartProducts.length > 0 ? (
                  cartProducts.map(({ ...props }, index) => (
                    <ProductItemInCart key={index} {...props} />
                  ))
                ) : (
                  <h4 className="text-center mt-12 font-bold text-xl">
                    You have no products in cart
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="bg-gray-100 px-4 py-2 grid gap-1 gird-cols-12 w-full rounded-lg h-44">
                <div className="col-span-12">
                  <h6 className="text-lg font-medium">Order Info</h6>
                </div>
                <div className="col-span-12 text-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-light text-gray-700">Subtotal:</p>
                    <p className="font-normal">${subTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-light text-gray-700">Shipping Cost:</p>
                    <p className="font-normal">${shippingCost.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-between font-semibold text-3xl">
                    <p>Total:</p>
                    <p>${total > 0 ? total.toFixed(2) : "0.00"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <button
                className={`flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md bg-blue-500 text-white hover:bg-blue-400 w-full ${
                  cartProducts.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={cartProducts.length === 0}
                onClick={handlePurchase}
              >
                Checkout
              </button>
            </div>
            <div className="col-span-12">
              <button
                className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md border border-blue-500 text-blue-500 hover:bg-blue-200 false w-full"
                onClick={() => navigate("/products")}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
