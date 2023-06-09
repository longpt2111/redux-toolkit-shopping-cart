import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductQuantity from "../ProductQuantity";
import { useDispatch } from "react-redux";
import {
  decreaseCartProduct,
  increaseCartProduct,
  removeProductFromCart,
} from "../../slices/cartProductsSlice";

interface IPropsProductItemInCart {
  quantity?: number;
  productId?: string;
  imageUrl?: string;
  description?: string;
  price?: number;
  productName?: string;
}

const ProductItemInCart: React.FC<IPropsProductItemInCart> = ({
  quantity,
  productId,
  imageUrl,
  description,
  price,
  productName,
}) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    if (quantity && quantity <= 1) {
      dispatch(removeProductFromCart({ id: productId }));
    } else {
      dispatch(decreaseCartProduct({ id: productId, quantity: 1 }));
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity && quantity < 99)
      dispatch(increaseCartProduct({ id: productId, quantity: 1 }));
  };

  const handleRemoveProductFromCart = () => {
    dispatch(removeProductFromCart({ id: productId }));
  };

  return (
    <div className="w-full h-[176px] flex items-center shadow-lg gap-3 px-5 py-3 bg-white rounded-lg">
      <div
        className="w-1/3 h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "70%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-2/3 gap-1 flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full">
          <h6 className="text-lg font-semibold">{productName}</h6>
          <button onClick={handleRemoveProductFromCart}>
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
          </button>
        </div>
        <div className="mb-2 pr-6">
          <p className="text-sm text-gray-700 font-light">{description}</p>
        </div>
        <div className="flex items-center justify-between w-full pr-6">
          <ProductQuantity
            className="w-1/3"
            quantity={quantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
          <p className="mb-0 font-bold text-3xl">
            ${((price as number) * (quantity as number)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemInCart;
