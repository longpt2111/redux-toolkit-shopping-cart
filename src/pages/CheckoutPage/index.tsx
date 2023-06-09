import React from "react";
import ProductItemInCart from "../../components/ProductItemInCart";
import { useAppSelector } from "../../app/hooks";
import { selectCartProducts } from "../../slices/cartProductsSlice";

const CheckoutPage: React.FC = () => {
  const cartProducts = useAppSelector(selectCartProducts);

  return (
    <div className="rounded-lg mx-auto overflow-hidden bg-transparent container xl:px-48">
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
                    <p className="font-normal">$0</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-light text-gray-700">Shipping Cost:</p>
                    <p className="font-normal">$0</p>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-between font-semibold text-3xl">
                    <p className="">Total:</p>
                    <p className="">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <button
                className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md bg-blue-500 text-white hover:bg-blue-400 opacity-50 cursor-not-allowed w-full"
                disabled
              >
                Checkout
              </button>
            </div>
            <div className="col-span-12">
              <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md border border-blue-500 text-blue-500 hover:bg-blue-200 false w-full">
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
