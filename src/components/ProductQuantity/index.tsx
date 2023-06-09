import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectQuantity } from "../../slices/quantitySlice";

interface IPropsProductQuantity {
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
}

const ProductQuantity: React.FC<IPropsProductQuantity> = ({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  const quantity = useAppSelector(selectQuantity);

  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg px-5 py-1">
      <button
        className={`outline-none border-0 bg-transparent ${
          quantity === 1 ? "text-gray-300 cursor-default" : "text-orange-500"
        }`}
        onClick={handleDecreaseQuantity}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className="text-black font-semibold text-lg">{quantity}</div>
      <button
        className={`outline-none border-0 bg-transparent ${
          quantity === 99 ? "text-gray-300 cursor-default" : "text-orange-500"
        }`}
        onClick={handleIncreaseQuantity}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ProductQuantity;
