import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductQuantity from "../ProductQuantity";
import { useDispatch } from "react-redux";
import {
  decreaseCartProduct,
  increaseCartProduct,
} from "../../slices/cartProductsSlice";

interface IPropsProductItemInCart {
  quantity?: number;
  productId?: string;
}

const ProductItemInCart: React.FC<IPropsProductItemInCart> = ({
  quantity,
  productId,
}) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (productId?: string) => {
    dispatch(decreaseCartProduct(productId));
  };

  const handleIncreaseQuantity = (productId?: string) => {
    dispatch(increaseCartProduct(productId));
  };

  return (
    <div className="w-full h-[176px] flex items-center shadow-lg gap-3 px-5 py-3 bg-white rounded-lg">
      <div
        className="w-1/3 h-full"
        style={{
          backgroundImage:
            "url(https://bizweb.dktcdn.net/100/318/244/products/71hiszrhoss-sl1500.jpg?v=1625071465193)",
          backgroundSize: "70%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-2/3 gap-1 flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full">
          <h6 className="text-lg font-semibold">productName</h6>
          <button>
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
          </button>
        </div>
        <div className="mb-2 pr-6">
          <p className="text-sm text-gray-700 font-light">description</p>
        </div>
        <div className="flex items-center justify-between w-full pr-6">
          <ProductQuantity
            className="w-1/3"
            quantity={quantity}
            handleDecreaseQuantity={() => handleDecreaseQuantity(productId)}
            handleIncreaseQuantity={() => handleIncreaseQuantity(productId)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItemInCart;
